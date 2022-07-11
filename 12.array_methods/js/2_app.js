//.findIndex para encontrar la posición en un array

const meses = ['enero','febrero','marzo','abril','mayo','junio','julio']

const carrito = [
    {nombre: 'monitor 27"', precio: 800},
    {nombre: 'televisor', precio: 250},
    {nombre: 'tablet', precio: 100},
    {nombre: 'audifonos', precio: 100},
    {nombre: 'teclado', precio: 150},
    {nombre: 'celular', precio: 1150}
]

//encontrar el índice de 'abril' con .forEach
meses.forEach((mes, i)=> {
    if(mes === 'abril'){
        console.log(`Encontrado en el índice ${i}`)
    }
})

//encontrar el índice de 'abril' con .findIndex
const indice = meses.findIndex(mes => mes === 'abril')
console.log(indice)

//encontrar un índice en un arreglo de objetos con .findIndex (desventaja en valores iguales, sólo leerá el primero que encuentre)
const indice2 = carrito.findIndex(producto => producto.precio === 100)
console.log(indice2)