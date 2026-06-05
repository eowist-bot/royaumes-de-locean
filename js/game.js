
const MAX_BOARD = 6;
const MAX_HP = 30;

const player = {hp:MAX_HP, mana:1, maxMana:1, hand:[], board:[]};
const enemy  = {hp:MAX_HP, mana:1, maxMana:1, hand:[], board:[]};

let selectedUnit = null; // unité joueur sélectionnée pour attaquer

// --- Utilitaires ---
function cloneCard(){
  const c = CARD_POOL[Math.floor(Math.random()*CARD_POOL.length)];
  return {...c, keywords:[...c.keywords], currentHp:c.hp, attacked:false, justPlayed:true, hasShield:c.keywords.includes('Bouclier divin')};
}
function draw(t){ t.hand.push(cloneCard()); }
function has(unit, kw){ return unit.keywords.includes(kw); }

function log(msg, cls=''){
  const logEl = document.getElementById('log');
  logEl.innerHTML += `<div class="${cls}">${msg}</div>`;
  logEl.scrollTop = logEl.scrollHeight;
}

function rarityClass(r){
  return r==='Légendaire'?'legendary':r==='Épique'?'epic':r==='Rare'?'rare':'';
}

// --- Dégâts avec mots-clés ---
function dealDamage(attacker, defender, defenderIsHero=false){
  if(defenderIsHero){
    const dmg = attacker.atk;
    defender.hp -= dmg;
    log(`⚔️ ${attacker.name} attaque le héros ennemi pour ${dmg} dégâts !`, 'log-attack');
    return;
  }
  // Bouclier divin absorbe une attaque
  if(defender.hasShield){
    defender.hasShield = false;
    log(`🛡 ${defender.name} absorbe l'attaque grâce au Bouclier divin !`, 'log-event');
  } else {
    if(has(attacker,'Poison')){
      defender.currentHp = 0;
      log(`☠️ ${attacker.name} empoisonne ${defender.name} !`, 'log-attack');
    } else {
      defender.currentHp -= attacker.atk;
    }
  }
  // Contre-attaque (si le défenseur survit et n'a pas de shield)
  if(!attacker.hasShield && !has(defender,'Poison')){
    attacker.currentHp -= defender.atk;
  } else if(attacker.hasShield){
    attacker.hasShield = false;
    log(`🛡 ${attacker.name} absorbe la contre-attaque !`, 'log-event');
  }
}

function cleanup(){
  const died = (board) => board.filter(c => c.currentHp <= 0).map(c=>c.name);
  const pDied = died(player.board);
  const eDied = died(enemy.board);
  pDied.forEach(n => log(`💀 ${n} est détruit !`, 'log-event'));
  eDied.forEach(n => log(`💀 ${n} est détruit !`, 'log-event'));
  player.board = player.board.filter(c=>c.currentHp>0);
  enemy.board  = enemy.board.filter(c=>c.currentHp>0);
}

// --- Vérification fin de partie ---
function checkEnd(){
  if(enemy.hp<=0){ setTimeout(()=>{ alert('🏆 Victoire ! Vous avez coulé l\'Amiral !'); location.reload(); },100); return true; }
  if(player.hp<=0){ setTimeout(()=>{ alert('💀 Défaite ! L\'Amiral a coulé votre flotte !'); location.reload(); },100); return true; }
  return false;
}

