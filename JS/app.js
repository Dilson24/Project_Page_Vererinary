//FUNCTION LIGTHBOX

const imagenes = document.querySelectorAll(".img-galeria");
const imagenLight = document.querySelector(".agregar-imagen");
const contenedorLight = document.querySelector(".imagen-light");
/*btn control*/
const btncloseLight = document.querySelector(".close");
const btnLeft = document.querySelector(".Left");
const btnRight = document.querySelector(".Right");
const miDiv = document.getElementById('miDiv');
let indiceImagen = 0;

/*Open Ligthbox*/

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

/*Close Lightbox*/

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

/*Advance image*/

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

/*Back image*/

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

//DROP-DOWN MENU FUNCTION

const boton_nav = document.querySelector('.boton_nav')
const menu = document.querySelector('.menu-navegacion')


boton_nav.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e =>{
    if(menu.classList.contains('spread') 
        && e.target != menu && e.target != boton_nav){
        console.log('cerrar')
        menu.classList.toggle("spread")
    }
})