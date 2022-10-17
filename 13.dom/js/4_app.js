//querySelector = nos retornará máximo un elemento
const card = document.querySelector('.card')
console.log(card)

//podemos tener selectoers específicos tipo CSS
const info = document.querySelector('.premium .info')
console.log(info)

//seleccionando el 2do card de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)')
console.log(segundoCard)

//seleccionar el formulario
const formulario = document.querySelector('.contenido-hero #formulario')
console.log(formulario)

//seleccionar elementos HTML
const navegacion = document.querySelector('nav')
console.log(navegacion)