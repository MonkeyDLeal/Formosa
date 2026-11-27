<script lang="ts">
 import { IconPointFilled } from "@tabler/icons-svelte";
  import { IconArrowNarrowLeft } from "@tabler/icons-svelte";
  import { error } from '@sveltejs/kit';
  import type { Articulo } from "#lib/types/articulo.ts";
  import { articulosTurismo } from "#lib/data/articulosTurismo.ts";


const propiedades = $props()

const tarjetaEncontrada: Articulo | undefined = articulosTurismo.find((informacionDelaTarjeta) => informacionDelaTarjeta.slug == propiedades.params.slug )

if (!tarjetaEncontrada) error(404, 'Pagina no encontrada')


</script>

<section class="md:hidden">
  <div class="px-3 pt-5 pb-5">
    <div class="text-gray-500 font-bold flex flex-col gap-y-1 pb-4">
      <a href="/gastronomia" class="font-Jakarta-sans text-sm uppercase flex"
        ><IconArrowNarrowLeft />Volver a gastronomia</a
      >
      <span class="font-Jakarta-sans uppercase text-sm"
        >CRÓNICA Nº {tarjetaEncontrada.numero} • SERIE {tarjetaEncontrada.serie}</span
      >
      <span
        class="font-Jakarta-sans text-black bg-secondary px-2 py-1 rounded-xl font-semibold text-xs tracking-widest uppercase max-w-max"
        >{tarjetaEncontrada.categoria} • {tarjetaEncontrada.subcategoria}</span
      >
    </div>

    <div>
      <h1 class="font-syne text-4xl font-bold pb-2">
        {tarjetaEncontrada.titulo}
      </h1>
      <span class="font-Jakarta-sans font-light text-base text-gray-600"
        >{tarjetaEncontrada.bajada}</span
      >
    </div>
  </div>
</section>

<!--portada del articulo-->
<section class="px-5 lg:px-18 hidden md:block">
  <div class="pr-5 lg:pr-20 pt-10 pb-10">
    <div class="text-gray-500 font-bold flex justify-between">
      <a href="/gastronomia" class="font-Jakarta-sans uppercase flex"
        ><IconArrowNarrowLeft />Volver a gastronomia</a
      >
      <a href="/gastronomia" class="font-Jakarta-sans uppercase flex"
        >CRÓNICA Nº {tarjetaEncontrada.numero} • SERIE {tarjetaEncontrada.serie}</a
      >
    </div>
    <div class="pt-12 pb-10 flex gap-1">
      <IconPointFilled class="text-secondary" /><span
        class="flex items-center font-Jakarta-sans text-black font-semibold text-base tracking-widest uppercase"
        >{tarjetaEncontrada.categoria} • {tarjetaEncontrada.subcategoria}</span
      >
    </div>
    <div>
      <h1 class="font-syne text-5xl lg:text-7xl font-extrabold pb-6">
        {tarjetaEncontrada.titulo}
      </h1>
      <span class="font-Jakarta-sans font-light text-xl lg:text-2xl text-gray-600"
        >{tarjetaEncontrada.bajada}</span
      >
    </div>
  </div>
</section>

<!--imagen portada mobile-->
<section class="px-3 md:hidden">
  <div class="flex flex-col pb-3 text-sm">
    <span class="font-Jakarta-sans font-bold text-sm">{tarjetaEncontrada.autor.nombre}</span>
    <span class="font-Jakarta-sans font-bold text-gray-600 text-xs"
      >{tarjetaEncontrada.tiempoLectura} • Publicado en {tarjetaEncontrada.edicion}</span
    >
  </div>
  <figure class="relative">
    <img
      src={tarjetaEncontrada.portada}
      alt={tarjetaEncontrada.portadaAlt}
      class="h-full w-full object-cover"
    />
    <figcaption class="text-black font-Jakarta-sans text-xs font-light">
      {tarjetaEncontrada.portadaPie}
    </figcaption>
  </figure>
</section>

