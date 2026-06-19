
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
  const heroPool = CARD_POOL.filter(c=>c.cardType===selectedHero.family||c.isSpell);
  const pool = [];
  heroPool.forEach(c=>{
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
  if(unit.cardType==='Pirate')          return {atk:Math.min(allies,3), hp:0};
  if(unit.cardType==='Bête marine')     return {atk:0, hp:Math.min(allies,3)};
  if(unit.cardType==='Élémental')       return {atk:Math.min(allies,2), hp:Math.min(allies,2)};
  if(unit.cardType==='Tribu des Récifs')return {atk:Math.min(allies,3), hp:Math.min(allies,3)};
  if(unit.cardType==='Spectre')         return {atk:Math.min(allies,3), hp:0};
  if(unit.cardType==='Triton')          return {atk:0, hp:Math.min(allies,3)};
  return {atk:0,hp:0};
}
function effAtk(unit, board){ return unit.atk + synergyBonus(unit,board).atk; }

// ── Utilitaire crédits ──
function creditValue(card){
  if(card.isPower) return 25;
  return {Commune:2, Rare:5, Épique:10, Légendaire:20}[card.rarity]||2;
}
function sellValue(card){ return Math.floor(creditValue(card)/2); }

// ── Effets de pouvoir héros (carrière) ──
const HERO_POWER_EFFECTS = {
  hp_heal2:()=>{ player.hp=Math.min(MAX_HP,player.hp+2); sndSpell(); },
  hp_heal4:()=>{ player.hp=Math.min(MAX_HP,player.hp+4); sndSpell(); },
  hp_drawCard:()=>{ drawCard(player); sndSpell(); },
  hp_draw2Cards:()=>{ drawCard(player); drawCard(player); sndSpell(); },
  hp_deal1hp:()=>{ enemy.hp-=1; sndHeroHit(); flashHero('enemyZone',1); checkEnd(); },
  hp_deal2Random:()=>{
    if(enemy.board.length){
      const t=enemy.board[Math.floor(Math.random()*enemy.board.length)];
      t.currentHp-=2; sndHit(); cleanup();
    } else { enemy.hp-=2; sndHeroHit(); flashHero('enemyZone',2); checkEnd(); }
  },
  hp_buffOneRandom:()=>{
    if(player.board.length){
      const t=player.board[Math.floor(Math.random()*player.board.length)];
      t.atk+=1; sndSpell();
    }
  },
  hp_buffAllAllies:()=>{ player.board.forEach(u=>{u.atk+=1;u.hp+=1;u.currentHp+=1;}); sndSpell(); },
  hp_summonTotem:()=>{
    if(player.board.length<MAX_BOARD){
      player.board.push({name:'Totem',emoji:'🗿',cost:0,atk:0,hp:3,rarity:'Commune',
        cardType:'Tribu des Récifs',keywords:['Provocation'],battlecry:null,isSpell:false,
        currentHp:3,attacked:false,justPlayed:true,hasShield:false,_uid:++_uidCounter});
      sndSpell();
    }
  },
};

// ── Pouvoirs héros ──
function useHeroPower(){
  const hp = selectedHero.heroPower;
  if(player.heroPowerUsed){ log('⚠️ Pouvoir héros déjà utilisé ce tour.','log-event'); return; }
  if(player.mana < hp.cost){ log('⚠️ Pas assez de mana.','log-event'); return; }
  player.mana -= hp.cost;
  player.heroPowerUsed = true;
  // Héros fixes (Jack/Naïa/Zephyr)
  if(hp.effect==='heal2hp'){
    player.hp = Math.min(MAX_HP, player.hp+2); sndSpell();
    log(`${hp.emoji} Pouvoir héros : ${selectedHero.name} récupère 2 PV !`,'log-player');
  } else if(hp.effect==='drawCard'){
    drawCard(player); sndSpell();
    log(`${hp.emoji} Pouvoir héros : ${selectedHero.name} pioche une carte !`,'log-player');
  } else if(hp.effect==='deal1hp'){
    enemy.hp-=1; sndHeroHit(); flashHero('enemyZone',1);
    log(`${hp.emoji} Pouvoir héros : ${selectedHero.name} inflige 1 dégât !`,'log-player');
    checkEnd(); return;
  // Pouvoirs héros carrière (powerEffect)
  } else if(HERO_POWER_EFFECTS[hp.effect]){
    HERO_POWER_EFFECTS[hp.effect]();
    log(`${hp.emoji} Pouvoir héros : ${hp.name} !`,'log-player');
  }
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
    const enemyMaxHp = stage.hp||MAX_HP;
    enemy.hp=Math.min(enemyMaxHp,enemy.hp+2);
    log(`💚 Pouvoir héros : ${stage.name} récupère 2 PV !`,'log-enemy');
  } else if(hp.effect==='deal1'){
    player.hp-=1; sndHeroHit(); flashHero('playerZone',1);
    log(`⚡ Pouvoir héros : ${stage.name} inflige 1 dégât !`,'log-enemy');
  } else if(hp.effect==='deal1Random'){
    const targets=[...player.board];
    if(targets.length){
      const t=targets[Math.floor(Math.random()*targets.length)];
      t.currentHp-=1;
      log(`👁️ Pouvoir héros : L'Entité inflige 1 dégât à ${t.name} !`,'log-enemy');
      cleanup();
    } else {
      player.hp-=1; sndHeroHit(); flashHero('playerZone',1);
      log(`👁️ Pouvoir héros : L'Entité inflige 1 dégât à votre héros !`,'log-enemy');
    }
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
    target.justPlayed=true; target.attacked=true;
    log(`💤 Battlecry : ${target.name} est étourdi(e) et passe son tour !`,'log-event');
  },
  cannoneerShot:(owner, ownerBoard, target)=>{
    if(!target) return;
    target.currentHp-=2; sndHit();
    log(`💣 Battlecry : Canonnier inflige 2 dégâts à ${target.name} !`,'log-event');
    cleanup();
  },
  allPirateBuff:(owner, ownerBoard)=>{
    const pirates = ownerBoard.filter(u=>u.cardType==='Pirate');
    pirates.forEach(u=>{ u.atk+=1; u.hp+=1; u.currentHp+=1; });
    log(`💀 Battlecry : ${pirates.length} Pirate(s) reçoivent +1/+1 !`,'log-event');
  },
  sylphBuff:(owner, ownerBoard, target)=>{
    if(!target) return;
    target.atk+=1;
    log(`🌬️ Battlecry : ${target.name} reçoit +1 ATK !`,'log-event');
  },
  djinnAoe:(owner, ownerBoard)=>{
    const opp = (owner===player) ? enemy : player;
    opp.board.forEach(u=>{ u.currentHp-=2; }); sndHit();
    log(`🌀 Battlecry : Djinn inflige 2 dégâts à toutes les unités ennemies !`,'log-event');
    cleanup();
  },
  leviathanAoe:(owner, ownerBoard)=>{
    const opp = (owner===player) ? enemy : player;
    opp.board.forEach(u=>{ u.currentHp-=3; }); sndHit();
    log(`🐲 Battlecry : Léviathan inflige 3 dégâts à toutes les unités ennemies !`,'log-event');
    cleanup();
  },

  // ── Tribaux des Récifs ──
  tribalAllBuff:(owner, ownerBoard)=>{
    const t = ownerBoard.filter(u=>u.cardType==='Tribu des Récifs');
    t.forEach(u=>{ u.atk+=1; u.hp+=1; u.currentHp+=1; });
    log(`🪬 Battlecry : ${t.length} Tribal(aux) reçoivent +1/+1 !`,'log-event');
  },
  tribalChiefBuff:(owner, ownerBoard)=>{
    const t = ownerBoard.filter(u=>u.cardType==='Tribu des Récifs');
    t.forEach(u=>{ u.atk+=2; u.hp+=2; u.currentHp+=2; });
    log(`🦁 Battlecry : ${t.length} Tribal(aux) reçoivent +2/+2 !`,'log-event');
  },
  allAllyAtkBuff:(owner, ownerBoard)=>{
    ownerBoard.forEach(u=>{ u.atk+=1; });
    log(`🪘 Battlecry : toutes vos unités reçoivent +1 ATK !`,'log-event');
  },
  summon2Warriors:(owner, ownerBoard)=>{
    if(ownerBoard.length>=MAX_BOARD) return;
    for(let i=0;i<2&&ownerBoard.length<MAX_BOARD;i++){
      ownerBoard.push({name:'Guerrier Tribal',emoji:'⚔️',cost:1,atk:1,hp:1,
        rarity:'Commune',cardType:'Tribu des Récifs',keywords:[],battlecry:null,isSpell:false,
        currentHp:1,attacked:false,justPlayed:true,hasShield:false,_uid:++_uidCounter});
    }
    log(`👑 Battlecry : 2 Guerriers Tribaux invoqués !`,'log-event');
  },

  // ── Spectres des Naufrages ──
  spectreAoe1:(owner, ownerBoard)=>{
    const opp = (owner===player) ? enemy : player;
    opp.board.forEach(u=>{ u.currentHp-=1; }); sndHit();
    log(`💀 Battlecry : 1 dégât à toutes les unités ennemies !`,'log-event');
    cleanup();
  },
  summon2Larvae:(owner, ownerBoard)=>{
    if(ownerBoard.length>=MAX_BOARD) return;
    for(let i=0;i<2&&ownerBoard.length<MAX_BOARD;i++){
      ownerBoard.push({name:'Larve Spectrale',emoji:'💀',cost:1,atk:1,hp:1,
        rarity:'Commune',cardType:'Spectre',keywords:['Rebond'],battlecry:null,isSpell:false,
        currentHp:1,attacked:false,justPlayed:true,hasShield:false,_uid:++_uidCounter});
    }
    log(`🛸 Battlecry : 2 Larves Spectrales invoquées !`,'log-event');
  },
  spectreBuff:(owner, ownerBoard)=>{
    const s = ownerBoard.filter(u=>u.cardType==='Spectre');
    s.forEach(u=>{ u.atk+=2; u.hp+=2; u.currentHp+=2; });
    log(`🌑 Battlecry : ${s.length} Spectre(s) reçoivent +2/+2 !`,'log-event');
  },

  // ── Tritons Guerriers ──
  tritonHpBuff:(owner, ownerBoard)=>{
    const t = ownerBoard.filter(u=>u.cardType==='Triton');
    t.forEach(u=>{ u.hp+=1; u.currentHp+=1; });
    log(`👁️ Battlecry : ${t.length} Triton(s) reçoivent +1 PV !`,'log-event');
  },
  tritonShieldAll:(owner, ownerBoard)=>{
    ownerBoard.forEach(u=>{ u.hasShield=true; });
    log(`👑 Battlecry : Bouclier divin donné à toutes vos unités !`,'log-event');
  },
  summon2Guards:(owner, ownerBoard)=>{
    if(ownerBoard.length>=MAX_BOARD) return;
    for(let i=0;i<2&&ownerBoard.length<MAX_BOARD;i++){
      ownerBoard.push({name:'Garde Triton',emoji:'🛡️',cost:2,atk:1,hp:3,
        rarity:'Commune',cardType:'Triton',keywords:['Provocation'],battlecry:null,isSpell:false,
        currentHp:3,attacked:false,justPlayed:true,hasShield:false,_uid:++_uidCounter});
    }
    log(`🔱 Battlecry : 2 Gardes Triton invoqués !`,'log-event');
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
function dealDamage(attacker, attackerBoard, defender, defenderIsHero=false, defenderBoard=[], attackerOwner=player, defenderOwner=enemy){
  if(defenderIsHero){
    const dmg = effAtk(attacker, attackerBoard);
    defender.hp -= dmg;
    if(has(attacker,'Vol de vie') && dmg>0){
      attackerOwner.hp = Math.min(MAX_HP, attackerOwner.hp+dmg);
      log(`🩸 ${attacker.name} vole ${dmg} PV !`,'log-event');
    }
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
    if(has(attacker,'Vol de vie') && atkDmg>0){
      attackerOwner.hp = Math.min(MAX_HP, attackerOwner.hp+atkDmg);
      log(`🩸 ${attacker.name} vole ${atkDmg} PV !`,'log-event');
    }
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
      if(has(defender,'Vol de vie') && ctrDmg>0 && !defenderIsHero){
        defenderOwner.hp = Math.min(MAX_HP, defenderOwner.hp+ctrDmg);
        log(`🩸 ${defender.name} vole ${ctrDmg} PV en contre-attaquant !`,'log-event');
      }
    }
  }
}

function cleanup(){
  const dyingPlayer = player.board.filter(c=>c.currentHp<=0);
  const dyingEnemy  = enemy.board.filter(c=>c.currentHp<=0);
  const dying = [...dyingPlayer, ...dyingEnemy];
  dying.forEach((c,i)=>{
    setTimeout(()=>{ sndDeath(); log(`💀 ${c.name} est détruit(e) !`,'log-event'); }, i*180);
    const el = document.querySelector(`[data-uid="${c._uid}"]`);
    if(el) flashUnit(el, 0, true);
    if(has(c,'Rebond')){
      const owner = dyingPlayer.includes(c) ? player : enemy;
      const fresh = {...c, keywords:[...c.keywords], currentHp:c.hp,
        attacked:false, justPlayed:true, hasShield:false, _doubleUsed:false, _uid:++_uidCounter};
      owner.hand.push(fresh);
      log(`↩️ ${c.name} rebondit dans la main !`,'log-event');
    }
  });
  // Synergie Tribaux : +1 ATK à tous les survivants quand un Tribal meurt
  const dyingTribalPlayer = dyingPlayer.filter(c=>c.cardType==='Tribu des Récifs').length;
  const dyingTribalEnemy  = dyingEnemy.filter(c=>c.cardType==='Tribu des Récifs').length;
  if(dyingTribalPlayer>0)
    player.board.filter(c=>c.cardType==='Tribu des Récifs'&&c.currentHp>0).forEach(u=>{ u.atk+=dyingTribalPlayer; });
  if(dyingTribalEnemy>0)
    enemy.board.filter(c=>c.cardType==='Tribu des Récifs'&&c.currentHp>0).forEach(u=>{ u.atk+=dyingTribalEnemy; });

  player.board = player.board.filter(c=>c.currentHp>0);
  enemy.board  = enemy.board.filter(c=>c.currentHp>0);
}

function showCombatResult(win, then){
  const ov = document.getElementById('combat-result');
  ov.textContent = win ? '⚔️ Victoire !' : '💀 Défaite !';
  ov.className = 'combat-result-overlay ' + (win ? 'win' : 'lose');
  ov.style.display = 'flex';
  setTimeout(()=>{ ov.style.display='none'; then(); }, 1400);
}

function checkEnd(){
  if(enemy.hp<=0){
    sndVictory();
    if(gameMode==='quick'){
      showCombatResult(true, ()=>{
        document.getElementById('game-layout').style.display='none';
        const el=document.getElementById('reward-screen');
        el.innerHTML=`
          <div class="reward-title">🏆 Victoire !</div>
          <div class="camp-complete-emoji">⚓</div>
          <div class="camp-subtitle">L'Amiral Maelström est coulé !</div>
          <button id="reward-continue-btn" onclick="location.reload()">🔄 Rejouer</button>`;
        el.style.display='flex';
      });
    } else {
      showCombatResult(true, handleCampaignVictory);
    }
    return true;
  }
  if(player.hp<=0){
    showCombatResult(false, showDefeatScreen);
    return true;
  }
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

function enemyPickTarget(targetFilter){
  const ep = player.board.filter(c=>c.currentHp>0);
  const ea = enemy.board.filter(c=>c.currentHp>0);
  if(targetFilter==='enemy')      return ep.sort((a,b)=>a.currentHp-b.currentHp)[0]||null;
  if(targetFilter==='enemy-weak') return ep.filter(c=>c.currentHp<=2)[0]||null;
  if(targetFilter==='ally')       return ea.sort((a,b)=>b.atk-a.atk)[0]||null;
  if(targetFilter==='ally-Pirate')    return ea.filter(c=>c.cardType==='Pirate').sort((a,b)=>b.atk-a.atk)[0]||null;
  if(targetFilter==='ally-Élémental') return ea.filter(c=>c.cardType==='Élémental').sort((a,b)=>b.atk-a.atk)[0]||null;
  return null;
}

// ── Tour de l'IA ──
function enemyTurn(){
  // Utiliser pouvoir héros si possible
  enemyUseHeroPower();

  // Sorts IA (avec ciblage)
  let castingSpell = true;
  while(castingSpell){
    castingSpell = false;
    const si = enemy.hand.findIndex(c=>c.isSpell && c.cost<=enemy.mana);
    if(si>=0){
      const s = enemy.hand[si];
      if(s.needsTarget){
        const target = enemyPickTarget(s.targetFilter);
        if(!target){ castingSpell=false; break; } // pas de cible valide, passer
        enemy.mana -= s.cost;
        SPELL_EFFECTS[s.spellEffect]?.(enemy, player, target);
        log(`🤖 L'IA lance ${s.name} sur ${target.name} !`,'log-enemy');
        enemy.hand.splice(si,1);
        cleanup();
      } else {
        enemy.mana -= s.cost;
        SPELL_EFFECTS[s.spellEffect]?.(enemy, player);
        log(`🤖 L'IA lance ${s.name} !`,'log-enemy');
        enemy.hand.splice(si,1);
      }
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
      // Battlecry (avec ou sans cible)
      if(c.battlecry && BATTLECRY_EFFECTS[c.battlecry.effect]){
        if(c.battlecry.needsTarget){
          const target = enemyPickTarget(c.battlecry.targetFilter);
          if(target) BATTLECRY_EFFECTS[c.battlecry.effect](enemy, enemy.board, target);
        } else {
          BATTLECRY_EFFECTS[c.battlecry.effect](enemy, enemy.board);
        }
      }
      played=true;
    }
  }

  // Attaques IA — ciblage intelligent
  const attackers = enemy.board.filter(c=>!c.justPlayed||has(c,'Charge'));
  attackers.forEach(attacker=>{
    const atk = attacker.currentAtk||attacker.atk||0;
    const taunts = player.board.filter(c=>has(c,'Provocation'));

    // Obligation : attaquer une Provocation si présente
    if(taunts.length){
      const t = taunts.slice().sort((a,b)=>a.currentHp-b.currentHp)[0];
      log(`🤖 ${attacker.name} attaque ${t.name}`,'log-enemy');
      dealDamage(attacker, enemy.board, t, false, player.board, enemy, player);
      cleanup(); return;
    }

    // Priorité 1 : coup fatal sur le héros joueur
    if(atk >= player.hp){
      log(`🤖 ${attacker.name} attaque votre héros !`,'log-enemy');
      dealDamage(attacker, enemy.board, player, true, [], enemy, player);
      cleanup(); return;
    }

    if(player.board.length){
      // Priorité 2 : trade avantageux — tuer une unité sans mourir
      const killable = player.board.filter(u=>(u.currentHp||u.hp)<=atk && (u.currentAtk||u.atk||0)<(attacker.currentHp||attacker.hp));
      if(killable.length){
        // Parmi les kills propres, cibler la plus menaçante (ATK la plus haute)
        killable.sort((a,b)=>(b.currentAtk||b.atk)-(a.currentAtk||a.atk));
        log(`🤖 ${attacker.name} attaque ${killable[0].name}`,'log-enemy');
        dealDamage(attacker, enemy.board, killable[0], false, player.board, enemy, player);
        cleanup(); return;
      }

      // Priorité 3 : éliminer la plus menaçante (ATK la plus haute)
      const byThreat = player.board.slice().sort((a,b)=>(b.currentAtk||b.atk)-(a.currentAtk||a.atk));
      log(`🤖 ${attacker.name} attaque ${byThreat[0].name}`,'log-enemy');
      dealDamage(attacker, enemy.board, byThreat[0], false, player.board, enemy, player);
      cleanup();
    } else {
      // Plateau vide → attaque directe au héros
      log(`🤖 ${attacker.name} attaque votre héros !`,'log-enemy');
      dealDamage(attacker, enemy.board, player, true, [], enemy, player);
    }
  });
}

// ── Attaque joueur ──
function playerAttack(targetUnit, targetIsHero=false){
  if(pendingAction){ resolveTarget(targetIsHero ? null : targetUnit, targetIsHero); return; }
  if(!selectedUnit) return;
  log(`⚔️ ${selectedUnit.name} attaque ${targetIsHero?'l\'Amiral':targetUnit.name} !`,'log-player');
  dealDamage(selectedUnit, player.board, targetIsHero?enemy:targetUnit, targetIsHero, enemy.board, player, enemy);
  if(has(selectedUnit,'Double attaque') && !selectedUnit._doubleUsed){
    selectedUnit._doubleUsed=true;
    log(`⚡ ${selectedUnit.name} peut attaquer une seconde fois !`,'log-event');
  } else {
    selectedUnit.attacked=true;
  }
  selectedUnit=null;
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

  const curStage = CAMPAIGN_STAGES[campaignStage] || CAMPAIGN_STAGES[3];
  showTurnBanner(`${curStage.avatar} Tour de ${curStage.name}`, ()=>{
    enemyTurn();
    if(checkEnd()) return;

    // Reset flags
    player.board.forEach(c=>{ c.attacked=false; c.justPlayed=false; c._doubleUsed=false; });
    enemy.board.forEach(c=>{ c.attacked=false; c.justPlayed=false; c._doubleUsed=false; });
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
  if(has(c,'Provocation'))    cls+=' has-taunt';
  if(has(c,'Vol de vie'))     cls+=' has-lifesteal';
  if(has(c,'Double attaque')) cls+=' has-doubleatk';
  if(has(c,'Rebond'))         cls+=' has-rebond';
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
  if(filter==='ally-Élémental')  return {allies:allies.filter(c=>c.cardType==='Élémental'&&c!==action.unit), enemies:[], weakEnemies:[]};
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
  const enemyMaxHp = (CAMPAIGN_STAGES[campaignStage]||{}).hp||MAX_HP;
  document.getElementById('enemyHpVal').textContent    = enemy.hp+'/'+enemyMaxHp;
  document.getElementById('enemyHpBar').style.width   = Math.max(0,enemy.hp/enemyMaxHp*100)+'%';
  document.getElementById('enemyManaVal').textContent  = enemy.mana+'/'+enemy.maxMana;
  document.getElementById('enemyManaBar').style.width  = enemy.maxMana?Math.max(0,enemy.mana/enemy.maxMana*100)+'%':'0%';

  // Deck count
  const pd = document.getElementById('playerDeckCount'), ed = document.getElementById('enemyDeckCount');
  if(pd) pd.textContent = player.deck.length+' cartes';
  if(ed) ed.textContent = enemy.deck.length+' cartes';

  // Pouvoir héros joueur
  const hpBtn = document.getElementById('heroPowerBtn');
  if(hpBtn){
    const hp = selectedHero.heroPower;
    const canUse = !player.heroPowerUsed && player.mana >= hp.cost;
    hpBtn.disabled = !canUse;
    hpBtn.className = 'hero-power-btn'+(player.heroPowerUsed?' used':'')+(canUse?' available':'');
    hpBtn.innerHTML = `${hp.emoji}<span>${hp.cost}💎</span>`;
    hpBtn.title = `${hp.name} — ${hp.desc} (coût : ${hp.cost}💎)`;
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

// ── Héros jouables ──
const HEROES = [
  {
    id:'jack', name:'Jack le Corsaire', avatar:'🏴‍☠️', family:'Pirate',
    title:'Maître des mers du Sud',
    desc:'Commande une flotte de pirates redoutables. Chaque victoire alimente sa légende.',
    heroPower:{name:"Soins d'urgence", desc:'Récupère 2 PV', cost:2, emoji:'💊', effect:'heal2hp'},
  },
  {
    id:'naia', name:'Naïa la Sirène', avatar:'🧜', family:'Bête marine',
    title:'Gardienne des profondeurs',
    desc:'Contrôle les créatures des abysses avec une grâce mortelle.',
    heroPower:{name:'Appel des profondeurs', desc:'Pioche une carte', cost:2, emoji:'🎴', effect:'drawCard'},
  },
  {
    id:'zephyr', name:'Zephyr le Tempestaire', avatar:'🌩️', family:'Élémental',
    title:'Maître des tempêtes',
    desc:'Déchaîne des élémentaux dévastateurs et frappe l\'ennemi avec la foudre.',
    heroPower:{name:'Foudre', desc:'1 dégât au héros ennemi', cost:1, emoji:'⚡', effect:'deal1hp'},
  },
];
let selectedHero = HEROES[0];

// ══════════════════════════════════════════════════════════════
// SYSTÈME CARRIÈRE
// ══════════════════════════════════════════════════════════════
let career = null;

const CAREER_FAMILY   = 'Tribu des Récifs';
const CAREER_AVATAR   = '🪬';
const CAREER_STARTERS = CARD_POOL.filter(c=>c.isPower && c.isStarter);

const STARTING_CARD_NAMES = [
  // Low 0-2 (8 options → 6 actives)
  'Enfant des Récifs','Éclaireur Tribal','Guerrier des Coraux',
  'Pêcheur Tribal','Lancier des Récifs','Guérisseur du Clan',
  // Mid 3-4 (5)
  'Ancien du Clan','Chasseur Tribal','Gardien des Totems','Berserker Tribal','Défenseur des Récifs',
  // High 5+ (4)
  'Champion Tribal','Géant des Coraux','Colosse Tribal','Grand Guerrier',
  // 2 sorts communs
  'Écume de Mer','Filet du Pêcheur',
];

const STARTING_ACTIVE_DECK = {
  low:  ['Enfant des Récifs','Éclaireur Tribal','Guerrier des Coraux','Pêcheur Tribal','Écume de Mer','Filet du Pêcheur'],
  mid:  ['Ancien du Clan','Chasseur Tribal','Gardien des Totems','Berserker Tribal','Défenseur des Récifs'],
  high: ['Champion Tribal','Géant des Coraux','Colosse Tribal','Grand Guerrier'],
};

function loadCareer(){ try{ return JSON.parse(localStorage.getItem('career'))||null; }catch(e){ return null; } }
function saveCareer(){ if(career) localStorage.setItem('career', JSON.stringify(career)); }

function createCareer(name, starterPowerName){
  career = {
    name,
    credits: 0,
    victories: 0,
    ownedCards: [...STARTING_CARD_NAMES],
    activeDeck: JSON.parse(JSON.stringify(STARTING_ACTIVE_DECK)),
    ownedPowerNames: CAREER_STARTERS.map(p=>p.name),
    activePowerName: starterPowerName,
  };
  saveCareer();
}

function careerHero(){
  const pw = CARD_POOL.find(c=>c.isPower && c.name===career.activePowerName) || CAREER_STARTERS[0];
  return {
    id:'career', name:career.name, avatar:CAREER_AVATAR,
    family:CAREER_FAMILY, title:'Héros de Carrière',
    desc:`Un héros des récifs en quête de gloire.`,
    heroPower:{ name:pw.name, desc:pw.powerDesc, cost:pw.cost, emoji:pw.emoji, effect:pw.powerEffect },
  };
}

function careerDeckCards(){
  const allNames = [...career.activeDeck.low, ...career.activeDeck.mid, ...career.activeDeck.high];
  return allNames.map(n=>CARD_POOL.find(c=>c.name===n)).filter(Boolean);
}

function updateCreditsBadge(){
  if(!career){ document.getElementById('credits-badge').style.display='none'; return; }
  document.getElementById('credits-badge').style.display='block';
  document.getElementById('credits-val').textContent = career.credits+'cr';
}

function awardVictoryCredits(){
  if(!career) return;
  let gain, label;
  if(player.hp >= 25)       { gain=3; label='éclatante ⭐⭐⭐'; }
  else if(player.hp >= 10)  { gain=2; label='normale ⭐⭐'; }
  else                      { gain=1; label='piètre ⭐'; }
  career.credits += gain;
  career.victories++;
  saveCareer();
  log(`💰 Victoire ${label} — +${gain} crédit${gain>1?'s':''}. Total : ${career.credits}cr`,'log-event');
  updateCreditsBadge();
}

// ── Écrans carrière ──
function showCareerScreen(){
  const existing = loadCareer();
  const el = document.getElementById('career-screen');
  document.getElementById('mode-screen').style.display = 'none';

  if(existing){
    career = existing;
    el.innerHTML = `
      <div class="career-logo">🪬</div>
      <div class="career-title">Royaumes de l'Océan</div>
      <div class="career-subtitle">Votre aventure vous attend</div>
      <div class="career-existing">
        <div class="career-existing-name">${career.name}</div>
        <div class="career-existing-info">
          ${career.victories} victoire${career.victories!==1?'s':''} · ${career.credits} crédit${career.credits!==1?'s':''}
        </div>
        <div class="career-btn-row">
          <button class="btn-primary" id="career-resume-btn">▶ Reprendre</button>
          <button class="btn-secondary" id="career-new-btn">✦ Nouvelle carrière</button>
        </div>
      </div>`;
    el.style.display = 'flex';
    document.getElementById('career-resume-btn').onclick = ()=>{ el.style.display='none'; updateCreditsBadge(); showModeScreen(); };
    document.getElementById('career-new-btn').onclick   = ()=>{ career=null; showCareerCreate(); };
  } else {
    showCareerCreate();
  }
}

function showCareerCreate(){
  const el = document.getElementById('career-screen');
  el.innerHTML = `
    <div class="career-logo">🪬</div>
    <div class="career-title">Nouvelle Carrière</div>
    <div class="career-create-form">
      <div>
        <label>Nom de votre héros</label>
        <input id="career-name-input" class="career-name-input" type="text" maxlength="20" placeholder="Entrez un nom…">
      </div>
      <div>
        <label>Choisissez votre pouvoir de départ</label>
        <div class="career-power-grid">
          ${CAREER_STARTERS.map(p=>`
            <div class="career-power-card" data-power="${p.name}">
              <div class="career-power-emoji">${p.emoji}</div>
              <div class="career-power-name">${p.name}</div>
              <div class="career-power-desc">${p.powerDesc}</div>
              <div class="career-power-cost">${p.cost}💎</div>
            </div>`).join('')}
        </div>
      </div>
      <button class="btn-primary" id="career-create-btn" disabled style="align-self:center;padding:13px 40px">
        ⚓ Commencer l'aventure
      </button>
    </div>`;
  el.style.display = 'flex';

  let selectedPower = null;
  const nameInput = document.getElementById('career-name-input');
  const createBtn = document.getElementById('career-create-btn');

  function checkReady(){ createBtn.disabled = !(nameInput.value.trim() && selectedPower); }

  nameInput.addEventListener('input', checkReady);

  el.querySelectorAll('.career-power-card').forEach(card=>{
    card.onclick = ()=>{
      el.querySelectorAll('.career-power-card').forEach(c=>c.classList.remove('selected'));
      card.classList.add('selected');
      selectedPower = card.dataset.power;
      checkReady();
    };
  });

  createBtn.onclick = ()=>{
    const name = nameInput.value.trim();
    if(!name || !selectedPower) return;
    createCareer(name, selectedPower);
    el.style.display = 'none';
    updateCreditsBadge();
    showModeScreen();
  };
}

// ══════════════════════════════════════════════════════════════
// TAVERNE
// ══════════════════════════════════════════════════════════════

const FAMILIES_PLAYABLE = ['Pirate','Bête marine','Élémental','Tribu des Récifs','Spectre','Triton'];

function cardBand(c){ return c.cost<=2?'low':c.cost<=4?'mid':'high'; }

function canSell(cardName){
  const card = CARD_POOL.find(c=>c.name===cardName);
  if(!card) return false;
  const remaining = [...career.ownedCards];
  const idx = remaining.indexOf(cardName);
  if(idx===-1) return false;
  remaining.splice(idx,1);
  const nonPower = remaining.map(n=>CARD_POOL.find(c=>c.name===n)).filter(c=>c&&!c.isPower);
  const low   = nonPower.filter(c=>c.cost<=2).length;
  const mid   = nonPower.filter(c=>c.cost>=3&&c.cost<=4).length;
  const high  = nonPower.filter(c=>c.cost>=5).length;
  const sorts = nonPower.filter(c=>c.isSpell).length;
  const powers = career.ownedPowerNames.length;
  return low>=6 && mid>=5 && high>=4 && sorts>=2 && powers>=1;
}

function rollRarity(pool, guaranteeRare=false){
  const r = Math.random();
  let rar;
  if(guaranteeRare){
    rar = r<0.05?'Légendaire':r<0.20?'Épique':'Rare';
  } else {
    rar = r<0.03?'Légendaire':r<0.12?'Épique':r<0.35?'Rare':'Commune';
  }
  const sub = pool.filter(c=>c.rarity===rar);
  const src = sub.length ? sub : pool;
  return src[Math.floor(Math.random()*src.length)];
}

function openMixedPack(){
  const pool = CARD_POOL.filter(c=>!c.isPower);
  const cards = [];
  for(let i=0;i<4;i++) cards.push(rollRarity(pool));
  cards.push(rollRarity(pool, true));
  return cards;
}

function openThematicPack(family){
  const familyPool = CARD_POOL.filter(c=>c.cardType===family && !c.isPower && !c.isSpell);
  const sortPool   = CARD_POOL.filter(c=>c.isSpell && !c.isPower);
  const fallback   = CARD_POOL.filter(c=>!c.isPower);
  const cards = [];
  for(let i=0;i<4;i++) cards.push(rollRarity(familyPool.length?familyPool:fallback));
  cards.push(rollRarity(sortPool.length?sortPool:fallback));
  return cards;
}

function addPackToCollection(cards){
  cards.forEach(c=>{ if(c) career.ownedCards.push(c.name); });
  saveCareer();
}

function showPackReveal(cards, onClose){
  const el = document.getElementById('pack-reveal-screen');
  el.innerHTML = `
    <div class="pack-reveal-title">✨ Votre Pack !</div>
    <div class="pack-reveal-cards">
      ${cards.map((c,i)=>`
        <div class="pack-reveal-card rarity-${c?.rarity||'Commune'}" style="animation-delay:${i*0.12}s">
          <div class="pack-card-emoji">${c?.emoji||'❓'}</div>
          <div class="pack-card-name">${c?.name||'???'}</div>
          <div class="pack-card-rarity">${c?.rarity||''} ${c?.isSpell?'· Sort':c?.cardType?'· '+c.cardType:''}</div>
        </div>`).join('')}
    </div>
    <button class="btn-primary" id="pack-close-btn" style="margin-top:8px">✓ Continuer</button>`;
  el.style.display = 'flex';
  document.getElementById('pack-close-btn').onclick = ()=>{
    el.style.display = 'none';
    onClose();
  };
}

function showTaverne(){
  document.getElementById('mode-screen').style.display = 'none';
  const el = document.getElementById('taverne-screen');
  renderTaverne(el);
  el.style.display = 'flex';
}

function renderTaverne(el){
  const cr = career.credits;
  const canMixed    = cr >= 10;
  const canThematic = cr >= 15;

  const countMap = {};
  career.ownedCards.forEach(n=>{ countMap[n]=(countMap[n]||0)+1; });
  const sellable = Object.entries(countMap)
    .map(([n,cnt])=>({ card:CARD_POOL.find(c=>c.name===n), name:n, count:cnt }))
    .filter(x=>x.card && !x.card.isPower)
    .sort((a,b)=>creditValue(b.card)-creditValue(a.card));

  el.innerHTML = `
    <div class="taverne-header">
      <div class="taverne-title">🏪 Taverne</div>
      <div class="taverne-credits">💰 ${cr} crédit${cr!==1?'s':''}</div>
      <button class="btn-secondary" id="taverne-back-btn">← Retour</button>
    </div>

    <div class="taverne-section">
      <div class="taverne-section-title">📦 Acheter des packs</div>
      <div class="pack-grid">
        <div class="pack-card ${canMixed?'':'pack-disabled'}" id="buy-mixed">
          <div class="pack-icon">🎲</div>
          <div class="pack-name">Pack Mélangé</div>
          <div class="pack-desc">5 cartes aléatoires toutes familles. La dernière est garantie Rare ou mieux.</div>
          <div class="pack-cost">10 cr</div>
        </div>
        <div class="pack-card ${canThematic?'':'pack-disabled'}" id="buy-thematic-card">
          <div class="pack-icon">🏷️</div>
          <div class="pack-name">Pack Thématique</div>
          <div class="pack-desc">4 cartes d'une famille + 1 Sort. Choisissez votre famille ci-dessous, puis cliquez.</div>
          <div class="family-picker" id="family-picker">
            ${FAMILIES_PLAYABLE.map(f=>`<div class="family-chip" data-family="${f}">${f}</div>`).join('')}
          </div>
          <div class="pack-cost" style="margin-top:10px">15 cr</div>
        </div>
      </div>
    </div>

    <div class="taverne-section">
      <div class="taverne-section-title">💸 Vendre des cartes</div>
      <div class="sell-grid" id="sell-grid">
        ${sellable.length===0?'<div style="color:#5a7a8a;font-size:13px">Aucune carte à vendre.</div>':
          sellable.map(({card,name,count})=>{
            const sv = sellValue(card);
            const ok = canSell(name);
            return `<div class="sell-card">
              ${count>1?`<div class="sell-card-count">×${count}</div>`:''}
              <div class="sell-card-emoji">${card.emoji||'🃏'}</div>
              <div class="sell-card-name">${name}</div>
              <div class="sell-card-type">${card.isSpell?'Sort':card.cardType} · ${card.rarity}</div>
              <div class="sell-card-price">+${sv} cr</div>
              <button class="sell-btn" data-sell="${name}" ${ok?'':'disabled'}>Vendre</button>
            </div>`;
          }).join('')}
      </div>
      <div style="font-size:11px;color:#4a6a7a;margin-top:10px">
        Minimum requis : 6 cartes basses (0-2) + 5 médianes (3-4) + 4 hautes (5+) + 2 sorts + 1 pouvoir.
      </div>
    </div>`;

  document.getElementById('taverne-back-btn').onclick = ()=>{
    el.style.display='none'; showModeScreen();
  };

  // Pack mélangé
  if(canMixed){
    document.getElementById('buy-mixed').onclick = ()=>{
      career.credits -= 10; saveCareer();
      const cards = openMixedPack();
      addPackToCollection(cards);
      el.style.display='none';
      showPackReveal(cards, ()=>{ el.style.display='flex'; renderTaverne(el); });
    };
  }

  // Pack thématique
  let selectedFamily = null;
  el.querySelectorAll('.family-chip').forEach(chip=>{
    chip.onclick = e=>{
      e.stopPropagation();
      el.querySelectorAll('.family-chip').forEach(c=>c.classList.remove('active'));
      chip.classList.add('active');
      selectedFamily = chip.dataset.family;
    };
  });
  if(canThematic){
    document.getElementById('buy-thematic-card').onclick = e=>{
      if(e.target.classList.contains('family-chip')) return;
      if(!selectedFamily){ return; }
      career.credits -= 15; saveCareer();
      const cards = openThematicPack(selectedFamily);
      addPackToCollection(cards);
      el.style.display='none';
      showPackReveal(cards, ()=>{ el.style.display='flex'; renderTaverne(el); });
    };
  }

  // Vente
  el.querySelectorAll('.sell-btn:not([disabled])').forEach(btn=>{
    btn.onclick = ()=>{
      const name = btn.dataset.sell;
      const card = CARD_POOL.find(c=>c.name===name);
      if(!card || !canSell(name)) return;
      const idx = career.ownedCards.indexOf(name);
      career.ownedCards.splice(idx,1);
      const band = cardBand(card);
      const di = career.activeDeck[band].indexOf(name);
      if(di!==-1) career.activeDeck[band].splice(di,1);
      career.credits += sellValue(card);
      saveCareer();
      updateCreditsBadge();
      renderTaverne(el);
    };
  });
}

// ══════════════════════════════════════════════════════════════
// DECK BUILDER
// ══════════════════════════════════════════════════════════════

function showDeckBuilder(){
  document.getElementById('mode-screen').style.display = 'none';
  const el = document.getElementById('deckbuilder-screen');
  renderDeckBuilder(el);
  el.style.display = 'flex';
}

function renderDeckBuilder(el){
  // État local : copies des listes actives (modifiées en live)
  const draft = {
    low:  [...career.activeDeck.low],
    mid:  [...career.activeDeck.mid],
    high: [...career.activeDeck.high],
  };
  let activePower = career.activePowerName;

  // Construire un inventaire {cardName → ownedCount}
  const owned = {};
  career.ownedCards.forEach(n=>{ owned[n]=(owned[n]||0)+1; });

  // Toutes les cartes non-pouvoir par bande, dupliquées selon la quantité possédée
  function bandList(minCost, maxCost){
    const result = [];
    Object.entries(owned).forEach(([n, cnt])=>{
      const c = CARD_POOL.find(x=>x.name===n);
      if(!c || c.isPower) return;
      if(c.cost<minCost || c.cost>maxCost) return;
      for(let i=0;i<cnt;i++) result.push({card:c, copy:i});
    });
    result.sort((a,b)=>a.card.cost-b.card.cost || a.card.name.localeCompare(b.card.name));
    return result;
  }

  const bands = {
    low:  { label:'Basses (0–2)', min:0, max:2, target:6, key:'low', items: bandList(0,2) },
    mid:  { label:'Médianes (3–4)', min:3, max:4, target:5, key:'mid', items: bandList(3,4) },
    high: { label:'Hautes (5+)', min:5, max:99, target:4, key:'high', items: bandList(5,99) },
  };

  function countSorts(list){
    return list.reduce((acc, key)=>{
      const arr = draft[key];
      return acc + arr.filter(n=>{ const c=CARD_POOL.find(x=>x.name===n); return c&&c.isSpell; }).length;
    },['low','mid','high'].filter(()=>true));
  }
  function totalSorts(){
    return ['low','mid','high'].reduce((acc,k)=>
      acc + draft[k].filter(n=>{ const c=CARD_POOL.find(x=>x.name===n); return c&&c.isSpell; }).length, 0);
  }
  function isValid(){
    return draft.low.length===6 && draft.mid.length===5 && draft.high.length===4 && totalSorts()>=2;
  }

  // Génération du HTML
  function tabBadge(key){
    const b = bands[key];
    const cnt = draft[key].length;
    const cls = cnt===b.target?'full':cnt>b.target?'over':'';
    return `<span class="db-tab-badge ${cls}">${cnt}/${b.target}</span>`;
  }

  el.innerHTML = `
    <div class="db-header">
      <div class="db-title">🗂️ Mon Deck</div>
      <div style="display:flex;gap:10px;align-items:center">
        <button class="btn-secondary" id="db-back-btn">← Retour</button>
        <button class="db-save-btn" id="db-save-btn" ${isValid()?'':'disabled'}>💾 Sauvegarder</button>
      </div>
    </div>

    <div class="db-powers">
      <div class="db-powers-title">⚡ Pouvoir héroïque actif</div>
      <div class="db-power-grid" id="db-power-grid">
        ${career.ownedPowerNames.map(pname=>{
          const p = CARD_POOL.find(c=>c.name===pname);
          if(!p) return '';
          return `<div class="db-power-card ${pname===activePower?'active':''}" data-power="${pname}">
            <div class="career-power-emoji">${p.emoji}</div>
            <div class="career-power-name">${p.name}</div>
            <div class="career-power-desc">${p.powerDesc}</div>
            <div class="career-power-cost">${p.cost}💎</div>
          </div>`;
        }).join('')}
      </div>
    </div>

    <div class="db-tabs" id="db-tabs">
      <button class="db-tab active" data-band="low">Basses ${tabBadge('low')}</button>
      <button class="db-tab" data-band="mid">Médianes ${tabBadge('mid')}</button>
      <button class="db-tab" data-band="high">Hautes ${tabBadge('high')}</button>
    </div>

    ${Object.entries(bands).map(([key,b],i)=>`
      <div class="db-band ${i===0?'active':''}" id="db-band-${key}">
        <div class="db-band-header">
          <span>${b.label} — <span id="db-count-${key}">${draft[key].length}</span>/${b.target} sélectionnées</span>
          <span style="color:#5a7a8a;font-size:11px">Sorts dans le deck : <span id="db-sorts-count">${totalSorts()}</span>/2 min</span>
        </div>
        <div class="db-card-grid" id="db-grid-${key}">
          ${b.items.map(({card,copy})=>{
            // Combien de copies de ce nom sont sélectionnées ?
            const selCount = draft[key].filter(n=>n===card.name).length;
            const isSelected = copy < selCount;
            return `<div class="db-card ${isSelected?'selected':''} ${card.isSpell?'sort-card':''}"
              data-name="${card.name}" data-band="${key}" data-copy="${copy}">
              <div class="db-card-cost">${card.cost}💎</div>
              <div class="db-card-emoji">${card.emoji||'🃏'}</div>
              <div class="db-card-name">${card.name}</div>
              <div class="db-card-meta">${card.isSpell?'Sort':card.cardType} · ${card.rarity}</div>
            </div>`;
          }).join('')}
        </div>
        <div class="db-hint">${b.items.length===0?'Aucune carte dans cette bande de coût. Achetez des packs à la Taverne !':''}</div>
      </div>`).join('')}
    <div id="db-validity-hint" style="font-size:12px;color:#5a7a8a;text-align:center">
      ${isValid()?'✓ Deck valide — prêt à jouer':'Complétez 6 basses + 5 médianes + 4 hautes avec min 2 sorts pour sauvegarder.'}
    </div>`;

  // Événements — sélection de pouvoir
  el.querySelectorAll('.db-power-card').forEach(card=>{
    card.onclick = ()=>{
      el.querySelectorAll('.db-power-card').forEach(c=>c.classList.remove('active'));
      card.classList.add('active');
      activePower = card.dataset.power;
    };
  });

  // Événements — onglets
  el.querySelectorAll('.db-tab').forEach(tab=>{
    tab.onclick = ()=>{
      el.querySelectorAll('.db-tab').forEach(t=>t.classList.remove('active'));
      el.querySelectorAll('.db-band').forEach(b=>b.classList.remove('active'));
      tab.classList.add('active');
      el.querySelector(`#db-band-${tab.dataset.band}`)?.classList.add('active');
    };
  });

  // Événements — toggle carte
  function refreshUI(){
    // Mettre à jour les badges d'onglets
    el.querySelectorAll('.db-tab').forEach(tab=>{
      const key = tab.dataset.band;
      const b = bands[key];
      const cnt = draft[key].length;
      const cls = cnt===b.target?'full':cnt>b.target?'over':'';
      tab.innerHTML = `${b.label.split(' ')[0]} <span class="db-tab-badge ${cls}">${cnt}/${b.target}</span>`;
    });
    // Compteurs
    ['low','mid','high'].forEach(key=>{
      const el2 = document.getElementById(`db-count-${key}`);
      if(el2) el2.textContent = draft[key].length;
    });
    document.querySelectorAll('#db-sorts-count').forEach(e=>e.textContent=totalSorts());
    // Bouton sauvegarder
    document.getElementById('db-save-btn').disabled = !isValid();
    document.getElementById('db-validity-hint').textContent =
      isValid()?'✓ Deck valide — prêt à jouer':'Complétez 6 basses + 5 médianes + 4 hautes avec min 2 sorts pour sauvegarder.';
  }

  el.querySelectorAll('.db-card').forEach(card=>{
    card.onclick = ()=>{
      const name = card.dataset.name;
      const band = card.dataset.band;
      const copy = parseInt(card.dataset.copy);
      const selCount = draft[band].filter(n=>n===name).length;
      const isSelected = copy < selCount;
      if(isSelected){
        // Désélectionner une copie
        const idx = draft[band].lastIndexOf(name);
        draft[band].splice(idx,1);
        card.classList.remove('selected');
      } else {
        // Sélectionner si pas encore au max de la bande
        const b = bands[band];
        if(draft[band].length >= b.target) return; // bande pleine
        draft[band].push(name);
        card.classList.add('selected');
      }
      refreshUI();
    };
  });

  // Sauvegarder
  document.getElementById('db-save-btn').onclick = ()=>{
    if(!isValid()) return;
    career.activeDeck = { low:[...draft.low], mid:[...draft.mid], high:[...draft.high] };
    career.activePowerName = activePower;
    saveCareer();
    // Feedback visuel
    const btn = document.getElementById('db-save-btn');
    btn.textContent = '✓ Sauvegardé !';
    btn.style.background = '#3a9a3a';
    setTimeout(()=>{ btn.textContent='💾 Sauvegarder'; btn.style.background=''; },1500);
  };

  document.getElementById('db-back-btn').onclick = ()=>{
    el.style.display='none'; showModeScreen();
  };
}

// Aperçu rapide du deck depuis le combat
function showDeckPreview(){
  const modal = document.getElementById('deck-preview-modal');
  const handNames  = new Set(player.hand.map(c=>c.name));
  const boardNames = new Set(player.board.map(c=>c.name));
  const allCards = careerDeckCards ? careerDeckCards() : draftDeck;

  modal.innerHTML = `<div class="deck-preview-box">
    <div class="deck-preview-title">
      <span>🗂️ Deck de ${career?.name||selectedHero.name}</span>
      <button class="btn-secondary" id="deck-preview-close" style="padding:4px 14px">✕</button>
    </div>
    <div style="font-size:11px;color:#5a7a8a;margin-bottom:10px">
      🟡 En jeu · 🟢 En main · ⬜ Dans le deck
    </div>
    <div class="deck-preview-grid">
      ${allCards.map(c=>`
        <div class="deck-preview-card ${boardNames.has(c.name)?'on-board':handNames.has(c.name)?'in-hand':''}">
          <div style="font-size:18px">${c.emoji||'🃏'}</div>
          <div style="font-size:10px;color:#cde">${c.name}</div>
          <div style="font-size:10px;color:#5a7a8a">${c.cost}💎</div>
        </div>`).join('')}
    </div>
  </div>`;
  modal.style.display = 'flex';
  document.getElementById('deck-preview-close').onclick = ()=>{ modal.style.display='none'; };
  modal.onclick = e=>{ if(e.target===modal) modal.style.display='none'; };
}

// ── Sélection de mode ──
let gameMode = 'campaign';

function showModeScreen(){
  document.getElementById('mode-screen').style.display = 'flex';
  document.getElementById('collection-screen').style.display = 'none';
  document.getElementById('hero-select-screen').style.display = 'none';
  document.getElementById('career-screen').style.display = 'none';
  updateCreditsBadge();

  // Afficher le nom du héros de carrière sous le titre
  const modeTitle = document.querySelector('.mode-title');
  if(modeTitle && career){
    modeTitle.textContent = `Bienvenue, ${career.name} !`;
  } else if(modeTitle){
    modeTitle.textContent = 'Choisissez votre mode';
  }

  document.getElementById('mode-campaign').onclick = ()=>{
    gameMode = 'campaign';
    document.getElementById('mode-screen').style.display = 'none';
    if(career){ applyCareeerHero(); startDraft(); }
    else showHeroSelect();
  };
  document.getElementById('mode-quick').onclick = ()=>{
    gameMode = 'quick';
    document.getElementById('mode-screen').style.display = 'none';
    if(career){ applyCareeerHero(); startDraft(); }
    else showHeroSelect();
  };
  document.getElementById('mode-collection').onclick = showCollection;
  // Taverne + Deck Builder : visibles seulement avec une carrière active
  const taverneBtn = document.getElementById('mode-taverne');
  if(taverneBtn){ taverneBtn.style.display = career ? 'block' : 'none'; taverneBtn.onclick = showTaverne; }
  const dbBtn = document.getElementById('mode-deckbuilder');
  if(dbBtn){ dbBtn.style.display = career ? 'block' : 'none'; dbBtn.onclick = showDeckBuilder; }
}

function applyCareeerHero(){
  selectedHero = careerHero();
  draftDeck = careerDeckCards();
  // Réinitialiser le deck joueur directement (pas de draft)
  const deck = draftDeck.map(c=>({...c, keywords:[...c.keywords]}));
  for(let i=deck.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [deck[i],deck[j]]=[deck[j],deck[i]];
  }
  player.hp=MAX_HP; player.mana=1; player.maxMana=1;
  player.hand=[]; player.board=[]; player.deck=deck; player.fatigue=0;
  player.heroPowerUsed=false;
  for(let i=0;i<4;i++) drawCard(player);
  // Mettre à jour l'avatar/nom du joueur
  document.getElementById('playerAvatar').textContent = selectedHero.avatar;
  document.getElementById('playerName').textContent   = selectedHero.name;
}

function showHeroSelect(){
  const el = document.getElementById('hero-select-screen');
  el.innerHTML = `
    <div class="hero-select-title">⚓ Choisissez votre Capitaine</div>
    <div class="hero-select-cards">
      ${HEROES.map(h=>`
        <div class="hero-select-card" data-hero="${h.id}">
          <div class="hero-select-avatar">${h.avatar}</div>
          <div class="hero-select-name">${h.name}</div>
          <div class="hero-select-title-sub">${h.title}</div>
          <div class="hero-select-family">Famille : <b>${h.family}</b></div>
          <div class="hero-select-desc">${h.desc}</div>
          <div class="hero-select-power">${h.heroPower.emoji} ${h.heroPower.name} — ${h.heroPower.desc} (${h.heroPower.cost}💎)</div>
          <button class="hero-select-btn">Choisir</button>
        </div>`).join('')}
    </div>`;
  el.style.display = 'flex';
  el.querySelectorAll('.hero-select-card').forEach(card=>{
    card.querySelector('.hero-select-btn').onclick = ()=>{
      selectedHero = HEROES.find(h=>h.id===card.dataset.hero);
      el.style.display = 'none';
      // Héros fixes : deck complet (toute la famille + tous les sorts), pas de draft
      draftDeck = [
        ...CARD_POOL.filter(c=>c.cardType===selectedHero.family && !c.isPower),
        ...CARD_POOL.filter(c=>c.isSpell && !c.isPower),
      ];
      startFixedHeroGame();
    };
  });
}

function showCollection(){
  const modeEl = document.getElementById('mode-screen');
  const colEl  = document.getElementById('collection-screen');
  modeEl.style.display = 'none';
  colEl.style.display  = 'flex';

  const filters = ['Tous','Pirate','Bête marine','Élémental','Sort'];
  let activeFilter = 'Tous';

  function renderCollection(){
    const pool = (activeFilter==='Tous' ? CARD_POOL
      : CARD_POOL.filter(c=> activeFilter==='Sort' ? c.isSpell : c.cardType===activeFilter))
      .slice().sort((a,b)=>{
        if(a.cost!==b.cost) return a.cost-b.cost;
        const r={'Commune':0,'Rare':1,'Épique':2,'Légendaire':3};
        if(a.rarity!==b.rarity) return (r[a.rarity]??0)-(r[b.rarity]??0);
        const f={'Pirate':0,'Bête marine':1,'Élémental':2,'Sort':3};
        return (f[a.cardType]??0)-(f[b.cardType]??0);
      });
    colEl.innerHTML = `
      <div class="col-header">
        <div class="col-title">📚 Collection</div>
        <div class="col-filters">${filters.map(f=>`<button class="col-filter${f===activeFilter?' active':''}" data-f="${f}">${f} ${f==='Tous'?'('+CARD_POOL.length+')':''}</button>`).join('')}</div>
        <button class="col-back" id="col-back-btn">← Retour</button>
      </div>
      <div class="col-grid"></div>`;
    const grid = colEl.querySelector('.col-grid');
    pool.forEach(card=>{
      const el = makeDraftCardEl(card);
      el.style.cursor = 'default';
      grid.appendChild(el);
    });
    colEl.querySelectorAll('.col-filter').forEach(btn=>{
      btn.onclick = ()=>{ activeFilter=btn.dataset.f; renderCollection(); };
    });
    document.getElementById('col-back-btn').onclick = showModeScreen;
  }
  renderCollection();
}

// ── Campagne ──
const CAMPAIGN_STAGES = [
  {
    name:'Le Corsaire Volant', avatar:'🏴‍☠️', title:'Étape 1',
    desc:'Un corsaire redoutable commandant une flotte de pirates.',
    heroPower:{name:'Pillage', desc:'+1 ATK à une unité alliée', cost:2, emoji:'⚔️', effect:'buffAlly'},
    deckType:'Pirate', hp:25,
  },
  {
    name:'La Sirène des Abysses', avatar:'🧜', title:'Étape 2',
    desc:'Une sirène mystique qui contrôle les créatures marines.',
    heroPower:{name:'Chant des mers', desc:'Récupère 2 PV', cost:2, emoji:'💚', effect:'heal2'},
    deckType:'Bête marine', hp:28,
  },
  {
    name:'Le Maître des Tempêtes', avatar:'🌩️', title:'Étape 3',
    desc:'Un élémentaliste qui déchaîne la foudre chaque tour.',
    heroPower:{name:'Foudre', desc:'1 dégât au héros ennemi', cost:1, emoji:'⚡', effect:'deal1'},
    deckType:'Élémental', hp:32,
  },
  {
    name:'Amiral Maelström', avatar:'⚓', title:'Boss Final',
    desc:"Le grand Amiral, maître incontesté des Royaumes de l'Océan.",
    heroPower:{name:'Recrutement', desc:'Invoque un Matelot 1/1', cost:2, emoji:'📣', effect:'summonMatelot'},
    deckType:null, hp:38,
  },
  {
    name:"L'Entité des Profondeurs", avatar:'👁️', title:'Boss Secret',
    desc:"Une force indicible tapie au fond des abysses. Aucun capitaine n'en est revenu.",
    heroPower:{name:'Œil abyssal', desc:'1 dégât à une unité aléatoire ennemie', cost:1, emoji:'👁️', effect:'deal1Random'},
    deckType:null, hp:45, startMana:5, secret:true,
  },
];
let campaignStage = 0;

function pickN(from, n){
  const src=[...from], out=[];
  while(out.length<n && src.length)
    out.push(src.splice(Math.floor(Math.random()*src.length),1)[0]);
  return out;
}

function buildEnemyDeck(stageConfig, stageIdx){
  const P  = CARD_POOL.filter(c=>c.cardType==='Pirate'    &&!c.isSpell);
  const B  = CARD_POOL.filter(c=>c.cardType==='Bête marine'&&!c.isSpell);
  const E  = CARD_POOL.filter(c=>c.cardType==='Élémental' &&!c.isSpell);
  const S  = CARD_POOL.filter(c=>c.isSpell);
  const lo = arr=>arr.filter(c=>c.cost<=3);
  const mi = arr=>arr.filter(c=>c.cost>=4&&c.cost<=6);
  const hi = arr=>arr.filter(c=>c.cost>=7);
  const rk = arr=>arr.filter(c=>c.rarity==='Épique'||c.rarity==='Légendaire');

  let deck;
  switch(stageIdx){
    case 0: // Corsaire — Pirates uniquement, courbe basse agressive
      deck = [
        ...pickN(lo(P), 6), ...pickN(mi(P), 5), ...pickN(P, 4),
      ]; break;
    case 1: // Sirène des Abysses — Bêtes marines uniquement
      deck = [
        ...pickN(lo(B), 5), ...pickN(mi(B), 6), ...pickN(hi(B).concat(rk(B)), 4),
      ]; break;
    case 2: // Maître des Tempêtes — Élémentaux + sorts dégâts
      deck = [
        ...pickN(lo(E), 3), ...pickN(mi(E), 4), ...pickN(hi(E).concat(rk(E)), 3),
        ...pickN(lo(S), 2), ...pickN(mi(S).concat(rk(S)), 3),
      ]; break;
    case 4: { // L'Entité des Profondeurs — toutes les légendaires + épiques meurtrières
      const leg  = CARD_POOL.filter(c=>c.rarity==='Légendaire');
      const epic = CARD_POOL.filter(c=>c.rarity==='Épique');
      const dmgS = S.filter(c=>['storm','maelstrom','cannonade','frozenWind'].includes(c.spellEffect));
      deck = [
        ...leg,                                   // toutes les légendaires (5 cartes)
        ...pickN(epic.filter(c=>!c.isSpell), 7),  // épiques créatures
        ...pickN(dmgS, 4),                        // sorts offensifs
        ...pickN(epic.filter(c=>c.isSpell), 4),   // sorts épiques
      ]; break;
    }
    default: // Amiral — meilleur deck mixte, épiques/légendaires
      const elite = CARD_POOL.filter(c=>c.rarity==='Épique'||c.rarity==='Légendaire');
      deck = [
        ...pickN(elite.filter(c=>!c.isSpell&&c.cost<=4), 4),
        ...pickN(elite.filter(c=>!c.isSpell&&c.cost>=5), 4),
        ...pickN(elite.filter(c=>c.isSpell), 3),
        ...pickN(CARD_POOL.filter(c=>c.rarity==='Rare'&&!c.isSpell), 2),
        ...pickN(CARD_POOL.filter(c=>c.rarity==='Rare'&&c.isSpell), 2),
      ]; break;
  }
  // Compléter à 20 cartes (deck plus long = parties plus longues)
  const TARGET = 20;
  while(deck.length<TARGET)
    deck.push(CARD_POOL[Math.floor(Math.random()*CARD_POOL.length)]);
  deck = deck.slice(0,TARGET);
  for(let i=deck.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [deck[i],deck[j]]=[deck[j],deck[i]];
  }
  return deck;
}

function showCampaignIntro(){
  const el = document.getElementById('campaign-screen');
  const save = loadCampaignSave();
  const secretUnlocked = localStorage.getItem('secretBossUnlocked')==='1';
  const normalStages = CAMPAIGN_STAGES.filter(s=>!s.secret);
  const secretBoss   = CAMPAIGN_STAGES.find(s=>s.secret);

  el.innerHTML = `
    <div class="camp-title">⚓ Les Océans en Guerre</div>
    <div class="camp-subtitle">4 combats vous attendent, Capitaine !</div>
    <div class="camp-stages">
      ${normalStages.map((s,i)=>`
        <div class="camp-stage">
          <div class="camp-avatar-big">${s.avatar}</div>
          <div class="camp-stage-info">
            <div class="camp-stage-num">${s.title.toUpperCase()}</div>
            <div class="camp-stage-name">${s.name}</div>
            <div class="camp-stage-desc">${s.desc}</div>
          </div>
        </div>`).join('')}
    </div>
    ${secretBoss ? `
    <div class="camp-secret-boss ${secretUnlocked?'unlocked':'locked'}">
      <div class="camp-avatar-big">${secretUnlocked ? secretBoss.avatar : '❓'}</div>
      <div class="camp-stage-info">
        <div class="camp-stage-num">BOSS SECRET</div>
        <div class="camp-stage-name">${secretUnlocked ? secretBoss.name : '???'}</div>
        <div class="camp-stage-desc">${secretUnlocked ? secretBoss.desc : 'Terminez la campagne pour le débloquer.'}</div>
      </div>
    </div>` : ''}
    <div class="camp-buttons">
      ${save ? `<button id="camp-resume-btn">▶️ Reprendre (Combat ${save.stage+1}/4)</button>` : ''}
      <button id="camp-start-btn">⚔️ ${save ? 'Nouvelle campagne' : 'Partir en campagne !'}</button>
      ${secretUnlocked ? `<button id="camp-secret-btn">👁️ Défier L'Entité</button>` : ''}
    </div>`;
  el.style.display = 'flex';

  if(save) document.getElementById('camp-resume-btn').onclick = ()=>{
    el.style.display = 'none';
    campaignStage = save.stage;
    draftDeck = save.deck.map(name=>CARD_POOL.find(c=>c.name===name)).filter(Boolean);
    player.hp = save.hp;
    player.deck = [...draftDeck];
    for(let i=player.deck.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[player.deck[i],player.deck[j]]=[player.deck[j],player.deck[i]];}
    player.hand=[]; player.mana=1; player.maxMana=1; player.heroPowerUsed=false; player.fatigue=0;
    startCampaignFight();
  };

  document.getElementById('camp-start-btn').onclick = ()=>{
    el.style.display = 'none';
    campaignStage = 0;
    localStorage.removeItem('campaignSave');
    startCampaignFight();
  };

  if(secretUnlocked) document.getElementById('camp-secret-btn').onclick = ()=>{
    el.style.display = 'none';
    campaignStage = CAMPAIGN_STAGES.findIndex(s=>s.secret);
    startCampaignFight();
  };
}

function startCampaignFight(){
  const stage = CAMPAIGN_STAGES[campaignStage];
  document.getElementById('enemyAvatar').textContent = stage.avatar;
  document.getElementById('enemyName').textContent = stage.name;
  const sMana = stage.startMana||1;
  enemy.hp=stage.hp||MAX_HP; enemy.mana=sMana; enemy.maxMana=sMana;
  enemy.hand=[]; enemy.board=[];
  enemy.heroPowerUsed=false; enemy.fatigue=0;
  enemy.deck = buildEnemyDeck(stage, campaignStage);
  for(let i=0;i<4;i++) drawCard(enemy);
  document.getElementById('game-layout').style.display='flex';
  document.getElementById('log').innerHTML='';
  const sdb = document.getElementById('sidebar-deck-btn');
  if(sdb){ sdb.style.display = career ? 'block' : 'none'; sdb.onclick = showDeckPreview; }
  const label = stage.secret ? 'Boss Secret' : `Combat ${campaignStage+1}/4`;
  log(`${stage.avatar} ${label} — ${stage.name}`,'log-event');
  log(stage.desc,'log-event');
  saveCampaign();
  render();
}

function handleCampaignVictory(){
  awardVictoryCredits();
  campaignStage++;
  const NORMAL_STAGES = CAMPAIGN_STAGES.filter(s=>!s.secret).length; // 4
  if(campaignStage === NORMAL_STAGES){
    // Campagne principale terminée → débloquer le boss secret
    localStorage.setItem('secretBossUnlocked','1');
    localStorage.removeItem('campaignSave');
    showCampaignComplete();
    return;
  }
  if(campaignStage >= CAMPAIGN_STAGES.length){
    // Boss secret vaincu
    localStorage.removeItem('campaignSave');
    showSecretVictory();
    return;
  }
  saveCampaign();
  showRewardScreen(CAMPAIGN_STAGES[campaignStage]);
}

function getRewardOffers(){
  const ownedLegendaries = new Set(draftDeck.filter(c=>c.rarity==='Légendaire').map(c=>c.name));
  const heroPool = CARD_POOL.filter(c=>c.cardType===selectedHero.family||c.isSpell);
  const pool = heroPool.filter(c=>!(c.rarity==='Légendaire' && ownedLegendaries.has(c.name)));
  const src = pool.length >= 3 ? pool : heroPool;
  const chosen = [];
  while(chosen.length < 3){
    const c = src[Math.floor(Math.random()*src.length)];
    if(!chosen.includes(c)) chosen.push(c);
  }
  return chosen;
}

function showRewardContinue(el, nextStage){
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

function startFixedHeroGame(){
  document.getElementById('draft-screen').style.display = 'none';
  document.getElementById('playerAvatar').textContent = selectedHero.avatar;
  document.getElementById('playerName').textContent   = selectedHero.name;
  const sdb = document.getElementById('sidebar-deck-btn');
  if(sdb) sdb.style.display = 'none';
  const deck = draftDeck.map(c=>({...c, keywords:[...c.keywords]}));
  for(let i=deck.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [deck[i],deck[j]]=[deck[j],deck[i]];
  }
  player.hp=MAX_HP; player.mana=1; player.maxMana=1;
  player.hand=[]; player.board=[]; player.deck=deck; player.fatigue=0;
  player.heroPowerUsed=false;
  for(let i=0;i<4;i++) drawCard(player);
  if(gameMode==='quick') startQuickFight();
  else showCampaignIntro();
}

function showRewardScreen(nextStage){
  document.getElementById('game-layout').style.display='none';
  const el = document.getElementById('reward-screen');
  el.style.display = 'flex';

  if(career){
    // Mode carrière : afficher les crédits gagnés, pas de choix de carte
    const gain = player.hp>=25?3:player.hp>=10?2:1;
    const quality = player.hp>=25?'Victoire Éclatante ⭐⭐⭐':player.hp>=10?'Victoire Normale ⭐⭐':'Victoire Piètre ⭐';
    el.innerHTML = `
      <div class="reward-title">⚔️ Victoire !</div>
      <div class="reward-career-info">
        <div class="reward-quality">${quality}</div>
        <div class="reward-credits-earned">+${gain} crédit${gain>1?'s':''} gagnés</div>
        <div class="reward-credits-total">💰 Total : ${career.credits} cr</div>
        <div class="reward-hp-info">PV restants : ${player.hp}/${MAX_HP}</div>
      </div>`;
    showRewardContinue(el, nextStage);
  } else {
    // Mode classique : choix d'une carte récompense
    const offers = getRewardOffers();
    el.innerHTML = `
      <div class="reward-title">⚔️ Victoire !</div>
      <div class="reward-pick-title">🎁 Choisissez une carte à ajouter à votre deck :</div>
      <div class="reward-offers"></div>`;
    const offersEl = el.querySelector('.reward-offers');
    offers.forEach(card=>{
      const cardEl = makeDraftCardEl(card);
      cardEl.onclick = ()=>{
        draftDeck.push({...card, keywords:[...card.keywords]});
        offersEl.querySelectorAll('.card').forEach(c=>c.style.pointerEvents='none');
        cardEl.classList.add('reward-chosen');
        setTimeout(()=>{
          el.querySelectorAll('.reward-pick-title, .reward-offers').forEach(e=>e.remove());
          showRewardContinue(el, nextStage);
        }, 800);
      };
      offersEl.appendChild(cardEl);
    });
  }
}

function saveCampaign(){
  if(gameMode!=='campaign') return;
  localStorage.setItem('campaignSave', JSON.stringify({
    stage: campaignStage,
    hp: player.hp,
    deck: draftDeck.map(c=>c.name),
  }));
}

function loadCampaignSave(){
  try{ return JSON.parse(localStorage.getItem('campaignSave')); } catch(e){ return null; }
}

function showCampaignComplete(){
  document.getElementById('game-layout').style.display='none';
  const el = document.getElementById('reward-screen');
  const careerInfo = career ? `<div class="reward-credits-total" style="margin-top:8px">💰 Crédits : ${career.credits} cr · ${career.victories} victoire${career.victories!==1?'s':''}</div>` : '';
  const taverneBtn = career ? `<button class="btn-primary" id="goto-taverne-btn" style="margin-top:8px">🏪 Aller à la Taverne</button>` : '';
  el.innerHTML = `
    <div class="reward-title">🏆 Campagne Terminée !</div>
    <div class="camp-complete-emoji">🌊⚓🌊</div>
    <div class="camp-subtitle">Votre flotte domine tous les océans !<br>Un défi secret vient de s'ouvrir…</div>
    ${careerInfo}
    <div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center;margin-top:12px">
      <button class="btn-secondary" onclick="location.reload()">🔄 Menu principal</button>
      ${taverneBtn}
    </div>`;
  el.style.display = 'flex';
  if(career) document.getElementById('goto-taverne-btn').onclick = ()=>{ el.style.display='none'; showTaverne(); };
}

function showSecretVictory(){
  document.getElementById('game-layout').style.display='none';
  const el = document.getElementById('reward-screen');
  const careerInfo = career ? `<div class="reward-credits-total" style="margin-top:8px">💰 Crédits : ${career.credits} cr · ${career.victories} victoire${career.victories!==1?'s':''}</div>` : '';
  const taverneBtn = career ? `<button class="btn-primary" id="goto-taverne-btn2" style="margin-top:8px">🏪 Aller à la Taverne</button>` : '';
  el.innerHTML = `
    <div class="reward-title">👁️ L'Abysses Vaincue !</div>
    <div class="camp-complete-emoji" style="font-size:64px">🌊👁️🌊</div>
    <div class="camp-subtitle">Vous avez repoussé L'Entité des Profondeurs.<br>Les océans vous appartiennent à jamais.</div>
    ${careerInfo}
    <div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center;margin-top:12px">
      <button class="btn-secondary" onclick="location.reload()">🔄 Menu principal</button>
      ${taverneBtn}
    </div>`;
  el.style.display = 'flex';
  if(career) document.getElementById('goto-taverne-btn2').onclick = ()=>{ el.style.display='none'; showTaverne(); };
}

function showDefeatScreen(){
  sndDefeat();
  localStorage.removeItem('campaignSave');
  document.getElementById('game-layout').style.display='none';
  const el = document.getElementById('reward-screen');
  const isSecret = CAMPAIGN_STAGES[campaignStage]?.secret;
  el.innerHTML = `
    <div class="reward-title" style="color:#e74c3c">💀 Défaite !</div>
    <div class="camp-complete-emoji">🌊</div>
    <div class="camp-subtitle">${isSecret ? "L'Entité des Profondeurs vous a englouti..." : `Votre flotte a sombré au combat ${campaignStage+1}...`}</div>
    <button id="reward-continue-btn" onclick="location.reload()">🔄 Recommencer la campagne</button>`;
  el.style.display = 'flex';
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
  const ownedLegendaries = new Set(draftDeck.filter(c=>c.rarity==='Légendaire').map(c=>c.name));
  // Pool filtré : famille du héros + sorts, dans la tranche de coût
  const heroPool = CARD_POOL.filter(c=>c.cardType===selectedHero.family||c.isSpell);
  let pool = heroPool.filter(c=>
    c.cost>=minCost && c.cost<=maxCost &&
    !(c.rarity==='Légendaire' && ownedLegendaries.has(c.name))
  );
  // Pool trop petit → élargir sur toute la famille+sorts
  if(pool.length < 6){
    const wider = heroPool.filter(c=>!(c.rarity==='Légendaire' && ownedLegendaries.has(c.name)));
    pool = wider.length >= 6 ? wider : heroPool;
  }
  const chosen = [];
  while(chosen.length < 3){
    const i = Math.floor(Math.random()*pool.length);
    if(!chosen.includes(pool[i])) chosen.push(pool[i]);
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
  d.dataset.cardName = card.name;
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

  // Compteur de synergies
  const synEl = document.getElementById('draft-synergies');
  if(synEl && draftDeck.length>0){
    const counts = {Pirate:0,'Bête marine':0,Élémental:0};
    draftDeck.forEach(c=>{ if(counts[c.cardType]!==undefined) counts[c.cardType]++; });
    const entries = [
      {type:'Pirate',      emoji:'🏴‍☠️', color:'#f08080', bonusFn: n=>n>1?`+${Math.min(n-1,3)} ATK`:null},
      {type:'Bête marine', emoji:'🐋',   color:'#80c0f0', bonusFn: n=>n>1?`+${Math.min(n-1,3)} PV`:null},
      {type:'Élémental',   emoji:'⚡',   color:'#f0c060', bonusFn: n=>n>1?`+${Math.min(n-1,2)}/+${Math.min(n-1,2)}`:null},
    ].map(({type,emoji,color,bonusFn})=>{
      const n=counts[type]; if(!n) return '';
      const bonus=bonusFn(n);
      return `<div class="syn-chip" style="border-color:${color}">
        <span>${emoji} ${type}</span>
        <span class="syn-count" style="color:${color}">${n}</span>
        ${bonus?`<span class="syn-bonus">${bonus}</span>`:''}
      </div>`;
    }).filter(Boolean).join('');
    synEl.innerHTML = entries || '';
  } else if(synEl){ synEl.innerHTML=''; }

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
  // En mode carrière : deck déjà prêt, sauter le draft
  if(career && selectedHero.id==='career'){
    if(gameMode==='quick') startQuickFight();
    else showCampaignIntro();
    return;
  }
  document.getElementById('draft-screen').style.display='flex';
  showDraftPick();
}

function startGame(){
  document.getElementById('playerAvatar').textContent = selectedHero.avatar;
  document.getElementById('playerName').textContent   = selectedHero.name;
  // Bouton aperçu deck (carrière uniquement)
  const sdb = document.getElementById('sidebar-deck-btn');
  if(sdb){ sdb.style.display = career ? 'block' : 'none'; sdb.onclick = showDeckPreview; }

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
  enemy.hp=stage.hp||MAX_HP; enemy.mana=1; enemy.maxMana=1;
  enemy.hand=[]; enemy.board=[];
  enemy.heroPowerUsed=false; enemy.fatigue=0;
  enemy.deck = buildEnemyDeck(stage, 3);
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
  'Charge':          'Peut attaquer dès le tour où elle est posée.',
  'Provocation':     'Les ennemis doivent obligatoirement attaquer cette unité.',
  'Poison':          'Détruit toute unité qu\'elle touche, quelle que soit ses PV.',
  'Bouclier divin':  'Absorbe la première attaque reçue sans dégâts.',
  'Vol de vie':      'Soigne votre héros du montant des dégâts infligés.',
  'Double attaque':  'Peut attaquer deux fois par tour.',
  'Rebond':          'Retourne dans votre main quand elle est détruite.',
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
  let card = null;
  // 1. Chercher dans la main du joueur
  const hand = document.getElementById('hand');
  const idx  = hand ? [...hand.children].indexOf(cardEl) : -1;
  if(idx >= 0) card = player.hand[idx];
  // 2. Chercher par data-card-name (draft, collection, récompenses)
  if(!card && cardEl.dataset.cardName)
    card = CARD_POOL.find(c=>c.name===cardEl.dataset.cardName);
  if(!card){ hideTooltip(); return; }
  tipTimeout = setTimeout(()=>showTooltip(card, e.clientX, e.clientY), 300);
});
document.addEventListener('mouseout', e=>{
  if(e.target.closest('.card')){ clearTimeout(tipTimeout); hideTooltip(); }
});

showCareerScreen();
