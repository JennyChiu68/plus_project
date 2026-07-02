let state = {
  users: [],
  prizes: [],
  manual: [],
  blacklist: [],
  history: [],
  running: false
};

function parseLines(t){return (t||'').split('\n').map(s=>s.trim()).filter(Boolean)}

function syncFromAdmin(){
  const $ = id => document.getElementById(id);
  state.users = parseLines($('users')?.value);
  state.prizes = parseLines($('prizes')?.value);
  state.manual = parseLines($('manual')?.value);
  state.blacklist = parseLines($('blacklist')?.value);
}

function start(){
  syncFromAdmin();

  const pool = state.users.filter(u => !state.blacklist.includes(u));
  if(pool.length===0) return;

  let i=0;
  state.running=true;

  const status = document.getElementById('status');
  const name = document.getElementById('name');

  let timer = setInterval(()=>{
    i = (i+1)%pool.length;
    name.innerText = pool[i];
  },80);

  setTimeout(()=>{
    clearInterval(timer);

    let winner = state.manual.length
      ? state.manual[Math.floor(Math.random()*state.manual.length)]
      : pool[Math.floor(Math.random()*pool.length)];

    let prize = state.prizes[Math.floor(Math.random()*state.prizes.length)] || '奖品';

    document.getElementById('status').innerText = '中奖结果';
    document.getElementById('name').innerText = winner;
    document.getElementById('prize').innerText = prize;

    state.history.push({winner, prize, time:new Date().toISOString()});

    state.running=false;

  },3000);
}

function reset(){
  document.getElementById('status').innerText='准备就绪';
  document.getElementById('name').innerText='等待开始抽奖';
  document.getElementById('prize').innerText='奖品锁定中';
}

function openLive(){
  window.open('live.html','_blank');
}

window.start = start;
window.reset = reset;
window.openLive = openLive;
