//Generar HTML desde JS
const enlace = document.createElement('a')

//Agregando el texto
enlace.textContent = 'Nuevo Enlace'

//añadiendo href
enlace.haref = '/nuevo-enlace'

console.log(enlace)

//Seleccionar la navegacion
const navegacion = document.querySelector('.navegacion')
console.log(navegacion.children)
navegacion.insertBefore(enlace, navegacion.children[1])

//==========================================================

//crear un CARD de forma dinámica
const parrafo1 = document.createElement('p')
parrafo1.textContent = 'Concierto'
parrafo1.classList.add('categoria', 'concierto')

const parrafo2 = document.createElement('p')
parrafo2.textContent = 'Concierto de Rock'
parrafo2.classList.add('titulo')

const parrafo3 = document.createElement('p')
parrafo3.textContent= 'S/ 800.00 por persona'
parrafo3.classList.add('precio')

//crear div con la clase .info
const info = document.createElement('div')
info.classList.add('info')
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3)

//crear la imagen
const imagen = document.createElement('img')
imagen.src = 'img/hacer2.jpg'

//crear el card
const card = document.createElement('div')
card.classList.add('card')

//Asignar la imagen
card.appendChild(imagen)

//Asignar info
card.appendChild(info)

//insertar en HTML
const contenedor = document.querySelector('.hacer .contenedor-cards')
contenedor.appendChild(card)
console.log(info)