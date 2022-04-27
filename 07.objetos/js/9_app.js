//Sellar un Objeto (NO TE DEJA AÑADIR PERO SI MODIFICARLOS)

"use strict"

const producto = {
    nombre: 'Monitor 20"',
    precio: 300,
    disponible: true
}


Object.seal(producto)

producto.disponible = false

//delete producto.precio

console.log(producto)

//Saber si un objeto esta sellado

console.log(Object.isSealed(producto))