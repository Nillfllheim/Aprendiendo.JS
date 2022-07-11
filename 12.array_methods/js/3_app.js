//.reduce => tomar una gran cantidad de datos, unirlos y entregar un resultado

const carrito = [
    {nombre: 'monitor 27"', precio: 800},
    {nombre: 'televisor', precio: 250},
    {nombre: 'tablet', precio: 100},
    {nombre: 'audifonos', precio: 100},
    {nombre: 'teclado', precio: 150},
    {nombre: 'celular', precio: 1150}
]

//con un .forEach
let total = 0
carrito.forEach(producto => total += producto.precio)
console.log(total)

//con un .reduce
let resultado = carrito.reduce((total, producto) => total + producto.precio, 0)
console.log(resultado)