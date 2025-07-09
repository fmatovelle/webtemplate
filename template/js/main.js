// Inicializar AOS
AOS.init();

// Carrusel toggle y flechas
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.toggle-carrusel').forEach(boton => {
    boton.addEventListener('click', () => {
      const target = boton.dataset.target;
      const wrapper = document.getElementById(`wrapper-${target}`);
      const carrusel = document.getElementById(`carrusel-${target}`);

      const activo = wrapper.classList.toggle('activo');
      carrusel.classList.toggle('activo');
      boton.textContent = activo ? 'Ver menos' : 'Ver más';
    });
  });

  document.querySelectorAll('.flecha').forEach(flecha => {
    flecha.addEventListener('click', () => {
      const target = flecha.dataset.target;
      const carrusel = document.getElementById(`carrusel-${target}`);
      const scrollAmount = 300;

      if (flecha.classList.contains('izquierda')) {
        carrusel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        carrusel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    });
  });
});

// Formulario de contacto
const form = document.getElementById('formulario-contacto');
const mensaje = document.getElementById('mensaje-confirmacion');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.reset();

    mensaje.style.display = 'block';
    mensaje.style.opacity = '0';

    setTimeout(() => {
      mensaje.style.transition = 'opacity 0.5s ease';
      mensaje.style.opacity = '1';
    }, 100);

    setTimeout(() => {
      mensaje.style.opacity = '0';
      setTimeout(() => {
        mensaje.style.display = 'none';
      }, 500);
    }, 5000);
  });
}
// main.js

const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});
document.getElementById('year').textContent = new Date().getFullYear();