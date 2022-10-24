//Eventos que suceden en un formulario
const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', (e) => {
    e.preventDefault() //evitar lo que el navegador tiene que hacer
    
    console.log(e)
})