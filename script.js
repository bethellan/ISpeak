// ISpeak Root GitHub Edition (token prompt) - Optimized for local-first
const STORAGE_VERSION='2.0'; 
const STORAGE_KEY='ispeak_data_v'+STORAGE_VERSION;

let buttonData={
  food:[
    {text:"I'm hungry",image:"hungry.jpg"},
    {text:"I'm thirsty",image:"thirsty.jpg"},
    {text:"I'd like a snack",image:"snack.jpg"},
    {text:"Can I have a drink?",image:"drink.jpg"},
    {text:"I'd like a cup of tea",image:"tea.jpg"},
    {text:"I'd like a coffee",image:"coffee.jpg"},
    {text:"It's time for breakfast",image:"breakfast.jpg"},
    {text:"It's time for lunch",image:"lunch.jpg"},
    {text:"It's time for dinner",image:"dinner.jpg"},
    {text:"That was delicious",image:"delicious.jpg"}
  ],
  feelings:[
    {text:"I'm happy",image:"happy.jpg"},
    {text:"I'm sad",image:"sad.jpg"},
    {text:"I'm excited",image:"excited.jpg"},
    {text:"I'm tired",image:"tired.jpg"},
    {text:"I'm frustrated",image:"frustrated.jpg"},
    {text:"I'm anxious",image:"anxious.jpg"},
    {text:"I'm comfortable",image:"comfortable.jpg"},
    {text:"I'm in pain",image:"pain.jpg"},
    {text:"I need a hug",image:"hug.jpg"}
  ],
  selfcare:[
    {text:"I need the bathroom",image:"bathroom.jpg"},
    {text:"I need to shower",image:"shower.jpg"},
    {text:"I need to brush my teeth",image:"teeth.jpg"},
    {text:"I need to shave",image:"shave.jpg"},
    {text:"I need to get dressed",image:"dressed.jpg"},
    {text:"I'm ready for bed",image:"bed.jpg"}
  ],
  health:[
    {text:"I don't feel well",image:"unwell.jpg"},
    {text:"I have a headache",image:"headache.jpg"},
    {text:"I feel sick",image:"sick.jpg"},
    {text:"I need my medication",image:"medication.jpg"},
    {text:"Can you call the doctor?",image:"doctor.jpg"},
    {text:"I need help",image:"help.jpg"}
  ],
  routine:[
    {text:"What's happening today?",image:"daily_schedule.jpg"},
    {text:"What's for breakfast?",image:"breakfast.jpg"},
    {text:"What's for lunch?",image:"lunch.jpg"},
    {text:"What's for dinner?",image:"dinner.jpg"},
    {text:"What time is it?",image:"time.jpg"},
    {text:"What day is it today?",image:"calendar.jpg"},
    {text:"What's the plan for tomorrow?",image:"tomorrow.jpg"}
  ],
  social:[
    {text:"How are you today?",image:"how_are_you.jpg"},
    {text:"Good morning",image:"good_morning.jpg"},
    {text:"Good afternoon",image:"good_afternoon.jpg"},
    {text:"Good night",image:"good_night.jpg"},
    {text:"Please",image:"please.jpg"},
    {text:"Thank you",image:"thank_you.jpg"},
    {text:"You're welcome",image:"welcome.jpg"},
    {text:"I love you",image:"love.jpg"},
    {text:"Can we talk?",image:"talk.jpg"}
  ],
  activities:[
    {text:"I'd like to watch TV",image:"tv.jpg"},
    {text:"Let's go for a walk",image:"walk.jpg"},
    {text:"I'd like to read",image:"read.jpg"},
    {text:"Can we listen to music?",image:"music.jpg"},
    {text:"I'd like to go outside",image:"outside.jpg"},
    {text:"Let's play a game",image:"game.jpg"},
    {text:"I'm bored",image:"bored.jpg"}
  ],
  entertainment:[
    {text:"Let's watch the cricket",image:"cricket.jpg"},
    {text:"Let's watch a movie",image:"movie.jpg"},
    {text:"Put the news on",image:"news.jpg"},
    {text:"I'd like to watch sport",image:"sport.jpg"},
    {text:"Change the channel",image:"channel.jpg"},
    {text:"Turn it up",image:"volume_up.jpg"},
    {text:"Turn it down",image:"volume_down.jpg"}
  ],
  memories:[
    {text:"Remember our holiday to…",image:"holiday.jpg"},
    {text:"Tell me about when we…",image:"memories.jpg"},
    {text:"Where are the photo albums?",image:"photos.jpg"},
    {text:"I remember when…",image:"remember.jpg"},
    {text:"That was a good time",image:"good_time.jpg"}
  ],
  environment:[
    {text:"It's too cold in here",image:"cold.jpg"},
    {text:"It's too hot in here",image:"hot.jpg"},
    {text:"Open the window",image:"window.jpg"},
    {text:"Close the window",image:"window_close.jpg"},
    {text:"Turn on the light",image:"light_on.jpg"},
    {text:"Turn off the light",image:"light_off.jpg"},
    {text:"It's too noisy",image:"noisy.jpg"},
    {text:"It's too bright",image:"bright.jpg"}
  ],
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

function saveDataToStorage(){ 
  try{ 
    localStorage.setItem(STORAGE_KEY, JSON.stringify(buttonData)); 
  }catch(e){ 
    console.error('Save error:', e); 
  } 
}

function loadDataFromStorage(){ 
  try{ 
    const d = localStorage.getItem(STORAGE_KEY); 
    if(d && d !== 'undefined' && d !== '{}') {
      const parsed = JSON.parse(d);
      // Only update if we have valid data
      if(parsed && typeof parsed === 'object') {
        buttonData = parsed;
        return true;
      }
    }
  }catch(e){ 
    console.error('Load error:', e); 
  }
  return false;
}

function validateStoredData(){ 
  try{ 
    const d = localStorage.getItem(STORAGE_KEY); 
    if(!d || d==='undefined' || d==='{}' || d==='null') {
      localStorage.removeItem(STORAGE_KEY);
    }
  }catch(e){ 
    localStorage.removeItem(STORAGE_KEY); 
  } 
}

function speakText(text, el){
  if(!('speechSynthesis' in window)){ 
    alert('Speech not supported'); 
    return; 
  }
  const s=window.speechSynthesis; 
  s.cancel();
  if(el){ 
    el.classList.add('speaking'); 
    setTimeout(()=>el.classList.remove('speaking'),1500); 
  }
  const u=new SpeechSynthesisUtterance(text); 
  u.rate=0.9; 
  s.speak(u);
  const bar=document.querySelector('#messageBar p'); 
  if(bar) bar.textContent=text;
}

function populateGrid(cat){
  const g=document.getElementById('buttonGrid'); 
  g.innerHTML='';
  const arr=buttonData[cat]; 
  if(!arr) return;
  arr.forEach(b=>{
    const el=document.createElement('button'); 
    el.className='grid-button';
    const img=`images/${cat}/${b.image||''}`;
    el.innerHTML=`<img src="${img}" alt=""><span>${b.text}</span>`;
    el.onclick=()=>speakText(b.text, el);
    g.appendChild(el);
  });
}

function initTabs(){
  document.querySelectorAll('.tab').forEach(t=>t.addEventListener('click',()=>{
    document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));
    t.classList.add('active'); 
    populateGrid(t.dataset.category);
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
    hideModal('passwordModal'); 
    document.getElementById('managementPanel').style.display='block'; 
    // Token prompt is now optional - don't force it
  } else {
    alert('Incorrect password');
    document.getElementById('passwordInput').value = '';
  }
}

// Token prompt (completely optional)
function ensureToken(){ 
  const t=sessionStorage.getItem('ISPEAK_GH_TOKEN'); 
  if(!t) {
    showModal('tokenModal'); 
  } else {
    alert('GitHub token already set for this session.');
  }
}

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
  const sel=document.getElementById('removePhraseSelect'); 
  sel.innerHTML='';
  (buttonData[cat]||[]).forEach((it,idx)=>{
    const o=document.createElement('option'); 
    o.value=idx; 
    o.textContent=it.text; 
    sel.appendChild(o);
  });
}

