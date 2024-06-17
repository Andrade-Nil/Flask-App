var swiper = new Swiper(".mySwiper", {
  centeredSlides: true,
  slidesPerView: 1,
  grabCursor: true,
  freeMode: false,
  loop: true,
  mousewheel: false,
  speed: 1000,
  keyboard: {
    enabled: true,
  },

  // Enabled autoplay mode
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: false,
    clickable: true,
  },

  // If we need navigation
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Função para adicionar/remover classe quando rolar para cima ou para baixo
let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const currentScrollTop = window.scrollY;

  if (currentScrollTop > lastScrollTop) {
    // Rolar para baixo
    navbar.classList.add("translate-y-[-100%]");
  } else {
    // Rolar para cima
    navbar.classList.remove("translate-y-[-100%]");
  }

  lastScrollTop = currentScrollTop;
});


// Adicione um evento de clique aos botões
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".toggle-button");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetId = button.getAttribute("data-target");
      const targetElement = document.getElementById(targetId);

      // Alternar a classe 'hidden' para mostrar ou ocultar a descrição
      targetElement.classList.toggle("hidden");
    });
  });
});


const groupElements = document.querySelectorAll(".group");

groupElements.forEach((element) => {
  element.addEventListener("click", () => {
    const targetModalId = element.getAttribute("data-target");
    const modal = document.getElementById(targetModalId);
    modal.classList.remove("hidden");
  });
});

const modals = document.querySelectorAll(".modal");

// modals.forEach(modal => {
//   modal.addEventListener('click', () => {
//     modal.classList.add('hidden');
//   });
// });

// Atualize o código para fechar modais individualmente
for (let i = 1; i <= modals.length; i++) {
  const fecharModalBtn = document.getElementById(`fechar-modal-${i}`);
  if (fecharModalBtn) {
    fecharModalBtn.addEventListener("click", () => {
      modals[i - 1].classList.add("hidden");
    });
  }
}


const menuButton = document.querySelector(".button");
const navLinks = document.querySelector(".hidden");
menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("hidden");
});