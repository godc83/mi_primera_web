//alert("Hola este es mi Javascript");

//let nombre = "GERSON";

//var nombre1 = "OSWALDO";

//const nombre2 ="DIAZ";

//console.log (nombre)
//console.log (nombre1)
//console.log (nombre2)

//SELECIONADOR
//let contenidoTitulo = "Nombre";
//let titulo = document.querySelector(".logo .fuente")

//CONDICIONALES
//let textoTitulo = titulo.innertext;
//console.log(textoTitulo);

//if(textoTitulo == "Nombre") {
   // titulo.innerHTML = "Otro";
//} else{
   // console.log("no se cumple");
//}

//FUNCIONES

// let nombre = "Oswaldo";
// let ciudad = "Bogotá";
// let gusto = "caminar";

// let parrafo = document.querySelector(".parrafo2");

// function cambiarTexto(nombre, ciudad, gusto) {
//     let contenido = `Me llamo ${nombre}, nací en ${ciudad} y vivo en Cúcuta. Me gusta ${gusto} y ver doramas. Mi trabajo es acompañar a otras personas en su camino de autodescubrimiento creativo.`;

//     return contenido;
// }

// parrafo.innertext = cambiarTexto(nombre, ciudad, gusto);

// let menu_responsive = document.querySelector(".checkbtn");
// menu_responsive.onclick = function () {
//   navBar = document.querySelector(".navbar");
//   navBar.classList.toggle("active");
// };

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});