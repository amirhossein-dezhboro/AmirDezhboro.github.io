document.addEventListener("DOMContentLoaded", function() {

    // Typed.js Animation
    if (document.getElementById("typed-text")) {
        var options = {
            strings: ["NLP.", "Network Science.", "Machine Learning.", "Data Science."],
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 2000,
            startDelay: 500,
            loop: true
        };
        var typed = new Typed("#typed-text", options);
    }

    // Scroll Fade-in Animation
    const fadeElems = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    fadeElems.forEach(elem => {
        appearOnScroll.observe(elem);
    });

});
