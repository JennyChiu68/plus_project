function parseUsers(text){
  return text.split('\n').map(s=>s.trim()).filter(Boolean);
}

function parsePrizes(text){
  return text.split('\n').map(line=>{
    const [name,count] = line.split(',');
    return { name: (name||'').trim(), count: parseInt(count||'1') };
  }).filter(p=>p.name);
}

let pool = [];
let prizePool = [];

function startDraw(){

  const users = parseUsers(document.getElementById('users').value);
  const prizes = parsePrizes(document.getElementById('prizes').value);
  const manual = document.getElementById('manual').value.trim();

  pool = [...users];
  prizePool = [];

  prizes.forEach(p=>{
    for(let i=0;i<p.count;i++){
      prizePool.push(p.name);
    }
  });

  let winner;

  if(manual && pool.includes(manual)){
    winner = manual;
  }else{
    winner = pool[Math.floor(Math.random()*pool.length)];
  }

  const prize = prizePool[Math.floor(Math.random()*prizePool.length)];

  document.getElementById('result').innerHTML = 
    `🎉 中奖结果：<br><b>${winner}</b><br>获得：${prize}`;
}

function resetDraw(){
  document.getElementById('result').innerHTML = '等待开始抽奖';
}