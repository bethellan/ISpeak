// Comprehensive button data structure for reliable image loading
const buttonData = {
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

// ============================================================================
// BIRTHDAY COUNTDOWN FUNCTIONS
// ============================================================================

// Enhanced function to calculate detailed birthday countdown
function getBirthdayCountdown(birthday) {
    if (!birthday) return "";
    
    const today = new Date();
    const currentYear = today.getFullYear();
    const nextBirthday = new Date(currentYear + '-' + birthday.substring(5));
    
    // If birthday already passed this year, use next year
    if (nextBirthday < today) {
        nextBirthday.setFullYear(currentYear + 1);
    }
    
    const diffTime = nextBirthday - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    // Calculate months, weeks, and days
    const months = Math.floor(diffDays / 30);
    const remainingDaysAfterMonths = diffDays % 30;
    const weeks = Math.floor(remainingDaysAfterMonths / 7);
    const days = remainingDaysAfterMonths % 7;
    
    // Special cases
    if (diffDays === 0) return "Today! 🎉";
    if (diffDays === 1) return "Tomorrow!";
    
    // Build detailed countdown string
    let countdownParts = [];
    if (months > 0) {
        countdownParts.push(`${months} month${months > 1 ? 's' : ''}`);
    }
    if (weeks > 0) {
        countdownParts.push(`${weeks} week${weeks > 1 ? 's' : ''}`);
    }
    if (days > 0) {
        countdownParts.push(`${days} day${days > 1 ? 's' : ''}`);
    }
    
    // Handle very near birthdays
    if (diffDays <= 7) {
        return `${diffDays} day${diffDays > 1 ? 's' : ''}`;
    }
    
    return countdownParts.join(', ');
}

// Additional function to get spoken countdown (simpler version for speech)
function getSpokenCountdown(birthday) {
    if (!birthday) return "";
    
    const today = new Date();
    const currentYear = today.getFullYear();
    const nextBirthday = new Date(currentYear + '-' + birthday.substring(5));
    
    if (nextBirthday < today) {
        nextBirthday.setFullYear(currentYear + 1);
    }
    
    const diffTime = nextBirthday - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return "today";
    if (diffDays === 1) return "tomorrow";
    
    if (diffDays <= 7) {
        return `in ${diffDays} days`;
    }
    
    const months = Math.floor(diffDays / 30);
    const weeks = Math.floor((diffDays % 30) / 7);
    
    if (months > 0 && weeks > 0) {
        return `in ${months} month${months > 1 ? 's' : ''} and ${weeks} week${weeks > 1 ? 's' : ''}`;
    } else if (months > 0) {
        return `in ${months} month${months > 1 ? 's' : ''}`;
    } else {
        return `in ${weeks} week${weeks > 1 ? 's' : ''}`;
    }
}

// ============================================================================
// PERSON PROFILE MODAL FUNCTIONS
// ============================================================================

// Function to create and speak natural person introductions
function speakPersonIntroduction(personName) {
    const person = buttonData.MyPeople.find(p => p.text === personName);
    if (!person) return;

    let introduction = "";
    
    // Use the detailed intro if provided
    if (person.detailedIntro) {
        introduction = person.detailedIntro;
    } else {
        // Build introduction from individual fields
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

    // Add birthday information if it's coming up
    if (person.birthday) {
        const spokenCountdown = getSpokenCountdown(person.birthday);
        if (spokenCountdown && spokenCountdown !== "in 0 days") {
            introduction += `. ${person.text}'s birthday is ${spokenCountdown}`;
        }
    }

    speakText(introduction);
}

// Helper function to format birthday date
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

// Function to load additional photos for a person
function loadAdditionalPhotos(person) {
    const photoGrid = document.getElementById(`additionalPhotos-${person.text.replace(/\s+/g, '')}`);
    if (!photoGrid) return;
    
    // Clear placeholder
    photoGrid.innerHTML = '';
    
    // Example: Try to load 3 additional photos
    const additionalPhotos = [
        `${person.text.toLowerCase()}_1.jpg`,
        `${person.text.toLowerCase()}_2.jpg`, 
        `${person.text.toLowerCase()}_3.jpg`
    ];
    
    let photosLoaded = 0;
    
    additionalPhotos.forEach(photoName => {
        const img = document.createElement('img');
        img.src = `images/MyPeople/extra/${photoName}`;
        img.alt = `${person.text} - additional photo`;
        img.className = 'additional-photo';
        img.onerror = function() {
            this.style.display = 'none';
        };
        img.onload = function() {
            photosLoaded++;
        };
        photoGrid.appendChild(img);
    });
    
    // If no additional photos loaded, show message
    setTimeout(() => {
        if (photosLoaded === 0) {
            photoGrid.innerHTML = `
                <div class="photo-placeholder">
                    <span>More photos coming soon...</span>
                </div>
            `;
        }
    }, 1000);
}

// Function to create the person profile modal
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
            
            <!-- Additional Photos Section -->
            <div class="additional-photos">
                <h3>More Photos</h3>
                <div class="photo-grid" id="additionalPhotos-${person.text.replace(/\s+/g, '')}">
                    <div class="photo-placeholder">
                        <span>More photos coming soon...</span>
                    </div>
                </div>
            </div>
            
            <!-- Updated Quick Action Buttons -->
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
    
    // Add event listener to close button
    modal.querySelector('.close-profile').addEventListener('click', function() {
        document.body.removeChild(modal);
    });
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function closeOnEscape(e) {
        if (e.key === 'Escape') {
            document.body.removeChild(modal);
            document.removeEventListener('keydown', closeOnEscape);
        }
    });
    
    // Load additional photos if available
    loadAdditionalPhotos(person);
    
    return modal;
}

