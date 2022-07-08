//Arrow functions en el reproductor de musica

const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo cancion con el id ${id}`),
    pausar: ()=> console.log('Pausando...'),
    borrar: id => console.log(`Borrando cancion... ${id}`),
    crearPlaylist: nombre => console.log(`Creando la playlist de ${nombre}`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo la playlist ${nombre}`)

    // set nuevaCancion(cancion){
    //     this.cancion = cancion
    //     console.log(`Añadiendo ${cancion}`)
    // },

    // get obtenerCancion(){
    //     console.log(`${this.cancion}`)
    // }
}

reproductor.nuevaCancion = 'Enter the Sandman'
reproductor.obtenerCancion

reproductor.reproducir(30)
reproductor.reproducir(20)
reproductor.pausar()
reproductor.borrar(30)
reproductor.crearPlaylist('Heavy Metal')
reproductor.crearPlaylist('Rock 90s')
reproductor.reproducirPlaylist('Heavy Metal')