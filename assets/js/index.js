
const noticias = [

  {
    'title': 'Steam cumple 20 años y lo celebra con más de 4000 juegos rebajados hasta un 90 %',
    'image': 'steam',
    'description': 'Juegos de PC clásicos y modernos están disponibles con hasta un 90 % de descuento en Steam por el 20 aniversario de la plataforma.',
  
  },
  {
    'title': 'Este es el nuevo juego gratis para PC que puedes descargar esta semana',
    'image': 'spelldrifter',
    'description': 'Como todos los jueves como promoción de la misma Epic Games Store, hay juegos nuevos que podemos descargar sin ningún costo para nuestras computadoras.',
  
  
  },
  {
    'title': 'iPhone 15: así es el nuevo celular y equipos de Apple',
    'image': 'iphone15',
    'description': 'Hoy se han dado a conocer el iPhone 15 y el iPhone 15 Plus, con sus características y sus precios.',
  
  
  },
  {
    'title': 'La billetera de Google ya está disponible en Colombia',
    'image': 'googleb',
    'description': 'La aplicación permite guardar los tiquetes de embarque y la opción de débito y crédito de los bancos',
  
  
  },

]

let news = document.querySelector('#news');

noticias.forEach((element, index)=>{
  news.innerHTML +=`
  <article class = "post">

    <h2>${ element.title}</h2>
    <img src="./assets/img/${ element.image }.jpg" alt="">
    <p>${ element.description}</p>
    <a href="#">Leer más</a>
    

    <article/>
    `;
})


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

