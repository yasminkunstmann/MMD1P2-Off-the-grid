// Font size controls
const increaseFont = document.getElementById('increase-font');
const decreaseFont = document.getElementById('decrease-font');

if (increaseFont && decreaseFont) {
    let currentFontSize = 16;

    increaseFont.addEventListener('click', () => {
        currentFontSize = Math.min(currentFontSize + 2, 24);
        document.documentElement.style.fontSize = currentFontSize + 'px';
        // Provide feedback for screen readers
        announceToScreenReader(`Tekststørrelse øget til ${currentFontSize} pixels`);
    });

    decreaseFont.addEventListener('click', () => {
        currentFontSize = Math.max(currentFontSize - 2, 12);
        document.documentElement.style.fontSize = currentFontSize + 'px';
        // Provide feedback for screen readers
        announceToScreenReader(`Tekststørrelse formindsket til ${currentFontSize} pixels`);
    });

    // Add keyboard support
    increaseFont.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            increaseFont.click();
        }
    });

    decreaseFont.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            decreaseFont.click();
        }
    });
}

// Function to announce changes to screen readers
function announceToScreenReader(message) {
    const announcer = document.getElementById('aria-announcer') || createAriaAnnouncer();
    announcer.textContent = message;
}

// Create aria live region for announcements
function createAriaAnnouncer() {
    const announcer = document.createElement('div');
    announcer.id = 'aria-announcer';
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    announcer.className = 'sr-only';
    document.body.appendChild(announcer);
    return announcer;
}

// Initialize accessibility features when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    createAriaAnnouncer();
    
    // Add skip link target focus
    const skipLink = document.querySelector('.skip-link');
    const mainContent = document.getElementById('main-content');
    
    if (skipLink && mainContent) {
        skipLink.addEventListener('click', function(e) {
            e.preventDefault();
            mainContent.setAttribute('tabindex', '-1');
            mainContent.focus();
            // Remove tabindex after focus to avoid it being permanently tabbable
            setTimeout(() => {
                mainContent.removeAttribute('tabindex');
            }, 1000);
        });
    }
});