saludoinicial()
let nombre = prompt (" ingresa tu nombre:")
let apellido =prompt ( " Ingresa tu apellido ")
alert  ("  Bienvenido " + nombre +  (" ") + apellido + ("✈️🧳"))
function saludoinicial() {
    alert ( " Reserve su Aventura. en Around the world contamos con los siguientes destinos: 1= tokio , 2= paris, 3=londres , 4= venecia " )
}
let destino = prompt ( " Ingresa tu destino✈️ ")
if (destino== "tokio" && 1){
alert (" Su destino escogido es TOKIO, te pasamos toda la informacion ")
}
else if (destino== "paris" && 2){
alert (" Su destino escogido es PARIS, te pasamos toda la informacion ")
}
else if ( destino=="londres" && 3){
     alert (" Su destino escogido es LONDRES, te pasamos toda la informacion ")
}
else if (destino =="venecia" && 4){
    alert (" Su destino escogido es VENECIA, te pasamos toda la informacion ")

}
else if (destino >4 && destino <1) {
    alert ( " Por favor ingrese un destino valido")
}
else {
    alert ( " Por favor ingresar un dato valido.")
}