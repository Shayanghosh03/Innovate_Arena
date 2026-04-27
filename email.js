// EmailJS configuration
const EMAILJS_PUBLIC_KEY = 'OsYSMeTXW8DpUKaB0';
const EMAILJS_SERVICE_ID = 'service_u5yxfjh';
const EMAILJS_TEMPLATE_ID = 'template_zz1l34j';
// Form Submission with EmailJS
function initFormSubmission() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const field01 = document.getElementById('field01');
            const field02 = document.getElementById('field02');
            const field03 = document.getElementById('field03');
            const warning01 = document.getElementById('contactwarning01');
            const warning02 = document.getElementById('contactwarning02');
            const warning03 = document.getElementById('contactwarning03');

            warning01.style.visibility = 'hidden';
            warning02.style.visibility = 'hidden';
            warning03.style.visibility = 'hidden';

            let isValid = true;
            if (!field01.value.trim()) {
                warning01.style.visibility = 'visible';
                isValid = false;
            }
            if (!field02.value.trim()) {
                warning02.style.visibility = 'visible';
                isValid = false;
            }
            if (!field03.value.trim()) {
                warning03.style.visibility = 'visible';
                isValid = false;
            }

            if (!isValid) {
                return;
            }
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // Disable button and show loading state
            submitBtn.disabled = true;
            submitBtn.textContent = "Sending...";
            submitBtn.style.opacity = "0.7";
            
            if (!window.emailjs) {
                alert('Email service not loaded. Please check your internet connection and try again.');
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.opacity = "1";
                return;
            }
            
            // Send email using EmailJS
            emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                contactForm,
                EMAILJS_PUBLIC_KEY
            ).then(
                function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    
                    // Show success message
                    submitBtn.textContent = "Message Sent! ✓";
                    submitBtn.style.backgroundColor = "#10b981";
                    submitBtn.style.opacity = "1";
                    
                    // Show success alert
                    alert('Thank you! Your message has been sent successfully. I\'ll get back to you soon.');
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Reset button after 3 seconds
                    setTimeout(() => {
                        submitBtn.textContent = originalText;
                        submitBtn.style.backgroundColor = "";
                        submitBtn.disabled = false;
                    }, 3000);
                },
                function(error) {
                    console.log('FAILED...', error);
                    
                    // Show error message
                    submitBtn.textContent = "Failed to Send";
                    submitBtn.style.backgroundColor = "#ef4444";
                    submitBtn.style.opacity = "1";
                    
                    alert('Oops! Something went wrong. Please try again or email me directly at shayanghosh0439@gmail.com');
                    
                    // Reset button after 3 seconds
                    setTimeout(() => {
                        submitBtn.textContent = originalText;
                        submitBtn.style.backgroundColor = "";
                        submitBtn.disabled = false;
                        submitBtn.style.opacity = "1";
                    }, 3000);
                }
            );
        });
    }
}

document.addEventListener('DOMContentLoaded', initFormSubmission);