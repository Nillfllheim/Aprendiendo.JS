//.find => te crea un nuevo arreglo basado en la condición que estás creando
const carrito = [
    {nombre: 'monitor 27"', precio: 800},
    {nombre: 'televisor', precio: 250},
    {nombre: 'tablet', precio: 100},
    {nombre: 'audifonos', precio: 100},
    {nombre: 'teclado', precio: 150},
    {nombre: 'celular', precio: 1150}
]

//extraer con un .forEach
let resultado = ''
carrito.forEach((producto, index)=>{
    if(producto.nombre === 'tablet'){
        resultado = carrito[index]
    }
})

console.log(resultado)

//con un .find
const resultado2 = carrito.find(producto => producto.nombre === 'tablet')
console.log(resultado2)