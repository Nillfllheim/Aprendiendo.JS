//El operador && para revisar que se cumplan dos o más condiciones

const usuario = true
const puedePagar = false

if(usuario && puedePagar){
    console.log('Si puedes comprar el producto')
} else if(!puedePagar && !usuario){
    console.log('No puedes realizar la compra')
} else if(!usuario){
    console.log('Inicia sesión o crea una cuenta nueva')
} else if(!puedePagar){
    console.log('Fondos insuficientes')
}