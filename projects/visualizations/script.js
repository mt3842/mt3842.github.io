// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// 1. Image Swapping Logic
const steps = gsap.utils.toArray(".step");

steps.forEach((step) => {
    const imageName = step.getAttribute("data-image");

    ScrollTrigger.create({
        trigger: step,
        start: "top center",
        end: "bottom center",
        onEnter: () => updateDisplay(step, imageName),
        onEnterBack: () => updateDisplay(step, imageName),
    });
});

function updateDisplay(activeStep, imgId) {
    // Update Text Opacity
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active-text'));
    activeStep.classList.add('active-text');

    // Update Image Visibility
    document.querySelectorAll('.img-stack img').forEach(img => img.classList.remove('active'));
    const targetImg = document.getElementById(imgId);
    if (targetImg) targetImg.classList.add('active');
}

// 2. Theme Toggle Logic
const themeBtn = document.getElementById('theme-switch');
const themeIcon = document.getElementById('theme-icon');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    
    if (document.body.classList.contains('light-mode')) {
        // We are in Light Mode - show the Moon to switch back to dark
        themeIcon.textContent = '🌙';
        // Optional: Change button color for light mode specifically
        themeBtn.style.backgroundColor = '#0f172a'; 
    } else {
        // We are in Dark Mode - show the Sun to switch to light
        themeIcon.textContent = '☀️';
        themeBtn.style.backgroundColor = 'var(--accent-color)';
    }
});