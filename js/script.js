const destinos = [
    {
        lugar: "tokio",
        diasDisponibles : ( 14,15,16,17),
        mesDisponible: "mayo",
        presupuestoEn$: 6000
    },
    {
        lugar: "londres",
        diasDisponibles : ( 24,25,26,27),
        mesDisponible: "abril",
        presupuestoEn$: 20000
    },
    {
        lugar: "paris",
        diasDisponibles : ( 4,5,6,8),
        mesDisponible: "diciembre",
        presupuestoEn$: 22000
    },
    {
        lugar: "venecia",
        diasDisponibles : ( 10,11,12,13),
        mesDisponible: "septiembre",
        presupuestoEn$: 8000
    }
] 
const destinosJSON = JSON.stringify(destinos);
console.log(destinos);
console.log(destinosJSON);
 const guardarEnelLocalStorage = (key , value ) => {localStorage.setItem(key,value)};
 for ( const destino of destinos) {
    guardarEnelLocalStorage(destino.lugar , JSON.stringify(destino));
 }
  
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

