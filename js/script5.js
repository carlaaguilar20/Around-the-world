fetch("/destinos.json" , {
method : "POST",
headers: {
    "content-type": "aplication/json ; charset-UTF-8"
}
})

const cardJ = document.getElementById("cardJ");
fetch("/destinos.json")
.then((response) => response.json())
.then((data ) => {
    data.forEach(element => {
        const cardsJ = document.createElement("div");
    cardsJ.innerHTML= ` <div class= "productos">  <h2> Place: ${element.destinoJ} </h2> , <img style= "width 10rem;"  src="${element.imagenJ}" alt=" ${element.destinoJ} " > </div>
    <div class= "descripcionDos"> <h3> ${element.descripcion}  </h3> </div> ` 
    cardJ.appendChild(cardsJ);
    }); 
    
} )