//en el caso de los iteradores el código se ejecuta hasta que se cumpla la condición

//For loop

for(let i = 0; i < 10; i++){
    console.log(`Número: ${i}`)
}

//Conocer si el número es PAR o IMPAR

for(let i = 1; i <= 20; i++){
    console.log(i % 2 === 0 ? `El número ${i} es PAR`: `el Número ${i} es IMPAR`)
}

//Ejemplo con un carrito de compras

const carrito = [
    {nombre: 'monitor 27"', precio: 800},
    {nombre: 'televisor', precio: 250},
    {nombre: 'tablet', precio: 200},
    {nombre: 'audifonos', precio: 48},
    {nombre: 'teclado', precio: 150},
    {nombre: 'celular', precio: 1150}
]

console.log(carrito.length)

for(let i = 0; i < carrito.length; i++){
    console.log(carrito[i])
}