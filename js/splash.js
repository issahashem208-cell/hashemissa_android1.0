// شاشة البداية مع تأثير الجسيمات
(function() {
    const splash = document.getElementById('splash');
    const main = document.getElementById('main');
    const canvas = document.getElementById('particles-canvas');
    const ctx = canvas.getContext('2d');
    let w, h, particles = [];

    function resizeCanvas() {
        const rect = splash.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
        w = canvas.width;
        h = canvas.height;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * w;
            this.y = Math.random() * h;
            this.size = Math.random() * 2.6 + 0.6;
            this.speedX = (Math.random() - 0.5) * 0.7;
            this.speedY = (Math.random() - 0.5) * 0.7;
            this.opacity = Math.random() * 0.5 + 0.2;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x < 0 || this.x > w) this.speedX *= -1;
            if (this.y < 0 || this.y > h) this.speedY *= -1;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(108, 140, 255, ${this.opacity})`;
            ctx.fill();
        }
    }

    // إنشاء الجسيمات
    for (let i = 0; i < 70; i++) {
        particles.push(new Particle());
    }

    function animateParticles() {
        if (!splash.classList.contains('hide')) {
            ctx.clearRect(0, 0, w, h);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animateParticles);
        }
    }
    animateParticles();

    // إخفاء شاشة البداية بعد 3 ثوانٍ
    setTimeout(() => {
        splash.classList.add('hide');
        main.style.opacity = '1';
        setTimeout(() => {
            splash.style.display = 'none';
        }, 900);
    }, 3000);
})();
