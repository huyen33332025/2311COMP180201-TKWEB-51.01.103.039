document.addEventListener('DOMContentLoaded', function() {

    const musicControl = document.getElementById('music-control');
    const backgroundMusic = document.getElementById('background-music');
    let isPlaying = false;

    musicControl.addEventListener('click', () => {
        if (isPlaying) {
            backgroundMusic.pause();
            musicControl.classList.remove('playing');
        } else {
            backgroundMusic.play();
            musicControl.classList.add('playing');
        }
        isPlaying = !isPlaying;
    });

    const sections = document.querySelectorAll('.fade-in-section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

});
