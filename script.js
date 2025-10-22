// ============================================================================
// DATA PERSISTENCE FUNCTIONS - SAVES DATA BETWEEN SESSIONS
// ============================================================================

const STORAGE_KEY = 'mynevoice_data';

// Function to save all data to localStorage
function saveDataToStorage() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(buttonData));
        console.log('Data saved to localStorage');
    } catch (error) {
        console.error('Error saving data:', error);
    }
}

// Function to load data from localStorage
function loadDataFromStorage() {
    try {
        const savedData = localStorage.getItem(STORAGE_KEY);
        if (savedData) {
            const parsedData = JSON.parse(savedData);
            // Merge saved data with default data structure
            Object.keys(parsedData).forEach(category => {
                if (buttonData[category]) {
                    buttonData[category] = parsedData[category];
                }
            });
            console.log('Data loaded from localStorage');
        }
    } catch (error) {
        console.error('Error loading data:', error);
    }
}

// Function to reset to default data
function resetToDefaultData() {
    if (confirm('Are you sure you want to reset all data to default? This cannot be undone.')) {
        localStorage.removeItem(STORAGE_KEY);
        location.reload(); // Reload the page to use default data
    }
}

// ============================================================================
// PASSWORD PROTECTION - FIXED VERSION
// ============================================================================

const MANAGEMENT_PASSWORD = "19Hector";

function showPasswordModal() {
    console.log('Showing password modal');
    document.getElementById('passwordModal').style.display = 'flex';
    document.getElementById('passwordInput').value = '';
    document.getElementById('passwordInput').focus();
}

function hidePasswordModal() {
    console.log('Hiding password modal');
    document.getElementById('passwordModal').style.display = 'none';
    document.getElementById('passwordInput').value = '';
}

function checkPassword() {
    const input = document.getElementById('passwordInput').value;
    console.log('Password check:', input);
    
    if (input === MANAGEMENT_PASSWORD) {
        console.log('Password correct');
        hidePasswordModal();
        showManagementPanel();
    } else {
        alert('Incorrect password. Please try again.');
        document.getElementById('passwordInput').value = '';
        document.getElementById('passwordInput').focus();
    }
}

function showManagementPanel() {
    const panel = document.getElementById('managementPanel');
    console.log('Showing management panel');
    panel.style.display = 'block';
    populateRemovePhraseOptions();
}

function hideManagementPanel() {
    console.log('Hiding management panel');
    document.getElementById('managementPanel').style.display = 'none';
}

