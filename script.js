
// ============================================================================
// DATA PERSISTENCE FUNCTIONS
// ============================================================================

const STORAGE_KEY = 'mynevoice_data';
const MANAGEMENT_PASSWORD = "19Hector";
const DEFAULT_IMAGE = 'default.jpg';
const CLICK_SOUND = new Audio('assets/sounds/click.mp3');
CLICK_SOUND.volume = 0.3; // keep it gentle


// Function to save all data to localStorage
function saveDataToStorage() {
  try {
    const payload = {
      buttonData,
      lastModified: new Date().toISOString()
    };
    const compressed = LZString.compressToUTF16(JSON.stringify(payload));
    localStorage.setItem(STORAGE_KEY, compressed);
    console.log(`Data compressed and saved at ${payload.lastModified}`);
    showAutoSave();
  } catch (error) {
    console.error('Error saving compressed data:', error);
    showToast('Error saving data', 'error');
  }
}


// Function to load data from localStorage
function loadDataFromStorage() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {

      // 🧩 Backward-compatibility for old uncompressed JSON
      if (stored.startsWith('{')) {
        const parsed = JSON.parse(stored);
        buttonData = parsed.buttonData || parsed;
        console.log('Loaded uncompressed legacy data — re-saving as compressed.');
        saveDataToStorage(); // Re-compress and store safely
        return;
      }

      // 🧩 Standard decompression path (new format)
      const decompressed = LZString.decompressFromUTF16(stored);
      const parsed = JSON.parse(decompressed);
      if (parsed.buttonData) buttonData = parsed.buttonData;
      if (parsed.lastModified)
        console.log('Loaded compressed data last modified:', parsed.lastModified);

    } else {
      console.warn('No stored data found — loading defaults.');
      buttonData = JSON.parse(JSON.stringify(defaultButtonData));
      saveDataToStorage();
    }
  } catch (e) {
    console.error('Error decompressing data, restoring defaults.', e);
    buttonData = JSON.parse(JSON.stringify(defaultButtonData));
    saveDataToStorage();
  }
}


// Function to reset to default data
function resetToDefaultData() {
    if (confirm('Are you sure you want to reset all data to default? This cannot be undone.')) {
        localStorage.removeItem(STORAGE_KEY);
        location.reload();
    }
}

// ============================================================================
// TOAST NOTIFICATIONS
// ============================================================================


function showAutoSave() {
  const indicator = document.getElementById('autosaveIndicator');
  if (!indicator) return;
  indicator.classList.add('show');
  setTimeout(() => indicator.classList.remove('show'), 1500);
}


function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    if (!toast) return;
    
    toast.textContent = message;
    toast.className = 'toast show';
    
    // Remove previous type classes
    toast.classList.remove('success', 'error', 'warning', 'info');
    
    // Add current type class
    if (type !== 'info') {
        toast.classList.add(type);
    }
    
    // Auto-hide after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ============================================================================
// LOADING INDICATOR
// ============================================================================

function showLoading() {
    const loader = document.getElementById('loadingIndicator');
    if (loader) loader.style.display = 'flex';
}

function hideLoading() {
    const loader = document.getElementById('loadingIndicator');
    if (loader) loader.style.display = 'none';
}

// ============================================================================
// PASSWORD PROTECTION
// ============================================================================

function showPasswordModal() {
    document.getElementById('passwordModal').style.display = 'flex';
    document.getElementById('passwordInput').value = '';
    document.getElementById('passwordInput').focus();
}

function hidePasswordModal() {
    document.getElementById('passwordModal').style.display = 'none';
    document.getElementById('passwordInput').value = '';
}

function checkPassword() {
    const input = document.getElementById('passwordInput').value;
    
    if (input === MANAGEMENT_PASSWORD) {
        hidePasswordModal();
        showManagementPanel();
    } else {
        showToast('Incorrect password. Please try again.', 'error');
        document.getElementById('passwordInput').value = '';
        document.getElementById('passwordInput').focus();
    }
}

// === MANAGEMENT OVERLAY SHOW/HIDE ===
// ============================================================================
// MANAGEMENT PANEL FUNCTIONS
// ============================================================================

function showManagementPanel() {
    const overlay = document.getElementById('managementOverlay');
    const panel = document.getElementById('managementPanel');
    
    if (overlay && panel) {
        overlay.style.display = 'flex';
        // Force reflow to ensure display: flex is applied before adding class
        void overlay.offsetWidth;
        overlay.classList.add('show');
        
        populateRemovePhraseOptions();
        populateEditPhraseOptions();
        populateReorderList();

        // Focus for accessibility
        setTimeout(() => {
            const firstButton = panel.querySelector('button, input, select');
            if (firstButton) firstButton.focus();
        }, 100);
    }
}

function hideManagementPanel() {
    const overlay = document.getElementById('managementOverlay');
    const panel = document.getElementById('managementPanel');
    
    if (overlay && panel) {
        overlay.classList.remove('show');
        // Wait for animation to complete before hiding completely
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 300);
    }
}


// ============================================================================
// BUTTON DATA STRUCTURE
// ============================================================================

