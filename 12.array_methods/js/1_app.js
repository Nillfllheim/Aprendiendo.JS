//Los Array Methods realizan el trabajo pesado por tí
//.some

const meses = ['enero','febrero','marzo','abril','mayo','junio','julio']

const carrito = [
    {nombre: 'monitor 27"', precio: 800},
    {nombre: 'televisor', precio: 250},
    {nombre: 'tablet', precio: 200},
    {nombre: 'audifonos', precio: 48},
    {nombre: 'teclado', precio: 150},
    {nombre: 'celular', precio: 1150}
]

//Comprobar si un valor existe en un arreglo con forEach
meses.forEach(mes => {
    if(mes === 'enero'){
        console.log('enero si existe')
    }
})

//con .include
const resultado = meses.includes('Enero')
console.log(resultado)

//En un arreglo de objetos de utiliza .some
const existe = carrito.some(producto => {
    return producto.nombre === 'celular'
})
console.log(existe)

//.some en un arreglo tradicional
const existe2 = meses.some( mes => mes === 'Febrero')
console.log(existe2)