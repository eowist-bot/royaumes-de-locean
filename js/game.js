
const MAX_BOARD = 6;
const MAX_HP = 30;

const player = {hp:MAX_HP, mana:1, maxMana:1, hand:[], board:[]};
const enemy  = {hp:MAX_HP, mana:1, maxMana:1, hand:[], board:[]};

let selectedUnit = null;

// ── Sons Web Audio ──
const AC = new (window.AudioContext || window.webkitAudioContext)();

function resumeAC(){ if(AC.state==='suspended') AC.resume(); }

function playTone(cfg){
  resumeAC();
  const osc = AC.createOscillator();
  const gain = AC.createGain();
  osc.connect(gain); gain.connect(AC.destination);
  osc.type = cfg.type || 'sine';
  osc.frequency.setValueAtTime(cfg.freq, AC.currentTime);
  if(cfg.freqEnd) osc.frequency.exponentialRampToValueAtTime(cfg.freqEnd, AC.currentTime + cfg.dur);
  gain.gain.setValueAtTime(cfg.vol || 0.3, AC.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, AC.currentTime + cfg.dur);
  osc.start(AC.currentTime);
  osc.stop(AC.currentTime + cfg.dur);
}

function sndHit(){   // créature blessée — impact doux
  playTone({type:'sine', freq:520, freqEnd:320, dur:0.12, vol:0.12});
  setTimeout(()=>playTone({type:'sine', freq:380, freqEnd:260, dur:0.1, vol:0.08}), 50);
}
function sndDeath(){ // créature détruite — glas solennel
  resumeAC();
  // Son principal — cloche grave descendante
  playTone({type:'sine', freq:440, freqEnd:180, dur:0.7, vol:0.35});
  setTimeout(()=>playTone({type:'sine', freq:330, freqEnd:110, dur:0.6, vol:0.25}), 120);
  setTimeout(()=>playTone({type:'triangle', freq:220, freqEnd:80, dur:0.5, vol:0.2}), 260);
}
function sndHeroHit(){ // héros touché — coup sourd
  resumeAC();
  const buf = AC.createBuffer(1, AC.sampleRate*0.4, AC.sampleRate);
  const d = buf.getChannelData(0);
  for(let i=0;i<d.length;i++) d[i]=(Math.random()*2-1)*Math.pow(1-i/d.length,2)*0.6;
  const src = AC.createBufferSource();
  src.buffer = buf;
  const filt = AC.createBiquadFilter();
  filt.type='lowpass'; filt.frequency.value=180;
  src.connect(filt); filt.connect(AC.destination);
  src.start();
  playTone({type:'sine', freq:90, freqEnd:40, dur:0.35, vol:0.4});
}
function sndVictory(){
  [[523,0],[659,0.15],[784,0.3],[1046,0.5]].forEach(([f,t])=>
    setTimeout(()=>playTone({type:'sine', freq:f, freqEnd:f*1.02, dur:0.4, vol:0.3}), t*1000));
}
function sndDefeat(){
  [[392,0],[349,0.2],[311,0.4],[261,0.65]].forEach(([f,t])=>
    setTimeout(()=>playTone({type:'sine', freq:f, freqEnd:f*0.97, dur:0.5, vol:0.25}), t*1000));
}

// ── Effets visuels ──
function flashUnit(el, amount, isDeath=false){
  el.classList.remove('hit');
  void el.offsetWidth; // reflow pour relancer l'animation
  el.classList.add('hit');
  el.addEventListener('animationend', ()=>el.classList.remove('hit'), {once:true});
  spawnDmgNumber(el, amount, isDeath);
}

function flashHero(zoneId, amount){
  const zone = document.getElementById(zoneId);
  if(!zone) return;
  zone.classList.remove('hit');
  void zone.offsetWidth;
  zone.classList.add('hit');
  zone.addEventListener('animationend', ()=>zone.classList.remove('hit'), {once:true});
  spawnDmgNumber(zone, amount, false, true);
}

function spawnDmgNumber(anchor, amount, isDeath, isHero=false){
  const num = document.createElement('div');
  num.className = 'dmg-number' + (isHero?' hero':'') + (isDeath?' death':'');
  num.textContent = isDeath ? '💀' : '-'+amount;
  num.style.left = (anchor.offsetWidth/2 - 16) + 'px';
  num.style.top  = '4px';
  anchor.style.position = 'relative';
  anchor.appendChild(num);
  num.addEventListener('animationend', ()=>num.remove());
}

