//Eventos en el teclado
const busqueda = document.querySelector('.busqueda')

busqueda.addEventListener('input', (e) => {
    //console.log(e)
    console.log(e.target.value)
})

//input (para conocer todo lo que estas escribiendo)