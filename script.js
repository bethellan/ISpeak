// ISpeak Root GitHub Edition (token prompt)
const STORAGE_VERSION='2.0'; const STORAGE_KEY='ispeak_data_v'+STORAGE_VERSION;

let buttonData={
  food:[{text:"I'm hungry",image:"hungry.jpg"},{text:"I'm thirsty",image:"thirsty.jpg"}],
  feelings:[{text:"I'm happy",image:"happy.jpg"},{text:"I'm sad",image:"sad.jpg"}],
  selfcare:[{text:"I need the bathroom",image:"bathroom.jpg"}],
  health:[{text:"I don't feel well",image:"unwell.jpg"}],
  routine:[{text:"What's happening today?",image:"daily_schedule.jpg"}],
  social:[{text:"How are you today?",image:"how_are_you.jpg"}],
  activities:[{text:"I'd like to watch TV",image:"tv.jpg"}],
  entertainment:[{text:"Let's watch the cricket",image:"cricket.jpg"}],
  memories:[{text:"Remember our holiday to…",image:"holiday.jpg"}],
  environment:[{text:"It's too cold in here",image:"cold.jpg"}],
  MyPeople:[
    {id:"person_sue",text:"Sue",relationship:"My Wife",birthday:"",image:"Sue.jpg"},
    {id:"person_andrew",text:"Andrew",relationship:"My Son",birthday:"",image:"Andrew.jpg"},
    {id:"person_kenneth",text:"Kenneth",relationship:"My Father",birthday:"",image:"Kenneth.jpg"},
    {id:"person_malcolm",text:"Malcolm",relationship:"My Son",birthday:"",image:"Malcolm.jpg"},
    {id:"person_marilyn",text:"Marilyn",relationship:"My Daughter-in-law",birthday:"",image:"Marilyn.jpg"},
    {id:"person_tess",text:"Tess",relationship:"My Daughter-in-law",birthday:"",image:"Tess.jpg"},
    {id:"person_riam",text:"Riam",relationship:"My Son-in-law",birthday:"",image:"Riam.jpg"},
    {id:"person_joshua",text:"Joshua",relationship:"My Grandson",birthday:"",image:"Joshua.jpg"},
    {id:"person_isabella",text:"Isabella",relationship:"My Granddaughter",birthday:"",image:"Isabella.jpg"},
    {id:"person_jj",text:"JJ",relationship:"My Grandson",birthday:"",image:"JJ.jpg"},
    {id:"person_loke",text:"Loke",relationship:"My Grandson",birthday:"",image:"Loke.jpg"},
    {id:"person_leon",text:"Leon",relationship:"My Grandson",birthday:"",image:"Leon.jpg"},
    {id:"person_em",text:"Em",relationship:"My Friend",birthday:"",image:"Em.jpg"},
    {id:"person_bark",text:"Bark",relationship:"Family Pet",birthday:"",image:"Bark.jpg"},
    {id:"person_tyla",text:"Tyla",relationship:"Family Friend",birthday:"",image:"Tyla.jpg"},
    {id:"person_kayl",text:"Kayl",relationship:"Family Friend",birthday:"",image:"Kayl.jpg"}
  ]
};

function saveDataToStorage(){ try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(buttonData)); }catch(e){ console.error(e); } }
function loadDataFromStorage(){ try{ const d = localStorage.getItem(STORAGE_KEY); if(d) buttonData = JSON.parse(d); }catch(e){ console.error(e); } }
function validateStoredData(){ try{ const d = localStorage.getItem(STORAGE_KEY); if(!d||d==='undefined'||d==='{}') localStorage.removeItem(STORAGE_KEY); }catch(e){ localStorage.removeItem(STORAGE_KEY); } }

function speakText(text, el){
  if(!('speechSynthesis' in window)){ alert('Speech not supported'); return; }
  const s=window.speechSynthesis; s.cancel();
  if(el){ el.classList.add('speaking'); setTimeout(()=>el.classList.remove('speaking'),1500); }
  const u=new SpeechSynthesisUtterance(text); u.rate=0.9; s.speak(u);
  const bar=document.querySelector('#messageBar p'); if(bar) bar.textContent=text;
}

function populateGrid(cat){
  const g=document.getElementById('buttonGrid'); g.innerHTML='';
  const arr=buttonData[cat]; if(!arr) return;
  arr.forEach(b=>{
    const el=document.createElement('button'); el.className='grid-button';
    const img=`images/${cat}/${b.image||''}`;
    el.innerHTML=`<img src="${img}" alt=""><span>${b.text}</span>`;
    el.onclick=()=>speakText(b.text, el);
    g.appendChild(el);
  });
}

function initTabs(){
  document.querySelectorAll('.tab').forEach(t=>t.addEventListener('click',()=>{
    document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));
    t.classList.add('active'); populateGrid(t.dataset.category);
  }));
}

// Management
const PASSWORD='19Hector';
function showModal(id){ document.getElementById(id).style.display='flex'; }
function hideModal(id){ document.getElementById(id).style.display='none'; }
function openManagement(){ showModal('passwordModal'); }
function closeManagement(){ document.getElementById('managementPanel').style.display='none'; }
function checkPassword(){
  if(document.getElementById('passwordInput').value===PASSWORD){
    hideModal('passwordModal'); document.getElementById('managementPanel').style.display='block'; ensureToken();
  } else alert('Incorrect password');
}

