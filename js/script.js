const destinos = [
    {
        place: "TOKYO",
        diasDisponibles : ( 14,15,16,17),
        mesDisponible: "mayo",
        presupuestoEn$: 6000
    },
    {
        place: "LONDON",
        diasDisponibles : ( 24,25,26,27),
        mesDisponible: "abril",
        presupuestoEn$: 20000
    },
    {
        place: "PARIS",
        diasDisponibles : ( 4,5,6,8),
        mesDisponible: "diciembre",
        presupuestoEn$: 22000
    },
    {
        place: "VENICE",
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
    guardarEnelLocalStorage(destino.place , JSON.stringify(destino));
 }

 const mostrarDestinos = () => {
    return new Promise ( (resolve, reject) => {
        setTimeout (() => {
            resolve (destinos)
        }, 2000)
    })
 }
 let arrayDestinos = [] ;

const redenderizarDestinos = (arr) => {
    const contenedor = document.getElementById("destinos-container");
    contenedor.innerHTML=  '';
    arr.forEach (destino => {
        const divDestino = document.createElement("div");
        divDestino.className= 'destino';
        divDestino.innerHTML=  ` <h2> PLACE : ${destino.place} </h2> <p> BUDGET : $${destino.presupuestoEn$} </p> `;
        contenedor.appendChild(divDestino)
    } );
   
}

mostrarDestinos()
.then((res) =>{
    arrayDestinos= res;
    redenderizarDestinos(arrayDestinos);
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "PROMISE FULFILLED",
        showConfirmButton: false,
        timer: 1500
      });
})
.catch((error) => {
    console.error("promesa rechazada" , error);
    Swal.fire({
      icon: "error",
      title: "ERROR",
      text: "PROMISE REJECTED",
      footer: '<a href="#">Why do I have this issue?</a>'
    });
})
.finally(() =>{
    console.log("fin de renderizado")
})

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