const defaultButtonData = {
    food: [
        { text: "I'm hungry", image: "hungry.jpg" },
        { text: "I'm thirsty", image: "thirsty.jpg" },
        { text: "I'm not hungry", image: "not_hungry.jpg" },
        { text: "That was delicious", image: "delicious.jpg" },
        { text: "Can I have a snack?", image: "snack.jpg" },
        { text: "I'd like water please", image: "water.jpg" },
        { text: "Coffee would be nice", image: "coffee.jpg" },
        { text: "I'm full", image: "full.jpg" },
        { text: "I'd like a cup of tea", image: "tea.jpg" },
        { text: "Could I have some toast?", image: "toast.jpg" },
        { text: "I'd like soup please", image: "soup.jpg" },
        { text: "What are my meal options?", image: "meal_options.jpg" }
    ],
    feelings: [
        { text: "I'm happy", image: "happy.jpg" },
        { text: "I'm sad", image: "sad.jpg" },
        { text: "I'm tired", image: "tired.jpg" },
        { text: "I'm in pain", image: "pain.jpg" },
        { text: "I'm comfortable", image: "comfortable.jpg" },
        { text: "I'm frustrated", image: "frustrated.jpg" },
        { text: "I need a hug", image: "hug.jpg" },
        { text: "I feel great today", image: "feel_great.jpg" }
    ],
    selfcare: [
        { text: "I need the bathroom", image: "bathroom.jpg" },
        { text: "I want to shower", image: "shower.jpg" },
        { text: "I'm ready for bed", image: "bed.jpg" },
        { text: "I'm too hot", image: "too_hot.jpg" },
        { text: "I'm too cold", image: "too_cold.jpg" },
        { text: "Can you adjust my pillow?", image: "pillow.jpg" },
        { text: "I need my medication", image: "medication.jpg" },
        { text: "I'd like to brush my teeth", image: "teeth.jpg" },
        { text: "I need to shave", image: "shave.jpg" },
        { text: "Can you help me get dressed?", image: "get_dressed.jpg" },
        { text: "I'd like to wash my face", image: "wash_face.jpg" },
        { text: "My hearing aid needs adjusting", image: "hearing_aid.jpg" },
        { text: "I need my glasses", image: "glasses.jpg" },
        { text: "Can you help me with my shoes?", image: "shoes.jpg" },
        { text: "Can you help me turn over?", image: "turn_over.jpg" },
        { text: "I need to change position", image: "change_position.jpg" },
        { text: "My feet are cold", image: "cold_feet.jpg" },
        { text: "Could you fluff my pillows?", image: "fluff_pillows.jpg" }
    ],
    health: [
        { text: "I need my pain medication", image: "pain_meds.jpg" },
        { text: "My back is hurting", image: "back_pain.jpg" },
        { text: "I feel dizzy", image: "dizzy.jpg" },
        { text: "I'm having trouble breathing", image: "breathing.jpg" },
        { text: "Please check my blood pressure", image: "blood_pressure.jpg" },
        { text: "I think I have a fever", image: "fever.jpg" },
        { text: "My leg is cramping", image: "cramp.jpg" },
        { text: "I don't feel well", image: "unwell.jpg" },
        { text: "I need help immediately!", image: "emergency.jpg" },
        { text: "Please call the nurse", image: "call_nurse.jpg" },
        { text: "I've fallen and need help", image: "fallen.jpg" },
        { text: "Call Andrew immediately", image: "call_andrew.jpg" },
        { text: "I don't feel right", image: "not_right.jpg" }
    ],
    routine: [
        { text: "What's happening today?", image: "daily_schedule.jpg" },
        { text: "What time is my appointment?", image: "appointment_time.jpg" },
        { text: "Who is visiting today?", image: "visitors.jpg" },
        { text: "What's for breakfast?", image: "breakfast.jpg" },
        { text: "Is it time for my medication?", image: "medication_time.jpg" },
        { text: "What's the weather like?", image: "weather.jpg" },
        { text: "What day is it today?", image: "what_day.jpg" },
        { text: "What's the plan for this afternoon?", image: "afternoon_plan.jpg" },
        { text: "What time are you coming tomorrow?", image: "coming_tomorrow.jpg" }
    ],
    MyPeople: [
        { 
            text: "Sue", 
            image: "Sue.jpg",
            relationship: "My Wife",
            occupation: "Retired",
            location: "Lives in Seatoun",
            birthday: "1948-05-21",
            phone: "027-356-9667",
            detailedIntro: "This is Sue, my wonderful wife. She's retired, lives in our home in Seatoun, and She's the most caring person I know.",
            family: "We have three children together",
            hobbies: "She loves to socialise",
            additionalInfo: "We've been married for 45 wonderful years"
        },
        { 
            text: "Andrew", 
            image: "Andrew.jpg",
            relationship: "My Son",
            occupation: "Nurse at Wellington Hospital",
            location: "Lives in Seatoun",
            birthday: "1971-03-23",
            phone: "022-309-9260",
            detailedIntro: "This is Andrew, my son. He's a nurse at Wellington Hospital and lives in Seatoun.",
            family: "He's married to Marilyn and they're both nurses. They have three children.",
            hobbies: "He enjoys running and outdoor activities",
            additionalInfo: ""
        },
        { 
            text: "Malcolm", 
            image: "Malcolm.jpg",
            relationship: "My Son",
            occupation: "Social Worker",
            location: "Lives in Sweden",
            birthday: "1976-01-07",
            phone: "",
            detailedIntro: "This is Malcolm, my son. He's a Social Worker and lives in Sweden with his family.",
            family: "Married to Tess, father of Loke and Leon",
            hobbies: "He enjoys music and family time",
            additionalInfo: "He's very dedicated to his work and family"
        },
        { 
            text: "Tess", 
            image: "Tess.jpg",
            relationship: "My Daughter-in-law",
            occupation: "Computer Specialist",
            location: "Lives in Sweden",
            birthday: "1975-05-27",
            phone: "",
            detailedIntro: "This is Tess, my daughter-in-law. She's a Computer Specialist and lives in Sweden with Malcolm and their children.",
            family: "Married to Malcolm, mother of Loke and Leon",
            hobbies: "She loves coding and solving technical problems",
            additionalInfo: "She's very talented with technology"
        },
        { 
            text: "Loke", 
            image: "Loke.jpg",
            relationship: "My Grandson",
            occupation: "Student",
            location: "Lives in Sweden",
            birthday: "2010-05-05",
            phone: "",
            detailedIntro: "This is Loke, my grandson. He's a student in Sweden.",
            family: "Son of Malcolm and Tess, older brother of Leon",
            hobbies: "He loves video games and football",
            additionalInfo: "He's growing up so fast and is very smart"
        },
        { 
            text: "Leon", 
            image: "Leon.jpg",
            relationship: "My Grandson",
            occupation: "Student",
            location: "Lives in Sweden",
            birthday: "2012-10-24",
            phone: "",
            detailedIntro: "This is Leon, my grandson. He lives in Sweden.",
            family: "Son of Malcolm and Tess, younger brother of Loke",
            hobbies: "He's interested in music and plays the guitar",
            additionalInfo: "He has a great sense of humor and makes everyone laugh"
        }
    ],
    social: [
        { text: "How are you today?", image: "how_are_you.jpg" },
        { text: "Thank you for helping me", image: "thank_you.jpg" },
        { text: "You're very kind", image: "kind.jpg" },
        { text: "I appreciate you", image: "appreciate.jpg" },
        { text: "What's new with you?", image: "whats_new.jpg" },
        { text: "That's interesting", image: "interesting.jpg" },
        { text: "Could you repeat that?", image: "repeat.jpg" },
        { text: "I don't understand", image: "dont_understand.jpg" },
        { text: "Could you read this to me?", image: "read_to_me.jpg" },
        { text: "Tell me about your day", image: "your_day.jpg" },
        { text: "I'd like some company", image: "company.jpg" },
        { text: "Could you help me make a phone call?", image: "help_phone.jpg" },
        { text: "Let's talk about the family", image: "talk_family.jpg" },
        { text: "I'm feeling lonely", image: "lonely.jpg" }
    ],
    activities: [
        { text: "I'd like to watch TV", image: "tv.jpg" },
        { text: "Can we go for a walk?", image: "walk.jpg" },
        { text: "I want to listen to music", image: "music.jpg" },
        { text: "Let's look at photos", image: "photos.jpg" },
        { text: "I'd like to read", image: "read.jpg" },
        { text: "Can we play a game?", image: "game.jpg" },
        { text: "I want to exercise", image: "exercise.jpg" },
        { text: "Let's sit in the garden", image: "garden.jpg" }
    ],
    entertainment: [
        { text: "Let's watch the cricket", image: "cricket.jpg" },
        { text: "I'd like to watch the news", image: "news.jpg" },
        { text: "Put on some music", image: "music.jpg" },
        { text: "Let's look at family photos", image: "family_photos.jpg" },
        { text: "I'd like to listen to the radio", image: "radio.jpg" },
        { text: "Can we watch a movie?", image: "movie.jpg" },
        { text: "Let's talk about rugby", image: "rugby.jpg" },
        { text: "I'd like to do a puzzle", image: "puzzle.jpg" }
    ],
    memories: [
        { text: "Tell me about when we lived in...", image: "old_house.jpg" },
        { text: "Remember our holiday to...", image: "holiday.jpg" },
        { text: "Tell me about your childhood", image: "childhood.jpg" },
        { text: "Remember when the children were little?", image: "children_little.jpg" },
        { text: "Tell me about our wedding day", image: "wedding.jpg" },
        { text: "What was your first job?", image: "first_job.jpg" },
        { text: "Tell me about school days", image: "school_days.jpg" },
        { text: "Remember our favorite restaurant?", image: "favorite_restaurant.jpg" }
    ],
    environment: [
        { text: "It's too cold in here", image: "cold.jpg" },
        { text: "It's too warm", image: "warm.jpg" },
        { text: "Please open the window", image: "open_window.jpg" },
        { text: "Please close the window", image: "close_window.jpg" },
        { text: "Can you close the curtains?", image: "curtains.jpg" },
        { text: "The light is too bright", image: "bright_light.jpg" },
        { text: "I need more light", image: "more_light.jpg" },
        { text: "This noise is bothering me", image: "noise.jpg" },
        { text: "It's quiet and peaceful", image: "peaceful.jpg" },
        { text: "The room is too stuffy", image: "stuffy.jpg" },
        { text: "Can you turn on the fan?", image: "fan.jpg" },
        { text: "I need fresh air", image: "fresh_air.jpg" },
        { text: "The TV is too loud", image: "tv_loud.jpg" },
        { text: "Could you adjust my chair?", image: "adjust_chair.jpg" },
        { text: "I'd like to sit outside", image: "sit_outside.jpg" }
    ]
};

