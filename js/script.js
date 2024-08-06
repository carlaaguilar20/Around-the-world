saludoinicial()
let nombre = prompt (" ingresa tu nombre:")
let apellido =prompt ( " Ingresa tu apellido ")
alert  ("  Bienvenido " + nombre +  (" ") + apellido + ("✈️🧳"))
function saludoinicial() {
    alert ( " Reserve su Aventura. en Around the world contamos con los siguientes destinos: 1= tokio , 2= paris, 3=londres , 4= venecia " )
}
    let destino = prompt ( " Ingresa tu destino✈️ ") 
    let destino2 =prompt ( " Ingresa tu segundo destino si tienes✈️ ") 
    do {
        if (destino== "tokio", destino== "1", destino2== "tokio", destino2== "1" ){
            alert (" Su destino escogido es TOKIO, te pasamos toda la informacion ")
            }
            else if (destino== "paris" , destino== "2" , destino2== "paris" , destino2== "2"  ){
            alert (" Su destino escogido es PARIS, te pasamos toda la informacion ")
            }
            else if ( destino=="londres" , destino== "3" , destino2=="londres" , destino2== "3" ){
                 alert (" Su destino escogido es LONDRES, te pasamos toda la informacion correspondiente ")
            }
            else if (destino =="venecia", destino== "4",destino2 =="venecia", destino2== "4" ){
                alert (" Su destino escogido es VENECIA, te pasamos toda la informacion correspondiente ")
            
            }
            else if (destino >=5 , destino <1 , destino2 >=5 , destino2 <1) {
                alert ( " Por favor ingrese un destino valido.")
            } 
            else {
                alert ( " Por favor ingresar un dato valido.")
            }
    } while (destino>6 , destino2>6)

