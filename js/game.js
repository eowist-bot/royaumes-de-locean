
const MAX_BOARD = 6;
const MAX_HP    = 30;

// ── État global ──
const player = {hp:MAX_HP, mana:1, maxMana:1, hand:[], board:[], deck:[], fatigue:0, heroPowerUsed:false};
const enemy  = {hp:MAX_HP, mana:1, maxMana:1, hand:[], board:[], deck:[], fatigue:0, heroPowerUsed:false};

let selectedUnit   = null;   // unité joueur en cours de sélection
let pendingAction  = null;   // { type:'battlecry'|'spell', ... } en attente de cible
let _uidCounter    = 0;

// ── Sons Web Audio ──
const AC = new (window.AudioContext || window.webkitAudioContext)();
const masterGain = AC.createGain();
masterGain.connect(AC.destination);
function resumeAC(){ if(AC.state==='suspended') AC.resume(); }
function playTone(cfg){
  resumeAC();
  const osc = AC.createOscillator(), gain = AC.createGain();
  osc.connect(gain); gain.connect(masterGain);
  osc.type = cfg.type||'sine';
  osc.frequency.setValueAtTime(cfg.freq, AC.currentTime);
  if(cfg.freqEnd) osc.frequency.exponentialRampToValueAtTime(cfg.freqEnd, AC.currentTime+cfg.dur);
  gain.gain.setValueAtTime(cfg.vol||0.3, AC.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, AC.currentTime+cfg.dur);
  osc.start(AC.currentTime); osc.stop(AC.currentTime+cfg.dur);
}
function sndHit(){
  playTone({type:'sine', freq:520, freqEnd:320, dur:0.12, vol:0.12});
  setTimeout(()=>playTone({type:'sine', freq:380, freqEnd:260, dur:0.1, vol:0.08}), 50);
}
function sndDeath(){
  playTone({type:'sine', freq:440, freqEnd:180, dur:0.7, vol:0.35});
  setTimeout(()=>playTone({type:'sine', freq:330, freqEnd:110, dur:0.6, vol:0.25}), 120);
  setTimeout(()=>playTone({type:'triangle', freq:220, freqEnd:80, dur:0.5, vol:0.2}), 260);
}
function sndHeroHit(){
  resumeAC();
  const buf = AC.createBuffer(1, AC.sampleRate*0.4, AC.sampleRate);
  const d = buf.getChannelData(0);
  for(let i=0;i<d.length;i++) d[i]=(Math.random()*2-1)*Math.pow(1-i/d.length,2)*0.6;
  const src = AC.createBufferSource(); src.buffer=buf;
  const filt = AC.createBiquadFilter(); filt.type='lowpass'; filt.frequency.value=180;
  src.connect(filt); filt.connect(masterGain); src.start();
  playTone({type:'sine', freq:90, freqEnd:40, dur:0.35, vol:0.4});
}
function sndSpell(){
  playTone({type:'sine', freq:800, freqEnd:600, dur:0.15, vol:0.18});
  setTimeout(()=>playTone({type:'sine', freq:1000, freqEnd:400, dur:0.25, vol:0.15}), 80);
}
function sndVictory(){
  [[523,0],[659,.15],[784,.3],[1046,.5]].forEach(([f,t])=>
    setTimeout(()=>playTone({type:'sine', freq:f, freqEnd:f*1.02, dur:0.4, vol:0.3}),t*1000));
}
function sndDefeat(){
  [[392,0],[349,.2],[311,.4],[261,.65]].forEach(([f,t])=>
    setTimeout(()=>playTone({type:'sine', freq:f, freqEnd:f*0.97, dur:0.5, vol:0.25}),t*1000));
}

// ── Effets visuels ──
function flashUnit(el, amount, isDeath=false){
  if(!el) return;
  el.classList.remove('hit'); void el.offsetWidth; el.classList.add('hit');
  el.addEventListener('animationend',()=>el.classList.remove('hit'),{once:true});
  spawnDmgNumber(el, amount, isDeath);
}
function flashHero(zoneId, amount){
  const zone = document.getElementById(zoneId); if(!zone) return;
  zone.classList.remove('hit'); void zone.offsetWidth; zone.classList.add('hit');
  zone.addEventListener('animationend',()=>zone.classList.remove('hit'),{once:true});
  spawnDmgNumber(zone, amount, false, true);
}
function spawnDmgNumber(anchor, amount, isDeath, isHero=false){
  const num = document.createElement('div');
  num.className = 'dmg-number'+(isHero?' hero':'')+(isDeath?' death':'');
  num.textContent = isDeath ? '💀' : '-'+amount;
  num.style.left=(anchor.offsetWidth/2-16)+'px'; num.style.top='4px';
  anchor.style.position='relative'; anchor.appendChild(num);
  num.addEventListener('animationend',()=>num.remove());
}

// ── Animation de transition de tour ──
function showTurnBanner(text, cb){
  const b = document.getElementById('turn-banner');
  b.textContent = text; b.classList.add('show');
  setTimeout(()=>{ b.classList.remove('show'); if(cb) setTimeout(cb,300); }, 1300);
}

// ── Deck & pioche ──
function buildDeck(){
  const pool = [];
  CARD_POOL.forEach(c=>{
    const copies = (c.rarity==='Commune'||c.rarity==='Rare') ? 2 : 1;
    for(let i=0;i<copies;i++) pool.push(c);
  });
  // Shuffle Fisher-Yates
  for(let i=pool.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [pool[i],pool[j]]=[pool[j],pool[i]];
  }
  return pool.slice(0,15);
}
function drawCard(target){
  if(target.deck.length===0){
    target.fatigue++;
    target.hp -= target.fatigue;
    const side = target===player ? 'joueur' : 'IA';
    log(`💀 Deck vide ! Fatigue ${side} : -${target.fatigue} PV`, 'log-event');
    return;
  }
  const c = target.deck.pop();
  target.hand.push({...c, keywords:[...c.keywords], currentHp:c.hp,
    attacked:false, justPlayed:true,
    hasShield:c.keywords.includes('Bouclier divin'), _uid:++_uidCounter});
}

// ── Utilitaires ──
function has(unit, kw){ return unit.keywords && unit.keywords.includes(kw); }

function log(msg, cls='log-event'){
  const logEl = document.getElementById('log');
  logEl.innerHTML += `<div class="${cls}">${msg}</div>`;
  logEl.scrollTop = logEl.scrollHeight;
}
function rarityKey(r){
  return r==='Légendaire'?'legendaire':r==='Épique'?'epique':r==='Rare'?'rare':'commune';
}

