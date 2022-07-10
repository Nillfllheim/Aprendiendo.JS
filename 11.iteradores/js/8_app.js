//for in => itera sobre objetos

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript']


for(let pendiente in pendientes){
    console.log(pendiente)
}

//ejemplo con un objeto

const automovil = {
    modelo: 'Camaro',
    año: 1969,
    motor: '6.0'
}

for(let propiedad in automovil){
    console.log(`${automovil[propiedad]}`)
}