// ============================================================================
// BUTTON DATA STRUCTURE WITH PERSISTENCE
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
            birthday: "1985-08-15",
            phone: "",
            detailedIntro: "This is Sue, my wonderful wife. She's retired and we lives in Seatoun. She's the most caring person I know.",
            family: "We have three children together",
            hobbies: "She loves cricket and rugby",
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
            birthday: "1970-05-10",
            phone: "",
            detailedIntro: "This is Malcolm, my son. He's a Social Worker and lives in Sweden with his family. He's married to Tess and they have two children, Loke and Leon.",
            family: "Married to Tess, father of Loke and Leon",
            hobbies: "He enjoys boy bands and hairy men",
            additionalInfo: "I think he might be gay!"
        },
        { 
            text: "Tess", 
            image: "Tess.jpg",
            relationship: "My Daughter-in-law",
            occupation: "Computer Specialist",
            location: "Lives in Sweden",
            birthday: "1972-11-30",
            phone: "555-0130",
            detailedIntro: "This is Tess, my daughter-in-law. She's a Computer Specialist and lives in Sweden with Malcolm and their children. She's very talented with technology.",
            family: "Married to Malcolm, mother of Loke and Leon",
            hobbies: "She loves coding and solving technical problems",
            additionalInfo: "She always helps me with my computer problems"
        },
        { 
            text: "Loke", 
            image: "Loke.jpg",
            relationship: "My Grandson",
            occupation: "Student",
            location: "Lives in Sweden",
            birthday: "2005-09-14",
            phone: "555-0131",
            detailedIntro: "This is Loke, my grandson. He's 18 years old and a student in Sweden. He's the son of Malcolm and Tess, and the older brother of Leon.",
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
            birthday: "2007-12-01",
            phone: "555-0132",
            detailedIntro: "This is Leon, my grandson. He's 16 years old and a student in Sweden. He's Malcolm and Tess's younger son, and Loke's brother.",
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
let buttonData = JSON.parse(JSON.stringify(defaultButtonData)); // Deep copy

// ============================================================================
// MAIN APP FUNCTIONS
// ============================================================================

function populateGrid(category) {
    const grid = document.getElementById('buttonGrid');
    grid.innerHTML = ''; // Clear the grid first

    const buttons = buttonData[category];

    if (!buttons) {
        grid.innerHTML = '<p>Category not found. Please check the console.</p>';
        return;
    }

    // Create a button for each item in the array
    buttons.forEach(buttonInfo => {
        const button = document.createElement('button');
        button.className = 'grid-button';

        // Construct the image path from our data
        const imagePath = `images/${category}/${buttonInfo.image}`;

        // Special handling for My People category
        if (category === 'MyPeople' && buttonInfo.relationship) {
            const countdown = getBirthdayCountdown(buttonInfo.birthday);
            const hasBirthdaySoon = buttonInfo.birthday && countdown !== "";
            
            button.innerHTML = `
                <img src="${imagePath}" alt="${buttonInfo.text}" onerror="this.style.display='none'">
                <span>${buttonInfo.text}</span>
                <div class="person-details">
                    <small>${buttonInfo.relationship}</small>
                    ${buttonInfo.occupation ? `<small class="occupation">${buttonInfo.occupation}</small>` : ''}
                    ${hasBirthdaySoon ? `<small class="countdown">🎂 ${countdown}</small>` : ''}
                </div>
            `;

            // UPDATED CLICK HANDLER - Opens profile modal instead of speaking immediately
            button.addEventListener('click', function() {
                const modal = createPersonProfile(buttonInfo);
                document.body.appendChild(modal);
            });
        } else {
            // Regular button for other categories
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
}

function speakText(text, buttonElement) {
    const synth = window.speechSynthesis;
    
    // Cancel any ongoing speech to allow rapid button pressing
    synth.cancel();

    // Update the message bar
    const messageBar = document.getElementById('messageBar');
    messageBar.innerHTML = `<p>${text}</p>`;

    // Visual feedback on the pressed button
    if (buttonElement) {
        // Add speaking class for visual indication
        buttonElement.classList.add('speaking');
        
        buttonElement.style.backgroundColor = '#4CAF50';
        buttonElement.style.borderColor = '#388E3C';
        buttonElement.style.transform = 'scale(0.95)';

        // Reset the button appearance after speech
        setTimeout(() => {
            buttonElement.classList.remove('speaking');
            buttonElement.style.backgroundColor = '';
            buttonElement.style.borderColor = '';
            buttonElement.style.transform = '';
        }, 500);
    }

    // Speak the text
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Configure speech settings for clarity
    utterance.rate = text.length > 100 ? 0.85 : 0.9; // Slower for longer texts
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    // Handle speech end to reset button styling
    utterance.onend = function() {
        if (buttonElement) {
            buttonElement.classList.remove('speaking');
            buttonElement.style.backgroundColor = '';
            buttonElement.style.borderColor = '';
            buttonElement.style.transform = '';
        }
    };

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

function getSpokenBirthdayAnnouncement(birthday) {
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
    
    const options = { month: 'long', day: 'numeric' };
    const formattedDate = nextBirthday.toLocaleDateString('en-US', options);
    
    const day = nextBirthday.getDate();
    let suffix = 'th';
    if (day === 1 || day === 21 || day === 31) suffix = 'st';
    else if (day === 2 || day === 22) suffix = 'nd';
    else if (day === 3 || day === 23) suffix = 'rd';
    
    const dateWithSuffix = formattedDate.replace(day, day + suffix);
    
    if (diffDays === 0) {
        return `which is today! Happy birthday!`;
    } else if (diffDays === 1) {
        return `which is tomorrow`;
    } else if (diffDays <= 7) {
        return `which is in ${diffDays} day${diffDays > 1 ? 's' : ''}`;
    } else if (diffDays <= 14) {
        return `which is in 1 week`;
    } else if (diffDays <= 30) {
        const weeks = Math.floor(diffDays / 7);
        return `which is in ${weeks} week${weeks > 1 ? 's' : ''}`;
    } else {
        const months = Math.floor(diffDays / 30);
        const remainingWeeks = Math.floor((diffDays % 30) / 7);
        
        if (months > 0 && remainingWeeks > 0) {
            return `which is in ${months} month${months > 1 ? 's' : ''} and ${remainingWeeks} week${remainingWeeks > 1 ? 's' : ''}`;
        } else {
            return `which is in ${months} month${months > 1 ? 's' : ''}`;
        }
    }
}

// ============================================================================
// PERSON PROFILE MODAL FUNCTIONS
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
        const countdownPhrase = getSpokenBirthdayAnnouncement(person.birthday);
        
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

function loadAdditionalPhotos(person) {
    const photoGrid = document.getElementById(`additionalPhotos-${person.text.replace(/\s+/g, '')}`);
    if (!photoGrid) return;
    
    photoGrid.innerHTML = '';
    
    if (person.additionalPhotos && person.additionalPhotos.length > 0) {
        person.additionalPhotos.forEach(photoName => {
            const img = document.createElement('img');
            img.src = `images/MyPeople/extra/${photoName}`;
            img.alt = `${person.text} - ${photoName.replace('.jpg', '').replace(/_/g, ' ')}`;
            img.className = 'additional-photo';
            img.onerror = function() {
                this.style.display = 'none';
            };
            img.onload = function() {
                console.log(`Loaded: ${photoName}`);
            };
            
            img.addEventListener('click', function() {
                enlargePhoto(this.src, this.alt);
            });
            
            photoGrid.appendChild(img);
        });
    } else {
        const defaultPhotos = [
            `${person.text.toLowerCase()}_1.jpg`,
            `${person.text.toLowerCase()}_2.jpg`, 
            `${person.text.toLowerCase()}_3.jpg`
        ];
        
        defaultPhotos.forEach(photoName => {
            const img = document.createElement('img');
            img.src = `images/MyPeople/extra/${photoName}`;
            img.alt = `${person.text} - additional photo`;
            img.className = 'additional-photo';
            img.onerror = function() {
                this.style.display = 'none';
            };
            photoGrid.appendChild(img);
        });
    }
    
    setTimeout(() => {
        if (photoGrid.children.length === 0) {
            photoGrid.innerHTML = `
                <div class="photo-placeholder">
                    <span>More photos coming soon...</span>
                </div>
            `;
        }
    }, 2000);
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
            
            <div class="additional-photos">
                <h3>More Photos</h3>
                <div class="photo-grid" id="additionalPhotos-${person.text.replace(/\s+/g, '')}">
                    <div class="photo-placeholder">
                        <span>Loading photos...</span>
                    </div>
                </div>
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
            document.body.removeChild(modal);
            document.removeEventListener('keydown', closeOnEscape);
        }
    });
    
    loadAdditionalPhotos(person);
    
    return modal;
}

function enlargePhoto(src, alt) {
    const overlay = document.createElement('div');
    overlay.className = 'photo-overlay';
    overlay.innerHTML = `
        <div class="enlarged-photo-container">
            <button class="close-enlarged">&times;</button>
            <img src="${src}" alt="${alt}" class="enlarged-photo">
            <p class="photo-caption">${alt}</p>
        </div>
    `;
    
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('close-enlarged')) {
            document.body.removeChild(overlay);
        }
    });
    
    document.body.appendChild(overlay);
}

