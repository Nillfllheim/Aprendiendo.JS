//Detener la ejecución de un if con una función

const autenticado = true

if(autenticado){
    console.log('El usuario está autenticado')
}

const puntaje = 450

function revisarPuntaje(){
    if(puntaje > 400){
        console.log('Excelente..!!')
        return
    }

    if (puntaje > 300){
        console.log('Buen puntaje... Felicidades')
        return
    }
}

revisarPuntaje()