// Initialize buttonData with saved data or defaults
let buttonData = JSON.parse(JSON.stringify(defaultButtonData));

// === SELF-HEALING DEFAULT DATA CHECK ===
try {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const parsed = JSON.parse(savedData);
    // ensure all expected categories exist
    for (const category in defaultButtonData) {
      if (!parsed[category]) {
        parsed[category] = defaultButtonData[category];
      }
    }
    buttonData = parsed;
    console.log('✅ Default data verified and repaired if needed.');
  } else {
    console.warn('⚠️ No saved data found — loading defaults.');
    buttonData = JSON.parse(JSON.stringify(defaultButtonData));
    saveDataToStorage();
  }
} catch (e) {
  console.error('❌ Data corrupted. Restoring defaults.', e);
  buttonData = JSON.parse(JSON.stringify(defaultButtonData));
  saveDataToStorage();
}

// ============================================================================
// MAIN APP FUNCTIONS
// ============================================================================

function populateGrid(category) {
    const grid = document.getElementById('buttonGrid');
    grid.innerHTML = '';

    const buttons = buttonData[category];

    if (!buttons) {
        grid.innerHTML = '<p>Category not found.</p>';
        return;
    }

    buttons.forEach(buttonInfo => {
        const button = document.createElement('button');
        button.className = 'grid-button';

        const imagePath = `images/${category}/${buttonInfo.image}`;

        if (category === 'MyPeople' && buttonInfo.relationship) {
            const countdown = getBirthdayCountdown(buttonInfo.birthday);
            const hasBirthdaySoon = buttonInfo.birthday && countdown !== "";
            
            button.innerHTML = `
                <img src="${imagePath}" alt="${buttonInfo.text}" loading="lazy" onerror="this.style.display='none'">
                <span>${buttonInfo.text}</span>
                <div class="person-details">
                    <small>${buttonInfo.relationship}</small>
                    ${buttonInfo.occupation ? `<small class="occupation">${buttonInfo.occupation}</small>` : ''}
                    ${hasBirthdaySoon ? `<small class="countdown">🎂 ${countdown}</small>` : ''}
                </div>
            `;

            button.addEventListener('click', function() {
                const modal = createPersonProfile(buttonInfo);
                document.body.appendChild(modal);
            });
        } else {
            button.innerHTML = `
                <img src="${imagePath}" alt="${buttonInfo.text}" onerror="this.style.display='none'">
                <span>${buttonInfo.text}</span>
            `;

            button.addEventListener('click', function() {
                speakText(buttonInfo.text, this);
            });
        }

        grid.appendChild(button);
    });
// === ACCESSIBILITY: KEYBOARD NAVIGATION ===
const gridButtons = grid.querySelectorAll('.grid-button');
gridButtons.forEach(btn => {
  btn.setAttribute('tabindex', '0');
  btn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      btn.click();
    }
  });
});

}

