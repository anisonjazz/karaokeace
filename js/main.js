// カラオケエース メインJS

document.addEventListener('DOMContentLoaded', function() {

  // ナビゲーション：現在ページにactiveクラス
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    // 絶対パスに変換して比較
    const absHref = new URL(href, window.location.href).pathname;
    if (currentPath === absHref || (currentPath.endsWith('/') && absHref === currentPath + 'index.html')) {
      link.classList.add('active');
    }
  });

  // 日付フォーマット
  const dateElements = document.querySelectorAll('[data-date]');
  dateElements.forEach(el => {
    const date = new Date(el.dataset.date);
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'short' };
    el.textContent = date.toLocaleDateString('ja-JP', options);
  });

  // 読み込み時のフェードイン
  const fadeElements = document.querySelectorAll('.section-box, .sidebar-box, .hero-news');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0 });

  fadeElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    observer.observe(el);
  });

});