// ============================================================================
// CONTENT MANAGEMENT FUNCTIONS WITH PERSISTENCE
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
    
    // Check if phrase already exists
    if (buttonData[category].some(p => p.text === text)) {
        alert('This phrase already exists in the selected category');
        return;
    }
    
    // Add the new phrase
    buttonData[category].push({
        text: text,
        image: image
    });
    
    // Save to localStorage
    saveDataToStorage();
    
    // Clear inputs
    document.getElementById('newPhraseText').value = '';
    document.getElementById('newPhraseImage').value = '';
    
    // Update remove phrase options
    populateRemovePhraseOptions();
    
    // Refresh the current grid if we're viewing that category
    const activeCategory = document.querySelector('.tab.active').getAttribute('data-category');
    if (activeCategory === category) {
        populateGrid(category);
    }
    
    alert(`Added "${text}" to ${category}`);
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
        // Remove the phrase
        buttonData[category] = buttonData[category].filter(item => item.text !== text);
        
        // Save to localStorage
        saveDataToStorage();
        
        // Update remove phrase options
        populateRemovePhraseOptions();
        
        // Refresh the current grid if we're viewing that category
        const activeCategory = document.querySelector('.tab.active').getAttribute('data-category');
        if (activeCategory === category) {
            populateGrid(category);
        }
        
        alert(`Removed "${text}" from ${category}`);
    }
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
    const dataStr = JSON.stringify(buttonData, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = 'mynevoice_data_backup.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    alert('Data exported! File: mynevoice_data_backup.json');
}