// --- IA ---
function enemyTurn(){
  // Jouer plusieurs cartes pour maximiser le mana
  let played = true;
  while(played && enemy.board.length < MAX_BOARD){
    played = false;
    // Trie par coût décroissant pour maximiser le mana dépensé
    const idx = enemy.hand
      .map((c,i)=>({c,i}))
      .filter(({c})=>c.cost<=enemy.mana)
      .sort((a,b)=>b.c.cost-a.c.cost)[0];
    if(idx !== undefined){
      const c = enemy.hand[idx.i];
      enemy.mana -= c.cost;
      enemy.board.push(c);
      enemy.hand.splice(idx.i,1);
      log(`🤖 L'IA joue ${c.name} (${c.cost}💎)`, 'log-enemy');
      played = true;
    }
  }

  // Attaques IA : respecte la Provocation, cible les unités les plus faibles
  const attackers = enemy.board.filter(c => !c.justPlayed || has(c,'Charge'));
  attackers.forEach(attacker => {
    const taunts = player.board.filter(c=>has(c,'Provocation'));
    const targets = (taunts.length ? taunts : player.board)
      .slice().sort((a,b)=>a.currentHp - b.currentHp);

    if(targets.length){
      const target = targets[0];
      log(`🤖 ${attacker.name} attaque ${target.name}`, 'log-enemy');
      dealDamage(attacker, target);
      cleanup();
    } else if(!player.board.some(c=>has(c,'Provocation'))){
      // Attaque directe au héros
      log(`🤖 ${attacker.name} attaque votre héros !`, 'log-enemy');
      dealDamage(attacker, player);
    }
  });
}

// --- Attaque joueur ---
function playerAttack(targetUnit, targetIsHero=false){
  if(!selectedUnit) return;
  log(`⚔️ ${selectedUnit.name} attaque ${targetIsHero ? 'l\'Amiral IA' : targetUnit.name} !`, 'log-attack');
  dealDamage(selectedUnit, targetIsHero ? enemy : targetUnit, targetIsHero);
  selectedUnit.attacked = true;
  selectedUnit = null;
  cleanup();
  if(!checkEnd()) render();
}

// --- Jouer une carte depuis la main ---
function playCard(i){
  const c = player.hand[i];
  if(c.cost > player.mana) return;
  if(player.board.length >= MAX_BOARD){ log('⚠️ Plateau plein !', 'log-event'); return; }
  player.mana -= c.cost;
  player.board.push(c);
  player.hand.splice(i,1);
  log(`🚢 Vous jouez ${c.name}`, 'log-play');
  if(has(c,'Charge')){
    c.justPlayed = false;
    log(`⚡ ${c.name} a Charge — il peut attaquer immédiatement !`, 'log-event');
  }
  render();
}

// --- Fin de tour ---
function endTurn(){
  selectedUnit = null;

  // Résoudre les attaques automatiques des unités non activées (combat passif)
  enemyTurn();
  if(checkEnd()) return;

  // Remettre à zéro les drapeaux d'attaque
  player.board.forEach(c=>{ c.attacked=false; c.justPlayed=false; });
  enemy.board.forEach(c=>{ c.attacked=false; c.justPlayed=false; });

  // Mana ennemi
  enemy.maxMana = Math.min(10, enemy.maxMana+1);
  enemy.mana = enemy.maxMana;
  draw(enemy);

  // Mana joueur
  player.maxMana = Math.min(10, player.maxMana+1);
  player.mana = player.maxMana;
  draw(player);

  log('--- 🔄 Nouveau tour ---', 'log-event');
  render();
}

