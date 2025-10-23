// ISpeak Root GitHub Edition - Two File System with Fallback
const STORAGE_VERSION='2.0'; 
const STORAGE_KEY='ispeak_data_v'+STORAGE_VERSION;

// FALLBACK DATA - Will be used if GitHub files fail to load
const FALLBACK_DATA = {
  "food": [
    {"text": "I'm hungry", "image": "hungry.jpg"},
    {"text": "I'm thirsty", "image": "thirsty.jpg"},
    {"text": "I'd like a snack", "image": "snack.jpg"},
    {"text": "Can I have a drink?", "image": "drink.jpg"},
    {"text": "I'd like a cup of tea", "image": "tea.jpg"},
    {"text": "I'd like a coffee", "image": "coffee.jpg"},
    {"text": "It's time for breakfast", "image": "breakfast.jpg"},
    {"text": "It's time for lunch", "image": "lunch.jpg"},
    {"text": "It's time for dinner", "image": "dinner.jpg"},
    {"text": "That was delicious", "image": "delicious.jpg"}
  ],
  "feelings": [
    {"text": "I'm happy", "image": "happy.jpg"},
    {"text": "I'm sad", "image": "sad.jpg"},
    {"text": "I'm excited", "image": "excited.jpg"},
    {"text": "I'm tired", "image": "tired.jpg"},
    {"text": "I'm frustrated", "image": "frustrated.jpg"},
    {"text": "I'm anxious", "image": "anxious.jpg"},
    {"text": "I'm comfortable", "image": "comfortable.jpg"},
    {"text": "I'm in pain", "image": "pain.jpg"},
    {"text": "I need a hug", "image": "hug.jpg"}
  ],
  "selfcare": [
    {"text": "I need the bathroom", "image": "bathroom.jpg"},
    {"text": "I need to shower", "image": "shower.jpg"},
    {"text": "I need to brush my teeth", "image": "teeth.jpg"},
    {"text": "I need to shave", "image": "shave.jpg"},
    {"text": "I need to get dressed", "image": "dressed.jpg"},
    {"text": "I'm ready for bed", "image": "bed.jpg"}
  ],
  "health": [
    {"text": "I don't feel well", "image": "unwell.jpg"},
    {"text": "I have a headache", "image": "headache.jpg"},
    {"text": "I feel sick", "image": "sick.jpg"},
    {"text": "I need my medication", "image": "medication.jpg"},
    {"text": "Can you call the doctor?", "image": "doctor.jpg"},
    {"text": "I need help", "image": "help.jpg"}
  ],
  "routine": [
    {"text": "What's happening today?", "image": "daily_schedule.jpg"},
    {"text": "What's for breakfast?", "image": "breakfast.jpg"},
    {"text": "What's for lunch?", "image": "lunch.jpg"},
    {"text": "What's for dinner?", "image": "dinner.jpg"},
    {"text": "What time is it?", "image": "time.jpg"},
    {"text": "What day is it today?", "image": "calendar.jpg"},
    {"text": "What's the plan for tomorrow?", "image": "tomorrow.jpg"}
  ],
  "social": [
    {"text": "How are you today?", "image": "how_are_you.jpg"},
    {"text": "Good morning", "image": "good_morning.jpg"},
    {"text": "Good afternoon", "image": "good_afternoon.jpg"},
    {"text": "Good night", "image": "good_night.jpg"},
    {"text": "Please", "image": "please.jpg"},
    {"text": "Thank you", "image": "thank_you.jpg"},
    {"text": "You're welcome", "image": "welcome.jpg"},
    {"text": "I love you", "image": "love.jpg"},
    {"text": "Can we talk?", "image": "talk.jpg"}
  ],
  "activities": [
    {"text": "I'd like to watch TV", "image": "tv.jpg"},
    {"text": "Let's go for a walk", "image": "walk.jpg"},
    {"text": "I'd like to read", "image": "read.jpg"},
    {"text": "Can we listen to music?", "image": "music.jpg"},
    {"text": "I'd like to go outside", "image": "outside.jpg"},
    {"text": "Let's play a game", "image": "game.jpg"},
    {"text": "I'm bored", "image": "bored.jpg"}
  ],
  "entertainment": [
    {"text": "Let's watch the cricket", "image": "cricket.jpg"},
    {"text": "Let's watch a movie", "image": "movie.jpg"},
    {"text": "Put the news on", "image": "news.jpg"},
    {"text": "I'd like to watch sport", "image": "sport.jpg"},
    {"text": "Change the channel", "image": "channel.jpg"},
    {"text": "Turn it up", "image": "volume_up.jpg"},
    {"text": "Turn it down", "image": "volume_down.jpg"}
  ],
  "memories": [
    {"text": "Remember our holiday to…", "image": "holiday.jpg"},
    {"text": "Tell me about when we…", "image": "memories.jpg"},
    {"text": "Where are the photo albums?", "image": "photos.jpg"},
    {"text": "I remember when…", "image": "remember.jpg"},
    {"text": "That was a good time", "image": "good_time.jpg"}
  ],
  "environment": [
    {"text": "It's too cold in here", "image": "cold.jpg"},
    {"text": "It's too hot in here", "image": "hot.jpg"},
    {"text": "Open the window", "image": "window.jpg"},
    {"text": "Close the window", "image": "window_close.jpg"},
    {"text": "Turn on the light", "image": "light_on.jpg"},
    {"text": "Turn off the light", "image": "light_off.jpg"},
    {"text": "It's too noisy", "image": "noisy.jpg"},
    {"text": "It's too bright", "image": "bright.jpg"}
  ],
  "MyPeople": []
};

