function parseUsers(text){
  return text.split('\n').map(s=>s.trim()).filter(Boolean);
}

function parseLines(text){
  return text.split('\n').map(s=>s.trim()).filter(Boolean);
}

function parsePrizes(text){
  return text.split('\n').map(line=>{
    const [name,count]=line.split(',');
    return {name:(name||'').trim(),count:parseInt(count||'1')};
  }).filter(p=>p.name);
}

let pool=[];
let prizePool=[];
let history=JSON.parse(localStorage.getItem('draw_history')||'[]');

let timer=null;
let gridTimer=null;
let index=0;
let speed=60;

function getManual(){
  return parseLines(document.getElementById('manualList')?.value||'');
}

function getBlacklist(){
  return parseLines(document.getElementById('blacklist')?.value||'');
}

function saveHistory(){
  localStorage.setItem('draw_history',JSON.stringify(history));
}

function buildGrid(list){
  let stage=document.querySelector('.stage');
  if(!stage){
    stage=document.createElement('div');
    stage.className='stage';

    const lights=document.createElement('div');
    lights.className='lights';

    const grid=document.createElement('div');
    grid.className='grid';

    stage.appendChild(lights);
    stage.appendChild(grid);
    document.body.appendChild(stage);
  }

  const grid=document.querySelector('.grid');
  grid.innerHTML='';

  list.slice(0,36).forEach(n=>{
    const d=document.createElement('div');
    d.className='cell';
    d.innerText=n;
    grid.appendChild(d);
  });
}

function flashGrid(){
  const cells=document.querySelectorAll('.cell');
  if(!cells.length) return;

  cells.forEach(c=>c.classList.remove('active'));

  const i=Math.floor(Math.random()*cells.length);
  if(cells[i]) cells[i].classList.add('active');
}

function startStageAnimation(list){
  clearInterval(gridTimer);

  let steps=0;

  gridTimer=setInterval(()=>{
    flashGrid();
    steps++;

    if(steps>25 && steps<45){
      speed=120;
    }

    if(steps>=45){
      clearInterval(gridTimer);
    }
  },80);
}

function rollingText(list,cb){
  let i=0;
  const el=document.getElementById('result');

  timer=setInterval(()=>{
    i=(i+1)%list.length;
    el.innerHTML='<div style="font-size:34px;letter-spacing:3px;color:#fff;text-shadow:0 0 20px #2f6bff">'+list[i]+'</div>';
  },speed);

  setTimeout(()=>{
    clearInterval(timer);
    cb();
  },2500);
}

function pickWinner(pool,manual){
  if(manual.length>0){
    return manual[Math.floor(Math.random()*manual.length)];
  }
  return pool[Math.floor(Math.random()*pool.length)];
}

function startDraw(){
  const users=parseUsers(document.getElementById('users').value);
  const prizes=parsePrizes(document.getElementById('prizes').value);

  const blacklist=getBlacklist();
  const manual=getManual();

  const filtered=users.filter(u=>!blacklist.includes(u));

  pool=[...filtered];

  prizePool=[];
  prizes.forEach(p=>{
    for(let i=0;i<p.count;i++) prizePool.push(p.name);
  });

  buildGrid(pool);
  startStageAnimation(pool);

  const prize=prizePool[Math.floor(Math.random()*prizePool.length)];

  rollingText(pool,()=>{
    const winner=pickWinner(pool,manual);

    history.push({winner,prize,time:new Date().toISOString()});
    saveHistory();

    document.getElementById('result').innerHTML=
      '🎉 <span style="color:#2f6bff">'+winner+'</span><br/>获得：'+prize;

    // final flash
    let flash=0;
    const f=setInterval(()=>{
      document.body.style.background=flash%2?'#070A12':'#0b1a3a';
      flash++;
      if(flash>6){
        clearInterval(f);
        document.body.style.background='#070A12';
      }
    },120);
  });
}

function resetDraw(){
  document.getElementById('result').innerHTML='等待开始抽奖';
}

function toggleFullscreen(){
  document.documentElement.requestFullscreen();
}

function exportCSV(){
  let csv='winner,prize,time\n';
  history.forEach(h=>{
    csv+=`${h.winner},${h.prize},${h.time}\n`;
  });
  const blob=new Blob([csv],{type:'text/csv'});
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob);
  a.download='draw_history.csv';
  a.click();
}

function clearHistory(){
  history=[];
  localStorage.removeItem('draw_history');
}

window.addEventListener('keydown',e=>{
  if(e.ctrlKey && e.shiftKey && e.key==='A'){
    const el=document.getElementById('admin');
    if(el) el.style.display=el.style.display==='block'?'none':'block';
  }
});