// --- Utilitaires ---
let _uidCounter = 0;
function cloneCard(){
  const c = CARD_POOL[Math.floor(Math.random()*CARD_POOL.length)];
  return {...c, keywords:[...c.keywords], currentHp:c.hp, attacked:false, justPlayed:true, hasShield:c.keywords.includes('Bouclier divin'), _uid:++_uidCounter};
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
    sndHeroHit();
    const zoneId = defender === player ? 'playerZone' : 'enemyZone';
    flashHero(zoneId, dmg);
    log(`⚔️ ${attacker.name} attaque le héros ennemi pour ${dmg} dégâts !`, 'log-attack');
    return;
  }
  // Bouclier divin
  if(defender.hasShield){
    defender.hasShield = false;
    log(`🛡 ${defender.name} absorbe l'attaque grâce au Bouclier divin !`, 'log-event');
  } else {
    if(has(attacker,'Poison')){
      defender.currentHp = 0;
      sndHit();
      log(`☠️ ${attacker.name} empoisonne ${defender.name} !`, 'log-attack');
    } else {
      defender.currentHp -= attacker.atk;
      sndHit();
    }
  }
  // Contre-attaque
  if(!attacker.hasShield && !has(defender,'Poison')){
    attacker.currentHp -= defender.atk;
    if(defender.atk > 0) sndHit();
  } else if(attacker.hasShield){
    attacker.hasShield = false;
    log(`🛡 ${attacker.name} absorbe la contre-attaque !`, 'log-event');
  }
}

function cleanup(){
  const dying = [...player.board, ...enemy.board].filter(c=>c.currentHp<=0);
  dying.forEach((c, i)=>{
    // Décalage pour éviter la superposition si plusieurs morts simultanées
    setTimeout(()=>{
      sndDeath();
      log(`💀 ${c.name} est détruit !`, 'log-event');
    }, i * 180);
    const el = document.querySelector(`[data-uid="${c._uid}"]`);
    if(el) flashUnit(el, 0, true);
  });
  player.board = player.board.filter(c=>c.currentHp>0);
  enemy.board  = enemy.board.filter(c=>c.currentHp>0);
}

