//for of => itera sobre arreglos

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript']

const carrito = [
    {nombre: 'monitor 27"', precio: 800},
    {nombre: 'televisor', precio: 250},
    {nombre: 'tablet', precio: 200},
    {nombre: 'audifonos', precio: 48},
    {nombre: 'teclado', precio: 150},
    {nombre: 'celular', precio: 1150}
]

for(let pendiente of pendientes){
    console.log(pendiente)
}

for(let producto of carrito){
    console.log(producto)
}