<!--imagen portada pc-->
<section class="px-10 lg:px-18 hidden md:block">
  <div class="flex justify-between pb-3 px-0 lg:px-14">
    <span class="font-Jakarta-sans font-bold text-base lg:text-lg">{tarjetaEncontrada.autor.nombre}</span>
    <span class="font-Jakarta-sans font-bold text-gray-600 text-base lg:text-lg">{tarjetaEncontrada.tiempoLectura} • Publicado en {tarjetaEncontrada.edicion}</span>
  </div>
  <figure class="relative">
    <img
      src={tarjetaEncontrada.portada}
      alt={tarjetaEncontrada.portadaAlt}
      class="h-full w-full object-cover"
    />
    <span
      class="absolute left-8 bottom-12 py-2 px-4 bg-black text-white font-Jakarta-sans font-bold text-lg"
      >{tarjetaEncontrada.portadaEtiqueta}</span
    >
    <figcaption class="text-black font-Jakarta-sans text-base font-light">
      {tarjetaEncontrada.portadaPie}
    </figcaption>
  </figure>
</section>

<section>
  <div class="pt-12 pb-10 px-3 lg:px-32">
    <div>
      <p class="pb-10 font-Jakarta-sans text-lg">
        {tarjetaEncontrada.introduccion[0]}
      </p>
      <p class="pb-5 font-Jakarta-sans text-lg">
        {tarjetaEncontrada.introduccion[1]}
      </p>
    </div>

    <div>
      <div class="pb-5 lg:pb-0">
        <span class="font-Jakarta-sans text-icono font-bold uppercase text-sm"
          >{tarjetaEncontrada.capitulo1.etiqueta}</span
        >
        <h2 class="font-syne font-extrabold lg:font-bold text-2xl lg:text-4xl">
          {tarjetaEncontrada.capitulo1.titulo}
        </h2>
      </div>

      <p class="font-Jakarta-sans text-lg">
        {tarjetaEncontrada.capitulo1.parrafos.join(' ')}
      </p>

      <!--galeria mobile-->

      <div class="md:hidden">
        <div class="py-10 gap-5 h-full w-full">
          <figure class="py-2">
            <img
              src={tarjetaEncontrada.galeria[0].src}
              alt={tarjetaEncontrada.galeria[0].alt}
              class="h-full w-full object-cover"
            />
            <figcaption class="font-Jakarta-sans text-xs">
              {tarjetaEncontrada.galeria[0].pie}
            </figcaption>
          </figure>
          <figure class="py-2">
            <img
              src={tarjetaEncontrada.galeria[1].src}
              alt={tarjetaEncontrada.galeria[1].alt}
              class="h-full w-full object-cover"
            />
            <figcaption class="font-Jakarta-sans text-xs">
              {tarjetaEncontrada.galeria[1].pie}
            </figcaption>
          </figure>
        </div>
      </div>

      <!--galeria pc-->
      <div class="hidden md:block">
        <div class="py-10 gap-10 grid grid-cols-2 h-full w-full">
          <figure>
            <img
              src={tarjetaEncontrada.galeria[0].src}
              alt={tarjetaEncontrada.galeria[0].alt}
              class="h-full w-full object-cover"
            />
            <figcaption>{tarjetaEncontrada.galeria[0].pie}</figcaption>
          </figure>
          <figure>
            <img
              src={tarjetaEncontrada.galeria[1].src}
              alt={tarjetaEncontrada.galeria[1].alt}
              class="h-full w-full object-cover"
            />
            <figcaption>{tarjetaEncontrada.galeria[1].pie}</figcaption>
          </figure>
        </div>
      </div>

      <!--cita mobile-->
      <section class="md:hidden pt-10 pb-15">
        <div
          class="bg-gray-100 flex gap-3 py-10 mx-3 px-4 border-l-4 border-l-secondary"
        >
          <div class="flex flex-col gap-1">
            <p class="font-syne text-3xl font-bold leading-tight pb-4">
              {tarjetaEncontrada.cita.texto}
            </p>
            <span
              class="flex items-center font-Jakarta-sans text-gray-600 font-semibold text-sm tracking-widest uppercase"
              >{tarjetaEncontrada.cita.firma}</span
            >
          </div>
        </div>
      </section>

      <!--cita pc-->
      <section class="hidden md:block">
        <div
          class="bg-gray-100 flex gap-3 items-start py-5 border-l-8 border-l-secondary pl-7 my-5"
        >
          <div class="flex flex-col gap-1">
            <p class="font-syne text-5xl font-bold leading-tight pb-4 pr-5">
              {tarjetaEncontrada.cita.texto}
            </p>
            <span
              class="flex items-center font-Jakarta-sans text-gray-700 font-bold text-sm tracking-widest uppercase"
              >— {tarjetaEncontrada.cita.firma.split(' • ')[0]}<IconPointFilled />{tarjetaEncontrada.cita.firma.split(' • ')[1] ?? ''}</span
            >
          </div>
        </div>
      </section>

      <p class="pb-10 font-Jakarta-sans text-lg">
        {tarjetaEncontrada.continuacion.join(' ')}
      </p>
    </div>
    <div>
      <div class="pb-5 lg:pb-0">
        <span class="font-Jakarta-sans text-icono font-bold uppercase text-sm"
          >{tarjetaEncontrada.capitulo2.etiqueta}</span
        >
        <h2 class="font-syne font-extrabold lg:font-bold text-2xl lg:text-4xl">
          {tarjetaEncontrada.capitulo2.titulo}
        </h2>
      </div>

      <div>
        <p class="pb-5 font-Jakarta-sans text-lg">
        {tarjetaEncontrada.capitulo2.parrafos[0]}
      </p>
        <p class="pb-5 font-Jakarta-sans text-lg">
        {tarjetaEncontrada.capitulo2.parrafos[1]}
      </p>
      </div>
    </div>
  </div>
