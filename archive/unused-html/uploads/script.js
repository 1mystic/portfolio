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

    // Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = document.querySelector('.theme-icon-sun');
    const moonIcon = document.querySelector('.theme-icon-moon');
    const body = document.body;

    // Check saved preference (Default to light if not set)
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const isDark = body.classList.contains('dark-mode');

            // Toggle icons
            sunIcon.style.display = isDark ? 'none' : 'block';
            moonIcon.style.display = isDark ? 'block' : 'none';

            // Save preference
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }

    // Enhanced audio autoplay with multiple strategies
    const bgMusic = document.getElementById('bg-music');
    const musicToggle = document.getElementById('music-toggle');
    const musicIcon = musicToggle ? musicToggle.querySelector('.material-symbols-outlined') : null;

    if (bgMusic) {
        bgMusic.volume = 0.20;

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

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for fade-in animations on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    // Apply initial styles and observe cards
    document.querySelectorAll('.card').forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease, box-shadow 0.2s';
        observer.observe(card);

        // Re-add hover effect logic (since inline styles might override CSS hover)
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
    // Typing effect for all CGPA elements - initialize when user scrolls to each element
    const cgpaElements = document.querySelectorAll('.cgpa');
    cgpaElements.forEach(cgpaEl => {
        const originalText = cgpaEl.textContent;
        cgpaEl.textContent = ''; // Clear initially

        const cgpaObserver = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typeWriter(cgpaEl, originalText, 210);
                    obs.unobserve(cgpaEl);
                }
            });
        }, { threshold: 0.5 });

        cgpaObserver.observe(cgpaEl);
    });

    // Interactive Certificates Animation
    const certGrid = document.querySelector('.cert-interactive-grid');

    if (certGrid) {
        const certItems = certGrid.querySelectorAll('li');

        const setCertIndex = (event) => {
            const closest = event.target.closest('li');
            if (closest) {
                const index = [...certItems].indexOf(closest);
                const cols = new Array(certGrid.children.length)
                    .fill()
                    .map((_, i) => {
                        certItems[i].dataset.active = (index === i).toString();
                        return index === i ? '8fr' : '1fr';
                    })
                    .join(' ');
                certGrid.style.setProperty('grid-template-columns', cols);
            }
        };

        const resyncCerts = () => {
            const w = Math.max(
                ...[...certItems].map((i) => {
                    return i.offsetWidth;
                })
            );
            certGrid.style.setProperty('--article-width', w);
        };

        // Event listeners
        certGrid.addEventListener('focus', setCertIndex, true);
        certGrid.addEventListener('click', setCertIndex);
        certGrid.addEventListener('pointermove', setCertIndex);

        // Handle resize
        window.addEventListener('resize', resyncCerts);
        resyncCerts();

        // Initialize first item as active
        if (certItems.length > 0) {
            certItems[0].dataset.active = 'true';
        }
    }
});

// Typewriter helper function
function typeWriter(element, text, speed) {
    let i = 0;
    element.textContent = '';
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}
