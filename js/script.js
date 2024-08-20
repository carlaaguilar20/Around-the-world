class destino {
    informacion(ciudad, diasdisponible, mesdisponible, presupuesto) {
        this.ciudad= ciudad;
        this.diasdisponible= diasdisponible;
        this.mesdisponible= mesdisponible;
        this.presupuesto= presupuesto;
    }
}
 const tokio = new destino ("tokio",20,21,22,23,"mayo",3000);
 const paris = new destino ("paris",21,22,23,24,"septiembre",5000);
 const londres= new destino ("londres",17,18,19,20,"abril",6000);
 const venecia= new destino ("venecia",19,20,21,22,"diciembre",8000);

 const destinos = [
    tokio,
    paris,
    londres,
    venecia,

 ];

 function filtrardestino (destinos,buscar){
    return destinos.filter(
        (destino)=>
            destino.ciudad.toLowerCase().includes(buscar.toLowerCase())||
            destino.presupuesto.toLowerCase().includes(buscar.toLowerCase())

    )
 }
 const buscar = prompt("ingrese la ciudad que desea visitar:");
 const resultados= filtrardestino(destinos,buscar);

 if (resultados.length > 0) {
    alert("juegos encontrados:");
    resultados.forEach((juego)=> {
        alert(
            "ciudad:${destino.ciudad}- diasdisponible: ${destino.diasdisponible} - mesdisponible: ${destino.mesdisponible} - presupuesto: ${destino.presupuesto}"
        );
    });
 } else{
    alert ("No se encuentra disponible la ciudad ingresada.");
 }
