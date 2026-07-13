// نافذة التحميل المنبثقة مع عداد تنازلي
(function() {
    const modal = document.getElementById('downloadModal');
    const countdownEl = document.getElementById('countdownDisplay');
    const closeBtn = document.getElementById('modalCloseBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    let countdownInterval = null;
    let countdownValue = 3;

    function startDownloadFlow() {
        countdownValue = 3;
        countdownEl.textContent = countdownValue;
        modal.classList.add('active');

        if (countdownInterval) clearInterval(countdownInterval);

        countdownInterval = setInterval(() => {
            countdownValue -= 1;
            countdownEl.textContent = countdownValue;

            if (countdownValue <= 0) {
                clearInterval(countdownInterval);
                countdownInterval = null;
                // محاكاة التحويل إلى MediaFire
                window.open('https://www.mediafire.com', '_blank');
                modal.classList.remove('active');
            }
        }, 1000);
    }

    function closeModal() {
        if (countdownInterval) {
            clearInterval(countdownInterval);
            countdownInterval = null;
        }
        modal.classList.remove('active');
    }

    // مستمعو الأحداث
    if (downloadBtn) {
        downloadBtn.addEventListener('click', startDownloadFlow);
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // إغلاق عند الضغط على الخلفية
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // إغلاق بالضغط على Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
})();
