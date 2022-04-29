//forEach para iterar un arreglo

const carrito = [
    {nombre: 'monitor 27"', precio: 800},
    {nombre: 'televisor', precio: 250},
    {nombre: 'tablet', precio: 200},
    {nombre: 'audifonos', precio: 48},
    {nombre: 'teclado', precio: 150},
    {nombre: 'celular', precio: 1150}
]

carrito.forEach(function(producto){
    console.log(`${producto.nombre} - Precio: ${producto.precio}`)
})