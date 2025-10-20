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
        { text: "I'm full", image: "full.jpg" }
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
        { text: "I'd like to brush my teeth", image: "teeth.jpg" }
    ],
    MyPeople: [
        { 
            text: "Sue", 
            image: "Sue.jpg",
            relationship: "My Wife",
            occupation: "Retired",
            location: "Lives in Seatoun",
            birthday: "1985-08-15",
            phone: "555-0123"
        },
        { 
            text: "Andrew", 
            image: "Andrew.jpg",
            relationship: "My Son",
            occupation: "Nurse",
            location: "Lives in Seatoun",
            birthday: "1971-03-23",
            phone: "555-0124"
        },
        { 
            text: "Marilyn", 
            image: "Marilyn.jpg",
            relationship: "My Daughter-in-law",
            occupation: "Nurse",
            location: "Wellington Hospital",
            birthday: "1971-03-08",
            phone: "555-0125"
        },
        { 
            text: "Joshua", 
            image: "Joshua.jpg",
            relationship: "My Grandson",
            occupation: "Student at Rongotai College",
            location: "Lives in Seatoun",
            birthday: "2008-07-03",
            phone: "555-0126"
        },
        { 
            text: "Isabella", 
            image: "Isabella.jpg",
            relationship: "My Granddaughter",
            occupation: "Student at Wellington East College",
            location: "Lives in Seatoun",
            birthday: "2010-03-20",
            phone: "555-0127"
        },
        { 
            text: "JJ", 
            image: "JJ.jpg",
            relationship: "My Grandson",
            occupation: "Student at Seatoun School",
            location: "Seatoun",
            birthday: "2012-06-02",
            phone: "555-0128"
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
        { text: "I don't understand", image: "dont_understand.jpg" }
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
    environment: [
        { text: "It's too cold in here", image: "cold.jpg" },
        { text: "It's too warm", image: "warm.jpg" },
        { text: "Please open the window", image: "open_window.jpg" },
        { text: "Can you close the curtains?", image: "curtains.jpg" },
        { text: "The light is too bright", image: "bright_light.jpg" },
        { text: "I need more light", image: "more_light.jpg" },
        { text: "This noise is bothering me", image: "noise.jpg" },
        { text: "It's quiet and peaceful", image: "peaceful.jpg" }
    ]
};

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
});

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

            button.addEventListener('click', function() {
                let message = `${buttonInfo.text}, ${buttonInfo.relationship}`;
                if (buttonInfo.occupation) {
                    message += `, ${buttonInfo.occupation}`;
                }
                if (buttonInfo.location) {
                    message += `, ${buttonInfo.location}`;
                }
                if (buttonInfo.birthday) {
                    const spokenCountdown = getSpokenCountdown(buttonInfo.birthday);
                    if (spokenCountdown) {
                        message += `. Birthday ${spokenCountdown}`;
                    }
                }
                speakText(message, this);
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
    utterance.rate = 0.9; // Slightly slower for better understanding
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

// Helper function for testing different date scenarios (optional)
function getDateInDays(daysFromNow) {
    const date = new Date();
    date.setDate(date.getDate() + daysFromNow);
    return date.toISOString().split('T')[0]; // Returns YYYY-MM-DD format
}