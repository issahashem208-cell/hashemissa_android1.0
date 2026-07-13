// بيانات التطبيقات
const appsData = [
    {
        id: 1,
        name: 'Hashim Launcher',
        version: 'v3.2',
        updated: 'منذ ساعتين',
        size: '18 ميجابايت',
        icon: 'fa-rocket',
        featured: true,
        downloads: 14800,
        rating: 4.8,
        description: 'مشغل تطبيقات احترافي بتصميم عصري وأداء فائق.'
    },
    {
        id: 2,
        name: 'Hashim Notes',
        version: 'v1.0',
        updated: 'منذ يوم',
        size: '6 ميجابايت',
        icon: 'fa-pen-fancy',
        featured: true,
        downloads: 3200,
        rating: 4.5,
        description: 'تطبيق تدوين ملاحظات أنيق وسريع مع دعم التنسيق.'
    },
    {
        id: 3,
        name: 'Hashim Files',
        version: 'v2.1',
        updated: 'منذ 5 أيام',
        size: '12 ميجابايت',
        icon: 'fa-folder-open',
        featured: false,
        downloads: 6700,
        rating: 4.3,
        description: 'مدير ملفات ذكي مع بحث سريع وتنظيم تلقائي.'
    },
    {
        id: 4,
        name: 'Hashim Camera',
        version: 'v0.9',
        updated: 'منذ 3 أيام',
        size: '22 ميجابايت',
        icon: 'fa-camera',
        featured: false,
        downloads: 2100,
        rating: 4.1,
        description: 'تطبيق كاميرا بسيط مع فلاتر وتأثيرات احترافية.'
    },
    {
        id: 5,
        name: 'Hashim Weather',
        version: 'v2.0',
        updated: 'منذ أسبوع',
        size: '9 ميجابايت',
        icon: 'fa-cloud-sun',
        featured: false,
        downloads: 8900,
        rating: 4.6,
        description: 'تطبيق الطقس بتصميم جميل وتوقعات دقيقة.'
    }
];

// عرض التطبيقات في الشبكة
function renderApps(filter = '') {
    const grid = document.getElementById('appGrid');
    const filtered = appsData.filter(app =>
        app.name.toLowerCase().includes(filter.toLowerCase())
    );

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="glass" style="padding:30px; text-align:center; grid-column:1/-1;">
                <i class="fas fa-search" style="font-size:2rem; color:var(--text-secondary);"></i>
                <p style="color:var(--text-secondary); margin-top:8px;">لا توجد نتائج مطابقة</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map(app => `
        <div class="card-app app-card">
            <div class="icon-big"><i class="fas ${app.icon}" style="color:var(--accent);"></i></div>
            <div class="app-name">${app.name}</div>
            <div class="app-meta">
                <span><i class="fas fa-tag"></i> ${app.version}</span>
                <span><i class="fas fa-clock"></i> ${app.updated}</span>
                <span><i class="fas fa-hdd"></i> ${app.size}</span>
            </div>
            <button class="btn-sm view-app" data-id="${app.id}">
                عرض <i class="fas fa-arrow-right"></i>
            </button>
        </div>
    `).join('');
}

// تحديث الأقسام الإضافية
function updateStats() {
    const mostDownloaded = appsData.reduce((a, b) => a.downloads > b.downloads ? a : b);
    const newest = appsData.sort((a, b) => new Date(b.updated) - new Date(a.updated))[0];
    const latestUpdate = appsData.sort((a, b) => new Date(b.updated) - new Date(a.updated))[0];

    document.getElementById('mostDownloaded').textContent =
        `${mostDownloaded.name} · ${(mostDownloaded.downloads / 1000).toFixed(1)}k`;
    document.getElementById('newApps').textContent =
        `${newest.name} · ${newest.version}`;
    document.getElementById('latestUpdate').textContent =
        `${latestUpdate.name} ${latestUpdate.version} · ${latestUpdate.updated}`;
}

// تصدير للاستخدام في ملفات أخرى
window.appsData = appsData;
window.renderApps = renderApps;
window.updateStats = updateStats;

// تهيئة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    renderApps();
    updateStats();
});
