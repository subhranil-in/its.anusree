const app=document.getElementById("app");
for(let i=0;i<45;i++){let h=document.createElement("div");h.className="heart";h.textContent=Math.random()>.5?"❤️":"💖";h.style.left=Math.random()*100+"vw";h.style.fontSize=(14+Math.random()*18)+"px";h.style.animationDuration=(7+Math.random()*8)+"s";document.getElementById("bg").appendChild(h);}
const qs=[{t:"What's our perfect date?",type:"choice",o:["Movie & cuddles 🎬","Long drive 🚗","Cafe date ☕","Beach sunset 🌅"]},{t:"Which memory should we relive forever?",type:"text"}];
let step=-1,ans=[];
function start(){app.innerHTML=`<h1>Anusree</h1><p class='quote'>Ready for a little journey made just for you?</p><button onclick="next()">Begin ❤️</button>`;}
function next(){step++;if(step>=qs.length){gift();return;}render();}
function render(){let q=qs[step],html=`<h3>${q.t}</h3>`;if(q.type==="choice"){q.o.forEach((x,i)=>html+=`<div class="choice ${ans[step]==i?'selected':''}" onclick="pick(${i})">${x}</div>`);}else html+=`<textarea id="txt">${ans[step]||''}</textarea>`;html+=`<br><button onclick="save();next()">${step==qs.length-1?'Finish':'Next'}</button>`;app.innerHTML=html;}
function pick(i){ans[step]=i;render();}
function save(){let t=document.getElementById("txt");if(t)ans[step]=t.value;}
function gift(){app.innerHTML=`<h2>One last surprise... 🎁</h2><p>Tap the gift.</p><div id="g" class="gift"><div class="bowL"></div><div class="bowR"></div><div class="lid"></div><div class="box"></div><div class="rv"></div><div class="rh"></div><div class="letter"><h3>💌 Surprise!</h3><p>Your gift awaits ❤️</p></div></div><button id="shareBtn">📤 Share My Response</button>`;
const g=document.getElementById("g");
g.onclick=()=>{g.classList.add("open");for(let i=0;i<120;i++){let e=document.createElement("div");e.textContent=Math.random()>.5?"❤️":"🎉";e.style.position="fixed";e.style.left="50vw";e.style.top="60vh";e.style.transition="2s";document.body.appendChild(e);requestAnimationFrame(()=>{e.style.transform=`translate(${(Math.random()-.5)*600}px,-${Math.random()*500}px)`;e.style.opacity=0});setTimeout(()=>e.remove(),2000);}};
document.getElementById("shareBtn").onclick=()=>{let txt="💖 My Responses 💖\n\n";qs.forEach((q,i)=>{let a=ans[i];if(q.type==="choice"&&a!==undefined)a=q.o[a];if(!a)a="(No answer)";txt+=`${i+1}. ${q.t}\n${a}\n\n`;});window.open("https://wa.me/?text="+encodeURIComponent(txt),"_blank");};}
start();