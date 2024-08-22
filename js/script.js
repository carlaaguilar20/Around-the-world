let destino = [
    {ciudad: "venecia", disponibilidad: 15},
    {ciudad: "tokio", disponibilidad: 20},
    {ciudad: "londres", disponibilidad: 1},
    {ciudad: "paris", disponibilidad: 9},
]
 let informacion = prompt ("ingrese el destino requerido")
let destinos = destino.filter(Element => Element.ciudad == informacion)

console.log(destinos);
alert
(informacion)
