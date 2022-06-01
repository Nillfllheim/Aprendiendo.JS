//Como se comunican las funciones

iniciarApp()

function iniciarApp(){
    console.log('Iniciando app...')

    segundaFuncion()
}

function segundaFuncion(){
    console.log('Desde la segunda funcion')

    usuarioAutenticado('Nilson')
}

function usuarioAutenticado(usuario){
    console.log('Autenticando uduario.. espere...')
    console.log(`Usuario autenticado Exitosamente: ${usuario}`)
}