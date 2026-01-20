gsap.registerPlugin(ScrollTrigger);

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
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active-text'));
    activeStep.classList.add('active-text');

    document.querySelectorAll('.img-stack img').forEach(img => img.classList.remove('active'));
    const targetImg = document.getElementById(imgId);
    if (targetImg) targetImg.classList.add('active');
}

const themeBtn = document.getElementById('theme-switch');
const themeIcon = document.getElementById('theme-icon');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    
    if (document.body.classList.contains('light-mode')) {
        themeIcon.textContent = '🌙';
        themeBtn.style.backgroundColor = '#0f172a'; 
    } else {
        themeIcon.textContent = '☀️';
        themeBtn.style.backgroundColor = 'var(--accent-color)';
    }
});