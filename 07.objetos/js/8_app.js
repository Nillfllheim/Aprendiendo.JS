//Congelar un objeto para no poder modificarlo

"use strict"

const producto = {
    nombre: 'Monitor 20"',
    precio: 300,
    disponible: true
}


Object.freeze(producto)

//producto.disponible = false

//delete producto.precio

console.log(producto)

//Saber si un objeto esta congelado

console.log(Object.isFrozen(producto))