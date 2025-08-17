// --- DATA ---
const menPlayers = [
    { name: 'Virat Kohli', role: 'Batter', image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/2.png' },
    { name: 'Rajat Patidar', role: 'Batter', image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/597.png' },
    { name: 'Liam Livingstone', role: 'All-Rounder', image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/183.png' },
    { name: 'Phil Salt', role: 'Wicketkeeper', image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/1220.png' },
    { name: 'Jitesh Sharma', role: 'Wicketkeeper', image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/1000.png' },
    { name: 'Josh Hazlewood', role: 'Bowler', image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/36.png' },
    { name: 'Bhuvneshwar Kumar', role: 'Bowler', image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/15.png' },
    { name: 'Krunal Pandya', role: 'All-Rounder', image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/17.png' },
    { name: 'Yash Dayal', role: 'Bowler', image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/978.png' },
    { name: 'Tim David', role: 'All-Rounder', image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/636.png' },
    { name: 'Devdutt Padikkal', role: 'Batter', image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/200.png' },
    { name: 'Lungi Ngidi', role: 'Bowler', image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/99.png' },
];

const womenPlayers = [
    { name: 'Smriti Mandhana', role: 'Batter', image: 'https://www.wplt20.com/static-assets/images/players/series/8323/63992.png?v=50.88'},
    { name: 'Ellyse Perry', role: 'All-Rounder', image: 'https://www.wplt20.com/static-assets/images/players/series/8323/59956.png?v=50.88'},
    { name: 'Richa Ghosh', role: 'Wicketkeeper', image: 'https://www.wplt20.com/static-assets/images/players/series/8323/74530.png?v=50.88'},
    { name: 'Renuka Singh', role: 'Bowler', image: 'https://www.wplt20.com/static-assets/images/players/series/5961/70714.png?v=50.86'},
    { name: 'Sophie Devine', role: 'All-Rounder', image: 'https://www.wplt20.com/static-assets/images/players/62067.png?v=50.88'},
    { name: 'Heather Knight', role: 'All-Rounder', image: 'https://www.wplt20.com/static-assets/images/players/59735.png?v=50.88'},
    { name: 'Shreyanka Patil', role: 'All-Rounder', image: 'https://www.wplt20.com/static-assets/images/players/75598.png?v=50.88'},
    { name: 'Kanika Ahuja', role: 'All-Rounder', image: 'https://www.wplt20.com/static-assets/images/players/series/8323/84086.png?v=50.88'},
    { name: 'Asha Sobhana', role: 'Bowler', image: 'https://www.wplt20.com/static-assets/images/players/series/5262/75591.png?v=50.88'},
    { name: 'Disha Kasat', role: 'Batter', image: 'https://www.wplt20.com/static-assets/images/players/84129.png?v=50.86'},
    { name: 'Georgia Wareham', role: 'All-Rounder', image: 'https://www.wplt20.com/static-assets/images/players/series/8323/67047.png?v=50.88'},
    { name: 'Ekta Bisht', role: 'Bowler', image: 'https://www.wplt20.com/static-assets/images/players/57461.png?v=50.86'},
];

const schedule = [
    { date: 'March 22, 2025', opponent: 'KKR', venue: 'Kolkata', time: '7:30 PM', opponentLogo: 'https://documents.iplt20.com/ipl/KKR/Logos/Logooutline/KKRoutline.png', result: 'RCB won by 7 wickets' },
    { date: 'March 28, 2025', opponent: 'CSK', venue: 'Chennai', time: '7:30 PM', opponentLogo: 'https://images.seeklogo.com/logo-png/19/2/ipl-chennai-super-kings-logo-png_seeklogo-196613.png', result: 'RCB won by 50 runs' },
    { date: 'April 2, 2025', opponent: 'GT', venue: 'Bengaluru', time: '7:30 PM', opponentLogo: 'https://documents.iplt20.com/ipl/GT/Logos/Logooutline/GToutline.png', result: 'GT won by 8 wickets' },
    { date: 'April 7, 2025', opponent: 'MI', venue: 'Mumbai', time: '7:30 PM', opponentLogo: 'https://documents.iplt20.com/ipl/MI/Logos/Logooutline/MIoutline.png', result: 'RCB won by 12 runs' },
    { date: 'April 10, 2025', opponent: 'DC', venue: 'Bengaluru', time: '7:30 PM', opponentLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Delhi_Capitals.svg/640px-Delhi_Capitals.svg.png', result: 'DC won by 6 wickets' },
    { date: 'April 13, 2025', opponent: 'RR', venue: 'Jaipur', time: '3:30 PM', opponentLogo: 'https://documents.iplt20.com/ipl/RR/Logos/RR_Logo.png', result: 'RCB won by 9 wickets' },
    { date: 'April 18, 2025', opponent: 'PBKS', venue: 'Bengaluru', time: '7:30 PM', opponentLogo: 'https://documents.iplt20.com/ipl/PBKS/Logos/Logooutline/PBKSoutline.png', result: 'PBKS won by 5 wickets' },
    { date: 'April 27, 2025', opponent: 'LSG', venue: 'Lucknow', time: '7:30 PM', opponentLogo: 'https://documents.iplt20.com/ipl/LSG/Logos/Logooutline/LSGoutline.png', result: 'RCB won by 6 wickets' },
    { date: 'June 3, 2025', opponent: 'PBKS', venue: 'Ahmedabad', time: '7:30 PM', opponentLogo: 'https://documents.iplt20.com/ipl/PBKS/Logos/Logooutline/PBKSoutline.png', result: '🏆 RCB WON BY 6 RUNS! 🏆', isFinal: true },
];

// --- STATE MANAGEMENT ---
let currentTeam = 'men';
let currentRole = 'all';

// --- DOM ELEMENTS ---
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const teamBtns = document.querySelectorAll('.team-btn');
const filterBtns = document.querySelectorAll('.filter-btn');
const playerGrid = document.getElementById('player-grid');
const scheduleList = document.getElementById('schedule-list');

// --- FUNCTIONS ---
const displayPlayers = () => {
    playerGrid.innerHTML = '';
    const playersToDisplay = currentTeam === 'men' ? menPlayers : womenPlayers;
    
    const filteredPlayers = playersToDisplay.filter(player => {
        if (currentRole === 'all') return true;
        if (currentRole === 'Wicketkeeper') return player.role.includes('Wicketkeeper');
        return player.role === currentRole;
    });

    filteredPlayers.forEach(player => {
        const card = document.createElement('div');
        card.className = 'player-card';
        card.innerHTML = `
            <img src="${player.image}" alt="${player.name}" onerror="this.onerror=null;this.src='https://placehold.co/400x600/cccccc/000000?text=Image+Not+Found';">
            <div class="player-info">
                <h3>${player.name}</h3>
                <p>${player.role}</p>
            </div>
        `;
        playerGrid.appendChild(card);
    });
};

const displaySchedule = () => {
    scheduleList.innerHTML = '';
    schedule.forEach(match => {
        const isHomeGame = match.venue === 'Bengaluru';
        const rcbInfo = `<div class="team-info"><img src="https://images.seeklogo.com/logo-png/53/2/rcb-logo-png_seeklogo-531612.png" alt="RCB Logo"><span>RCB</span></div>`;
        const opponentInfo = `<div class="team-info"><img src="${match.opponentLogo}" alt="${match.opponent} Logo"><span>${match.opponent}</span></div>`;
        
        let resultHtml = ''; // Start with an empty result string
        if (match.result) {
            if (match.isFinal) {
                resultHtml = `<div class="match-result trophy-result">${match.result}</div>`;
            } else {
                resultHtml = `<div class="match-result">${match.result}</div>`;
            }
        }
        
        let matchTypeHtml = '';
        if (match.isFinal) {
            matchTypeHtml = `<p class="match-type">Final</p>`;
        }

        const detailsHtml = `
            <div class="match-details">
                ${matchTypeHtml}
                <p>${match.date}</p>
                <p>${match.time} at ${match.venue}</p>
                ${resultHtml}
            </div>
        `;

        const card = document.createElement('div');
        card.className = 'match-card';
        card.innerHTML = `
            ${isHomeGame ? rcbInfo : opponentInfo}
            ${detailsHtml}
            ${isHomeGame ? opponentInfo : rcbInfo}
        `;
        scheduleList.appendChild(card);
    });
};

// --- EVENT LISTENERS ---
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle');
});

teamBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.team-btn.active').classList.remove('active');
        btn.classList.add('active');
        currentTeam = btn.dataset.team;
        displayPlayers();
    });
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');
        currentRole = btn.dataset.filter;
        displayPlayers();
    });
});

// --- INITIALIZE APP ---
document.addEventListener('DOMContentLoaded', () => {
    displayPlayers();
    displaySchedule();
});