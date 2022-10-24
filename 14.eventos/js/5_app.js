//Eventos que suceden con el scroll
window.addEventListener('scroll', () => {
   
    const premium = document.querySelector('.premium')
    const ubicacion = premium.getBoundingClientRect()

    if (ubicacion.top = 784) {
        console.log('el elemento ya está visible')
    } else {
        console.log('Aún no llegas, da más scroll')
    }
})