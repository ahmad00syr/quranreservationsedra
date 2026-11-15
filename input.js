document.getElementById('updateBtn').addEventListener('click', function() {
    const inputVal = document.getElementById('surahInput').value.trim();
    if (!inputVal.includes(',')) {
        alert("اكتبي اسم السورة ثم فاصلة ثم عدد الصفحات (مثال: البقرة, 5)");
        return;
    }

    const parts = inputVal.split(',');
    const surahName = parts[0].trim();
    const pagesCount = parseInt(parts[1].trim());

    const surahObj = ALL_SURAHS.find(s => s.name === surahName);
    if (!surahObj) {
        alert("تأكدي من كتابة اسم السورة بشكل صحيح (أو اضغطي على السورة في القلب ليكتب اسمها تلقائياً)");
        return;
    }

    if (isNaN(pagesCount) || pagesCount <= 0) {
        alert("الرجاء كتابة عدد صفحات صحيح");
        return;
    }

    let savedProgress = JSON.parse(localStorage.getItem('surahsProgress') || '{}');
    const current = savedProgress[surahName] || 0;
    
    // لا يتجاوز الحد الأقصى لصفحات السورة
    savedProgress[surahName] = Math.min(current + pagesCount, surahObj.pages);

    localStorage.setItem('surahsProgress', JSON.stringify(savedProgress));
    document.getElementById('surahInput').value = '';
    
    renderHeart();
});

document.getElementById('resetBtn').addEventListener('click', function() {
    if (confirm("هل تريدين مسح التقدم والبدء من جديد؟")) {
        localStorage.removeItem('surahsProgress');
        renderHeart();
    }
});