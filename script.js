
const app=document.getElementById('app');
for(let i=0;i<45;i++){let h=document.createElement('div');h.className='heart';h.textContent=Math.random()>.5?'❤️':'💖';h.style.left=Math.random()*100+'vw';h.style.fontSize=(14+Math.random()*18)+'px';h.style.animationDuration=(7+Math.random()*8)+'s';document.getElementById('bg').appendChild(h);}
const qs=[
{t:"What's our perfect date?",type:"choice",o:["Movie & cuddles 🎬","Long drive 🚗","Cafe date ☕","Beach sunset 🌅"]},
{t:"Which memory should we relive forever?",type:"text"},
{t:"Pick a promise for us ❤️",type:"choice",o:["Always communicate","Never stop laughing","Travel together","Support every dream"]},
{t:"Describe me in three words.",type:"text"},
{t:"Where should we go on our dream trip?",type:"choice",o:["Switzerland 🏔️","Paris 🗼","Japan 🌸","Anywhere together ❤️"]},
{t:"Write a message for us to read 10 years from now.",type:"text"}
];
let step=-1,ans=[];
function start(){
app.innerHTML=`<h1>Anusree</h1>
<p class='quote'>"Among billions of people, my heart chose you—and it chooses you every single day. Thank you for being my happiness, my peace, and my forever. ❤️"</p>
<p>Ready for a little journey made just for you?</p>
<button onclick="next()">Begin Our Journey ❤️</button>`;
}
function next(){
step++;
if(step>=qs.length){gift();return;}
render();
}
function prev(){step--;render();}
function render(){
let q=qs[step],html=`<div class='progress'><div class='fill' style='width:${(step/qs.length)*100}%'></div></div><h2>Question ${step+1} of ${qs.length}</h2><h3>${q.t}</h3>`;
if(q.type==="choice"){
q.o.forEach((x,i)=>html+=`<div class="choice ${ans[step]==i?'selected':''}" onclick="pick(${i})">${x}</div>`);
}else html+=`<textarea id="txt">${ans[step]||''}</textarea>`;
html+=`<br>${step?'<button onclick="save();prev()">Previous</button>':''}<button onclick="save();next()">${step==qs.length-1?'Finish':'Next'}</button>`;
app.innerHTML=html;
}
function pick(i){ans[step]=i;render();}
function save(){let t=document.getElementById('txt');if(t)ans[step]=t.value;}
function gift(){
app.innerHTML=`<h2>One last surprise... 🎁</h2><p>Tap the gift.</p><div id="g" class="gift">
<div class="bowL"></div><div class="bowR"></div><div class="lid"></div><div class="box"></div><div class="rv"></div><div class="rh"></div>
<div class="letter"><h3>💌 Surprise!</h3><p><b>Your gift will be handed over to you by your boyfriend on <span style="color:#e91e63">August 1, 2026 at 7:00 PM ❤️</span></b></p></div></div>`;
const g=document.getElementById('g');
g.onclick=()=>{g.classList.add('open');setTimeout(showSummary,2300);for(let i=0;i<120;i++){let e=document.createElement('div');e.textContent=Math.random()>.5?'❤️':'🎉';e.style.position='fixed';e.style.left='50vw';e.style.top='60vh';e.style.transition='2s';document.body.appendChild(e);requestAnimationFrame(()=>{e.style.transform=`translate(${(Math.random()-.5)*600}px,${-Math.random()*500}px)`;e.style.opacity=0});setTimeout(()=>e.remove(),2100);}}
}

function showSummary(){
 let html="<h2>💖 Your Responses</h2><div style='text-align:left;max-width:700px;margin:20px auto'>";
 let share="My Responses%0A%0A";
 qs.forEach((q,i)=>{
   let a=ans[i];
   if(q.type==='choice' && a!==undefined) a=q.o[a];
   if(a===undefined||a==='') a='(No answer)';
   html+=`<p><b>${i+1}. ${q.t}</b><br>${a}</p>`;
   share+=`${i+1}. ${q.t}%0A${encodeURIComponent(String(a))}%0A%0A`;
 });
 html+=`</div><button onclick="window.open('https://wa.me/?text=${share}','_blank')">📤 Share on WhatsApp</button>
 <button onclick="downloadResponses()" style="margin-left:10px">📥 Download</button>`;
 app.innerHTML=html;
}
function downloadResponses(){
 let txt="My Responses\n\n";
 qs.forEach((q,i)=>{
  let a=ans[i];
  if(q.type==='choice' && a!==undefined) a=q.o[a];
  txt+=`${i+1}. ${q.t}\n${a}\n\n`;
 });
 const b=new Blob([txt],{type:'text/plain'});
 const u=URL.createObjectURL(b);
 const x=document.createElement('a');
 x.href=u;x.download='responses.txt';x.click();URL.revokeObjectURL(u);
}

start();
