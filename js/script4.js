const imagen = document.querySelector('#torreE');
imagen.addEventListener("mouseover" , () =>{
    console.log("mouse sobre imagen")
    imagen.style.width ="40%";
})

const imagen2 = document.querySelector('#torreB');
imagen2.addEventListener("mouseover" , () =>{
    console.log("mouse sobre imagen")
    imagen2.style.width ="40%";
})

const imagen3 = document.querySelector('#torreT');
imagen3.addEventListener("mouseover" , () =>{
    console.log("mouse sobre imagen")
    imagen3.style.width ="40%";
})

const imagen4 = document.querySelector('#puenteR');
imagen4.addEventListener("mouseover" , () =>{
    console.log("mouse sobre imagen")
    imagen4.style.width ="40%";
})

const menuP = document.querySelector('#menuA');
menuP.addEventListener("click" , () => {
    console.log("menu Activo")
    menuP.style.width="100%";
}) 


const tituloI = document.querySelector('#titulos');
tituloI.addEventListener("mouseover" , () =>{
    tituloI.style.backgroundColor="rgb(179, 72, 72)";
    tituloI.style.opacity="100%";
})