// ── Synergies ──
function synergyBonus(unit, board){
  if(!unit.cardType || unit.isSpell) return {atk:0,hp:0};
  const allies = board.filter(u=>u!==unit && u.cardType===unit.cardType).length;
  if(allies===0) return {atk:0,hp:0};
  if(unit.cardType==='Pirate')       return {atk:Math.min(allies,3), hp:0};
  if(unit.cardType==='Bête marine')  return {atk:0, hp:Math.min(allies,3)};
  if(unit.cardType==='Élémental')    return {atk:Math.min(allies,2), hp:Math.min(allies,2)};
  return {atk:0,hp:0};
}
function effAtk(unit, board){ return unit.atk + synergyBonus(unit,board).atk; }

// ── Pouvoirs héros ──
const HERO_POWERS = {
  player:{name:"Soins d'urgence", desc:'Récupère 2 PV', cost:2, emoji:'💊'},
  enemy: {name:'Recrutement',     desc:'Invoque un Matelot 1/1', cost:2, emoji:'📣'},
};
function useHeroPower(){
  if(player.heroPowerUsed){ log('⚠️ Pouvoir héros déjà utilisé ce tour.','log-event'); return; }
  if(player.mana < HERO_POWERS.player.cost){ log('⚠️ Pas assez de mana.','log-event'); return; }
  player.mana -= HERO_POWERS.player.cost;
  player.heroPowerUsed = true;
  player.hp = Math.min(MAX_HP, player.hp+2);
  sndSpell();
  log('💊 Pouvoir héros : Capitaine Aurore récupère 2 PV !','log-player');
  render();
}
function enemyUseHeroPower(){
  const stage = CAMPAIGN_STAGES[campaignStage] || CAMPAIGN_STAGES[CAMPAIGN_STAGES.length-1];
  const hp = stage.heroPower;
  if(enemy.heroPowerUsed || enemy.mana < hp.cost) return;
  enemy.mana -= hp.cost;
  enemy.heroPowerUsed = true;
  if(hp.effect==='summonMatelot'){
    if(enemy.board.length>=MAX_BOARD) return;
    const matelot={name:'Matelot',emoji:'⚓',cost:1,atk:1,hp:1,rarity:'Commune',
      cardType:'Pirate',keywords:[],battlecry:null,isSpell:false,
      currentHp:1,attacked:false,justPlayed:true,hasShield:false,_uid:++_uidCounter};
    enemy.board.push(matelot);
    log(`📣 Pouvoir héros : ${stage.name} invoque un Matelot !`,'log-enemy');
  } else if(hp.effect==='buffAlly'){
    if(!enemy.board.length) return;
    const t = enemy.board[Math.floor(Math.random()*enemy.board.length)];
    t.atk+=1;
    log(`⚔️ Pouvoir héros : ${t.name} gagne +1 ATK !`,'log-enemy');
  } else if(hp.effect==='heal2'){
    enemy.hp=Math.min(MAX_HP,enemy.hp+2);
    log(`💚 Pouvoir héros : ${stage.name} récupère 2 PV !`,'log-enemy');
  } else if(hp.effect==='deal1'){
    player.hp-=1; sndHeroHit(); flashHero('playerZone',1);
    log(`⚡ Pouvoir héros : ${stage.name} inflige 1 dégât !`,'log-enemy');
  }
}

// ── Battlecry effects ──
const BATTLECRY_EFFECTS = {
  pirateAtkBuff:(owner, ownerBoard)=>{
    const pirates = ownerBoard.filter(u=>u.cardType==='Pirate');
    pirates.forEach(u=>{ u.atk+=1; });
    log(`⚡ Battlecry : ${pirates.length} Pirate(s) reçoivent +1 ATK !`,'log-event');
  },
  elementalBuffAll:(owner, ownerBoard)=>{
    const eles = ownerBoard.filter(u=>u.cardType==='Élémental');
    eles.forEach(u=>{ u.atk+=1; u.hp+=1; u.currentHp+=1; });
    log(`⚡ Battlecry : ${eles.length} Élémental(aux) reçoivent +1/+1 !`,'log-event');
  },
  draw2Cards:(owner)=>{ drawCard(owner); drawCard(owner); log('🃏 Battlecry : vous piochez 2 cartes !','log-event'); },
  captainBuff:(owner, ownerBoard, target)=>{
    if(!target) return;
    target.atk+=1; target.hp+=1; target.currentHp+=1;
    log(`⚡ Battlecry : ${target.name} reçoit +1/+1 !`,'log-event');
  },
  healHero2:(owner)=>{ owner.hp=Math.min(MAX_HP,owner.hp+2); log('💚 Battlecry : votre héros récupère 2 PV !','log-event'); },
  healHero3:(owner)=>{ owner.hp=Math.min(MAX_HP,owner.hp+3); log('💚 Battlecry : votre héros récupère 3 PV !','log-event'); },
  drawCard:(owner)=>{ drawCard(owner); log('🃏 Battlecry : vous piochez une carte !','log-event'); },
  stun:(owner, ownerBoard, target)=>{
    if(!target) return;
    target.justPlayed=true; target.attacked=true; // saute son prochain tour
    log(`💤 Battlecry : ${target.name} est étourdi(e) et passe son tour !`,'log-event');
  },
};

// ── Spell effects ──
const SPELL_EFFECTS = {
  healWater:(owner,opp)=>{
    owner.hp=Math.min(MAX_HP,owner.hp+4); sndSpell();
    log('💧 Eaux Guérisseuses : +4 PV récupérés !','log-player');
  },
  net:(owner,opp,target)=>{
    if(target && target.currentHp<=2){ target.currentHp=0; sndHit();
      log(`🎣 Filet du Pêcheur : ${target.name} est capturé(e) !`,'log-player'); cleanup(); }
  },
  warbuff:(owner,opp,target)=>{
    if(target){ target.atk+=2; target._tempBuff=true; sndSpell();
      log(`🌫️ Brume de Guerre : ${target.name} gagne +2 ATK ce tour !`,'log-player'); }
  },
  foamBuff:(owner,opp,target)=>{
    if(target){ target.atk+=1; target.hp+=1; target.currentHp+=1; sndSpell();
      log(`🫧 Écume de Mer : ${target.name} gagne +1/+1 !`,'log-player'); }
  },
  storm:(owner,opp)=>{
    opp.board.forEach(c=>{ c.currentHp-=2; sndHit(); }); sndSpell();
    log('🌊 Tempête des Mers : 2 dégâts à toutes les unités ennemies !','log-player'); cleanup();
  },
  maelstrom:(owner,opp)=>{
    opp.hp-=4; sndHeroHit();
    flashHero(opp===enemy?'enemyZone':'playerZone',4);
    log('🌪️ Maelström : 4 dégâts directs au héros ennemi !','log-player');
  },
  frozenWind:(owner,opp,target)=>{
    if(!target) return;
    target.justPlayed=true; target.attacked=true; sndSpell();
    log(`❄️ Vent de Givre : ${target.name} est étourdi(e) et passe son tour !`,'log-player');
  },
  cannonade:(owner,opp,target)=>{
    if(!target) return;
    target.currentHp-=3; sndHit();
    log(`💥 Cannonade : 3 dégâts à ${target.name} !`,'log-player');
  },
  reefShield:(owner,opp)=>{
    owner.board.forEach(u=>{ u.hasShield=true; }); sndSpell();
    log('🪸 Récif Enchanté : Bouclier divin sur toutes vos unités !','log-player');
  },
};

