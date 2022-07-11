//spread operator
const meses = ['enero','febrero','marzo','abril','mayo','junio','julio']

const carrito = [
    {nombre: 'monitor 27"', precio: 800},
    {nombre: 'televisor', precio: 250},
    {nombre: 'tablet', precio: 200},
    {nombre: 'audifonos', precio: 48},
    {nombre: 'teclado', precio: 150},
    {nombre: 'celular', precio: 1150}
]

const meses2 = [...meses, 'Agosto']
console.log(meses2)

//agregando elementos al objeto
const producto = {nombre: 'disco duro', precio: 180}

const carrito2 = [...carrito, producto]
console.log(carrito2)