// ============================================================================
// EDIT AND REORDER FUNCTIONS
// ============================================================================

// Function to populate edit phrase dropdown
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
        
        // Auto-fill the first phrase for editing
        if (buttonData[category].length > 0) {
            const firstPhrase = buttonData[category][0];
            document.getElementById('editPhraseText').value = firstPhrase.text;
            document.getElementById('editPhraseImage').value = firstPhrase.image;
        }
    }
}

// Function to update phrase when selection changes
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

// Function to update an existing phrase
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
    
    // Find the phrase to update
    const phraseIndex = buttonData[category].findIndex(p => p.text === oldText);
    if (phraseIndex === -1) {
        alert('Phrase not found');
        return;
    }
    
    // Check if new text already exists (and it's not the same phrase)
    const duplicate = buttonData[category].find((p, index) => 
        p.text === newText && index !== phraseIndex
    );
    
    if (duplicate) {
        alert('This phrase already exists in the selected category');
        return;
    }
    
    // Update the phrase
    buttonData[category][phraseIndex] = {
        text: newText,
        image: newImage
    };
    
    // Save to localStorage
    saveDataToStorage();
    
    // Update all dropdowns
    populateRemovePhraseOptions();
    populateEditPhraseOptions();
    populateReorderList();
    
    // Refresh the current grid if we're viewing that category
    const activeCategory = document.querySelector('.tab.active').getAttribute('data-category');
    if (activeCategory === category) {
        populateGrid(category);
    }
    
    alert(`Updated phrase to "${newText}"`);
}

// Function to populate reorder list
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
        
        // Add drag and drop event listeners
        li.addEventListener('dragstart', handleDragStart);
        li.addEventListener('dragover', handleDragOver);
        li.addEventListener('drop', handleDrop);
        li.addEventListener('dragend', handleDragEnd);
        
        phraseList.appendChild(li);
    });
}

// Drag and drop functions for reordering
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
            // Reorder the array
            const category = document.getElementById('reorderCategorySelect').value;
            const [movedItem] = buttonData[category].splice(fromIndex, 1);
            buttonData[category].splice(toIndex, 0, movedItem);
            
            // Update the display
            if (fromIndex < toIndex) {
                phraseList.insertBefore(draggedItem, this.nextSibling);
            } else {
                phraseList.insertBefore(draggedItem, this);
            }
            
            // Update indices
            items.forEach((item, index) => {
                item.dataset.index = index;
            });
        }
    }
}

// Function to save the new order
function saveNewOrder() {
    const category = document.getElementById('reorderCategorySelect').value;
    
    // The array is already reordered from the drag and drop
    // Just need to save it
    saveDataToStorage();
    
    // Refresh the current grid if we're viewing that category
    const activeCategory = document.querySelector('.tab.active').getAttribute('data-category');
    if (activeCategory === category) {
        populateGrid(category);
    }
    
    alert(`New order saved for ${category}`);
}

