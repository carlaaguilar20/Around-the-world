const menuP = document.querySelector('#menuA');
menuP.addEventListener("click" , () => {
    console.log("menu Activo")
    menuP.style.width="50%";
}) 

let formularioA = document.querySelector('#formularioA');
let nameF = document.getElementById('nameF');
let apellidoF = document.getElementById('apellidoF');
let emailF = document.getElementById('emailF');
formularioA.addEventListener("submit" , (e) => {
e.preventDefault();
let form = e.target;
 const nombreStorage = form.children[1].value;
 const apellidoStorage = form.children[3].value;
 const emailStorage = form.children[7].value;

 localStorage.setItem("nameF" ,nombreStorage );
 localStorage.setItem("apellidoF" ,apellidoStorage );
 localStorage.setItem("emailF" ,emailStorage );

 nameF.innerHTML= localStorage.getItem("nameF");
 apellidoF.innerHTML= localStorage.getItem("apellidoF");
 emailF.innerHTML= localStorage.getItem("emailF");
} )

const imagen5 = document.querySelector('#formularioA');
imagen5.addEventListener("mouseover" , () =>{
    console.log("mouse sobre imagen")
    imagen5.style.width ="100%";
})

const buttonSend = document.querySelector('#buttonSend')
buttonSend.onclick = () => {
 console.log("agregarAlCarrito")
 Swal.fire({
     position: 'center-start',
     icon: "success",
     title: "FORM SUCCESSFULLY SUBMITTED",
     showConfirmButton: false,
     timer: 1500
   });
}