function addPhrase(){
  const cat=document.getElementById('addCategorySelect').value;
  const txt=document.getElementById('newPhraseText').value.trim();
  const img=document.getElementById('newPhraseImage').value.trim();
  if(!txt) return alert('Enter text');
  const item = (cat==='MyPeople') ? {id:'person_'+txt.toLowerCase().replace(/\s+/g, '_'), text:txt, relationship:'', birthday:'', image:img|| (txt+'.jpg')} : {text:txt, image:img||''};
  buttonData[cat]=buttonData[cat]||[]; 
  buttonData[cat].push(item);
  saveDataToStorage();
  const active=document.querySelector('.tab.active').dataset.category;
  if(active===cat) populateGrid(cat);
  alert('Added.');
  
  // Clear form
  document.getElementById('newPhraseText').value = '';
  document.getElementById('newPhraseImage').value = '';
  
  // Auto-save to GitHub if token exists (optional)
  const token=sessionStorage.getItem('ISPEAK_GH_TOKEN');
  if(token) {
    saveSharedData();
  }
  
  refreshRemoveList();
}

function removePhrase(){
  const cat=document.getElementById('removeCategorySelect').value;
  const idx=parseInt(document.getElementById('removePhraseSelect').value,10);
  if(isNaN(idx)) return;
  buttonData[cat].splice(idx,1); 
  saveDataToStorage();
  const active=document.querySelector('.tab.active').dataset.category;
  if(active===cat) populateGrid(cat);
  alert('Removed.');
  
  // Auto-save to GitHub if token exists (optional)
  const token=sessionStorage.getItem('ISPEAK_GH_TOKEN');
  if(token) {
    saveSharedData();
  }
  
  refreshRemoveList();
}

function exportData(){
  const blob=new Blob([JSON.stringify(buttonData,null,2)],{type:'application/json'});
  const a=document.createElement('a'); 
  a.href=URL.createObjectURL(blob); 
  a.download='ispeak_backup.json'; 
  a.click();
}

