// Sticky header
window.addEventListener('scroll', () => {
  document.getElementById('header').style.boxShadow =
    window.scrollY > 10 ? '0 2px 20px rgba(0,0,0,0.08)' : 'none';
});

// Форма записи
document.getElementById('bookingForm').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('popup').classList.add('show');
});

// Burger меню
document.getElementById('burger').addEventListener('click', () => {
  const nav = document.querySelector('.nav-links');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  if (nav.style.display === 'flex') {
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.top = '68px';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.background = 'white';
    nav.style.padding = '20px 24px';
    nav.style.borderBottom = '1px solid #f0e8eb';
  }
});

// Плавное появление секций
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.style.opacity = '1';
  });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .review-card, .work-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transition = 'opacity 0.5s ease';
  observer.observe(el);
});