// ── Dégâts & combat (contre-attaque séquentielle) ──
function dealDamage(attacker, attackerBoard, defender, defenderIsHero=false, defenderBoard=[]){
  if(defenderIsHero){
    const dmg = effAtk(attacker, attackerBoard);
    defender.hp -= dmg;
    sndHeroHit();
    flashHero(defender===player?'playerZone':'enemyZone', dmg);
    log(`⚔️ ${attacker.name} attaque le héros pour ${dmg} dégâts !`,
      attacker===selectedUnit||attackerBoard===player.board?'log-player':'log-enemy');
    return;
  }
  // Attaquant → défenseur
  const atkDmg = effAtk(attacker, attackerBoard);
  if(defender.hasShield){
    defender.hasShield=false;
    log(`🛡 ${defender.name} absorbe l'attaque (Bouclier divin) !`,'log-event');
  } else if(has(attacker,'Poison')){
    defender.currentHp=0; sndHit();
    log(`☠️ ${attacker.name} empoisonne ${defender.name} !`,'log-attack');
  } else {
    defender.currentHp -= atkDmg; sndHit();
  }
  // Contre-attaque seulement si le défenseur survit
  if(defender.currentHp > 0){
    const ctrDmg = effAtk(defender, defenderBoard);
    if(attacker.hasShield){
      attacker.hasShield=false;
      log(`🛡 ${attacker.name} absorbe la contre-attaque (Bouclier divin) !`,'log-event');
    } else if(has(defender,'Poison')){
      attacker.currentHp=0; sndHit();
      log(`☠️ ${defender.name} contre-attaque et empoisonne ${attacker.name} !`,'log-event');
    } else if(ctrDmg>0){
      attacker.currentHp -= ctrDmg; sndHit();
    }
  }
}

function cleanup(){
  const dying = [...player.board,...enemy.board].filter(c=>c.currentHp<=0);
  dying.forEach((c,i)=>{
    setTimeout(()=>{ sndDeath(); log(`💀 ${c.name} est détruit(e) !`,'log-event'); }, i*180);
    const el = document.querySelector(`[data-uid="${c._uid}"]`);
    if(el) flashUnit(el, 0, true);
  });
  player.board = player.board.filter(c=>c.currentHp>0);
  enemy.board  = enemy.board.filter(c=>c.currentHp>0);
}

function checkEnd(){
  if(enemy.hp<=0){
    if(gameMode==='quick'){
      sndVictory();
      setTimeout(()=>{
        document.getElementById('game-layout').style.display='none';
        const el=document.getElementById('reward-screen');
        el.innerHTML=`
          <div class="reward-title">🏆 Victoire !</div>
          <div class="camp-complete-emoji">⚓</div>
          <div class="camp-subtitle">L'Amiral Maelström est coulé !</div>
          <button id="reward-continue-btn" onclick="location.reload()">🔄 Rejouer</button>`;
        el.style.display='flex';
      }, 900);
    } else {
      handleCampaignVictory();
    }
    return true;
  }
  if(player.hp<=0){ showDefeatScreen(); return true; }
  return false;
}

// ── Résoudre une action en attente (battlecry ou sort avec cible) ──
function resolveTarget(target, targetIsHero=false){
  if(!pendingAction) return;
  if(pendingAction.type==='battlecry'){
    const {owner, ownerBoard, unit, bc} = pendingAction;
    BATTLECRY_EFFECTS[bc.effect]?.(owner, ownerBoard, target);
  } else if(pendingAction.type==='spell'){
    const {owner, opp, card, cardIdx} = pendingAction;
    SPELL_EFFECTS[card.spellEffect]?.(owner, opp, target);
    owner.hand.splice(cardIdx,1);
    cleanup();
    if(checkEnd()){ pendingAction=null; return; }
  }
  pendingAction = null;
  cleanup();
  if(!checkEnd()) render();
}

// ── Tour de l'IA ──
function enemyTurn(){
  // Utiliser pouvoir héros si possible
  enemyUseHeroPower();

  // Sorts IA
  let castingSpell = true;
  while(castingSpell){
    castingSpell = false;
    const si = enemy.hand.findIndex(c=>c.isSpell && c.cost<=enemy.mana && !c.needsTarget);
    if(si>=0){
      const s = enemy.hand[si];
      enemy.mana -= s.cost;
      // Sorts sans cible uniquement (l'IA ne gère pas le ciblage)
      // Inverser owner/opp pour l'IA
      const fakeSpell = {...SPELL_EFFECTS};
      const ownerFn = SPELL_EFFECTS[s.spellEffect];
      if(ownerFn) ownerFn(enemy, player);
      log(`🤖 L'IA lance ${s.name} !`,'log-enemy');
      enemy.hand.splice(si,1);
      castingSpell = true;
    }
  }

  // Jouer des unités (maximiser le mana)
  let played = true;
  while(played && enemy.board.length < MAX_BOARD){
    played=false;
    const idx = enemy.hand
      .map((c,i)=>({c,i}))
      .filter(({c})=>!c.isSpell && c.cost<=enemy.mana)
      .sort((a,b)=>b.c.cost-a.c.cost)[0];
    if(idx){
      const c = enemy.hand[idx.i];
      enemy.mana -= c.cost;
      enemy.board.push(c);
      enemy.hand.splice(idx.i,1);
      log(`🤖 L'IA joue ${c.name} (${c.cost}💎)`,'log-enemy');
      // Battlecry auto (sans cible)
      if(c.battlecry && !c.battlecry.needsTarget && BATTLECRY_EFFECTS[c.battlecry.effect]){
        BATTLECRY_EFFECTS[c.battlecry.effect](enemy, enemy.board);
      }
      played=true;
    }
  }

  // Attaques IA — cible les unités les plus faibles ou le héros
  const attackers = enemy.board.filter(c=>!c.justPlayed||has(c,'Charge'));
  attackers.forEach(attacker=>{
    const taunts  = player.board.filter(c=>has(c,'Provocation'));
    const targets = (taunts.length?taunts:player.board)
      .slice().sort((a,b)=>a.currentHp-b.currentHp);
    if(targets.length){
      log(`🤖 ${attacker.name} attaque ${targets[0].name}`,'log-enemy');
      dealDamage(attacker, enemy.board, targets[0], false, player.board);
      cleanup();
    } else if(!player.board.some(c=>has(c,'Provocation'))){
      log(`🤖 ${attacker.name} attaque votre héros !`,'log-enemy');
      dealDamage(attacker, enemy.board, player, true);
    }
  });
}

