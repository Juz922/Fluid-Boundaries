// 2026 Young Designers' Exhibition Interactivity

document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Reveal on Scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
            }
        });
    }, observerOptions);

    // Apply reveal class to sections and elements
    const revealElements = document.querySelectorAll('.section-padding, .timeline-item, .info-card');
    revealElements.forEach(el => {
        el.classList.add('reveal-hidden');
        observer.observe(el);
    });

    // 2. Navbar transformation on scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '0.5rem 0';
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        } else {
            navbar.style.padding = '1rem 0';
            navbar.style.background = 'rgba(10, 10, 10, 0.8)';
        }
    });

    // 3. CTA Interaction
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (btn.getAttribute('href') === '#') {
                e.preventDefault();
                alert('報名系統將於 2026 年 1 月正式開放，敬請期待！');
            }
        });
    });

    // 4. Parallax effect for hero shapes
    window.addEventListener('mousemove', (e) => {
        const shapes = document.querySelectorAll('.shape');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 20;
            const xOffset = (x - 0.5) * speed;
            const yOffset = (y - 0.5) * speed;
            shape.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });
});

// Add necessary styles for JS animations via CSS
const style = document.createElement('style');
style.textContent = `
    .reveal-hidden {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .reveal-active {
        opacity: 1;
        transform: translateY(0);
    }
    .timeline-item.reveal-hidden:nth-child(odd) {
        transform: translateX(-30px);
    }
    .timeline-item.reveal-hidden:nth-child(even) {
        transform: translateX(30px);
    }
    .timeline-item.reveal-active {
        transform: translateX(0);
    }
`;
document.head.appendChild(style);