// ============================================================================
// CONTENT MANAGEMENT TOOLS (NEW - For easier editing)
// ============================================================================

// Function to export current button data for backup/editing
function exportButtonData() {
    const dataStr = JSON.stringify(buttonData, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = 'mynevoice_data_backup.json';
    link.click();
}

// Function to add a new phrase to a category
function addPhraseToCategory(category, text, image) {
    if (!buttonData[category]) {
        buttonData[category] = [];
    }
    
    buttonData[category].push({
        text: text,
        image: image || 'default.jpg'
    });
    
    // Refresh the current grid if we're viewing that category
    const activeCategory = document.querySelector('.tab.active').getAttribute('data-category');
    if (activeCategory === category) {
        populateGrid(category);
    }
}

// Function to remove a phrase from a category
function removePhraseFromCategory(category, text) {
    if (buttonData[category]) {
        buttonData[category] = buttonData[category].filter(item => item.text !== text);
        
        // Refresh the current grid if we're viewing that category
        const activeCategory = document.querySelector('.tab.active').getAttribute('data-category');
        if (activeCategory === category) {
            populateGrid(category);
        }
    }
}

// Function to add a new person
function addPerson(personData) {
    buttonData.MyPeople.push(personData);
    
    // Refresh if we're viewing My People
    const activeCategory = document.querySelector('.tab.active').getAttribute('data-category');
    if (activeCategory === 'MyPeople') {
        populateGrid('MyPeople');
    }
}

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
// CONTENT MANAGEMENT TOOLS (VISUAL INTERFACE)
// ============================================================================

// Toggle management panel visibility
function toggleManagementPanel() {
    const panel = document.getElementById('managementPanel');
    const toggleBtn = document.getElementById('managementToggle');
    
    if (panel.style.display === 'none') {
        panel.style.display = 'block';
        toggleBtn.textContent = '❌ Close Management';
        populateRemovePhraseOptions();
    } else {
        panel.style.display = 'none';
        toggleBtn.textContent = '⚙️ Manage Content';
    }
}

function hideManagementPanel() {
    document.getElementById('managementPanel').style.display = 'none';
    document.getElementById('managementToggle').textContent = '⚙️ Manage Content';
}

// Populate the remove phrase dropdown
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

// Update remove phrase options when category changes
document.addEventListener('DOMContentLoaded', function() {
    // Add management toggle button functionality
    const toggleBtn = document.getElementById('managementToggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleManagementPanel);
    }
    
    // Update remove phrase options when category changes
    const removeCategorySelect = document.getElementById('removeCategorySelect');
    if (removeCategorySelect) {
        removeCategorySelect.addEventListener('change', populateRemovePhraseOptions);
    }
    
    // Initial population of remove phrase options
    setTimeout(populateRemovePhraseOptions, 100);
});

// Add new phrase using visual interface
function addNewPhrase() {
    const category = document.getElementById('addCategorySelect').value;
    const text = document.getElementById('newPhraseText').value.trim();
    const image = document.getElementById('newPhraseImage').value.trim() || 'default.jpg';
    
    if (!text) {
        alert('Please enter phrase text');
        return;
    }
    
    // Check if phrase already exists
    if (buttonData[category] && buttonData[category].some(p => p.text === text)) {
        alert('This phrase already exists in the selected category');
        return;
    }
    
    addPhraseToCategory(category, text, image);
    
    // Clear inputs
    document.getElementById('newPhraseText').value = '';
    document.getElementById('newPhraseImage').value = '';
    
    // Update remove phrase options
    populateRemovePhraseOptions();
    
    alert(`Added "${text}" to ${category}`);
}

// Remove selected phrase
function removeSelectedPhrase() {
    const category = document.getElementById('removeCategorySelect').value;
    const phraseSelect = document.getElementById('removePhraseSelect');
    const text = phraseSelect.value;
    
    if (!text) {
        alert('Please select a phrase to remove');
        return;
    }
    
    if (confirm(`Are you sure you want to remove "${text}" from ${category}?`)) {
        removePhraseFromCategory(category, text);
        populateRemovePhraseOptions();
        alert(`Removed "${text}" from ${category}`);
    }
}

// Show all phrases in console (for debugging)
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

// Reload the app
function reloadApp() {
    const activeCategory = document.querySelector('.tab.active').getAttribute('data-category');
    populateGrid(activeCategory);
    hideManagementPanel();
    alert('App reloaded!');
}

// Enhanced export function with better feedback
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
// INITIALIZATION
// ============================================================================

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Load the first category by default
    populateGrid('food');
    
    // Set up tab click handlers
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            populateGrid(category);
            
            // Update active tab styling
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Add developer tools to console for easier content management
    console.log('MyNewVoice Developer Tools Available:');
    console.log('- exportButtonData(): Export all data as JSON');
    console.log('- addPhraseToCategory(category, text, image): Add new phrase');
    console.log('- removePhraseFromCategory(category, text): Remove phrase');
    console.log('- addPerson(personData): Add new person');
});

// Helper function for testing different date scenarios (optional)
function getDateInDays(daysFromNow) {
    const date = new Date();
    date.setDate(date.getDate() + daysFromNow);
    return date.toISOString().split('T')[0]; // Returns YYYY-MM-DD format
}