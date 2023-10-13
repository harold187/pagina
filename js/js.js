document.addEventListener("DOMContentLoaded", function () {
  var sidebar = document.getElementById("sidebar");
  var menu = document.getElementById("menu");

  // Mostrar el menú cuando el mouse entra en la franja o el menú
  sidebar.addEventListener("mouseenter", function () {
    menu.style.left = "0px";
  });

  menu.addEventListener("mouseenter", function () {
    menu.style.left = "0px";
  });

  // Ocultar el menú cuando el mouse sale de la franja o el menú
  sidebar.addEventListener("mouseleave", function () {
    menu.style.left = "-200px";
  });

  menu.addEventListener("mouseleave", function () {
    menu.style.left = "-200px";
  });

  // Cierra el menú cuando se hace clic fuera de él
  document.addEventListener("click", function (event) {
    if (event.target !== sidebar && event.target !== menu) {
      menu.style.left = "-200px";
    }
  });
});
