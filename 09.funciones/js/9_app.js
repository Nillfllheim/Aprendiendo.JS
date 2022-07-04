//Añadir funciones en un objeto

const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo canción con el id ${id}`)
    },
    pausar: function(){
        console.log('pausando...')
    },
    borrar: function(id){
        console.log(`Borrando canción... ${id}`)
    },
    crearPlaylist: function(nombre){
        console.log(`Creando la Playlist de ${nombre}`)
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproducinedo la Playlist ${nombre}`)
    }
}

reproductor.reproducir(30)
reproductor.reproducir(20)
reproductor.pausar()
reproductor.borrar(30)
reproductor.crearPlaylist('Heavy Metal')
reproductor.crearPlaylist('Rock 90s')
reproductor.reproducirPlaylist('Heavy Metal')