
const cloneCard=()=>JSON.parse(JSON.stringify(CARD_POOL[Math.floor(Math.random()*CARD_POOL.length)]));
const player={hp:30,mana:1,maxMana:1,hand:[],board:[]};
const enemy={hp:30,mana:1,maxMana:1,hand:[],board:[]};

function draw(t){t.hand.push(cloneCard());}
function log(m){logEl.innerHTML+=m+'<br>';logEl.scrollTop=logEl.scrollHeight;}
function rarityClass(r){return r==='Légendaire'?'legendary':r==='Épique'?'epic':r==='Rare'?'rare':'';}

function cleanup(){
 player.board=player.board.filter(c=>c.hp>0);
 enemy.board=enemy.board.filter(c=>c.hp>0);
}

function combat(){
 const pairs=Math.min(player.board.length,enemy.board.length);
 for(let i=0;i<pairs;i++){
   let a=player.board[i], d=enemy.board[i];
   a.hp-=d.atk;
   d.hp-=a.atk;
 }
 cleanup();

 player.board.forEach(c=>enemy.hp-=c.atk);
 enemy.board.forEach(c=>player.hp-=c.atk);
}

function checkEnd(){
 if(enemy.hp<=0){alert('Victoire');location.reload();}
 if(player.hp<=0){alert('Défaite');location.reload();}
}

function render(){
 playerHp.textContent=player.hp;
 enemyHp.textContent=enemy.hp;
 mana.textContent=player.mana;
 maxMana.textContent=player.maxMana;

 hand.innerHTML='';
 player.hand.forEach((c,i)=>{
  const d=document.createElement('div');
  d.className='card';
  d.innerHTML=`<div class="art">${c.emoji}</div>
  <div class="${rarityClass(c.rarity)}">${c.rarity}</div>
  <h3>${c.name}</h3>
  <div class="cost">💎 ${c.cost}</div>
  <div>⚔️ ${c.atk} | ❤️ ${c.hp}</div>`;
  d.onclick=()=>playCard(i);
  hand.appendChild(d);
 });

 playerBoard.innerHTML='';
 player.board.forEach(c=>{
  const d=document.createElement('div');
  d.className='unit';
  d.innerHTML=`${c.emoji}<br>${c.name}<br>⚔️${c.atk}<br>❤️${c.hp}`;
  playerBoard.appendChild(d);
 });

 enemyBoard.innerHTML='';
 enemy.board.forEach(c=>{
  const d=document.createElement('div');
  d.className='unit';
  d.innerHTML=`${c.emoji}<br>${c.name}<br>⚔️${c.atk}<br>❤️${c.hp}`;
  enemyBoard.appendChild(d);
 });

 checkEnd();
}

function playCard(i){
 const c=player.hand[i];
 if(c.cost>player.mana)return;
 player.mana-=c.cost;
 player.board.push(c);
 player.hand.splice(i,1);
 render();
}

function endTurn(){
 combat();

 enemy.maxMana=Math.min(10,enemy.maxMana+1);
 enemy.mana=enemy.maxMana;
 draw(enemy);

 const idx=enemy.hand.findIndex(c=>c.cost<=enemy.mana);
 if(idx>=0){
  enemy.mana-=enemy.hand[idx].cost;
  enemy.board.push(enemy.hand[idx]);
  enemy.hand.splice(idx,1);
 }

 player.maxMana=Math.min(10,player.maxMana+1);
 player.mana=player.maxMana;
 draw(player);
 render();
}

for(let i=0;i<5;i++){draw(player);draw(enemy);}
document.getElementById('endTurn').onclick=endTurn;
const logEl=document.getElementById('log');
render();
