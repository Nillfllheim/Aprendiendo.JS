//Destructuring de Objetos anidados
const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true,
    
    //Agregando otro objeto
    informacion : {
            medidas : {
            peso: '1kg',
            medida: '1m'
        },
        fabricacion : {
            pais: 'China'
        }
    }
}



const {informacion: {fabricacion: {pais}}} = producto

console.log(pais)




