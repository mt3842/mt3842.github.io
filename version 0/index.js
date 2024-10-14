gsap.from(".marq", {duration: 3, opacity: 0.3, y: -100});
gsap.from(".fronte", {duration: 3, opacity: 0.3, y: -100});



gsap.registerPlugin(ScrollTrigger)

// Toggle Action keywords are play, pause, resume, reverse, restart, reset, complete, none


gsap.from(".front", {
    scrollTrigger:{
        trigger: ".front",
        toggleActions: "restart none none reset "
    }, 
    duration: 1.8,
    opacity: 0.2, 
    y: -100,
    
    // rotation: 360,
    
     
    
});


gsap.to(".skills-word",{
    scrollTrigger:{
        trigger: ".skills-word",
        toggleActions: "restart none none reset"
    },
    x: 20,
    duration: 3
});

gsap.to(".proj-head",{
    scrollTrigger:{
        trigger: ".proj-head",
        toggleActions: "restart none none reset"
    },
    x: 20,
    duration: 3
});

gsap.to(".about",{
    scrollTrigger:{
        trigger: ".about",
        toggleActions: "restart none none reset"
    },
    x: 20,
    duration: 3
});

gsap.to(".logo",{
    scrollTrigger:{
        trigger: ".logo",
        toggleActions: "restart none none reset"
    },
    x: -20,
    duration: 1,
    rotation: 360
});

gsap.to(".logo-b",{
    scrollTrigger:{
        trigger: ".logo-b",
        toggleActions: "restart none none reset"
    },
    x: -20,
    duration: 1,
    rotation: -360
});

gsap.to(".logos",{
    scrollTrigger:{
        trigger: ".logos",
        toggleActions: "restart none none reset"
    },
    x: -20,
    duration: 1,
    rotation: 360
});


gsap.to(".img-with-text",{
    scrollTrigger:{
        trigger: ".img-with-text",
        toggleActions: "restart none none reset"
    },
    x: -20,
    duration: 2
});

gsap.to(".img-sec-two",{
    scrollTrigger:{
        trigger: ".img-with-text",
        toggleActions: "restart none none reset"
    },
    x: 10,
    duration: 2
});

document.getElementById('dmbutton').addEventListener('click', function() {
    const css = document.getElementById('cssfile');
    const dmb = document.getElementById('dmbutton');

    if (dmb.innerHTML == 'Dark Mode') {
        css.setAttribute('href', './CSS/darkmode.css');
        dmb.innerHTML = 'Light Mode'
    }else{ css.setAttribute('href', 'CSS/styles.css');
    dmb.innerHTML = 'Dark Mode'

    }

});