//.filter => te crea un nuevo arreglo con la condición que estés buscando en ese momento
const carrito = [
    {nombre: 'monitor 27"', precio: 800},
    {nombre: 'televisor', precio: 250},
    {nombre: 'tablet', precio: 100},
    {nombre: 'audifonos', precio: 100},
    {nombre: 'teclado', precio: 150},
    {nombre: 'celular', precio: 1150}
]

let resultado
resultado = carrito.filter(producto => producto.precio > 400)
resultado = carrito.filter(producto => producto.precio < 800)
//para eliminar un arreglo del carrito
resultado = carrito.filter(producto => producto.nombre !== 'audifonos')
resultado = carrito.filter(producto => producto.nombre === 'audifonos')


console.log(resultado)