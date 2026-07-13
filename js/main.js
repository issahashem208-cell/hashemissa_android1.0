// الملف الرئيسي - التحكم العام بالصفحة
(function() {
    // البحث المباشر
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            if (window.renderApps) {
                window.renderApps(e.target.value);
            }
        });
    }

    // عرض التطبيق (محاكاة)
    document.addEventListener('click', function(e) {
        const target = e.target.closest('.view-app');
        if (target) {
            const id = parseInt(target.dataset.id);
            const app = window.appsData?.find(a => a.id === id);
            if (app) {
                // محاكاة صفحة التطبيق
                const details = `
                    📱 ${app.name}
                    ──────────────
                    الإصدار: ${app.version}
                    الحجم: ${app.size}
                    آخر تحديث: ${app.updated}
                    التحميلات: ${app.downloads}
                    التقييم: ${app.rating} ⭐
                    ──────────────
                    ${app.description}
                    ──────────────
                    ✨ المميزات:
                    • تصميم عصري
                    • أداء سريع
                    • واجهة سهلة
                    • تحديثات مستمرة
                `;
                alert(details);
            }
        }
    });

    // زر "تعرف أكثر"
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function() {
            alert('✨ منصة Hashim Android - منصة احترافية لنشر تطبيقات Android.\n\nجميع التطبيقات من تطويري حصرياً.');
        });
    }

    // تبديل الوضع (داكن/فاتح)
    const themeBtn = document.getElementById('themeToggle');
    let isDark = true;

    if (themeBtn) {
        themeBtn.addEventListener('click', function() {
            isDark = !isDark;
            const root = document.documentElement;

            if (isDark) {
                root.style.setProperty('--bg-primary', '#0b0d10');
                root.style.setProperty('--bg-secondary', '#14181c');
                root.style.setProperty('--text-primary', '#f0f2f5');
                root.style.setProperty('--text-secondary', '#a0a8b4');
                root.style.setProperty('--card-bg', 'rgba(30, 34, 40, 0.6)');
                root.style.setProperty('--bg-glass', 'rgba(20, 24, 28, 0.55)');
                themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
            } else {
                root.style.setProperty('--bg-primary', '#f0f2f5');
                root.style.setProperty('--bg-secondary', '#e4e8ef');
                root.style.setProperty('--text-primary', '#0b0d10');
                root.style.setProperty('--text-secondary', '#4a5058');
                root.style.setProperty('--card-bg', 'rgba(255,255,255,0.5)');
                root.style.setProperty('--bg-glass', 'rgba(255,255,255,0.4)');
                themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
            }
        });
    }

    // روابط الفوتر (محاكاة)
    document.querySelectorAll('.footer-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            // نسمح بالتنقل العادي، لكن نضيف تحذيراً للتطوير
            console.log(`🔗 التنقل إلى: ${this.textContent}`);
        });
    });

    console.log('🚀 Hashim Android Platform loaded successfully!');
    console.log(`📱 ${window.appsData?.length || 0} تطبيق متاح`);
})();