// --- Vérification fin de partie ---
function checkEnd(){
  if(enemy.hp<=0){  sndVictory(); setTimeout(()=>{ alert('🏆 Victoire ! Vous avez coulé l\'Amiral !'); location.reload(); },800); return true; }
  if(player.hp<=0){ sndDefeat(); setTimeout(()=>{ alert('💀 Défaite ! L\'Amiral a coulé votre flotte !'); location.reload(); },800); return true; }
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
      dealDamage(attacker, player, true);
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
function rarityKey(r){
  return r==='Légendaire'?'legendaire':r==='Épique'?'epique':r==='Rare'?'rare':'commune';
}

function makeUnit(c, opts={}){
  const d = document.createElement('div');
  let cls = 'unit';
  if(opts.selected)    cls += ' selected';
  if(opts.canAttack)   cls += ' can-attack';
  if(opts.exhausted)   cls += ' exhausted';
  if(opts.validTarget) cls += ' valid-target';
  if(c.hasShield)      cls += ' shield-up';
  if(has(c,'Provocation')) cls += ' has-taunt';
  d.className = cls;
  d.dataset.uid = c._uid;
  d.innerHTML = `<div class="u-art">${CARD_ART[c.name] || `<span class="u-emoji">${c.emoji}</span>`}</div>
    <div class="u-name">${c.name}</div>
    <div class="u-stats"><span class="u-atk">⚔️${c.atk}</span><span class="u-hp">❤️${c.currentHp}</span></div>
    ${c.keywords.length?`<div class="u-kw">${c.keywords.join(' · ')}</div>`:''}`;
  return d;
}

function render(){
  // Stats barres
  document.getElementById('playerHpVal').textContent  = player.hp+'/'+MAX_HP;
  document.getElementById('playerHpBar').style.width  = Math.max(0,player.hp/MAX_HP*100)+'%';
  document.getElementById('manaVal').textContent       = player.mana+'/'+player.maxMana;
  document.getElementById('manaBar').style.width       = player.maxMana?Math.max(0,player.mana/player.maxMana*100)+'%':'0%';

  document.getElementById('enemyHpVal').textContent   = enemy.hp+'/'+MAX_HP;
  document.getElementById('enemyHpBar').style.width   = Math.max(0,enemy.hp/MAX_HP*100)+'%';
  document.getElementById('enemyManaVal').textContent  = enemy.mana+'/'+enemy.maxMana;
  document.getElementById('enemyManaBar').style.width  = enemy.maxMana?Math.max(0,enemy.mana/enemy.maxMana*100)+'%':'0%';

  // Bouton annuler
  document.getElementById('cancelBtn').style.display = selectedUnit ? 'inline-block' : 'none';

  // Plateau joueur
  const pb = document.getElementById('playerBoard');
  pb.innerHTML = '';
  player.board.forEach(c=>{
    const canAtk = !c.attacked && !c.justPlayed;
    const isSel  = selectedUnit === c;
    const d = makeUnit(c,{
      selected:   isSel,
      canAttack:  canAtk && !selectedUnit,
      exhausted:  !canAtk && !isSel,
    });
    d.onclick = ()=>{
      if(selectedUnit===c){ selectedUnit=null; render(); return; }
      if(!selectedUnit && canAtk){ selectedUnit=c; render(); }
    };
    pb.appendChild(d);
  });

  // Plateau ennemi
  const eb = document.getElementById('enemyBoard');
  eb.innerHTML = '';
  const enemyTaunts = enemy.board.filter(c=>has(c,'Provocation'));
  enemy.board.forEach(c=>{
    const isValid = selectedUnit && (enemyTaunts.length===0 || has(c,'Provocation'));
    const d = makeUnit(c,{validTarget:isValid});
    if(isValid) d.onclick = ()=>playerAttack(c);
    eb.appendChild(d);
  });

  // Héros ennemi ciblable
  const enemyHeader = document.getElementById('enemyHeader');
  if(selectedUnit && enemyTaunts.length===0){
    enemyHeader.classList.add('targetable');
    enemyHeader.onclick = ()=>playerAttack(null,true);
  } else {
    enemyHeader.classList.remove('targetable');
    enemyHeader.onclick = null;
  }

  // Main du joueur
  const handEl = document.getElementById('hand');
  handEl.innerHTML = '';
  player.hand.forEach((c,i)=>{
    const affordable = c.cost <= player.mana;
    const rk = rarityKey(c.rarity);
    const d = document.createElement('div');
    d.className = 'card r-'+rk + (affordable?'':' unaffordable');
    d.innerHTML = `
      <div class="card-cost">${c.cost}</div>
      <div class="card-art">${CARD_ART[c.name] || `<span style="font-size:44px;display:flex;align-items:center;justify-content:center;height:100%">${c.emoji}</span>`}</div>
      <div class="card-divider"></div>
      <div class="card-name-bar"><div class="card-name">${c.name}</div></div>
      <div class="card-textbox">
        <div class="card-rarity-gem rarity-${rk}">${c.rarity.toUpperCase()}</div>
        ${c.keywords.length?`<div class="card-keywords">${c.keywords.join(' · ')}</div>`:'<div class="card-keywords" style="color:#555">—</div>'}
      </div>
      <div class="card-footer">
        <div class="stat-gem atk">${c.atk}</div>
        <div class="stat-gem hp">${c.hp}</div>
      </div>`;
    if(affordable) d.onclick = ()=>playCard(i);
    handEl.appendChild(d);
  });
}

// --- Musique de fond ---
const bgm = document.getElementById('bgm');
bgm.volume = 0.35;

function startBGM(){
  bgm.play().catch(()=>{});
  document.removeEventListener('pointerdown', startBGM);
  document.removeEventListener('keydown', startBGM);
}
document.addEventListener('pointerdown', startBGM);
document.addEventListener('keydown', startBGM);

// --- Init ---
for(let i=0;i<4;i++){ draw(player); draw(enemy); }
document.getElementById('endTurn').onclick = endTurn;
document.getElementById('cancelBtn').onclick = ()=>{ selectedUnit=null; render(); };
log('🌊 La bataille commence ! Bonne chance, Capitaine !', 'log-event');
render();
