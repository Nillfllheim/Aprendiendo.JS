//switch para evaluar múltiples condiciones

const metodoPago = 'tarjeta'

switch(metodoPago){
    case 'efectivo':
        console.log(`Pagaste con ${metodoPago}`)
        break
    case 'cheque':
        console.log(`Pagaste con ${metodoPago}`)
        break
    case 'tarjeta':
        console.log(`pagaste con ${metodoPago}`)
        break
    default:
        console.log('Aún no has seleccionado u método de pago o método de pago no soportado')
        break
}