// funcion que aplica estilo a la opcion seleccionada en el menu y quita la previeamente seleccionado
function seleccionar(link) {
  let opciones = document.querySelectorAll("#links a");
  opciones[0].className = "";
  opciones[1].className = "";
  opciones[2].className = "";
  opciones[3].className = "";
  opciones[4].className = "";
  link.className = "seleccionado";

  // Ahora hago que desaparezca el menu una vez selecciona alguna opcion
  let x = document.getElementById("nav");
  x.className = "";
}

// Funcion que muestra el icono del menu resposive
function responsiveMenu() {
  let x = document.getElementById("nav");
  if (x.className === "") {
    x.className = "responsive";
  } else {
    x.className = "";
  }
}

// detecto el scrolling para aplicar la animacion de las barras de habilidades
window.onscroll = function () {
  efectoHabilidades();
};

// Efecto de la barra de habilidades
function efectoHabilidades() {
  let skills = document.getElementById("skills");
  let distancia_skills = (window.innerHeight =
    skills.getBoundingClientRect().top);
  if (distancia_skills >= 300) {
    document.getElementById("html").classList.add("barra-progreso1");
    document.getElementById("js").classList.add("barra-progreso2");
    document.getElementById("bd").classList.add("barra-progreso3");
    document.getElementById("bs").classList.add("barra-progreso4");
  }
}
