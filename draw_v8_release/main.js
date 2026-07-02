const KEY='V8_EVENT_STATE';

function load(){
  return JSON.parse(localStorage.getItem(KEY)||'{}');
}

function save(s){
  localStorage.setItem(KEY,JSON.stringify(s));
  window.dispatchEvent(new Event('storage'));
}

function parseLines(t){return (t||'').split('\n').map(s=>s.trim()).filter(Boolean)}

function parsePrizes(lines){
  return lines.map((l,i)=>{
    const p=l.split(',');
    return {
      id:i,
      name:(p[0]||'奖品').trim(),
      count:parseInt(p[1]||'1',10),
      image:'',
      winners:[]
    };
  });
}

function syncFromAdmin(){
  const s=load();
  s.title=document.getElementById('title')?.value;
  s.users=parseLines(document.getElementById('users')?.value);
  s.manual=parseLines(document.getElementById('manual')?.value);
  s.blacklist=parseLines(document.getElementById('blacklist')?.value);

  const prizeLines=document.getElementById('prizes')?.value.split('\n').filter(Boolean)||[];
  s.prizes=parsePrizes(prizeLines);

  save(s);
}

function renderLive(s){
  const grid=document.getElementById('prizeGrid');
  if(!grid) return;

  document.getElementById('title').innerText=s.title||'V8 抽奖';

  grid.innerHTML=(s.prizes||[]).map(p=>`
    <div class='prize-card'>
      ${p.image?`<img src='${p.image}'/>`:''}
      <div>${p.name}</div>
      <div>数量:${p.count}</div>
    </div>
  `).join('');

  document.getElementById('name').innerText=s.current||'等待开始抽奖';
  document.getElementById('status').innerText=s.status||'准备就绪';
  document.getElementById('prize').innerText=s.currentPrize||'奖品待定';
}

let timer;

function start(){
  syncFromAdmin();
  const s=load();

  const pool=s.users.filter(u=>!s.blacklist.includes(u));
  if(pool.length===0)return;

  let i=0;
  s.status='抽奖中';

  timer=setInterval(()=>{
    i=(i+1)%pool.length;
    s.current=pool[i];
    save(s);
    renderLive(s);
  },80);

  setTimeout(()=>{
    clearInterval(timer);

    const winner=s.manual.length?s.manual[Math.floor(Math.random()*s.manual.length)]:pool[Math.floor(Math.random()*pool.length)];

    const prize=(s.prizes[0]&&s.prizes[0].name)||'奖品';

    s.current=winner;
    s.currentPrize=prize;
    s.status='开奖完成';

    s.history=(s.history||[]).concat([{winner,prize,time:Date.now()}]);

    save(s);
    renderLive(s);
  },3000);
}

function reset(){
  const s=load();
  s.status='准备就绪';
  s.current='等待开始抽奖';
  s.currentPrize='奖品待定';
  save(s);
  renderLive(s);
}

window.start=start;
window.reset=reset;

window.addEventListener('storage',()=>renderLive(load()));

window.onload=()=>renderLive(load());