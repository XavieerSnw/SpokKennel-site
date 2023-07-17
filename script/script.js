$(document).ready(function () {
  // Inicializar o AOS
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
  });

  // Adicionar animações nos elementos com a classe .animate
  $(".animate").each(function () {
    $(this).attr("data-aos", $(this).data("animation"));
  });

  // Atualizar as animações no scroll
  AOS.refresh();

  // Variável para armazenar a posição anterior do scroll
  var lastScrollTop = 0;

  // Função para verificar a direção do scroll
  function checkScrollDirection() {
    var st = $(window).scrollTop();

    if (st > lastScrollTop) {
      // Scroll para baixo
      $(".animate").each(function () {
        $(this).attr("data-aos", $(this).data("animation"));
      });
    } else {
      // Scroll para cima
      $(".animate").each(function () {
        $(this).attr("data-aos", $(this).data("animation-inverted"));
      });
    }

    lastScrollTop = st;
  }

  // Evento de scroll
  $(window).scroll(function () {
    checkScrollDirection();
  });

  // Inicializar o carrossel
  var carousel = $(".image-carousel").owlCarousel({
    items: 3,
    loop: true,
    margin: 20,
    nav: true,
    navText: [
      "<i class='fas fa-chevron-left'></i>",
      "<i class='fas fa-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  // Adicionar botões de navegação ao carrossel
  var customNav = $(".custom-nav");
  customNav.on("click", ".custom-prev", function () {
    carousel.trigger("prev.owl.carousel");
  });

  customNav.on("click", ".custom-next", function () {
    carousel.trigger("next.owl.carousel");
  });

  document.getElementById("homeBtn").addEventListener("click", function () {
    window.location.href = "index.html";
  });

  document
    .getElementById("instagramBtn")
    .addEventListener("click", function () {
      window.location.href = "https://www.instagram.com/spokkennel_cocker/";
    });

  document.getElementById("contatoBtn").addEventListener("click", function () {
    window.location.href = "https://wa.me/message/WMGNXWBDAFAVD1";
  });
});
