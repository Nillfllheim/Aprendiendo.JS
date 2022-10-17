//modificar textos e imagenes en js
const encabezado = document.querySelector('.contenido-hero h1').textContent
console.log(encabezado)

//console.log(encabezado.innerText)
//console.log(encabezado.textContent) // si en el CSS -- visibility: hidden no lo encontrará
//console.log(encabezado.innerHTML) // se trae el HTML

document.querySelector('.contenido-hero h1').textContent = 'NUEVO HEADING'

const imagen = document.querySelector('.card img')
imagen.src = 'img/hacer2.jpg'
console.log(imagen)