function speakText(text, buttonElement) {
  const synth = window.speechSynthesis;
  synth.cancel();

  // --- Message bar display ---
  const messageBar = document.getElementById('messageBar');
  messageBar.innerHTML = `<p>${text}</p>`;

  // --- Subtitles overlay setup ---
  const subtitle = document.getElementById('speechSubtitle');
  const showSubtitles = localStorage.getItem('showSubtitles') !== 'false';

  if (subtitle && showSubtitles) {
    // Split the text into words, wrap each in a span
    subtitle.innerHTML = '';
    const words = text.split(/\s+/);
    words.forEach((word, i) => {
      const span = document.createElement('span');
      span.textContent = word + ' ';
      subtitle.appendChild(span);
    });
    subtitle.classList.add('show');
  }

  // --- Click sound ---
  if (typeof CLICK_SOUND !== 'undefined' && CLICK_SOUND) {
    CLICK_SOUND.currentTime = 0;
    CLICK_SOUND.play().catch(() => {});
  }

  // --- Button highlight ---
  if (buttonElement) {
    buttonElement.classList.add('speaking');
    setTimeout(() => {
      buttonElement.classList.remove('speaking');
    }, 2000);
  }

  // --- Speech setup ---
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = text.length > 100 ? 0.85 : 0.9;
  utterance.pitch = 1.0;
  utterance.volume = 1.0;

  // --- Karaoke-style word highlighting ---
  if (subtitle && showSubtitles) {
    const spans = subtitle.querySelectorAll('span');
    let wordIndex = 0;
    utterance.onboundary = (event) => {
      if (event.name === 'word' || event.charIndex >= 0) {
        spans.forEach(span => span.classList.remove('active'));
        if (wordIndex < spans.length) {
          spans[wordIndex].classList.add('active');
          wordIndex++;
        }
      }
    };
  }

  // --- Cleanup when done ---
  utterance.onend = () => {
    if (buttonElement) buttonElement.classList.remove('speaking');
    if (subtitle) subtitle.classList.remove('show');
  };

  // --- Speak ---
  synth.speak(utterance);
}



// ============================================================================
// BIRTHDAY COUNTDOWN FUNCTIONS
// ============================================================================

function getBirthdayCountdown(birthday) {
    if (!birthday) return "";
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const currentYear = today.getFullYear();
    
    const birthDate = new Date(birthday);
    const nextBirthday = new Date(currentYear, birthDate.getMonth(), birthDate.getDate());
    
    if (nextBirthday < today) {
        nextBirthday.setFullYear(currentYear + 1);
    }
    
    const diffTime = nextBirthday - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return "Today! 🎉";
    if (diffDays === 1) return "Tomorrow";
    if (diffDays === 2) return "2 days";
    
    const months = Math.floor(diffDays / 30);
    const remainingDaysAfterMonths = diffDays % 30;
    const weeks = Math.floor(remainingDaysAfterMonths / 7);
    const days = remainingDaysAfterMonths % 7;
    
    if (diffDays <= 7) {
        return `${diffDays} day${diffDays > 1 ? 's' : ''}`;
    } else if (diffDays <= 14) {
        return `1 week${weeks > 1 ? 's' : ''}`;
    } else if (diffDays <= 30) {
        return `${weeks} week${weeks > 1 ? 's' : ''}`;
    } else {
        if (months > 0 && weeks > 0) {
            return `${months} month${months > 1 ? 's' : ''} and ${weeks} week${weeks > 1 ? 's' : ''}`;
        } else {
            return `${months} month${months > 1 ? 's' : ''}`;
        }
    }
}

