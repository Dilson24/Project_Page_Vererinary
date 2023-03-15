const imagenes = document.querySelectorAll(".img-galeria");
const imagenLight = document.querySelector(".agregar-imagen");
const contenedorLight = document.querySelector(".imagen-light");
/*btn control*/
const btncloseLight = document.querySelector(".close");
const btnLeft = document.querySelector(".Left");
const btnRight = document.querySelector(".Right");
const miDiv = document.getElementById('miDiv');
let indiceImagen = 0;

/*Abre Ligthbox*/
const aparecerImagen = (event) => {
  imagenLight.src = event.target.src;
  indiceImagen = Array.from(imagenes).indexOf(event.target);
  contenedorLight.classList.toggle("show");
  imagenLight.classList.toggle("showImage");
  boton_nav.style.opacity = "0";
}
imagenes.forEach((imagen) => {
  imagen.addEventListener('click', aparecerImagen);
});

//Cerrar Lightbox
contenedorLight.addEventListener("click", (e) => {
  if (
    e.target !== imagenLight &&
    e.target !== btnLeft &&
    e.target !== btnRight
  ) {
    contenedorLight.classList.toggle("show");
    imagenLight.classList.toggle("showImage");
    boton_nav.style.opacity = "1";
  }
});

//Adelantar imagen
const adelantaImagen = () => {
  if (indiceImagen === imagenes.length - 1) {
    indiceImagen = -1;
    
  }
  imagenLight.src = imagenes[indiceImagen + 1].src;
  indiceImagen++;
  miDiv.classList.toggle("square-in-center");
  setTimeout(() => {
    miDiv.classList.remove('square-in-center');
  }, 500);
  
};
btnRight.addEventListener('click', adelantaImagen);

//Retrocede la Imagen
const retrocederImagen = () => {
  if (indiceImagen === 0) {
    indiceImagen = imagenes.length;   
        
  }
  imagenLight.src = imagenes[indiceImagen - 1].src;
  indiceImagen--;
  miDiv.classList.toggle("square-in-center");
  setTimeout(() => {
    miDiv.classList.remove('square-in-center');
  }, 500);
  
};

btnLeft.addEventListener('click', retrocederImagen);


