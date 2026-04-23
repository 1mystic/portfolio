document.addEventListener('DOMContentLoaded', () => {

    // Loader
    setTimeout(() => {
        const loaderContainer = document.querySelector('.loader-container');
        const loader = document.querySelector('.loader');
        
        if (loaderContainer && loader) {
            // Add fade-out classes
            loaderContainer.classList.add('fade-out');
            loader.classList.add('fade-out');
            
            // Remove elements after animation completes
            setTimeout(() => {
                loaderContainer.style.display = 'none';
            }, 700);
        }
        
    }, 300);

    // Enhanced audio autoplay with multiple strategies
    
    const bgMusic = document.getElementById('bg-music');
    const musicToggle = document.getElementById('music-toggle');
    const musicIcon = musicToggle ? musicToggle.querySelector('.material-symbols-outlined') : null;
    
    if (bgMusic) {
        bgMusic.volume = 0.10;
        
        // Try autoplay multiple times with increasing delays
        const tryAutoplay = (attempts = 0) => {
            if (attempts >= 50) {
                console.log('Autoplay failed after 5 attempts');
                if (musicIcon) musicIcon.textContent = 'play_arrow'; // Show play icon if autoplay fails
                return;
            }
            
            bgMusic.play().then(() => {
                console.log('Audio autoplay successful on attempt', attempts + 1);
                if (musicIcon) musicIcon.textContent = 'pause'; // Show pause icon if playing
            }).catch(() => {
                console.log('Autoplay attempt', attempts + 1, 'failed');
                setTimeout(() => tryAutoplay(attempts + 1), 2000);
            });
        };
        
        tryAutoplay();

        // Music Toggle Logic
        if (musicToggle) {
            musicToggle.addEventListener('click', () => {
                if (bgMusic.paused) {
                    bgMusic.play();
                    musicIcon.textContent = 'pause';
                } else {
                    bgMusic.pause();
                    musicIcon.textContent = 'play_arrow';
                }
            });
        }

        // Sync icon with actual state
        bgMusic.addEventListener('play', () => {
             if (musicIcon) musicIcon.textContent = 'pause';
        });
        bgMusic.addEventListener('pause', () => {
             if (musicIcon) musicIcon.textContent = 'play_arrow';
        });
    }

    // Intersection Observer for Fade-in Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in-section');
        observer.observe(section);
    });

    // Add fade-in to specific elements for staggered effect
    const cards = document.querySelectorAll('.research-card, .blog-card, .project-row, .update-item');
    cards.forEach(card => {
        card.classList.add('fade-in-section');
        observer.observe(card);
    });

    console.log("Portfolio loaded. Animations initialized.");
});
