$(document).ready(function() {
    const music = document.getElementById('bg-music'); 
    const musicControl = $('#music-control');
    const musicIcon = $('#music-icon');
    let isPlaying = false;

    musicControl.on('click', function() {
        if (isPlaying) {
            music.pause();
            musicIcon.removeClass('bi-volume-mute-fill').addClass('bi-volume-up-fill');
        } else {
            music.play().catch(error => console.log("User must interact with the document first."));
            musicIcon.removeClass('bi-volume-up-fill').addClass('bi-volume-mute-fill');
        }
        isPlaying = !isPlaying; 
    });

    const sections = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));

    const scrollTopBtn = document.getElementById('scrollTopBtn');

    window.onscroll = function() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    };

});