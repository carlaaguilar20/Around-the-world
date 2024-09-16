// const destinos = [
//     {
//         id:1,
//         lugar: "TOKYO",
//         diasDisponibles : 7,
//         mesDisponible: "mayo",
//         presupuestoEn$: 6000
//     },
//     {
//         id:2,
//         lugar: "LONDON",
//         diasDisponibles : 27,
//         mesDisponible: "abril",
//         presupuestoEn$: 20000
//     },
//     {
//         id:3,
//         lugar: "PARIS",
//         diasDisponibles : 8,
//         mesDisponible: "diciembre",
//         presupuestoEn$: 22000
//     },
//     {
//         id:4,
//         lugar: "VENICE",
//         diasDisponibles : 13,
//         mesDisponible: "septiembre",
//         presupuestoEn$: 8000
//     },
// ] 


document.addEventListener('DOMContentLoaded', () => {
    const carrito = [];
    const botonesAgregar = document.querySelectorAll('.agregar-carrito');
    const listaCarrito = document.getElementById('lista-carrito');
    const total = document.getElementById('total');

    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', (e) => {
            const producto = e.target.parentElement;
            const nombre = producto.querySelector('h2').textContent;
            const precio = parseFloat(producto.querySelector('p').textContent.replace('FROM: $', ''));
            agregarAlCarrito(nombre, precio);
        });
    });

    function agregarAlCarrito(nombre, precio) {
        carrito.push({ nombre, precio });
        actualizarCarrito();
        Swal.fire({
            position: 'bottom',
            icon: "success",
            title: "ADDED TO MY BOOKINGS WITH SUCCESS",
            showConfirmButton: false,
            timer: 1500
          });
    }

    function actualizarCarrito() {
        listaCarrito.innerHTML = '';
        let totalPrecio = 0;
        carrito.forEach(producto => {
            const li = document.createElement('li');
            li.textContent = `${producto.nombre} - $${producto.precio}`;
            listaCarrito.appendChild(li);
            totalPrecio += producto.precio;
        });
        total.textContent = totalPrecio.toFixed(2);
    }
});
