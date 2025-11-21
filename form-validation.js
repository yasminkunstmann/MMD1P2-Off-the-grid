// FORM VALIDATION - FIXED VERSION
console.log('✅ form-validation.js loaded');

window.addEventListener('load', function() {
    const form = document.getElementById('contactForm');
    console.log('✅ Form found');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('✅ Form submitted - validating now');
            
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            
            console.log('Form values:', { 
                name: name.value, 
                email: email.value, 
                message: message.value 
            });
            
            let hasErrors = false;
            
            // Validate name - show error if empty
            if (!name.value.trim()) {
                console.log('🟡 Name is empty - showing error');
                showError('name-error', 'Navn er påkrævet');
                hasErrors = true;
            } else {
                console.log('🟢 Name is filled - hiding error');
                hideError('name-error');
            }
            
            // Validate email - show error if empty or invalid
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.value.trim()) {
                console.log('🟡 Email is empty - showing error');
                showError('email-error', 'Email er påkrævet');
                hasErrors = true;
            } else if (!emailRegex.test(email.value)) {
                console.log('🟡 Email is invalid - showing error');
                showError('email-error', 'Indtast en gyldig email adresse');
                hasErrors = true;
            } else {
                console.log('🟢 Email is valid - hiding error');
                hideError('email-error');
            }
            
            // Validate message - show error if empty
            if (!message.value.trim()) {
                console.log('🟡 Message is empty - showing error');
                showError('message-error', 'Besked er påkrævet');
                hasErrors = true;
            } else {
                console.log('🟢 Message is filled - hiding error');
                hideError('message-error');
            }
            
            console.log('Form has errors:', hasErrors);
            
            if (!hasErrors) {
                console.log('✅ Form is valid - showing success');
                alert('Tak for din besked! Vi vender tilbage hurtigst muligt.');
                form.reset();
            } else {
                console.log('❌ Form has errors - showing alert');
                alert('Ret venligst de markerede felter.');
            }
        });
        
        console.log('✅ Form event listener added!');
    }
});

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    console.log('🟡 showError called for:', elementId, 'Element found:', errorElement);
    
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.hidden = false; // Make visible
        console.log('✅ Error should now be visible:', message);
    } else {
        console.error('❌ Could not find error element:', elementId);
    }
}

function hideError(elementId) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.hidden = true; // Make hidden
        console.log('🔴 Hiding error:', elementId);
    }
}