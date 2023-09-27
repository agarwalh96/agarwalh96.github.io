// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Show/hide project details
document.querySelectorAll('.project-details-btn').forEach(button => {
    button.addEventListener('click', function() {
        const card = this.closest('.project-card');
        card.classList.toggle('active');
    });
});

// Contact form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Add code to handle form submission (e.g., send an email)
    alert('Message sent successfully!');
    this.reset();
});