// ── Attaque joueur ──
function playerAttack(targetUnit, targetIsHero=false){
  if(pendingAction){ resolveTarget(targetIsHero ? null : targetUnit, targetIsHero); return; }
  if(!selectedUnit) return;
  log(`⚔️ ${selectedUnit.name} attaque ${targetIsHero?'l\'Amiral':targetUnit.name} !`,'log-player');
  dealDamage(selectedUnit, player.board, targetIsHero?enemy:targetUnit, targetIsHero, enemy.board);
  selectedUnit.attacked=true; selectedUnit=null;
  cleanup(); if(!checkEnd()) render();
}

// ── Jouer une carte ──
function playCard(i){
  const c = player.hand[i];
  if(c.cost > player.mana){ return; }

  if(c.isSpell){
    if(c.needsTarget){
      const preview = {card:c, bc:null};
      const vt = getValidTargets(preview);
      const hasTargets = vt.enemies.length||vt.allies.length||vt.weakEnemies.length;
      if(!hasTargets){ log(`⚠️ Aucune cible valide pour ${c.name} !`,'log-event'); return; }
      player.mana -= c.cost;
      pendingAction = {type:'spell', owner:player, opp:enemy, card:c, cardIdx:i};
      log(`🔮 Sort sélectionné : ${c.name} — choisissez une cible`,'log-event');
      render(); return;
    }
    player.mana -= c.cost;
    sndSpell();
    log(`🔮 Vous lancez ${c.name}`,'log-player');
    SPELL_EFFECTS[c.spellEffect]?.(player, enemy);
    player.hand.splice(i,1);
    cleanup(); if(!checkEnd()) render();
    return;
  }

  if(player.board.length >= MAX_BOARD){ log('⚠️ Plateau plein !','log-event'); return; }
  player.mana -= c.cost;
  player.board.push(c);
  player.hand.splice(i,1);
  log(`🚢 Vous jouez ${c.name}${c.battlecry?' — Battlecry !':''}`,'log-player');
  if(has(c,'Charge')){ c.justPlayed=false; log(`⚡ ${c.name} a Charge !`,'log-event'); }

  if(c.battlecry){
    if(c.battlecry.needsTarget){
      const vt = getValidTargets({bc:c.battlecry, unit:c});
      const hasTargets = vt.enemies.length||vt.allies.length||vt.weakEnemies.length;
      if(!hasTargets){
        log(`⚠️ Battlecry de ${c.name} : aucune cible valide, effet ignoré`,'log-event');
        render(); return;
      }
      pendingAction = {type:'battlecry', owner:player, ownerBoard:player.board, unit:c, bc:c.battlecry};
      log(`🎯 Battlecry : ${c.battlecry.desc} — choisissez une cible`,'log-event');
      render(); return;
    }
    BATTLECRY_EFFECTS[c.battlecry.effect]?.(player, player.board);
  }
  render();
}

// ── Fin de tour ──
function endTurn(){
  if(pendingAction){ log('⚠️ Résolvez d\'abord l\'action en cours !','log-event'); return; }
  selectedUnit=null;

  // Nettoyer buffs temporaires du joueur
  player.board.forEach(c=>{ if(c._tempBuff){ c.atk-=2; delete c._tempBuff; }});

  showTurnBanner('⚓ Tour de l\'Amiral', ()=>{
    enemyTurn();
    if(checkEnd()) return;

    // Reset flags
    player.board.forEach(c=>{ c.attacked=false; c.justPlayed=false; });
    enemy.board.forEach(c=>{ c.attacked=false; c.justPlayed=false; });
    enemy.heroPowerUsed=false;

    // Mana ennemi
    enemy.maxMana=Math.min(10,enemy.maxMana+1);
    enemy.mana=enemy.maxMana;
    drawCard(enemy);

    // Mana joueur
    player.maxMana=Math.min(10,player.maxMana+1);
    player.mana=player.maxMana;
    player.heroPowerUsed=false;
    drawCard(player);

    cleanup();
    if(checkEnd()) return;

    showTurnBanner('🚢 Votre tour !', ()=>{
      log('─── 🔄 Nouveau tour ───','log-event');
      render();
    });
  });
}

// ── Rendu ──
function makeUnit(c, board, opts={}){
  const d = document.createElement('div');
  const sb = synergyBonus(c, board);
  let cls='unit';
  if(opts.selected)    cls+=' selected';
  if(opts.canAttack)   cls+=' can-attack';
  if(opts.exhausted)   cls+=' exhausted';
  if(opts.validTarget) cls+=' valid-target';
  if(c.hasShield)      cls+=' shield-up';
  if(has(c,'Provocation')) cls+=' has-taunt';
  if((sb.atk>0||sb.hp>0)) cls+=' synergy-active';
  d.className=cls; d.dataset.uid=c._uid;
  const dispAtk = c.atk + sb.atk;
  const dispHp  = c.currentHp + sb.hp;
  const typeLabel = c.cardType && c.cardType!=='Sort' ? `<div class="u-type type-${c.cardType.replace(' ','-')}">${c.cardType}</div>` : '';
  const bcLabel = c.battlecry ? `<div class="u-bc">★</div>` : '';
  d.innerHTML=`<div class="u-art">${CARD_ART[c.name]||`<span class="u-emoji">${c.emoji}</span>`}</div>
    <div class="u-name">${c.name}</div>
    ${typeLabel}
    <div class="u-stats"><span class="u-atk${sb.atk>0?' buffed':''}">${dispAtk}</span><span class="u-hp${dispHp<c.hp?' damaged':''}">${dispHp}</span></div>
    ${c.keywords.length?`<div class="u-kw">${c.keywords.join('·')}</div>`:''}
    ${bcLabel}`;
  return d;
}

