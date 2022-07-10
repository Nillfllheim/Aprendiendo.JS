//.forEach y .map
//.forEach => es ideal para recorrer arreglos, se ejecuta al menos una vez por cada vez que haya elementos en el arreglo
//.map => crea un nuevo arreglo

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript']

pendientes.forEach((pendiente, indice)=>{
    console.log(`${indice} : ${pendiente}`)
})

//Recorriendo un objeto dentro de un arreglo
const carrito = [
    {nombre: 'monitor 27"', precio: 800},
    {nombre: 'televisor', precio: 250},
    {nombre: 'tablet', precio: 200},
    {nombre: 'audifonos', precio: 48},
    {nombre: 'teclado', precio: 150},
    {nombre: 'celular', precio: 1150}
]

carrito.forEach(producto => console.log(producto))

const nuevoArreglo = carrito.map(producto => console.log(producto))