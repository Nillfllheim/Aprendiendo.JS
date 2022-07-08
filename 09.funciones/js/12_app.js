//Arrow functions en un .forEach y un .map

const carrito = [
    {nombre: 'Monitor de 27"', precio: 500},
    {nombre: 'Televisor 55"', precio: 1200},
    {nombre: 'Tablet', precio: 250},
    {nombre: 'Audifonos', precio: 25},
    {nombre: 'Teclado', precio: 140},
    {nombre: 'Celular', precio: 2500}
]

const nuevoArreglo = carrito.map(producto => `${producto.nombre} - Precio: ${producto.precio}`)

carrito.forEach(producto => console.log(`${producto.nombre} - Precio: ${producto.precio}`))

console.log(nuevoArreglo)