// Function to populate all dropdowns when category changes
function populateAllDropdowns() {
    populateRemovePhraseOptions();
    populateEditPhraseOptions();
    populateReorderList();
}

// ============================================================================
// ENHANCED EDITING UTILITIES
// ============================================================================

// Quick edit by double-clicking phrases in the main grid
function enableQuickEdit() {
    document.addEventListener('dblclick', function(e) {
        const gridButton = e.target.closest('.grid-button');
        if (gridButton && !gridButton.closest('[data-category="MyPeople"]')) {
            const phraseText = gridButton.querySelector('span').textContent;
            const activeCategory = document.querySelector('.tab.active').getAttribute('data-category');
            
            // Switch to management panel and pre-fill edit fields
            showPasswordModal();
            
            // After password is entered, set up the edit fields
            setTimeout(() => {
                if (document.getElementById('managementPanel').style.display === 'block') {
                    document.getElementById('editCategorySelect').value = activeCategory;
                    populateEditPhraseOptions();
                    document.getElementById('editPhraseSelect').value = phraseText;
                    updateEditFields();
                    
                    // Scroll to edit section
                    document.getElementById('editPhraseText').scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'center' 
                    });
                    document.getElementById('editPhraseText').focus();
                }
            }, 100);
        }
    });
}

// Initialize quick edit
enableQuickEdit();

// Export current order for backup
function exportCategoryOrder() {
    const category = document.getElementById('reorderCategorySelect').value;
    const orderData = {
        category: category,
        phrases: buttonData[category]
    };
    
    const dataStr = JSON.stringify(orderData, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `mynevoice_${category}_order.json`;
    link.click();
    
    alert(`Exported order for ${category}`);
}

// ============================================================================
// INITIALIZATION - FIXED EVENT LISTENERS
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('MyNewVoice app initializing...');
    
    // Debug: Check if buttonData exists
    console.log('Button data loaded:', buttonData);
    console.log('Food category has items:', buttonData.food ? buttonData.food.length : 'No food category');
    
    // Load saved data first
    loadDataFromStorage();
    
    // Debug after loading
    console.log('After loading from storage - Food items:', buttonData.food.length);
    
    // Load the first category by default
    populateGrid('food');
    
    // Debug after populating grid
    console.log('Grid populated, checking button count:', document.querySelectorAll('.grid-button').length);
    
    // Set up tab click handlers
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            console.log('Tab clicked:', category, 'Items:', buttonData[category] ? buttonData[category].length : 0);
            populateGrid(category);
            
            // Update active tab styling
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Set up management toggle button - FIXED
    const toggleBtn = document.getElementById('managementToggle');
    if (toggleBtn) {
        console.log('Management toggle button found');
        toggleBtn.addEventListener('click', function() {
            console.log('Cog button clicked - showing password modal');
            showPasswordModal();
        });
    } else {
        console.error('Management toggle button NOT found!');
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
    const closeManagement = document.getElementById('closeManagement');
    if (closeManagement) {
        closeManagement.addEventListener('click', hideManagementPanel);
    }
    
    const addPhrase = document.getElementById('addPhrase');
    if (addPhrase) {
        addPhrase.addEventListener('click', addNewPhrase);
    }
    
    const removePhrase = document.getElementById('removePhrase');
    if (removePhrase) {
        removePhrase.addEventListener('click', removeSelectedPhrase);
    }
    
    const exportData = document.getElementById('exportData');
    if (exportData) {
        exportData.addEventListener('click', exportButtonData);
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
    
    // EDIT AND REORDER EVENT LISTENERS
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

    // Reorder functionality
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
    
    // Add developer tools to console for easier content management
    console.log('MyNewVoice Developer Tools Available:');
    console.log('- exportButtonData(): Export all data as JSON');
    console.log('- addNewPhrase(): Add new phrase through UI');
    console.log('- showAllPhrases(): View all phrases in console');
    
    console.log('App initialization complete!');
    console.log('Available categories:', Object.keys(buttonData));
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