function getValidTargets(action){
  if(!action) return {allies:[], enemies:[], weakEnemies:[]};
  const filter = action.card?.targetFilter || action.bc?.targetFilter || '';
  const allies  = player.board;
  const enemies = enemy.board;
  const weakEnemies = enemy.board.filter(c=>c.currentHp<=2);
  if(filter==='ally')            return {allies, enemies:[], weakEnemies:[]};
  if(filter==='ally-Pirate')     return {allies:allies.filter(c=>c.cardType==='Pirate'&&c!==action.unit), enemies:[], weakEnemies:[]};
  if(filter==='enemy')           return {allies:[], enemies, weakEnemies:[]};
  if(filter==='enemy-weak')      return {allies:[], enemies:[], weakEnemies};
  return {allies:[], enemies:[], weakEnemies:[]};
}

function render(){
  // Barres héros
  document.getElementById('playerHpVal').textContent  = player.hp+'/'+MAX_HP;
  document.getElementById('playerHpBar').style.width  = Math.max(0,player.hp/MAX_HP*100)+'%';
  document.getElementById('manaVal').textContent       = player.mana+'/'+player.maxMana;
  document.getElementById('manaBar').style.width       = player.maxMana?Math.max(0,player.mana/player.maxMana*100)+'%':'0%';
  document.getElementById('enemyHpVal').textContent    = enemy.hp+'/'+MAX_HP;
  document.getElementById('enemyHpBar').style.width   = Math.max(0,enemy.hp/MAX_HP*100)+'%';
  document.getElementById('enemyManaVal').textContent  = enemy.mana+'/'+enemy.maxMana;
  document.getElementById('enemyManaBar').style.width  = enemy.maxMana?Math.max(0,enemy.mana/enemy.maxMana*100)+'%':'0%';

  // Deck count
  const pd = document.getElementById('playerDeckCount'), ed = document.getElementById('enemyDeckCount');
  if(pd) pd.textContent = player.deck.length+' cartes';
  if(ed) ed.textContent = enemy.deck.length+' cartes';

  // Pouvoir héros joueur
  const hpBtn = document.getElementById('heroPowerBtn');
  if(hpBtn){
    const hp = HERO_POWERS.player;
    const canUse = !player.heroPowerUsed && player.mana >= hp.cost;
    hpBtn.disabled = !canUse;
    hpBtn.className = 'hero-power-btn'+(player.heroPowerUsed?' used':'')+(canUse?' available':'');
  }

  // Annuler
  document.getElementById('cancelBtn').style.display = (selectedUnit||pendingAction)?'inline-block':'none';

  // Cibles en attente
  const vt = getValidTargets(pendingAction);

  // Plateau joueur
  const pb = document.getElementById('playerBoard'); pb.innerHTML='';
  player.board.forEach(c=>{
    const canAtk = !c.attacked && !c.justPlayed && !pendingAction;
    const isSel  = selectedUnit===c;
    const isTarget = pendingAction && vt.allies.includes(c);
    const d = makeUnit(c, player.board,{
      selected:isSel, canAttack:canAtk&&!selectedUnit, exhausted:!canAtk&&!isSel, validTarget:isTarget
    });
    d.onclick=()=>{
      if(pendingAction && isTarget){ resolveTarget(c); return; }
      if(selectedUnit===c){ selectedUnit=null; render(); return; }
      if(!selectedUnit && !pendingAction && canAtk){ selectedUnit=c; render(); }
    };
    pb.appendChild(d);
  });

  // Plateau ennemi
  const eb = document.getElementById('enemyBoard'); eb.innerHTML='';
  const enemyTaunts = enemy.board.filter(c=>has(c,'Provocation'));
  enemy.board.forEach(c=>{
    const isAttackTarget  = selectedUnit && (enemyTaunts.length===0||has(c,'Provocation'));
    const isBcTarget      = pendingAction && vt.enemies.includes(c);
    const isWeakTarget    = pendingAction && vt.weakEnemies.includes(c);
    const isValid = isAttackTarget||isBcTarget||isWeakTarget;
    const d = makeUnit(c, enemy.board,{validTarget:isValid});
    if(isValid) d.onclick=()=>{
      if(pendingAction){ resolveTarget(c); }
      else { playerAttack(c); }
    };
    eb.appendChild(d);
  });

  // Héros ennemi ciblable
  const enemyHeader = document.getElementById('enemyHeader');
  const heroTargetable = selectedUnit && enemyTaunts.length===0;
  const heroPendingTarget = pendingAction?.type==='spell' && pendingAction?.card?.spellEffect==='maelstrom';
  if(heroTargetable||heroPendingTarget){
    enemyHeader.classList.add('targetable');
    enemyHeader.onclick=()=>playerAttack(null,true);
  } else {
    enemyHeader.classList.remove('targetable');
    enemyHeader.onclick=null;
  }

  // Main du joueur
  const handEl = document.getElementById('hand'); handEl.innerHTML='';
  player.hand.forEach((c,i)=>{
    const affordable = c.cost<=player.mana && !pendingAction;
    const rk = rarityKey(c.rarity);
    const d = document.createElement('div');
    if(c.isSpell){
      d.className='card spell r-'+rk+(affordable?'':' unaffordable');
      d.innerHTML=`
        <div class="card-cost">${c.cost}</div>
        <div class="card-art">${CARD_ART[c.name]||`<span style="font-size:44px;display:flex;align-items:center;justify-content:center;height:100%">${c.emoji}</span>`}</div>
        <div class="card-divider"></div>
        <div class="card-name-bar"><div class="card-name">${c.name}</div></div>
        <div class="card-textbox">
          <div class="card-rarity-gem rarity-${rk}">${c.rarity.toUpperCase()}</div>
          <div class="card-keywords spell-desc">${c.spellDesc}</div>
        </div>
        <div class="card-footer spell-footer"><span class="spell-type">SORT</span></div>`;
    } else {
      d.className='card r-'+rk+(affordable?'':' unaffordable');
      const sb = synergyBonus(c, player.board);
      d.innerHTML=`
        <div class="card-cost">${c.cost}</div>
        <div class="card-art">${CARD_ART[c.name]||`<span style="font-size:44px;display:flex;align-items:center;justify-content:center;height:100%">${c.emoji}</span>`}</div>
        <div class="card-divider"></div>
        <div class="card-name-bar"><div class="card-name">${c.name}</div></div>
        <div class="card-textbox">
          <div class="card-rarity-gem rarity-${rk}">${c.rarity.toUpperCase()}</div>
          ${c.battlecry?`<div class="card-keywords battlecry-desc">★ ${c.battlecry.desc}</div>`:
            c.keywords.length?`<div class="card-keywords">${c.keywords.join(' · ')}</div>`:
            '<div class="card-keywords" style="color:#555">—</div>'}
          ${c.cardType?`<div class="card-type-badge type-${c.cardType.replace(' ','-')}">${c.cardType}</div>`:''}
        </div>
        <div class="card-footer">
          <div class="stat-gem atk${sb.atk>0?' buffed':''}">${c.atk+(sb.atk||0)}</div>
          <div class="stat-gem hp">${c.hp}</div>
        </div>`;
    }
    if(affordable) d.onclick=()=>playCard(i);
    handEl.appendChild(d);
  });
}

