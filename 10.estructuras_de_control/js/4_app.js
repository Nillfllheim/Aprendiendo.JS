// Mayor o igual y else if

const dinero = 1000
const totalPagar = 1001
const tarjeta = false
const cheque = false

if(dinero >= totalPagar){
    console.log('Si podemos pagar')
} else if(cheque){
    console.log('Si tengo un cheque')
} else if(tarjeta){
    console.log('Si puedo pagar, porque tengo tarjeta')
} else{
    console.log('Fondos insuficientes')
}