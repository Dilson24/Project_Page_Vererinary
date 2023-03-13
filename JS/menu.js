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
