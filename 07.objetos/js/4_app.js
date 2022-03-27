//Acceder a los valores de un objeto y extraerlos

//Destructuring de un objeto

const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true
}


//const {nombre} = producto

//const {precio} = producto

//simplificando la extraccion
const {nombre, precio, disponible} = producto

console.log(nombre)
console.log(precio)
console.log(disponible)



