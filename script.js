/* =====================
   TUBLUM — SCRIPT
   ===================== */

let currentLang = 'en';

function toggleLang() {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  document.body.classList.toggle('ar', currentLang === 'ar');
  document.querySelector('.nav-lang').textContent = currentLang === 'en' ? 'عربي' : 'English';
  translatePage(currentLang);
}

function translatePage(lang) {
  // Translate all elements with data-en / data-ar attributes
  document.querySelectorAll('[data-' + lang + ']').forEach(el => {
    const text = el.getAttribute('data-' + lang);
    if (el.tagName === 'H1' || el.tagName === 'H2') {
      el.innerHTML = text;
    } else {
      el.textContent = text;
    }
  });
}

// Smooth nav background on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 20) {
    nav.style.boxShadow = '0 2px 20px rgba(42,26,28,0.08)';
  } else {
    nav.style.boxShadow = 'none';
  }
});