function parseUsers(text){
  return text.split('\n').map(s=>s.trim()).filter(Boolean);
}

function parseLines(text){
  return text.split('\n').map(s=>s.trim()).filter(Boolean);
}

function parsePrizes(text){
  return text.split('\n').map(line=>{
    const [name,count] = line.split(',');
    return { name:(name||'').trim(), count:parseInt(count||'1') };
  }).filter(p=>p.name);
}

let pool = [];
let prizePool = [];
let history = JSON.parse(localStorage.getItem('draw_history')||'[]');

let rollingTimer = null;
let speed = 30;
let currentDisplay = '';

function getBlacklist(){
  const text = document.getElementById('blacklist')?.value || '';
  return parseLines(text);
}

function getManualList(){
  const text = document.getElementById('manualList')?.value || '';
  return parseLines(text);
}

function saveHistory(){
  localStorage.setItem('draw_history',JSON.stringify(history));
}

function renderResult(text){
  document.getElementById('result').innerHTML = text;
}

function startRolling(list){
  let i = 0;
  const el = document.getElementById('result');

  function tick(){
    i = (i+1)%list.length;
    currentDisplay = list[i];
    el.innerHTML = '<div style="font-size:28px;letter-spacing:2px">' + currentDisplay + '</div>';
  }

  function loop(){
    clearInterval(rollingTimer);
    rollingTimer = setInterval(tick, speed);
  }

  loop();

  // slow down
  let steps = 0;
  const slow = setInterval(()=>{
    steps++;
    speed += 10;
    loop();

    if(steps>8){
      clearInterval(slow);
      clearInterval(rollingTimer);
    }
  },300);
}

function pickWinner(pool, manualList){
  if(manualList.length>0){
    return manualList[Math.floor(Math.random()*manualList.length)];
  }
  return pool[Math.floor(Math.random()*pool.length)];
}

function startDraw(){

  const users = parseUsers(document.getElementById('users').value);
  const prizes = parsePrizes(document.getElementById('prizes').value);

  const blacklist = getBlacklist();
  const manualList = getManualList();

  const filtered = users.filter(u=>!blacklist.includes(u));

  pool = [...filtered];

  prizePool = [];
  prizes.forEach(p=>{
    for(let i=0;i<p.count;i++) prizePool.push(p.name);
  });

  const prize = prizePool[Math.floor(Math.random()*prizePool.length)];

  startRolling(pool);

  setTimeout(()=>{
    const winner = pickWinner(pool,manualList);

    history.push({winner,prize,time:new Date().toISOString()});
    saveHistory();

    renderResult('🎉 中奖结果：<br><b>'+winner+'</b><br>奖品：'+prize);
  },3000);
}

function resetDraw(){
  renderResult('等待开始抽奖');
}

function toggleFullscreen(){
  const el = document.documentElement;
  if(el.requestFullscreen){
    el.requestFullscreen();
  }
}

function exportCSV(){
  let csv = 'winner,prize,time\n';
  history.forEach(h=>{
    csv += `${h.winner},${h.prize},${h.time}\n`;
  });

  const blob = new Blob([csv],{type:'text/csv'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'draw_history.csv';
  a.click();
}

function clearHistory(){
  history = [];
  saveHistory();
}

// admin panel toggle
window.addEventListener('keydown',(e)=>{
  if(e.ctrlKey && e.shiftKey && e.key==='A'){
    const el = document.getElementById('admin');
    if(el){
      el.style.display = el.style.display==='none'?'block':'none';
    }
  }
});