const links = document.querySelectorAll('.nav a');
const yearEl = document.getElementById('year');
const themeToggle = document.getElementById('themeToggle');

// Smooth scroll for nav links
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior:'smooth' });
        }
    });
});

// Active link on scroll
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        const navLink = document.querySelector(`.nav a[href="#${id}"]`);
        if (entry.isIntersecting && navLink) {
            links.forEach(l => l.classList.remove('active'));
            navLink.classList.add('active');
        }
    });
}, { threshold: 0.5 });

sections.forEach(section => observer.observe(section));

// Footer year
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

// Theme toggle
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
let isLight = !prefersDark;

const applyTheme = () => {
    if (isLight) {
        document.documentElement.style.setProperty('--bg', '#f8fafc');
        document.documentElement.style.setProperty('--card', '#ffffff');
        document.documentElement.style.setProperty('--text', '#0f172a');
        document.documentElement.style.setProperty('--muted', '#070a0eff');
        document.documentElement.style.setProperty('--border', '#e2e8f0');
        document.body.style.background = '#f8fafc';
        themeToggle.textContent = '🌙';
    } else {
        document.documentElement.style.setProperty('--bg', '#0f172a');
        document.documentElement.style.setProperty('--card', '#111827');
        document.documentElement.style.setProperty('--text', '#e2e8f0');
        document.documentElement.style.setProperty('--muted', '#94a3b8');
        document.documentElement.style.setProperty('--border', '#1f2937');
        document.body.style.background = 'linear-gradient(135deg, #0b1224, #0f172a)';
        themeToggle.textContent = '☀️';
    }
};

applyTheme();

themeToggle.addEventListener('click', () => {
    isLight = !isLight;
    applyTheme();
});