// ============================================================================
// PERSON PROFILE FUNCTIONS
// ============================================================================

function speakPersonIntroduction(personName) {
    const person = buttonData.MyPeople.find(p => p.text === personName);
    if (!person) return;

    let introduction = "";
    
    if (person.detailedIntro) {
        introduction = person.detailedIntro;
    } else {
        introduction = `This is ${person.text}`;
        
        if (person.relationship) {
            introduction += `, ${person.relationship}`;
        }
        
        if (person.occupation) {
            introduction += `. ${person.occupation}`;
        }
        
        if (person.location) {
            introduction += `. ${person.location}`;
        }
        
        if (person.family) {
            introduction += `. ${person.family}`;
        }
        
        if (person.additionalInfo) {
            introduction += `. ${person.additionalInfo}`;
        }
    }

    if (person.birthday) {
        const birthDate = new Date(person.birthday);
        const options = { month: 'long', day: 'numeric' };
        const formattedDate = birthDate.toLocaleDateString('en-US', options);
        
        const day = birthDate.getDate();
        let suffix = 'th';
        if (day === 1 || day === 21 || day === 31) suffix = 'st';
        else if (day === 2 || day === 22) suffix = 'nd';
        else if (day === 3 || day === 23) suffix = 'rd';
        
        const dateWithSuffix = formattedDate.replace(day.toString(), day + suffix);
        const countdownPhrase = getBirthdayCountdown(person.birthday);
        
        introduction += `. ${person.text}'s birthday is on ${dateWithSuffix}, ${countdownPhrase}`;
    }

    speakText(introduction);
}

