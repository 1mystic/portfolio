/* ============================================
   TERMINAL GARDEN — interactions & motion
   ============================================ */

// --- Live clock (UTC+05:30) ---
const clockEl = document.getElementById('clock');
function tickClock() {
  const now = new Date();
  // IST = UTC + 5h30m
  const ist = new Date(now.getTime() + (now.getTimezoneOffset() + 330) * 60000);
  const h = String(ist.getHours()).padStart(2, '0');
  const m = String(ist.getMinutes()).padStart(2, '0');
  const s = String(ist.getSeconds()).padStart(2, '0');
  clockEl.textContent = `${h}:${m}:${s}`;
}
tickClock();
setInterval(tickClock, 1000);

// --- Reveal-on-scroll ---
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

document.querySelectorAll('.reveal, .stagger, .clip-reveal').forEach((el) => io.observe(el));

// On load, immediately reveal anything in initial viewport (for the hero / topbar)
window.addEventListener('load', () => {
  document.querySelectorAll('.topbar.reveal, .hero .reveal, .hero .stagger, .hero .clip-reveal').forEach((el) => el.classList.add('in'));
});

// --- Number count-up for stats ---
function countUp(el) {
  const target = parseFloat(el.getAttribute('data-num'));
  if (Number.isNaN(target)) return;
  const isFloat = target % 1 !== 0;
  const duration = 1400;
  const start = performance.now();

  // Determine how to render based on existing markup. If it has a span.sub, only update the first span.
  const subSpan = el.querySelector('.sub');
  const mainSpan = subSpan ? el.querySelector('span:not(.sub)') : null;

  function ease(t) { return 1 - Math.pow(1 - t, 3); }

  function frame(now) {
    const t = Math.min(1, (now - start) / duration);
    const v = target * ease(t);
    const text = isFloat ? v.toFixed(2) : Math.floor(v).toString();

    if (mainSpan) {
      mainSpan.textContent = text;
    } else {
      el.textContent = text;
    }
    if (t < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

const numIo = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      countUp(entry.target);
      numIo.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });
document.querySelectorAll('.stat .num[data-num]').forEach((el) => numIo.observe(el));

// --- Type-in caret on hero name ---
(function typeInHero() {
  const last = document.querySelector('.hero-name .last');
  if (!last) return;
  const txt = last.textContent;
  // Already rendered statically — just add caret pulse for a moment
  last.classList.add('caret');
  setTimeout(() => last.classList.remove('caret'), 2400);
})();

// --- Active nav on scroll ---
const navLinks = Array.from(document.querySelectorAll('.topbar nav a'));
const sections = navLinks
  .map((a) => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);

const sectIo = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = '#' + entry.target.id;
      navLinks.forEach((a) => {
        a.classList.toggle('active', a.getAttribute('href') === id);
      });
    }
  });
}, { threshold: 0, rootMargin: '-40% 0px -55% 0px' });
sections.forEach((s) => sectIo.observe(s));

// --- Music toggle playing the background song ---
const musicBtn = document.getElementById('music-toggle');
let bgAudio = null;
let playing = false;

musicBtn.addEventListener('click', () => {
  playing = !playing;
  musicBtn.textContent = playing ? '❚❚' : '▶';
  musicBtn.style.color = playing ? 'var(--amber)' : 'var(--lume)';
  
  if (!bgAudio) {
    bgAudio = new Audio('../fresh/assets/bgsong.opus');
    bgAudio.loop = true;
  }
  
  if (playing) {
    bgAudio.play().catch(err => {
      console.log('Autoplay restriction or audio failure:', err);
      // Reset state if blocked
      playing = false;
      musicBtn.textContent = '▶';
      musicBtn.style.color = 'var(--lume)';
    });
  } else {
    bgAudio.pause();
  }
  
  // dispatch a custom event so other modules could listen if needed
  window.dispatchEvent(new CustomEvent('music:toggle', { detail: { playing } }));
});

// --- Smooth-scroll handling for in-page anchors ---
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id.length <= 1) return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', id);
  });
});

// --- Subtle parallax on hero leaves ---
const leaves = document.querySelectorAll('.leaf');
window.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 12;
  const y = (e.clientY / window.innerHeight - 0.5) * 12;
  leaves.forEach((leaf, i) => {
    // Dynamic coefficients for a 3D parallax layer depth effect
    const k = i === 0 ? 1 : -0.5 - ((i % 4) * 0.3);
    leaf.style.translate = `${x * k}px ${y * k}px`;
  });
});

// --- Cursor-following lume halo on project cards ---
document.querySelectorAll('.proj').forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mx', x + '%');
    card.style.setProperty('--my', y + '%');
  });
});

// --- Origami Carousel Auto-sliding on Mobile ---
(function initOrigamiCarousel() {
  const strip = document.querySelector('.origami-strip');
  if (!strip) return;

  let intervalId = null;
  let isUserInteracting = false;
  let interactionTimeout = null;

  function startAutoSlide() {
    if (intervalId) clearInterval(intervalId);
    intervalId = setInterval(() => {
      if (window.innerWidth > 600 || isUserInteracting) return;

      const items = Array.from(strip.querySelectorAll('.ori-item'));
      if (!items.length) return;

      const stripWidth = strip.clientWidth;
      const scrollLeft = strip.scrollLeft;

      // Find the index of the item currently closest to the center/left
      let currentIndex = 0;
      let minDiff = Infinity;
      items.forEach((item, index) => {
        const diff = Math.abs(item.offsetLeft - scrollLeft - (stripWidth - item.clientWidth) / 2);
        if (diff < minDiff) {
          minDiff = diff;
          currentIndex = index;
        }
      });

      // Go to the next index, or wrap around
      const nextIndex = (currentIndex + 1) % items.length;
      const nextItem = items[nextIndex];
      
      // Smoothly scroll to center the next item
      strip.scrollTo({
        left: nextItem.offsetLeft - (stripWidth - nextItem.clientWidth) / 2,
        behavior: 'smooth'
      });
    }, 3000);
  }

  function handleUserInteraction() {
    isUserInteracting = true;
    if (interactionTimeout) clearTimeout(interactionTimeout);
    interactionTimeout = setTimeout(() => {
      isUserInteracting = false;
    }, 6000); // Resume auto-sliding after 6s of inactivity
  }

  strip.addEventListener('touchstart', handleUserInteraction, { passive: true });
  strip.addEventListener('mousedown', handleUserInteraction);
  strip.addEventListener('scroll', () => {
    if (isUserInteracting) {
      handleUserInteraction();
    }
  });

  startAutoSlide();
  window.addEventListener('resize', startAutoSlide);
})();