// Start with fallback data - will be enhanced with personal data
let buttonData = JSON.parse(JSON.stringify(FALLBACK_DATA));

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
  if(!arr || arr.length === 0) {
    g.innerHTML = '<p style="text-align:center; color:#666; padding:20px;">No phrases found in this category</p>';
    return;
  }
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
  } else {
    alert('Incorrect password');
    document.getElementById('passwordInput').value = '';
  }
}

// Token prompt
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
  document.getElementById('newPhraseText').value = '';
  document.getElementById('newPhraseImage').value = '';
  const token=sessionStorage.getItem('ISPEAK_GH_TOKEN');
  if(token) saveSharedData();
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
  const token=sessionStorage.getItem('ISPEAK_GH_TOKEN');
  if(token) saveSharedData();
  refreshRemoveList();
}

function exportData(){
  const blob=new Blob([JSON.stringify(buttonData,null,2)],{type:'application/json'});
  const a=document.createElement('a'); 
  a.href=URL.createObjectURL(blob); 
  a.download='ispeak_backup.json'; 
  a.click();
}

// GitHub sync - TWO FILE SYSTEM
const GITHUB_USERNAME='bethellan', GITHUB_REPO='ISpeak';
const PHRASES_URL = `https://${GITHUB_USERNAME}.github.io/${GITHUB_REPO}/data/phrases_data.json`;
const PERSONAL_URL = `https://${GITHUB_USERNAME}.github.io/${GITHUB_REPO}/data/mynevoice_data.json`;

function smartMerge(baseData, additionalData) {
  const result = JSON.parse(JSON.stringify(baseData));
  
  for(const category in additionalData) {
    if(category === 'MyPeople') {
      // For MyPeople, replace completely (personal data takes priority)
      result[category] = additionalData[category];
    } else if(Array.isArray(additionalData[category])) {
      // For other categories, only add if base is empty or merge unique items
      if(!result[category] || result[category].length === 0) {
        result[category] = additionalData[category];
      } else {
        // Merge arrays, avoiding duplicates based on text
        const baseTexts = new Set(result[category].map(item => item.text));
        additionalData[category].forEach(item => {
          if(!baseTexts.has(item.text)) {
            result[category].push(item);
          }
        });
      }
    }
  }
  
  return result;
}

