class Fvideo {
    constructor(id,titulo,genero,autor,duracion,visto){
        this.id=id,
        this.titulo=titulo,
        this.genero=genero,
        this.autor=autor,
        this.duracion=duracion,
        this.visto=visto
    }
}
class Pelicula extends Fvideo{
    constructor(id,titulo,genero,autor,duracion,visto,tiempoVisto){
        super(id,titulo,genero,autor,duracion,visto)
        this.tiempoVisto=tiempoVisto
    }
    print(){
        console.log(
            `Esta es la pelicula ${this.id},
El título es ${this.titulo}, su genero es ${this.genero}, 
El autor es ${this.autor} y su duración es de ${this.duracion} `)
    }
}
class Serie extends Fvideo{
    constructor(id,titulo,genero,autor,duracion,visto,noTemporadas,noCapitulos){
        super(id,titulo,genero,autor,duracion,visto)
        this.noTemporadas=noTemporadas,
        this.noCapitulos=noCapitulos
    }
}
class Impreso{
    constructor(id,titulo,autores,editorial){
        this.id=id,
        this.titulo=titulo,
        this.autores=autores,
        this.editorial=editorial
    }
}
class Libro extends Impreso{
    constructor(id,titulo,autores,editorial,isbn,leido,tiempoLeido){
        super(id,titulo,autores,editorial)
        this.isbn=isbn,
        this.leido=leido,
        this.tiempoLeido=tiempoLeido
    }
}
class Revista extends Impreso{
    constructor(id,titulo,autores,editorial){
        super(id,titulo,autores,editorial)        
    }
}

const pelicula1 =new Pelicula(1,"Monsters Inc.","Animada","Pixar","1.5hrs","visto","35min")

const serie1 =new Serie(1,"Friends","Entretenimiento","Warner bros","1.5hrs","visto","25min")

const libro1 =new Libro(1,"HarryPotter","Warner bros","236743","Leído","25min")

const revista1 =new Revista(1,"Womans's Health","Health People","Health Corp")
console.log(pelicula1.print())
console.log(serie1)
console.log(libro1)
console.log(revista1)