// ── Musique ──
const bgm = document.getElementById('bgm'); bgm.volume=0.35;
function startBGM(){ bgm.play().catch(()=>{}); document.removeEventListener('pointerdown',startBGM); document.removeEventListener('keydown',startBGM); }
document.addEventListener('pointerdown',startBGM);
document.addEventListener('keydown',startBGM);

// ── Sélection de mode ──
let gameMode = 'campaign';

function showModeScreen(){
  document.getElementById('mode-screen').style.display = 'flex';
  document.getElementById('mode-campaign').onclick = ()=>{
    gameMode = 'campaign';
    document.getElementById('mode-screen').style.display = 'none';
    startDraft();
  };
  document.getElementById('mode-quick').onclick = ()=>{
    gameMode = 'quick';
    document.getElementById('mode-screen').style.display = 'none';
    startDraft();
  };
}

// ── Campagne ──
const CAMPAIGN_STAGES = [
  {
    name:'Le Corsaire Volant', avatar:'🏴‍☠️', title:'Étape 1',
    desc:'Un corsaire redoutable commandant une flotte de pirates.',
    heroPower:{name:'Pillage', desc:'+1 ATK à une unité alliée', cost:2, emoji:'⚔️', effect:'buffAlly'},
    deckType:'Pirate',
  },
  {
    name:'La Sirène des Abysses', avatar:'🧜', title:'Étape 2',
    desc:'Une sirène mystique qui contrôle les créatures marines.',
    heroPower:{name:'Chant des mers', desc:'Récupère 2 PV', cost:2, emoji:'💚', effect:'heal2'},
    deckType:'Bête marine',
  },
  {
    name:'Le Maître des Tempêtes', avatar:'🌩️', title:'Étape 3',
    desc:'Un élémentaliste qui déchaîne la foudre chaque tour.',
    heroPower:{name:'Foudre', desc:'1 dégât au héros ennemi', cost:1, emoji:'⚡', effect:'deal1'},
    deckType:'Élémental',
  },
  {
    name:'Amiral Maelström', avatar:'⚓', title:'Boss Final',
    desc:"Le grand Amiral, maître incontesté des Royaumes de l'Océan.",
    heroPower:{name:'Recrutement', desc:'Invoque un Matelot 1/1', cost:2, emoji:'📣', effect:'summonMatelot'},
    deckType:null,
  },
];
let campaignStage = 0;

function buildEnemyDeck(stageConfig){
  let pool;
  if(stageConfig.deckType){
    const typed = CARD_POOL.filter(c=>c.cardType===stageConfig.deckType||c.isSpell);
    pool = [...typed,...typed,...CARD_POOL.filter(c=>c.isSpell)];
  } else {
    pool = [...CARD_POOL];
    CARD_POOL.forEach(c=>{ if(c.rarity==='Rare'||c.rarity==='Épique'||c.rarity==='Légendaire') pool.push(c); });
  }
  for(let i=pool.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [pool[i],pool[j]]=[pool[j],pool[i]];
  }
  return pool.slice(0,15);
}

function showCampaignIntro(){
  const el = document.getElementById('campaign-screen');
  el.innerHTML = `
    <div class="camp-title">⚓ Les Océans en Guerre</div>
    <div class="camp-subtitle">4 combats vous attendent, Capitaine !</div>
    <div class="camp-stages">
      ${CAMPAIGN_STAGES.map((s,i)=>`
        <div class="camp-stage">
          <div class="camp-avatar-big">${s.avatar}</div>
          <div class="camp-stage-info">
            <div class="camp-stage-num">${s.title.toUpperCase()}</div>
            <div class="camp-stage-name">${s.name}</div>
            <div class="camp-stage-desc">${s.desc}</div>
          </div>
        </div>`).join('')}
    </div>
    <button id="camp-start-btn">⚔️ Partir en campagne !</button>`;
  el.style.display = 'flex';
  document.getElementById('camp-start-btn').onclick = ()=>{
    el.style.display = 'none';
    campaignStage = 0;
    startCampaignFight();
  };
}

function startCampaignFight(){
  const stage = CAMPAIGN_STAGES[campaignStage];
  document.getElementById('enemyAvatar').textContent = stage.avatar;
  document.getElementById('enemyName').textContent = stage.name;
  enemy.hp=MAX_HP; enemy.mana=1; enemy.maxMana=1;
  enemy.hand=[]; enemy.board=[];
  enemy.heroPowerUsed=false; enemy.fatigue=0;
  enemy.deck = buildEnemyDeck(stage);
  for(let i=0;i<4;i++) drawCard(enemy);
  document.getElementById('game-layout').style.display='flex';
  document.getElementById('log').innerHTML='';
  log(`${stage.avatar} Combat ${campaignStage+1}/4 — ${stage.name}`,'log-event');
  log(stage.desc,'log-event');
  render();
}

function handleCampaignVictory(){
  sndVictory();
  campaignStage++;
  if(campaignStage>=CAMPAIGN_STAGES.length){
    setTimeout(showCampaignComplete, 900);
    return;
  }
  const healAmt = 5;
  player.hp = Math.min(MAX_HP, player.hp+healAmt);
  setTimeout(()=>showRewardScreen(CAMPAIGN_STAGES[campaignStage], healAmt), 900);
}

function getRewardOffers(){
  const chosen = [];
  while(chosen.length < 3){
    const c = CARD_POOL[Math.floor(Math.random()*CARD_POOL.length)];
    if(!chosen.includes(c)) chosen.push(c);
  }
  return chosen;
}

function showRewardContinue(el, nextStage, healAmt){
  el.innerHTML += `
    <div class="reward-next">
      <div class="reward-next-label">PROCHAIN ADVERSAIRE</div>
      <div class="reward-next-avatar">${nextStage.avatar}</div>
      <div class="reward-next-name">${nextStage.name}</div>
      <div class="reward-next-desc">${nextStage.desc}</div>
    </div>
    <button id="reward-continue-btn">⚔️ Continuer !</button>`;
  document.getElementById('reward-continue-btn').onclick = ()=>{
    el.style.display = 'none';
    player.mana=1; player.maxMana=1;
    player.hand=[]; player.board=[];
    player.heroPowerUsed=false;
    selectedUnit=null; pendingAction=null;
    const deck = draftDeck.map(c=>({...c, keywords:[...c.keywords]}));
    for(let i=deck.length-1;i>0;i--){
      const j=Math.floor(Math.random()*(i+1));
      [deck[i],deck[j]]=[deck[j],deck[i]];
    }
    player.deck = deck;
    for(let i=0;i<4;i++) drawCard(player);
    startCampaignFight();
  };
}