// GitHub sync - COMPLETELY OPTIONAL
const GITHUB_USERNAME='bethellan', GITHUB_REPO='ISpeak';
const DATA_URL = `https://${GITHUB_USERNAME}.github.io/${GITHUB_REPO}/data/mynevoice_data.json`;

function deepMerge(target, source){
  if(Array.isArray(source)) return source;
  for(const k in source){
    if(source[k] && typeof source[k]==='object' && !Array.isArray(source[k])) {
      target[k] = deepMerge(target[k]||{}, source[k]);
    } else {
      target[k] = source[k];
    }
  }
  return target;
}

async function loadSharedData(){
  try{
    console.log('Attempting to load shared data from GitHub...');
    const r=await fetch(DATA_URL,{cache:'no-store'});
    if(!r.ok) throw new Error(`HTTP ${r.status}`);
    const shared=await r.json();
    
    // Merge with existing data
    buttonData = deepMerge(buttonData, shared);
    saveDataToStorage();
    
    // Refresh current view
    const active=document.querySelector('.tab.active'); 
    const cat=active ? active.dataset.category : 'food';
    populateGrid(cat);
    
    console.log('Loaded and merged shared data from GitHub.');
    return true;
  }catch(e){
    console.log('GitHub load failed, using local data only:', e.message);
    return false;
  }
}

async function saveSharedData(){
  try{
    const token=sessionStorage.getItem('ISPEAK_GH_TOKEN');
    if(!token){ 
      console.log('No GitHub token; read-only.'); 
      alert('No GitHub token set. Go to Sync section to set token.');
      return false; 
    }
    
    const repo = `${GITHUB_USERNAME}/${GITHUB_REPO}`;
    const path = 'data/mynevoice_data.json';

    // Try to get existing file SHA
    let sha = undefined;
    try {
      const info = await fetch(`https://api.github.com/repos/${repo}/contents/${path}`);
      if(info.ok) {
        const infoJson = await info.json();
        sha = infoJson && infoJson.sha ? infoJson.sha : undefined;
      }
    } catch(e) {
      console.log('No existing file or cannot get SHA:', e.message);
    }

    const content = btoa(unescape(encodeURIComponent(JSON.stringify(buttonData,null,2))));
    const res = await fetch(`https://api.github.com/repos/${repo}/contents/${path}`, {
      method:'PUT',
      headers:{ 
        'Authorization':`token ${token}`,
        'Content-Type':'application/json' 
      },
      body: JSON.stringify({ 
        message:'Update via ISpeak app', 
        content, 
        sha 
      })
    });
    
    if(!res.ok) {
      const errorText = await res.text();
      console.error('GitHub save failed:', errorText);
      alert('GitHub save failed. Check token permissions.');
      return false;
    }
    
    console.log('Saved data to GitHub');
    alert('Successfully saved to GitHub!');
    return true;
  }catch(e){
    console.error('Error saving to GitHub', e);
    alert('Error saving to GitHub: ' + e.message);
    return false;
  }
}

async function syncNow(){ 
  const success = await loadSharedData(); 
  if(success) {
    alert('Sync complete - loaded latest data from GitHub');
  } else {
    alert('Sync failed - using local data only');
  }
}

// Initialize app - FAST LOCAL LOADING
document.addEventListener('DOMContentLoaded', ()=>{
  // First: validate and load local data immediately
  validateStoredData(); 
  const hasLocalData = loadDataFromStorage();
  
  // Second: initialize UI immediately with local data
  initTabs(); 
  populateGrid('food');
  
  // Third: set up all event handlers
  document.getElementById('managementToggle').onclick=openManagement;
  document.getElementById('passwordSubmit').onclick=checkPassword;
  document.getElementById('passwordCancel').onclick=()=>{
    hideModal('passwordModal');
    document.getElementById('passwordInput').value = '';
  };
  document.getElementById('tokenSave').onclick=saveTokenFromModal;
  document.getElementById('tokenCancel').onclick=()=>{
    hideModal('tokenModal');
    document.getElementById('tokenInput').value = '';
  };

  document.getElementById('addPhrase').onclick=addPhrase;
  document.getElementById('removePhrase').onclick=removePhrase;
  document.getElementById('removeCategorySelect').onchange=refreshRemoveList;
  document.getElementById('exportData').onclick=exportData;
  document.getElementById('reloadApp').onclick=()=>location.reload();
  document.getElementById('closeManagement').onclick=closeManagement;
  document.getElementById('syncNow').onclick=syncNow;
  document.getElementById('setToken').onclick=ensureToken;

  refreshRemoveList();
  
  // Fourth: register service worker (non-blocking)
  if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(console.error);
  }
  
  // Fifth: optionally load from GitHub in background (non-blocking)
  setTimeout(() => {
    console.log('Background GitHub sync attempt...');
    loadSharedData().then(success => {
      if(success) {
        console.log('Background sync completed');
      }
    });
  }, 2000); // Wait 2 seconds so local UI is fully responsive first
});