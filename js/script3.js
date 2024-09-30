
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
