const KEY = 'DRAW_V7_STATE';

function load(){
  return JSON.parse(localStorage.getItem(KEY) || '{}');
}

function save(state){
  localStorage.setItem(KEY, JSON.stringify(state));
  window.dispatchEvent(new Event('storage'));
}

function init(){
  const s = load();
  if(!s.users) s.users = [];
  if(!s.prizes) s.prizes = [];
  if(!s.history) s.history = [];
  if(!s.manual) s.manual = [];
  if(!s.blacklist) s.blacklist = [];
  save(s);
}

function parseLines(t){return (t||'').split('\n').map(s=>s.trim()).filter(Boolean)}

function parsePrizes(){
  const lines = document.getElementById('prizes')?.value.split('\n').filter(Boolean) || [];
  return lines.map((l,i)=>{
    const [name,count] = l.split(',');
    return {
      id: i,
      name: (name||'奖品').trim(),
      count: parseInt(count||'1',10),
      image: '',
      winners: []
    };
  });
}

function sync(){
  const s = load();
  s.title = document.getElementById('title')?.value;
  s.users = parseLines(document.getElementById('users')?.value);
  s.manual = parseLines(document.getElementById('manual')?.value);
  s.blacklist = parseLines(document.getElementById('blacklist')?.value);
  s.prizes = parsePrizes();
  save(s);
}

function uploadImage(prizeIndex, file){
  const reader = new FileReader();
  reader.onload = () => {
    const s = load();
    if(!s.prizes[prizeIndex]) return;
    s.prizes[prizeIndex].image = reader.result;
    save(s);
  };
  reader.readAsDataURL(file);
}

function start(){
  sync();
  const s = load();

  const pool = s.users.filter(u=>!s.blacklist.includes(u));
  if(pool.length===0) return;

  let i=0;
  const nameEl = document.getElementById('name');
  const statusEl = document.getElementById('status');

  const timer = setInterval(()=>{
    i=(i+1)%pool.length;
    nameEl.innerText = pool[i];
  },80);

  setTimeout(()=>{
    clearInterval(timer);

    const winner = s.manual.length
      ? s.manual[Math.floor(Math.random()*s.manual.length)]
      : pool[Math.floor(Math.random()*pool.length)];

    const prize = s.prizes[Math.floor(Math.random()*s.prizes.length)]?.name || '奖品';

    statusEl.innerText='中奖结果';
    nameEl.innerText=winner;
    document.getElementById('prize').innerText=prize;

    s.history.push({winner,prize,time:Date.now()});
    save(s);
  },3000);
}

function reset(){
  const s = load();
  s.status='准备就绪';
  save(s);
  document.getElementById('status').innerText='准备就绪';
  document.getElementById('name').innerText='等待开始抽奖';
  document.getElementById('prize').innerText='奖品锁定中';
}

window.start=start;
window.reset=reset;
window.sync=sync;
window.uploadImage=uploadImage;
init();