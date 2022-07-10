//break y continue en un for loop

//Llegar hasta el número 5 y detener el código
for(let i = 1; i <= 10; i++){
    if(i === 5){
        console.log('Este es el 5')
        break
    }
    console.log(`Número: ${i}`)
}

//Mencionar en número 5 en letras (CINCO) y que el código prosiga con la ejecución
for(let i = 1; i <= 10; i++){
    if(i === 5){
        console.log('CINCO')
        continue
    }
    console.log(`Número: ${i}`)
}

//conocer que artículo tiene descuento
const carrito = [
    {nombre: 'monitor 27"', precio: 800},
    {nombre: 'televisor', precio: 250},
    {nombre: 'tablet', precio: 200, descuento: true},
    {nombre: 'audifonos', precio: 48},
    {nombre: 'teclado', precio: 150},
    {nombre: 'celular', precio: 1150}
]

for(let i = 0; i < carrito.length; i++){
    if(carrito[i].descuento){
        console.log(`El artículo ${carrito[i].nombre} tiene descuento`)
        continue
    }
    console.log(carrito[i].nombre)
}