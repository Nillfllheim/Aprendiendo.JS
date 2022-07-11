//.every => todos los elementos de un arreglo deben de cumplir esa condición para que nos retorne un true
const carrito = [
    {nombre: 'monitor 27"', precio: 800},
    {nombre: 'televisor', precio: 250},
    {nombre: 'tablet', precio: 100},
    {nombre: 'audifonos', precio: 100},
    {nombre: 'teclado', precio: 150},
    {nombre: 'celular', precio: 1150}
]

const resultado = carrito.every(producto => producto.precio < 1000)
console.log(resultado)