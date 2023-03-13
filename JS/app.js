const imagenes = document.querySelectorAll('.img-galeria')
const imagenLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')
const closeLight = document.querySelector('.close')
const Left = document.querySelector('.Left')
const Right = document.querySelector('.Right')

imagenes.forEach(imagen => {
    imagen.addEventListener('click',()=>{
        aparecerImagen(imagen.getAttribute('src'));
    })
});

contenedorLight.addEventListener('click',(e)=>{
    if(e.target !== imagenLight){
        contenedorLight.classList.toggle('show')
        imagenLight.classList.toggle('showImage')
        boton_nav.style.opacity = '1';
    }
})

const aparecerImagen = (imagen)=>{
    imagenLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenLight.classList.toggle('showImage')
    boton_nav.style.opacity = '0';
}