function showRewardScreen(nextStage, healAmt){
  document.getElementById('game-layout').style.display='none';
  const el = document.getElementById('reward-screen');
  const offers = getRewardOffers();
  el.innerHTML = `
    <div class="reward-title">⚔️ Victoire !</div>
    <div class="reward-heal">💊 +${healAmt} PV récupérés (${player.hp}/${MAX_HP})</div>
    <div class="reward-pick-title">🎁 Choisissez une carte à ajouter à votre deck :</div>
    <div class="reward-offers"></div>`;
  el.style.display = 'flex';
  const offersEl = el.querySelector('.reward-offers');
  offers.forEach(card=>{
    const cardEl = makeDraftCardEl(card);
    cardEl.onclick = ()=>{
      draftDeck.push({...card, keywords:[...card.keywords]});
      offersEl.querySelectorAll('.card').forEach(c=>c.style.pointerEvents='none');
      cardEl.classList.add('reward-chosen');
      setTimeout(()=>{
        el.querySelectorAll('.reward-pick-title, .reward-offers').forEach(e=>e.remove());
        showRewardContinue(el, nextStage, healAmt);
      }, 800);
    };
    offersEl.appendChild(cardEl);
  });
}

function showCampaignComplete(){
  document.getElementById('game-layout').style.display='none';
  const el = document.getElementById('reward-screen');
  el.innerHTML = `
    <div class="reward-title">🏆 Campagne Terminée !</div>
    <div class="camp-complete-emoji">🌊⚓🌊</div>
    <div class="camp-subtitle">Votre flotte domine tous les océans !</div>
    <button id="reward-continue-btn" onclick="location.reload()">🔄 Recommencer</button>`;
  el.style.display = 'flex';
  sndVictory();
}

function showDefeatScreen(){
  sndDefeat();
  setTimeout(()=>{
    document.getElementById('game-layout').style.display='none';
    const el = document.getElementById('reward-screen');
    el.innerHTML = `
      <div class="reward-title" style="color:#e74c3c">💀 Défaite !</div>
      <div class="camp-complete-emoji">🌊</div>
      <div class="camp-subtitle">Votre flotte a sombré au combat ${campaignStage+1}...</div>
      <button id="reward-continue-btn" onclick="location.reload()">🔄 Recommencer la campagne</button>`;
    el.style.display = 'flex';
  }, 900);
}

// ── Draft de deck ──
let draftDeck = [];
let draftPick = 0;
const DRAFT_SIZE = 15;

function getDraftCostRange(pick){
  if(pick < 3)  return [1,2];
  if(pick < 7)  return [3,4];
  if(pick < 11) return [5,6];
  return [5,99]; // 5+ pour les 4 derniers
}

function getDraftOffers(){
  const [minCost, maxCost] = getDraftCostRange(draftPick);
  const pool = CARD_POOL.filter(c=>c.cost>=minCost && c.cost<=maxCost);
  const chosen = [];
  const attempts = pool.length > 0 ? pool : CARD_POOL; // fallback si pool vide
  while(chosen.length < 3){
    const i = Math.floor(Math.random()*attempts.length);
    if(!chosen.includes(attempts[i])) chosen.push(attempts[i]);
  }
  return chosen;
}

function makeDraftCardEl(card){
  const rk = rarityKey(card.rarity);
  const d = document.createElement('div');
  if(card.isSpell){
    d.className='card spell r-'+rk;
    d.innerHTML=`
      <div class="card-cost">${card.cost}</div>
      <div class="card-art">${CARD_ART[card.name]||`<span style="font-size:44px;display:flex;align-items:center;justify-content:center;height:100%">${card.emoji}</span>`}</div>
      <div class="card-divider"></div>
      <div class="card-name-bar"><div class="card-name">${card.name}</div></div>
      <div class="card-textbox">
        <div class="card-rarity-gem rarity-${rk}">${card.rarity.toUpperCase()}</div>
        <div class="card-keywords spell-desc">${card.spellDesc}</div>
      </div>
      <div class="card-footer spell-footer"><span class="spell-type">SORT</span></div>`;
  } else {
    d.className='card r-'+rk;
    d.innerHTML=`
      <div class="card-cost">${card.cost}</div>
      <div class="card-art">${CARD_ART[card.name]||`<span style="font-size:44px;display:flex;align-items:center;justify-content:center;height:100%">${card.emoji}</span>`}</div>
      <div class="card-divider"></div>
      <div class="card-name-bar"><div class="card-name">${card.name}</div></div>
      <div class="card-textbox">
        <div class="card-rarity-gem rarity-${rk}">${card.rarity.toUpperCase()}</div>
        ${card.battlecry?`<div class="card-keywords battlecry-desc">★ ${card.battlecry.desc}</div>`:
          card.keywords.length?`<div class="card-keywords">${card.keywords.join(' · ')}</div>`:
          '<div class="card-keywords" style="color:#555">—</div>'}
        ${card.cardType&&card.cardType!=='Sort'?`<div class="card-type-badge type-${card.cardType.replace(' ','-')}">${card.cardType}</div>`:''}
      </div>
      <div class="card-footer">
        <div class="stat-gem atk">${card.atk}</div>
        <div class="stat-gem hp">${card.hp}</div>
      </div>`;
  }
  return d;
}

function showDraftPick(){
  document.getElementById('draft-count').textContent = draftPick+1;
  document.getElementById('draft-bar').style.width = (draftPick/DRAFT_SIZE*100)+'%';

  const listEl = document.getElementById('draft-picked-list');
  listEl.innerHTML='';
  draftDeck.forEach(c=>{
    const typeClass = c.isSpell ? 'dpb-sort' : {
      'Pirate':'dpb-pirate','Bête marine':'dpb-bete','Élémental':'dpb-elemental'
    }[c.cardType] || 'dpb-creature';
    const b=document.createElement('div'); b.className='draft-pick-badge '+typeClass;
    b.innerHTML=`<span class="dpc">${c.cost}💎</span>${c.emoji} ${c.name}`;
    listEl.appendChild(b);
  });

  const offersEl = document.getElementById('draft-offers');
  offersEl.innerHTML='';
  getDraftOffers().forEach(card=>{
    const el=makeDraftCardEl(card);
    el.onclick=()=>pickDraftCard(card);
    offersEl.appendChild(el);
  });
}