// --- Rendu ---
function render(){
  const hasTaunt = player.board.some(c=>has(c,'Provocation'));

  // Stats avec barres
  document.getElementById('playerHpVal').textContent = player.hp;
  document.getElementById('playerHpBar').style.width = Math.max(0,player.hp/MAX_HP*100)+'%';
  document.getElementById('manaVal').textContent = player.mana+'/'+player.maxMana;
  document.getElementById('manaBar').style.width = Math.max(0,player.mana/player.maxMana*100)+'%';

  document.getElementById('enemyHpVal').textContent = enemy.hp;
  document.getElementById('enemyHpBar').style.width = Math.max(0,enemy.hp/MAX_HP*100)+'%';
  document.getElementById('enemyManaVal').textContent = enemy.mana+'/'+enemy.maxMana;
  document.getElementById('enemyManaBar').style.width = Math.max(0,enemy.mana/enemy.maxMana*100)+'%';

  // Bouton annuler
  document.getElementById('cancelBtn').style.display = selectedUnit ? 'inline-block' : 'none';

  // Plateau joueur
  const pb = document.getElementById('playerBoard');
  pb.innerHTML = '';
  player.board.forEach((c,i)=>{
    const canAtk = !c.attacked && !c.justPlayed;
    const isSel  = selectedUnit === c;
    const d = document.createElement('div');
    d.className = 'unit'
      + (isSel ? ' selected' : '')
      + (canAtk && !selectedUnit ? ' can-attack' : '')
      + (!canAtk && !isSel ? ' exhausted' : '')
      + (c.hasShield ? ' shield' : '');
    d.innerHTML = `<div class="emoji">${c.emoji}</div>
      <div class="name">${c.name}</div>
      <div class="stats">⚔️${c.atk} ❤️${c.currentHp}</div>
      ${c.keywords.length?`<div style="font-size:9px;color:#aef">${c.keywords.join(', ')}</div>`:''}`;
    d.onclick = () => {
      if(selectedUnit === c){ selectedUnit=null; render(); return; }
      if(!selectedUnit && canAtk){ selectedUnit=c; render(); return; }
    };
    pb.appendChild(d);
  });

  // Plateau ennemi
  const eb = document.getElementById('enemyBoard');
  eb.innerHTML = '';
  const enemyTaunts = enemy.board.filter(c=>has(c,'Provocation'));
  enemy.board.forEach(c=>{
    const isValidTarget = selectedUnit && (enemyTaunts.length===0 || has(c,'Provocation'));
    const d = document.createElement('div');
    d.className = 'unit' + (isValidTarget?' valid-target':'') + (c.hasShield?' shield':'');
    d.innerHTML = `<div class="emoji">${c.emoji}</div>
      <div class="name">${c.name}</div>
      <div class="stats">⚔️${c.atk} ❤️${c.currentHp}</div>
      ${c.keywords.length?`<div style="font-size:9px;color:#aef">${c.keywords.join(', ')}</div>`:''}`;
    if(isValidTarget) d.onclick = ()=>playerAttack(c);
    eb.appendChild(d);
  });

  // Cible héros ennemi (si sélectionné et pas de provocation)
  const enemyStats = document.getElementById('enemyStats');
  if(selectedUnit && enemyTaunts.length===0){
    enemyStats.style.cursor='crosshair';
    enemyStats.style.outline='2px solid #e74c3c';
    enemyStats.onclick = ()=>playerAttack(null,true);
  } else {
    enemyStats.style.cursor='';
    enemyStats.style.outline='';
    enemyStats.onclick = null;
  }

  // Main du joueur
  const handEl = document.getElementById('hand');
  handEl.innerHTML = '';
  player.hand.forEach((c,i)=>{
    const affordable = c.cost <= player.mana;
    const d = document.createElement('div');
    d.className = 'card' + (affordable?'':' unaffordable');
    d.innerHTML = `<div class="art">${c.emoji}</div>
      <div class="${rarityClass(c.rarity)}">${c.rarity}</div>
      <h3>${c.name}</h3>
      <div class="cost">💎 ${c.cost}</div>
      <div>⚔️ ${c.atk} | ❤️ ${c.hp}</div>
      ${c.keywords.length?`<div class="keywords">${c.keywords.join(' · ')}</div>`:''}`;
    if(affordable) d.onclick = ()=>playCard(i);
    handEl.appendChild(d);
  });
}

// --- Init ---
for(let i=0;i<4;i++){ draw(player); draw(enemy); }
document.getElementById('endTurn').onclick = endTurn;
document.getElementById('cancelBtn').onclick = ()=>{ selectedUnit=null; render(); };
log('🌊 La bataille commence ! Bonne chance, Capitaine !', 'log-event');
render();
