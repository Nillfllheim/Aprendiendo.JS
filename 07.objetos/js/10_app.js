//Unir dos objetos

const producto = {
    nombre: 'Monitor de 19"',
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1Kg',
    medida: '1m'
}

console.log(producto)

console.log(medidas)

//uniendo Objetos 1er metodo

const resultado = Object.assign(producto, medidas)

//uniendo Objetos 2do metodo (spread operator o Rest Operator)

const resultado2 = {...producto, ...medidas}

console.log(resultado)

console.log(resultado2)