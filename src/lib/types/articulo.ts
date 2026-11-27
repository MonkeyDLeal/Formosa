export interface Articulo {
    slug: string
    numero: string
    serie: string
    categoria: string
    subcategoria: string
    titulo: string
    bajada: string
    tiempoLectura: string
    edicion: string

    portada: string
    portadaAlt: string
    portadaEtiqueta: string
    portadaPie: string

    introduccion: string[]

    capitulo1: {
        etiqueta: string
        titulo: string
        parrafos: string[]
    }

    galeria: {
        src: string
        alt: string
        pie: string
    }[]

    cita: {
        texto: string
        firma: string
    }

    continuacion: string[]

    capitulo2: {
        etiqueta: string
        titulo: string
        parrafos: string[]
    }

    autor: {
        nombre: string
        cargo: string
        foto: string
        biografia: string
    }
}
