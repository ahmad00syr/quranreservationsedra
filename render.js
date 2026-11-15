const ALL_SURAHS = [
    { name: "الفاتحة", pages: 1 }, { name: "البقرة", pages: 48 }, { name: "آل عمران", pages: 27 },
    { name: "النساء", pages: 29 }, { name: "المائدة", pages: 22 }, { name: "الأنعام", pages: 23 },
    { name: "الأعراف", pages: 26 }, { name: "الأنفال", pages: 10 }, { name: "التوبة", pages: 21 },
    { name: "يونس", pages: 14 }, { name: "هود", pages: 14 }, { name: "يوسف", pages: 14 },
    { name: "الرعد", pages: 7 }, { name: "إبراهيم", pages: 7 }, { name: "الحجر", pages: 6 },
    { name: "النحل", pages: 15 }, { name: "الإسراء", pages: 12 }, { name: "الكهف", pages: 12 },
    { name: "مريم", pages: 8 }, { name: "طه", pages: 10 }, { name: "الأنبياء", pages: 10 },
    { name: "الحج", pages: 10 }, { name: "المؤمنون", pages: 9 }, { name: "النور", pages: 10 },
    { name: "الفرقان", pages: 8 }, { name: "الشعراء", pages: 11 }, { name: "النمل", pages: 9 },
    { name: "القصص", pages: 11 }, { name: "العنكبوت", pages: 8 }, { name: "الروم", pages: 7 },
    { name: "لقمان", pages: 4 }, { name: "السجدة", pages: 3 }, { name: "الأحزاب", pages: 10 },
    { name: "سبأ", pages: 7 }, { name: "فاطر", pages: 6 }, { name: "يس", pages: 6 },
    { name: "الصافات", pages: 8 }, { name: "ص", pages: 6 }, { name: "الزمر", pages: 9 },
    { name: "غافر", pages: 9 }, { name: "فصلت", pages: 6 }, { name: "الشورى", pages: 7 },
    { name: "الزخرف", pages: 7 }, { name: "الدخان", pages: 3 }, { name: "الجاثية", pages: 4 },
    { name: "الأحقاف", pages: 5 }, { name: "محمد", pages: 4 }, { name: "الفتح", pages: 5 },
    { name: "الحجرات", pages: 3 }, { name: "ق", pages: 3 }, { name: "الذاريات", pages: 3 },
    { name: "الطور", pages: 3 }, { name: "النجم", pages: 3 }, { name: "القمر", pages: 3 },
    { name: "الرحمن", pages: 4 }, { name: "الواقعة", pages: 4 }, { name: "الحديد", pages: 5 },
    { name: "المجادلة", pages: 4 }, { name: "الحشر", pages: 4 }, { name: "الممتحنة", pages: 3 },
    { name: "الصف", pages: 2 }, { name: "الجمعة", pages: 2 }, { name: "المنافقون", pages: 2 },
    { name: "التغابن", pages: 2 }, { name: "الطلاق", pages: 2 }, { name: "التحريم", pages: 2 },
    { name: "الملك", pages: 3 }, { name: "القلم", pages: 3 }, { name: "الحاقة", pages: 3 },
    { name: "المعارج", pages: 2 }, { name: "نوح", pages: 2 }, { name: "الجن", pages: 2 },
    { name: "المزمل", pages: 2 }, { name: "المدثر", pages: 3 }, { name: "القيامة", pages: 2 },
    { name: "الإنسان", pages: 2 }, { name: "المرسلات", pages: 2 }, { name: "النبأ", pages: 2 },
    { name: "النازعات", pages: 2 }, { name: "عبس", pages: 1 }, { name: "التكوير", pages: 1 },
    { name: "الانفطار", pages: 1 }, { name: "المطففين", pages: 2 }, { name: "الانشقاق", pages: 1 },
    { name: "البروج", pages: 1 }, { name: "الطارق", pages: 1 }, { name: "الأعلى", pages: 1 },
    { name: "الغاشية", pages: 1 }, { name: "الفجر", pages: 2 }, { name: "البلد", pages: 1 },
    { name: "الشمس", pages: 1 }, { name: "الليل", pages: 1 }, { name: "الضحى", pages: 1 },
    { name: "الشرح", pages: 1 }, { name: "التين", pages: 1 }, { name: "العلق", pages: 1 },
    { name: "القدر", pages: 1 }, { name: "البينة", pages: 1 }, { name: "الزلزلة", pages: 1 },
    { name: "العاديات", pages: 1 }, { name: "القارعة", pages: 1 }, { name: "التكاثر", pages: 1 },
    { name: "العصر", pages: 1 }, { name: "الهمزة", pages: 1 }, { name: "الفيل", pages: 1 },
    { name: "قريش", pages: 1 }, { name: "الماعون", pages: 1 }, { name: "الكوثر", pages: 1 },
    { name: "الكافرون", pages: 1 }, { name: "النصر", pages: 1 }, { name: "المسد", pages: 1 },
    { name: "الإخلاص", pages: 1 }, { name: "الفلق", pages: 1 }, { name: "الناس", pages: 1 }
];