function formatBirthday(birthday) {
    if (!birthday) return "";
    const date = new Date(birthday);
    return date.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

function createPersonProfile(person) {
    const modal = document.createElement('div');
    modal.className = 'person-modal';
    modal.innerHTML = `
        <div class="person-profile">
            <button class="close-profile">&times;</button>
            <div class="profile-header">
                <img src="images/MyPeople/${person.image}" alt="${person.text}" class="profile-image">
                <div class="profile-info">
                    <h2>${person.text}</h2>
                    <p class="relationship">${person.relationship}</p>
                    ${person.occupation ? `<p class="occupation">${person.occupation}</p>` : ''}
                </div>
            </div>
            
            <div class="profile-details">
                ${person.location ? `
                    <div class="detail-item">
                        <span class="detail-label">📍 Location:</span>
                        <span class="detail-value">${person.location}</span>
                    </div>
                ` : ''}
                
                ${person.birthday ? `
                    <div class="detail-item">
                        <span class="detail-label">🎂 Birthday:</span>
                        <span class="detail-value">${formatBirthday(person.birthday)}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">⏰ Countdown:</span>
                        <span class="detail-value countdown-badge">${getBirthdayCountdown(person.birthday)}</span>
                    </div>
                ` : ''}
                
                ${person.phone ? `
                    <div class="detail-item">
                        <span class="detail-label">📞 Phone:</span>
                        <span class="detail-value">${person.phone}</span>
                    </div>
                ` : ''}
                
                ${person.family ? `
                    <div class="detail-item">
                        <span class="detail-label">👨‍👩‍👧‍👦 Family:</span>
                        <span class="detail-value">${person.family}</span>
                    </div>
                ` : ''}
                
                ${person.hobbies ? `
                    <div class="detail-item">
                        <span class="detail-label">🎯 Hobbies:</span>
                        <span class="detail-value">${person.hobbies}</span>
                    </div>
                ` : ''}
                
                ${person.additionalInfo ? `
                    <div class="detail-item">
                        <span class="detail-label">💫 More Info:</span>
                        <span class="detail-value">${person.additionalInfo}</span>
                    </div>
                ` : ''}
            </div>
            
            <div class="profile-actions">
                <button class="action-btn speak-btn" onclick="speakPersonIntroduction('${person.text}')">
                    🔊 Introduce
                </button>
                <button class="action-btn call-btn" onclick="speakText('I would like to call ${person.text}', this)">
                    📞 Call
                </button>
                <button class="action-btn message-btn" onclick="speakText('I want to send a message to ${person.text}', this)">
                    💬 Message
                </button>
            </div>
        </div>
    `;
    
    modal.querySelector('.close-profile').addEventListener('click', function() {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
    
    document.addEventListener('keydown', function closeOnEscape(e) {
        if (e.key === 'Escape') {
            if (document.body.contains(modal)) {
                document.body.removeChild(modal);
            }
            document.removeEventListener('keydown', closeOnEscape);
        }
    });
    
    document.body.appendChild(modal);
    return modal;
}

// ============================================================================
// CONTENT MANAGEMENT FUNCTIONS
// ============================================================================

function populateRemovePhraseOptions() {
    const categorySelect = document.getElementById('removeCategorySelect');
    const phraseSelect = document.getElementById('removePhraseSelect');
    const category = categorySelect.value;
    
    phraseSelect.innerHTML = '';
    
    if (buttonData[category]) {
        buttonData[category].forEach(phrase => {
            const option = document.createElement('option');
            option.value = phrase.text;
            option.textContent = phrase.text;
            phraseSelect.appendChild(option);
        });
    }
}

function populateEditPhraseOptions() {
    const categorySelect = document.getElementById('editCategorySelect');
    const phraseSelect = document.getElementById('editPhraseSelect');
    const category = categorySelect.value;
    
    phraseSelect.innerHTML = '';
    
    if (buttonData[category]) {
        buttonData[category].forEach(phrase => {
            const option = document.createElement('option');
            option.value = phrase.text;
            option.textContent = phrase.text;
            phraseSelect.appendChild(option);
        });
        
        if (buttonData[category].length > 0) {
            const firstPhrase = buttonData[category][0];
            document.getElementById('editPhraseText').value = firstPhrase.text;
            document.getElementById('editPhraseImage').value = firstPhrase.image;
        }
    }
}

function updateEditFields() {
    const category = document.getElementById('editCategorySelect').value;
    const phraseSelect = document.getElementById('editPhraseSelect');
    const selectedText = phraseSelect.value;
    
    if (selectedText && buttonData[category]) {
        const phrase = buttonData[category].find(p => p.text === selectedText);
        if (phrase) {
            document.getElementById('editPhraseText').value = phrase.text;
            document.getElementById('editPhraseImage').value = phrase.image;
        }
    }
}

function populateReorderList() {
    const category = document.getElementById('reorderCategorySelect').value;
    const phraseList = document.getElementById('phraseList');
    
    phraseList.innerHTML = '';
    
    if (!buttonData[category] || buttonData[category].length === 0) {
        phraseList.innerHTML = `
            <div class="reorder-instructions">
                No phrases in this category to reorder
            </div>
        `;
        return;
    }
    
    buttonData[category].forEach((phrase, index) => {
        const li = document.createElement('li');
        li.className = 'phrase-item';
        li.draggable = true;
        li.dataset.index = index;
        
        li.innerHTML = `
            <span class="phrase-handle">☰</span>
            <span class="phrase-text">${phrase.text}</span>
            <span class="phrase-image">${phrase.image}</span>
        `;
        
        li.addEventListener('dragstart', handleDragStart);
        li.addEventListener('dragover', handleDragOver);
        li.addEventListener('drop', handleDrop);
        li.addEventListener('dragend', handleDragEnd);
        
        phraseList.appendChild(li);
    });
}

// Drag and drop functions
let draggedItem = null;

function handleDragStart(e) {
    draggedItem = this;
    this.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    this.classList.add('drop-zone');
}

function handleDragEnd(e) {
    this.classList.remove('dragging');
    document.querySelectorAll('.phrase-item').forEach(item => {
        item.classList.remove('drop-zone');
    });
}

function handleDrop(e) {
    e.preventDefault();
    this.classList.remove('drop-zone');
    
    if (draggedItem !== this) {
        const phraseList = document.getElementById('phraseList');
        const items = Array.from(phraseList.querySelectorAll('.phrase-item'));
        const fromIndex = items.indexOf(draggedItem);
        const toIndex = items.indexOf(this);
        
        if (fromIndex !== -1 && toIndex !== -1) {
            const category = document.getElementById('reorderCategorySelect').value;
            const [movedItem] = buttonData[category].splice(fromIndex, 1);
            buttonData[category].splice(toIndex, 0, movedItem);
            
            if (fromIndex < toIndex) {
                phraseList.insertBefore(draggedItem, this.nextSibling);
            } else {
                phraseList.insertBefore(draggedItem, this);
            }
            
            items.forEach((item, index) => {
                item.dataset.index = index;
            });
        }
    }
}

function addNewPhrase() {
    const category = document.getElementById('addCategorySelect').value;
    const text = document.getElementById('newPhraseText').value.trim();
    const image = document.getElementById('newPhraseImage').value.trim() || 'default.jpg';
    
    if (!text) {
        alert('Please enter phrase text');
        return;
    }
    
    if (!buttonData[category]) {
        buttonData[category] = [];
    }
    
    if (buttonData[category].some(p => p.text === text)) {
        alert('This phrase already exists in the selected category');
        return;
    }
    
    buttonData[category].push({
        text: text,
        image: image
    });
    
    saveDataToStorage();
    
    document.getElementById('newPhraseText').value = '';
    document.getElementById('newPhraseImage').value = '';
    
    populateRemovePhraseOptions();
    populateEditPhraseOptions();
    populateReorderList();
    
    const activeCategory = document.querySelector('.tab.active').getAttribute('data-category');
    if (activeCategory === category) {
        populateGrid(category);
    }
    
    alert(`Added "${text}" to ${category}`);
    showToast('💾 Remember to export a backup after changes', 'warning');

}

function removeSelectedPhrase() {
    const category = document.getElementById('removeCategorySelect').value;
    const phraseSelect = document.getElementById('removePhraseSelect');
    const text = phraseSelect.value;
    
    if (!text) {
        alert('Please select a phrase to remove');
        return;
    }
    
    if (confirm(`Are you sure you want to remove "${text}" from ${category}?`)) {
        buttonData[category] = buttonData[category].filter(item => item.text !== text);
        
        saveDataToStorage();
        
        populateRemovePhraseOptions();
        populateEditPhraseOptions();
        populateReorderList();
        
        const activeCategory = document.querySelector('.tab.active').getAttribute('data-category');
        if (activeCategory === category) {
            populateGrid(category);
        }
        
        alert(`Removed "${text}" from ${category}`);
    }
}

function updateSelectedPhrase() {
    const category = document.getElementById('editCategorySelect').value;
    const oldText = document.getElementById('editPhraseSelect').value;
    const newText = document.getElementById('editPhraseText').value.trim();
    const newImage = document.getElementById('editPhraseImage').value.trim() || 'default.jpg';
    
    if (!newText) {
        alert('Please enter phrase text');
        return;
    }
    
    if (!oldText) {
        alert('Please select a phrase to edit');
        return;
    }
    
    const phraseIndex = buttonData[category].findIndex(p => p.text === oldText);
    if (phraseIndex === -1) {
        alert('Phrase not found');
        return;
    }
    
    const duplicate = buttonData[category].find((p, index) => 
        p.text === newText && index !== phraseIndex
    );
    
    if (duplicate) {
        alert('This phrase already exists in the selected category');
        return;
    }
    
    buttonData[category][phraseIndex] = {
        text: newText,
        image: newImage
    };
    
    saveDataToStorage();
    
    populateRemovePhraseOptions();
    populateEditPhraseOptions();
    populateReorderList();
    
    const activeCategory = document.querySelector('.tab.active').getAttribute('data-category');
    if (activeCategory === category) {
        populateGrid(category);
    }
    
    alert(`Updated phrase to "${newText}"`);
}

function saveNewOrder() {
    const category = document.getElementById('reorderCategorySelect').value;
    
    saveDataToStorage();
    
    const activeCategory = document.querySelector('.tab.active').getAttribute('data-category');
    if (activeCategory === category) {
        populateGrid(category);
    }
    
    alert(`New order saved for ${category}`);
}

function showAllPhrases() {
    console.log('=== ALL PHRASES ===');
    Object.keys(buttonData).forEach(category => {
        if (category !== 'MyPeople') {
            console.log(`\n--- ${category.toUpperCase()} ---`);
            buttonData[category].forEach(phrase => {
                console.log(`• ${phrase.text}`);
            });
        }
    });
    alert('Check browser console (F12) to see all phrases');
}

function reloadApp() {
    const activeCategory = document.querySelector('.tab.active').getAttribute('data-category');
    populateGrid(activeCategory);
    hideManagementPanel();
    alert('App reloaded!');
}

function exportButtonData() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      showToast('⚠️ No data found to export', 'warning');
      return;
    }

    // Handle both compressed and uncompressed formats
    let decompressedData;
    if (stored.startsWith('{')) {
      // Old uncompressed JSON
      decompressedData = JSON.parse(stored);
    } else {
      // New compressed data
      const decompressed = LZString.decompressFromUTF16(stored);
      decompressedData = JSON.parse(decompressed);
    }

    // Make sure we include a lastModified field
    if (!decompressedData.lastModified)
      decompressedData.lastModified = new Date().toISOString();

    const jsonString = JSON.stringify(decompressedData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `mynewvoice_backup_${new Date()
      .toISOString()
      .split('T')[0]}.json`;
    link.click();

    showToast('📤 Backup exported successfully', 'success');
  } catch (err) {
    console.error('Export failed:', err);
    showToast('❌ Export failed', 'error');
  }
}



// === SERVICE WORKER REGISTRATION WITH UPDATE PROMPT ===
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(reg => {
    reg.onupdatefound = () => {
      const newWorker = reg.installing;
      newWorker.onstatechange = () => {
        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
          // A new version is ready
          if (confirm('🔄 Update available. Reload now?')) {
            newWorker.postMessage('skipWaiting');
            window.location.reload();
          }
        }
      };
    };
  }).catch(err => console.error('SW registration failed:', err));
}