</section>

<!--Usuario mobile-->
<section class="md:hidden mx-3 bg-gray-100 rounded-lg mb-15">
  <div class="px-3 py-5">
    <div class="flex items-start">
      <div class="shrink-0 mr-2">
        <img
          src={tarjetaEncontrada.autor.foto}
          alt={tarjetaEncontrada.autor.nombre}
          class="w-22 h-22 rounded-full"
        />
      </div>
      <div class="flex flex-2 flex-col">
        <span class="font-syne font-bold text-3xl">{tarjetaEncontrada.autor.nombre}</span>
        <span class="font-Jakarta-sans font-bold uppercase text-icono text-sm"
          >{tarjetaEncontrada.autor.cargo}</span
        >
        <p class="font-Jakarta-sans text-gray-700 font-light text-lg pb-2 pr-12">
          {tarjetaEncontrada.autor.biografia}
        </p>
      </div>
    </div>
  </div>
</section>

<!--Usuario PC-->
<section class="hidden md:block">
  <div class="flex py-7 bg-gray-100 mx-5 lg:mx-32 gap-4 pl-5">
    <div class="shrink-0 mr-2">
      <img
        src={tarjetaEncontrada.autor.foto}
        alt={tarjetaEncontrada.autor.nombre}
        class="rounded-full w-22 h-22"
      />
    </div>
    <div>
      <div class="flex items-start gap-1 hide">
        <span class="font-syne font-bold text-3xl">{tarjetaEncontrada.autor.nombre}</span>
        <span class="font-Jakarta-sans font-bold uppercase text-icono text-sm"
          >{tarjetaEncontrada.autor.cargo}</span
        >
      </div>
      <div>
        <p
          class="font-Jakarta-sans text-gray-700 font-light text-lg pb-2 pr-12"
        >
          {tarjetaEncontrada.autor.biografia}
        </p>
        <span class="font-Jakarta-sans font-bold text-gray-700 text-sm"
          >PUBLICACIÓN Nº {tarjetaEncontrada.numero} • {tarjetaEncontrada.edicion}</span
        >
      </div>
    </div>
  </div>
</section>