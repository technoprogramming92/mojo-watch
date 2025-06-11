
  const toggleBtn = document.getElementById('languageToggle');
  const englishTexts = document.querySelectorAll('.english');
  const arabicTexts = document.querySelectorAll('.arabic');
  let isArabic = true; // Default is Arabic

  function switchLanguage(toArabic) {
    englishTexts.forEach(el => el.style.display = toArabic ? 'none' : 'inline');
    arabicTexts.forEach(el => el.style.display = toArabic ? 'inline' : 'none');
    document.body.setAttribute('dir', toArabic ? 'ltr' : 'ltr');
    document.documentElement.setAttribute('lang', toArabic ? 'ar' : 'en');
    toggleBtn.textContent = toArabic ? 'English' : 'عربي';
    isArabic = toArabic;
  }

  toggleBtn.addEventListener('click', () => {
    switchLanguage(!isArabic);
  });

  // Initialize as Arabic
  switchLanguage(true);