// ============================================================================
// INITIALIZATION
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('MyNewVoice app initializing...');
    
    // Load saved data first
    loadDataFromStorage();
    
    // === OFFLINE STARTUP FALLBACK ===
    if (!buttonData || Object.keys(buttonData).length === 0) {
        console.warn('⚠️ No local data found — using minimal offline fallback.');
        buttonData = {
            food: [
                { text: "I'm hungry", image: "default.jpg" },
                { text: "I'd like a drink", image: "default.jpg" }
            ]
        };
    }


    // Load the first category by default
    populateGrid('food');
    
    // Set up tab click handlers
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            populateGrid(category);
            
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Set up management toggle button
    const toggleBtn = document.getElementById('managementToggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            showPasswordModal();
        });
    }
    
    // Set up password modal buttons
    const passwordSubmit = document.getElementById('passwordSubmit');
    if (passwordSubmit) {
        passwordSubmit.addEventListener('click', checkPassword);
    }
    
    const passwordCancel = document.getElementById('passwordCancel');
    if (passwordCancel) {
        passwordCancel.addEventListener('click', hidePasswordModal);
    }
    
    // Set up management panel buttons
  
    
    const addPhrase = document.getElementById('addPhrase');
    if (addPhrase) {
        addPhrase.addEventListener('click', addNewPhrase);
    }
    
    const removePhrase = document.getElementById('removePhrase');
    if (removePhrase) {
        removePhrase.addEventListener('click', removeSelectedPhrase);
    }
    // === SUBTITLES TOGGLE PREFERENCE ===
const toggleSubtitles = document.getElementById('toggleSubtitles');

if (toggleSubtitles) {
  // Load saved setting (default = true)
  const saved = localStorage.getItem('showSubtitles');
  toggleSubtitles.checked = saved !== 'false';

  // Save new setting whenever changed
  toggleSubtitles.addEventListener('change', () => {
    localStorage.setItem('showSubtitles', toggleSubtitles.checked);
    showToast(
      toggleSubtitles.checked
        ? '🟢 Subtitles enabled'
        : '⚫ Subtitles disabled',
      'success'
    );
  });
}

    const exportData = document.getElementById('exportData');
    if (exportData) {
        exportData.addEventListener('click', exportButtonData);
    }
    