// Token prompt (session only)
function ensureToken(){ const t=sessionStorage.getItem('ISPEAK_GH_TOKEN'); if(!t) showModal('tokenModal'); }
function saveTokenFromModal(){
  const t=document.getElementById('tokenInput').value.trim();
  if(!t) return;
  sessionStorage.setItem('ISPEAK_GH_TOKEN', t);
  hideModal('tokenModal');
  alert('GitHub token saved for this session.');
}

// Add/Remove
function refreshRemoveList(){
  const cat=document.getElementById('removeCategorySelect').value;
  const sel=document.getElementById('removePhraseSelect'); sel.innerHTML='';
  (buttonData[cat]||[]).forEach((it,idx)=>{
    const o=document.createElement('option'); o.value=idx; o.textContent=it.text; sel.appendChild(o);
  });
}
function addPhrase(){
  const cat=document.getElementById('addCategorySelect').value;
  const txt=document.getElementById('newPhraseText').value.trim();
  const img=document.getElementById('newPhraseImage').value.trim();
  if(!txt) return alert('Enter text');
  const item = (cat==='MyPeople') ? {id:'person_'+txt.toLowerCase(), text:txt, relationship:'', birthday:'', image:img|| (txt+'.jpg')} : {text:txt, image:img||''};
  buttonData[cat]=buttonData[cat]||[]; buttonData[cat].push(item);
  saveDataToStorage();
  const active=document.querySelector('.tab.active').dataset.category;
  if(active===cat) populateGrid(cat);
  alert('Added.');
  saveSharedData();
  refreshRemoveList();
}
function removePhrase(){
  const cat=document.getElementById('removeCategorySelect').value;
  const idx=parseInt(document.getElementById('removePhraseSelect').value,10);
  if(isNaN(idx)) return;
  buttonData[cat].splice(idx,1); saveDataToStorage();
  const active=document.querySelector('.tab.active').dataset.category;
  if(active===cat) populateGrid(cat);
  alert('Removed.');
  saveSharedData();
  refreshRemoveList();
}
function exportData(){
  const blob=new Blob([JSON.stringify(buttonData,null,2)],{type:'application/json'});
  const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='ispeak_backup.json'; a.click();
}

// GitHub sync
const GITHUB_USERNAME='bethellan', GITHUB_REPO='ISpeak';
const DATA_URL = `https://${GITHUB_USERNAME}.github.io/${GITHUB_REPO}/data/mynevoice_data.json`;

function deepMerge(target, source){
  if(Array.isArray(source)) return source;
  for(const k in source){
    if(source[k] && typeof source[k]==='object' && !Array.isArray(source[k])) target[k]=deepMerge(target[k]||{}, source[k]);
    else target[k]=source[k];
  }
  return target;
}

async function loadSharedData(){
  try{
    const r=await fetch(DATA_URL,{cache:'no-store'});
    if(!r.ok) throw new Error(r.status);
    const shared=await r.json();
    buttonData = deepMerge(buttonData, shared);
    saveDataToStorage();
    const active=document.querySelector('.tab.active'); const cat=active?active.dataset.category:'food';
    populateGrid(cat);
    console.log('Loaded shared data from GitHub.');
  }catch(e){
    console.warn('GitHub load failed, using local cache', e);
  }
}
async function saveSharedData(){
  try{
    const token=sessionStorage.getItem('ISPEAK_GH_TOKEN');
    if(!token){ console.log('No GitHub token; read-only.'); return; }
    const repo = `${GITHUB_USERNAME}/${GITHUB_REPO}`;
    const path = 'data/mynevoice_data.json';

    // get SHA
    const info=await fetch(`https://api.github.com/repos/${repo}/contents/${path}`);
    const infoJson=await info.json();
    const sha = infoJson && infoJson.sha ? infoJson.sha : undefined;

    const content = btoa(unescape(encodeURIComponent(JSON.stringify(buttonData,null,2))));
    const res = await fetch(`https://api.github.com/repos/${repo}/contents/${path}`, {
      method:'PUT',
      headers:{ 'Authorization':`token ${token}`,'Content-Type':'application/json' },
      body: JSON.stringify({ message:'Update via ISpeak app', content, sha })
    });
    if(!res.ok) console.error('GitHub save failed:', await res.text());
    else console.log('Saved data to GitHub');
  }catch(e){
    console.error('Error saving to GitHub', e);
  }
}
async function syncNow(){ await loadSharedData(); alert('Sync complete'); }

document.addEventListener('DOMContentLoaded', ()=>{
  validateStoredData(); loadDataFromStorage();
  initTabs(); populateGrid('food');

  document.getElementById('managementToggle').onclick=openManagement;
  document.getElementById('passwordSubmit').onclick=checkPassword;
  document.getElementById('passwordCancel').onclick=()=>hideModal('passwordModal');
  document.getElementById('tokenSave').onclick=saveTokenFromModal;
  document.getElementById('tokenCancel').onclick=()=>hideModal('tokenModal');

  document.getElementById('addPhrase').onclick=addPhrase;
  document.getElementById('removePhrase').onclick=removePhrase;
  document.getElementById('removeCategorySelect').onchange=refreshRemoveList;
  document.getElementById('exportData').onclick=exportData;
  document.getElementById('reloadApp').onclick=()=>location.reload();
  document.getElementById('closeManagement').onclick=closeManagement;
  document.getElementById('syncNow').onclick=syncNow;
  document.getElementById('setToken').onclick=ensureToken;

  refreshRemoveList();
  if('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js');
  setTimeout(loadSharedData, 400);
});
