//Parámetros y argumentos en funciones

function sumar(a, b){   // a y b son parámetros
    console.log(a + b)
}

sumar (2 ,3)    // 2 y 3 son argumentos

sumar(190, 200)
sumar(12.5, 15)


function saludar(nombre, apellido){
    console.log(`Bienvenido ${nombre} ${apellido}`)
}

saludar('Nilson', 'Ramirez')
saludar('Nilson')
saludar()