// === SPEECH SUBTITLE TOGGLE (TOP BAR) ===
const subtitleToggle = document.getElementById('subtitleToggle');

if (subtitleToggle) {
  // Initialise state
  const showSubtitles = localStorage.getItem('showSubtitles') !== 'false';
  subtitleToggle.classList.toggle('active', showSubtitles);
  subtitleToggle.textContent = showSubtitles ? '💬' : '💭';

  subtitleToggle.addEventListener('click', () => {
    const currentlyOn = localStorage.getItem('showSubtitles') !== 'false';
    const newState = !currentlyOn;
    localStorage.setItem('showSubtitles', newState);
    subtitleToggle.classList.toggle('active', newState);
    subtitleToggle.textContent = newState ? '💬' : '💭';
    showToast(newState ? '🟢 Subtitles ON' : '⚫ Subtitles OFF', 'success');
  });
}


// === THEME TOGGLE ===
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme') || 'light';
document.body.dataset.theme = savedTheme;
themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.dataset.theme;
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.dataset.theme = newTheme;
    localStorage.setItem('theme', newTheme);
    themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
  });
}

//


    // === IMPORT DATA FEATURE ===
    const importDataBtn = document.getElementById('importData');
    const importFileInput = document.getElementById('importFile');

    if (importDataBtn && importFileInput) {
        // Clicking "Import Data" opens file chooser
        importDataBtn.addEventListener('click', () => importFileInput.click());

        // When user selects a JSON file
      importFileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const imported = JSON.parse(event.target.result);
      const localData = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');

      const localTime = new Date(localData.lastModified || 0);
      const importTime = new Date(imported.lastModified || 0);

      if (importTime > localTime) {
        if (confirm(`Import file is newer (last updated ${importTime.toLocaleString()}). Replace current data?`)) {
          buttonData = imported.buttonData || imported; // support old format
          saveDataToStorage();
          populateGrid('food');
          showToast('✅ Newer data imported successfully!', 'success');
        } else {
          showToast('Import cancelled.', 'warning');
        }
      } else {
        showToast('⚠️ Import file is older or missing timestamp — skipped.', 'warning');
      }
    } catch (err) {
      alert('❌ Import failed: invalid file.');
      console.error(err);
    }
  };
  reader.readAsText(file);
});

    }

    const showAllPhrasesBtn = document.getElementById('showAllPhrases');
    if (showAllPhrasesBtn) {
        showAllPhrasesBtn.addEventListener('click', showAllPhrases);
    }
    
    const reloadAppBtn = document.getElementById('reloadApp');
    if (reloadAppBtn) {
        reloadAppBtn.addEventListener('click', reloadApp);
    }
    
    const resetData = document.getElementById('resetData');
    if (resetData) {
        resetData.addEventListener('click', resetToDefaultData);
    }
    
    // Edit and reorder event listeners
    const editCategorySelect = document.getElementById('editCategorySelect');
    if (editCategorySelect) {
        editCategorySelect.addEventListener('change', function() {
            populateEditPhraseOptions();
        });
    }

    const editPhraseSelect = document.getElementById('editPhraseSelect');
    if (editPhraseSelect) {
        editPhraseSelect.addEventListener('change', updateEditFields);
    }

    const updatePhrase = document.getElementById('updatePhrase');
    if (updatePhrase) {
        updatePhrase.addEventListener('click', updateSelectedPhrase);
    }

    const reorderCategorySelect = document.getElementById('reorderCategorySelect');
    if (reorderCategorySelect) {
        reorderCategorySelect.addEventListener('change', populateReorderList);
    }

    const saveOrder = document.getElementById('saveOrder');
    if (saveOrder) {
        saveOrder.addEventListener('click', saveNewOrder);
    }

    // Update remove phrase options when category changes
    const removeCategorySelect = document.getElementById('removeCategorySelect');
    if (removeCategorySelect) {
        removeCategorySelect.addEventListener('change', populateRemovePhraseOptions);
    }
    
    // Update all dropdowns when any category changes
    [removeCategorySelect, editCategorySelect, reorderCategorySelect].forEach(select => {
        if (select) {
            select.addEventListener('change', function() {
                populateRemovePhraseOptions();
                populateEditPhraseOptions();
                populateReorderList();
            });
        }
    });

    // Initial population of all dropdowns
    setTimeout(() => {
        populateRemovePhraseOptions();
        populateEditPhraseOptions();
        populateReorderList();
    }, 500);

// === MANAGEMENT OVERLAY CLICK BEHAVIOUR ===
const managementOverlay = document.getElementById('managementOverlay');
const managementPanel = document.getElementById('managementPanel');
const closeManagementBtn = document.getElementById('closeManagement');

if (managementOverlay && managementPanel) {
  // Close when clicking ❌
  if (closeManagementBtn) {
    closeManagementBtn.addEventListener('click', hideManagementPanel);
  }

  // Close when clicking outside the panel
  managementOverlay.addEventListener('click', (event) => {
    if (!managementPanel.contains(event.target)) {
      hideManagementPanel();
    }
  });

  // Optional: close with Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') hideManagementPanel();
  });
}
    

    console.log('App initialization complete!');
});

// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('./sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            })
            .catch(function(error) {
                console.log('ServiceWorker registration failed: ', error);
            });
    });
}