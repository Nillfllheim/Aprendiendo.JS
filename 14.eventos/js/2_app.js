//Eventos con el mouse

const nav = document.querySelector('.navegacion')

//registrar un evento
nav.addEventListener('mouseenter', () => {
    console.log('Entrnado en la navegacion')
})

nav.addEventListener('mouseout', () => {
    console.log('Saliendo de la navegacion')
})