function pickDraftCard(card){
  draftDeck.push({...card, keywords:[...card.keywords]});
  draftPick++;
  if(draftPick>=DRAFT_SIZE) finishDraft();
  else showDraftPick();
}

function finishDraft(){
  document.getElementById('draft-count').textContent='15';
  document.getElementById('draft-bar').style.width='100%';
  document.getElementById('draft-offers').innerHTML=
    '<div class="draft-done-msg">⚓ Deck complet ! Bon vent, Capitaine !</div>';
  setTimeout(()=>{
    document.getElementById('draft-screen').style.display='none';
    startGame();
  }, 1200);
}

function startDraft(){
  document.getElementById('draft-screen').style.display='flex';
  showDraftPick();
}

function startGame(){
  const deck = draftDeck.map(c=>({...c, keywords:[...c.keywords]}));
  for(let i=deck.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [deck[i],deck[j]]=[deck[j],deck[i]];
  }
  player.deck = deck;
  for(let i=0;i<4;i++) drawCard(player);
  if(gameMode==='quick'){
    startQuickFight();
  } else {
    showCampaignIntro();
  }
}

function startQuickFight(){
  campaignStage = 3; // Amiral Maelström
  const stage = CAMPAIGN_STAGES[3];
  document.getElementById('enemyAvatar').textContent = stage.avatar;
  document.getElementById('enemyName').textContent = stage.name;
  enemy.hp=MAX_HP; enemy.mana=1; enemy.maxMana=1;
  enemy.hand=[]; enemy.board=[];
  enemy.heroPowerUsed=false; enemy.fatigue=0;
  enemy.deck = buildDeck();
  for(let i=0;i<4;i++) drawCard(enemy);
  document.getElementById('game-layout').style.display='flex';
  document.getElementById('log').innerHTML='';
  log('🌊 La bataille commence ! Bonne chance, Capitaine !','log-event');
  render();
}

// ── Init ──
document.getElementById('endTurn').onclick    = endTurn;
document.getElementById('cancelBtn').onclick  = ()=>{ selectedUnit=null; pendingAction=null; render(); };
document.getElementById('heroPowerBtn').onclick = useHeroPower;
document.getElementById('draft-random-btn').onclick = ()=>{
  draftDeck = buildDeck();
  draftPick = DRAFT_SIZE;
  finishDraft();
};

// ── Bouton son ──
let globalMuted = false;
const muteBtn = document.getElementById('muteBtn');
muteBtn.onclick = ()=>{
  globalMuted = !globalMuted;
  bgm.muted = globalMuted;
  // Couper le gain de l'AudioContext via un nœud master
  masterGain.gain.value = globalMuted ? 0 : 1;
  muteBtn.textContent = globalMuted ? '🔇' : '🔊';
  muteBtn.classList.toggle('muted', globalMuted);
};

// ── Infobulle ──
const KEYWORD_DESC = {
  'Charge':        'Peut attaquer dès le tour où elle est posée.',
  'Provocation':   'Les ennemis doivent obligatoirement attaquer cette unité.',
  'Poison':        'Détruit toute unité qu\'elle touche, quelle que soit ses PV.',
  'Bouclier divin':'Absorbe la première attaque reçue sans dégâts.',
};
const TYPE_DESC = {
  'Pirate':      'Synergie : +1 ATK par autre Pirate allié (max +3).',
  'Bête marine': 'Synergie : +1 PV par autre Bête marine alliée (max +3).',
  'Élémental':   'Synergie : +1/+1 par autre Élémental allié (max +2).',
  'Sort':        'Sort — effet immédiat, pas d\'unité posée.',
};
const tip = document.getElementById('tooltip');
let tipTimeout = null;

function showTooltip(card, x, y){
  const rk = rarityKey(card.rarity);
  const typeColor = card.cardType==='Pirate'?'#ffb090':card.cardType==='Bête marine'?'#80c8ff':card.cardType==='Élémental'?'#c880ff':'#80ffb0';

  let html = `<div class="tip-name">${card.name}</div>`;
  if(card.cardType){
    html += `<div class="tip-type" style="background:rgba(255,255,255,.08);color:${typeColor}">${card.cardType}</div>`;
    if(TYPE_DESC[card.cardType])
      html += `<div class="tip-section"><span class="tip-kw-desc">${TYPE_DESC[card.cardType]}</span></div>`;
  }
  if(card.isSpell && card.spellDesc){
    html += `<hr><div class="tip-section"><span class="tip-spell">✨ ${card.spellDesc}</span></div>`;
  }
  if(card.battlecry){
    html += `<hr><div class="tip-section"><span class="tip-bc">★ Battlecry : ${card.battlecry.desc}</span></div>`;
  }
  if(card.keywords && card.keywords.length){
    html += '<hr>';
    card.keywords.forEach(kw=>{
      if(KEYWORD_DESC[kw])
        html += `<div class="tip-section"><span class="tip-kw">${kw}</span><br><span class="tip-kw-desc">${KEYWORD_DESC[kw]}</span></div>`;
    });
  }
  tip.innerHTML = html;

  // Positionnement — éviter les bords d'écran
  const tw = 230, th = tip.scrollHeight || 140;
  let lx = x + 14, ly = y - 10;
  if(lx + tw > window.innerWidth  - 10) lx = x - tw - 10;
  if(ly + th > window.innerHeight - 10) ly = y - th;
  tip.style.left = lx + 'px';
  tip.style.top  = ly + 'px';
  tip.classList.add('visible');
}
function hideTooltip(){ tip.classList.remove('visible'); }

// Attacher les infobulles dynamiquement via délégation
document.addEventListener('mousemove', e=>{
  if(tip.classList.contains('visible'))
    tip.style.left = (e.clientX+14)+'px', tip.style.top = (e.clientY-10)+'px';
});
document.addEventListener('mouseover', e=>{
  const cardEl = e.target.closest('.card');
  if(!cardEl){ hideTooltip(); return; }
  clearTimeout(tipTimeout);
  // Retrouver la carte par index dans la main
  const hand = document.getElementById('hand');
  const idx  = [...hand.children].indexOf(cardEl);
  if(idx < 0){ hideTooltip(); return; }
  const card = player.hand[idx];
  if(!card){ hideTooltip(); return; }
  tipTimeout = setTimeout(()=>showTooltip(card, e.clientX, e.clientY), 300);
});
document.addEventListener('mouseout', e=>{
  if(e.target.closest('.card')){ clearTimeout(tipTimeout); hideTooltip(); }
});

showModeScreen();
