//Eliminar elementos del DOM
const primerEnlace = document.querySelector('a')
primerEnlace.remove()

console.log(primerEnlace)

//Eliminar desde el padre
const navegacion = document.querySelector('.navegacion')

console.log(navegacion.children)

navegacion.removeChild(navegacion.children[1])