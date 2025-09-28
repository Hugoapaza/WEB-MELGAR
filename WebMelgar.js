// ===================== MENÚ HAMBURGUESA =====================
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
});

// ===================== SLIDER PRINCIPAL =====================
let index = 0;
const slides = document.getElementById("slides");
const total = slides.children.length;
const indicators = document.getElementById("indicators");

for (let i = 0; i < total; i++) {
  const dot = document.createElement("span");
  dot.onclick = () => showSlide(i);
  indicators.appendChild(dot);
}

function showSlide(i) {
  index = (i + total) % total;
  slides.style.transform = `translateX(-${index * 100}%)`;
  updateIndicators();
}
function nextSlide() { showSlide(index + 1); }
function prevSlide() { showSlide(index - 1); }

function updateIndicators() {
  [...indicators.children].forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}
showSlide(0);

// ===================== BOTÓN SCROLLTOP =====================
const btnScrollTop = document.getElementById('btn_scrolltop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    btnScrollTop.classList.add('btn-scrolltop-on');
  } else {
    btnScrollTop.classList.remove('btn-scrolltop-on');
  }
});
btnScrollTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===================== SWIPER OBRAS Y LOGOS =====================
const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: { delay: 4000, disableOnInteraction: false },
  navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
  slidesPerView: 1,
  spaceBetween: 20
});

const myswiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  autoplay: { delay: 2000, disableOnInteraction: false },
  breakpoints: {
    320: { slidesPerView: 1 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 4 }
  }
});
