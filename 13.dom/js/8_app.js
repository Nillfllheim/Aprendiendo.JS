//traversing the DOM
const navegacion = document.querySelector('.navegacion')

console.log(navegacion)
console.log(navegacion.childNodes) //Los espacios en blanco son considerados elementos
console.log(navegacion.children) // teµuestra elementos reales

console.log(navegacion.children[1])

const card = document.querySelector('.card')

card.children[1].children[1].textContent = 'nuevo heading desde traversing the dom'

card.children[0].src = 'img/hacer3.jpg'
console.log(card.children[1].children[1].textContent)

//Traversing del hijo al padre
console.log(card.parentNode)

console.log(card.parentElement.parentElement)

console.log(card.nextElementSibling)