// Smooth scroll to section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Mobile menu toggle
document.getElementById('menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Functionality for form submission (without actual backend)
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Message sent! Thank you for reaching out.");
});
