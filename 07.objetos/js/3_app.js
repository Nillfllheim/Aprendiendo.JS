//Agregar o eliminar propiedades de un objeto

const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true
}

//agregando nuevas propiedades
producto.imagen = 'imagen.jpg'

//eliminando propiedades de un objeto
delete producto.disponible




console.log(producto)
