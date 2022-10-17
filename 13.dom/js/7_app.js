//modificando el CSS con JS
const encabezado = document.querySelector('h1')
encabezado.style.backgroundColor = 'red'
encabezado.style.fontFamily = 'courier'
encabezado.style.textTransform = 'uppercase'

console.log(encabezado)

const card = document.querySelector('.card')
card.classList.add('nueva-clase')
console.log(card.classList)