async function loadSharedData(){
  try{
    console.log('Loading data from GitHub files...');
    
    let phrasesData = {};
    let personalData = {};
    
    // Try to load standard phrases
    try {
      const phrasesResponse = await fetch(PHRASES_URL, {cache: 'no-store'});
      if(phrasesResponse.ok) {
        phrasesData = await phrasesResponse.json();
        console.log('Loaded phrases data with', Object.keys(phrasesData).length, 'categories');
      } else {
        console.log('Phrases file not found, using fallback');
        phrasesData = JSON.parse(JSON.stringify(FALLBACK_DATA));
      }
    } catch(e) {
      console.log('Error loading phrases, using fallback:', e.message);
      phrasesData = JSON.parse(JSON.stringify(FALLBACK_DATA));
    }
    
    // Try to load personal data (MyPeople)
    try {
      const personalResponse = await fetch(PERSONAL_URL, {cache: 'no-store'});
      if(personalResponse.ok) {
        personalData = await personalResponse.json();
        console.log('Loaded personal data with MyPeople:', personalData.MyPeople ? personalData.MyPeople.length : 0, 'people');
      } else {
        console.log('Personal file not found, will use fallback phrases only');
        personalData = {};
      }
    } catch(e) {
      console.log('Error loading personal data:', e.message);
      personalData = {};
    }
    
    // Smart merge: phrases as base, personal data adds/replaces selectively
    const mergedData = smartMerge(phrasesData, personalData);
    buttonData = mergedData;
    saveDataToStorage();
    
    const active=document.querySelector('.tab.active'); 
    const cat=active ? active.dataset.category : 'food';
    populateGrid(cat);
    
    console.log('Successfully loaded and merged data from GitHub');
    console.log('Final data - MyPeople:', buttonData.MyPeople ? buttonData.MyPeople.length : 0, 'people');
    console.log('Final data - Food phrases:', buttonData.food ? buttonData.food.length : 0, 'items');
    return true;
  }catch(e){
    console.log('GitHub load failed, using fallback data:', e.message);
    // Use fallback data
    buttonData = JSON.parse(JSON.stringify(FALLBACK_DATA));
    saveDataToStorage();
    const active=document.querySelector('.tab.active'); 
    if(active) populateGrid(active.dataset.category);
    return false;
  }
}

async function saveSharedData(){
  try{
    const token=sessionStorage.getItem('ISPEAK_GH_TOKEN');
    if(!token){ 
      alert('No GitHub token set. Go to Sync section to set token.');
      return false; 
    }
    
    const repo = `${GITHUB_USERNAME}/${GITHUB_REPO}`;
    
    // Save only personal data (MyPeople and any custom phrases)
    const personalData = {
      MyPeople: buttonData.MyPeople || []
    };
    
    const categories = ['food', 'feelings', 'selfcare', 'health', 'routine', 'social', 'activities', 'entertainment', 'memories', 'environment'];
    categories.forEach(cat => {
      if (buttonData[cat] && buttonData[cat].length > 0) {
        personalData[cat] = buttonData[cat];
      }
    });

    const content = btoa(unescape(encodeURIComponent(JSON.stringify(personalData,null,2))));
    const path = 'data/mynevoice_data.json';

    let sha = undefined;
    try {
      const info = await fetch(`https://api.github.com/repos/${repo}/contents/${path}`);
      if(info.ok) {
        const infoJson = await info.json();
        sha = infoJson.sha;
      }
    } catch(e) {
      console.log('No existing file found, creating new one');
    }

    const res = await fetch(`https://api.github.com/repos/${repo}/contents/${path}`, {
      method:'PUT',
      headers:{ 
        'Authorization':`token ${token}`,
        'Content-Type':'application/json' 
      },
      body: JSON.stringify({ 
        message:'Update personal data via ISpeak app', 
        content, 
        sha 
      })
    });
    
    if(!res.ok) throw new Error(await res.text());
    
    alert('Successfully saved personal data to GitHub!');
    return true;
  }catch(e){
    alert('Error saving to GitHub: ' + e.message);
    return false;
  }
}

async function syncNow(){ 
  const success = await loadSharedData(); 
  if(success) {
    alert('Sync complete - loaded latest data from GitHub');
  } else {
    alert('Sync failed - using local/fallback data');
  }
}

// Initialize app
document.addEventListener('DOMContentLoaded', ()=>{
  validateStoredData(); 
  loadDataFromStorage();
  initTabs(); 
  populateGrid('food');
  
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
  
  if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(console.error);
  }
  
  // Load from GitHub in background
  setTimeout(() => {
    console.log('Starting background data load...');
    loadSharedData().then(success => {
      if(success) {
        console.log('Background data load completed successfully');
      } else {
        console.log('Background data load failed, using fallback');
      }
    });
  }, 1000);
});