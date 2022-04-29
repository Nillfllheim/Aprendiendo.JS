//Eliminar elementos de un arreglo

const carrito = []

//definir un producto

const producto = {
    nombre: 'monitor 32"',
    precio: 400
}

const producto2 = {
    nombre: 'celular',
    precio: 1500
}

carrito.push(producto)

carrito.push(producto2)


let resultado

resultado = [...carrito, producto]
resultado = [...resultado, producto2]


console.table(carrito)

//eliminar el ultimo elemento de un arreglo

carrito.pop()

console.table(carrito)