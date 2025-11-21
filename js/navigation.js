// Mobile navigation toggle
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

const toggleNavigation = () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    navList.classList.toggle('show');
    
    // Update hamburger icon
    const hamburger = menuToggle.querySelector('.hamburger');
    if (!isExpanded) {
        hamburger.style.transform = 'rotate(45deg)';
        hamburger.style.backgroundColor = 'transparent';
    } else {
        hamburger.style.transform = 'none';
        hamburger.style.backgroundColor = '';
    }
}

// Event listeners
if (menuToggle) {
    menuToggle.addEventListener('click', toggleNavigation);
    menuToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleNavigation();
        }
    });
}

// Close mobile menu when clicking on a link
if (navList) {
    navList.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            navList.classList.remove('show');
            menuToggle.setAttribute('aria-expanded', 'false');
            
            // Reset hamburger icon
            const hamburger = menuToggle.querySelector('.hamburger');
            hamburger.style.transform = 'none';
            hamburger.style.backgroundColor = '';
        }
    });
}

// Close mobile menu when pressing Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navList && navList.classList.contains('show')) {
        navList.classList.remove('show');
        menuToggle.setAttribute('aria-expanded', 'false');
        
        // Reset hamburger icon
        const hamburger = menuToggle.querySelector('.hamburger');
        hamburger.style.transform = 'none';
        hamburger.style.backgroundColor = '';
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navList && navList.classList.contains('show') && 
        !e.target.closest('nav') && 
        !e.target.closest('.menu-toggle')) {
        navList.classList.remove('show');
        menuToggle.setAttribute('aria-expanded', 'false');
        
        // Reset hamburger icon
        const hamburger = menuToggle.querySelector('.hamburger');
        hamburger.style.transform = 'none';
        hamburger.style.backgroundColor = '';
    }
});