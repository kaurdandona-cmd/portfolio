// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const html = document.documentElement;

// Check for saved dark mode preference or system preference
function initDarkMode() {
    const savedMode = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedMode === 'true' || (savedMode === null && prefersDark)) {
        enableDarkMode();
    }
}

function enableDarkMode() {
    document.body.classList.add('dark-mode');
    darkModeToggle.textContent = '☀️';
    localStorage.setItem('darkMode', 'true');
}

function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    darkModeToggle.textContent = '🌙';
    localStorage.setItem('darkMode', 'false');
}

function toggleDarkMode() {
    if (document.body.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
}

// Event listener
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
}

// Initialize on load
initDarkMode();