// توزيع السور الـ 114 على صفوف تشكل قلبًا هندسيًا أنيقًا
const HEART_ROWS = [
    [0, 1, 2, 3, 4, 5],                 // قمتي القلب
    [6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
    [28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
    [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51],
    [52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62],
    [63, 64, 65, 66, 67, 68, 69, 70, 71, 72],
    [73, 74, 75, 76, 77, 78, 79, 80, 81],
    [82, 83, 84, 85, 86, 87, 88, 89],
    [90, 91, 92, 93, 94, 95, 96],
    [97, 98, 99, 100, 101, 102],
    [103, 104, 105, 106, 107],
    [108, 109, 110],
    [111, 112],
    [113]                               // طرف القلب السفلي
];

function renderHeart() {
    const container = document.getElementById('heart-container');
    const savedProgress = JSON.parse(localStorage.getItem('surahsProgress') || '{}');
    
    let svgContent = `<svg viewBox="0 0 360 350" xmlns="http://www.w3.org/2000/svg">`;
    
    // تعريف التدرجات اللونية للتلوين التدريجي داخل كل سورة
    svgContent += `<defs>`;
    ALL_SURAHS.forEach((surah, idx) => {
        const saved = Math.min(savedProgress[surah.name] || 0, surah.pages);
        const pct = Math.round((saved / surah.pages) * 100);
        svgContent += `
            <linearGradient id="grad-${idx}" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="${pct}%" stop-color="#f06292" />
                <stop offset="${pct}%" stop-color="#ffffff" />
            </linearGradient>`;
    });
    svgContent += `</defs>`;

    // زهور تزيينية حول القلب
    svgContent += `
        <circle cx="45" cy="40" r="14" fill="#f8bbd0" opacity="0.7"/>
        <circle cx="315" cy="40" r="14" fill="#f8bbd0" opacity="0.7"/>
        <circle cx="30" cy="180" r="10" fill="#fce4ec"/>
        <circle cx="330" cy="180" r="10" fill="#fce4ec"/>
    `;

    // رسم خلايا السور على شكل قلب
    const rowHeight = 20;
    const cellWidth = 27;
    
    HEART_ROWS.forEach((row, rIndex) => {
        const y = 20 + rIndex * rowHeight;
        
        if (rIndex === 0) {
            // رسم قمتي القلب (الفص الأيمن والأيسر)
            row.forEach((surahIdx, i) => {
                const isLeft = i < 3;
                const localIdx = i % 3;
                const x = isLeft ? (65 + localIdx * cellWidth) : (215 + localIdx * cellWidth);
                svgContent += createCell(surahIdx, x, y, cellWidth, rowHeight);
            });
        } else {
            const totalRowWidth = row.length * cellWidth;
            const startX = (360 - totalRowWidth) / 2;
            row.forEach((surahIdx, i) => {
                const x = startX + i * cellWidth;
                svgContent += createCell(surahIdx, x, y, cellWidth, rowHeight);
            });
        }
    });

    svgContent += `</svg>`;
    container.innerHTML = svgContent;

    // تحديث عداد الصفحات الكلي
    let totalSaved = 0;
    for (let s in savedProgress) {
        totalSaved += savedProgress[s];
    }
    document.getElementById('status').innerText = `إجمالي الصفحات المحفوظة: ${totalSaved} / 604`;
}

function createCell(idx, x, y, w, h) {
    const surah = ALL_SURAHS[idx];
    return `
        <g onclick="fillInputWithSurah('${surah.name}')">
            <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" 
                  fill="url(#grad-${idx})" class="surah-cell" />
            <text x="${x + w / 2}" y="${y + h / 2}" class="surah-label">${surah.name}</text>
        </g>
    `;
}

// عند الضغط على أي سورة في القلب يكتب اسمها تلقائياً في خانة الإدخال لتسهيل الكتابة!
function fillInputWithSurah(name) {
    const input = document.getElementById('surahInput');
    input.value = `${name}, `;
    input.focus();
}

renderHeart();