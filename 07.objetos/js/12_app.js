//Crear objetos con Object Constructor

//Object literal
const producto = {
    nombre: 'Monitor de 19"',
    precio: 300,
    disponible: true,
}

//Object Constructor (es mas dinamico)

function Producto(nombre, precio){
    this.nombre = nombre
    this.precio = precio
    this.disponible = true
}

const producto2 = new Producto('Monitor de 24"', 650)

console.log(producto2)

const producto3 = new Producto('tablet CHUI 13"', 300)

console.log(producto3)