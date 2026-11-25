<script>
  import { IconPointFilled } from "@tabler/icons-svelte";
  import { IconArrowNarrowLeft } from "@tabler/icons-svelte";
</script>

<!--portada del articulo mobile-->
<section class="lg:hidden">
  <div class="px-3 pt-10 pb-10">
    <div class="text-gray-500 font-bold flex flex-col gap-y-1 pb-4">
      <a href="/gastronomia" class="font-Jakarta-sans text-sm uppercase flex"
        ><IconArrowNarrowLeft />Volver a gastronomia</a
      >
      <span class="font-Jakarta-sans uppercase text-sm"
        >CRÓNICA Nº 14 • SERIE TAIPEI</span
      >
      <span
        class="font-Jakarta-sans text-black bg-secondary px-2 py-1 rounded-xl font-semibold text-xs tracking-widest uppercase max-w-max"
        >GASTRONOMÍA • CALDOS & MERCADOS</span
      >
    </div>

    <div>
      <h1 class="font-syne text-4xl font-bold pb-4">
        Guía Definitiva de los Mercados Nocturnos: De Shilin a Raohe tras los
        Sabores Prohibidos
      </h1>
      <span class="font-Jakarta-sans font-light text-base text-gray-600"
        >Un recorrido pausado por los callejones donde el vapor de caldos
        milenarios y las brasas encendidas definen el pulso gastronómico, ritual
        y sensorial de Taiwán.</span
      >
    </div>
  </div>
</section>

<!--portada del articulo-->
<section class="px-32 hidden lg:block">
  <div class="pr-20 pt-10 pb-10">
    <div class="text-gray-500 font-bold flex justify-between">
      <a href="/gastronomia" class="font-Jakarta-sans uppercase flex"
        ><IconArrowNarrowLeft />Volver a gastronomia</a
      >
      <a href="/gastronomia" class="font-Jakarta-sans uppercase flex"
        >CRÓNICA Nº 14 • SERIE TAIPEI</a
      >
    </div>
    <div class="pt-12 pb-10 flex gap-1">
      <IconPointFilled class="text-secondary" /><span
        class="flex items-center font-Jakarta-sans text-black font-semibold text-base tracking-widest uppercase"
        >GASTRONOMÍA • CALDOS & MERCADOS</span
      >
    </div>
    <div>
      <h1 class="font-syne text-7xl font-[800] pb-6">
        Guía Definitiva de los Mercados Nocturnos: De Shilin a Raohe tras los
        Sabores Prohibidos
      </h1>
      <span class="font-Jakarta-sans font-light text-2xl text-gray-600"
        >Un recorrido pausado por los callejones donde el vapor de caldos
        milenarios y las brasas encendidas definen el pulso gastronómico, ritual
        y sensorial de Taiwán.</span
      >
    </div>
  </div>
</section>

<!--imagen portada mobile-->
<section class="px-3 lg:hidden">
  <div class="flex flex-col pb-3 text-sm">
    <span class="font-Jakarta-sans font-bold text-sm">Victor Leal</span>
    <span class="font-Jakarta-sans font-bold text-gray-600 text-xs"
      >8 min de lectura • Publicado en Edición Taipei</span
    >
  </div>
  <figure class="relative">
    <img
      src="src/lib/assets/articulo1.jpg"
      alt=""
      class="h-full w-full object-cover"
    />
    <figcaption class="text-black font-Jakarta-sans text-xs font-light">
      — Deliciosa comida tradicional de Taipei.
    </figcaption>
  </figure>
</section>

<!--imagen portada pc-->
<section class="px-18 hidden lg:block">
  <div class="flex justify-between pb-3 px-14">
    <span class="font-Jakarta-sans font-bold text-lg">Victor Leal</span>
    <span class="font-Jakarta-sans font-bold text-gray-600 text-lg"
      >8 min de lectura • Publicado en Edición Taipei</span
    >
  </div>
  <figure class="relative">
    <img
      src="src/lib/assets/articulo1.jpg"
      alt=""
      class="h-full w-full object-cover"
    />
    <span
      class="absolute left-8 bottom-12 py-2 px-4 bg-black text-white font-Jakarta-sans font-bold text-lg"
      >Mercado en Taiwan</span
    >
    <figcaption class="text-black font-Jakarta-sans text-base font-light">
      — Deliciosa comida servida en uno de los mejores restaurantes
      tradicionales de Taipei.
    </figcaption>
  </figure>
</section>

<section>
  <div class="pt-12 pb-10 px-3 lg:px-32">
    <div>
      <p class="pb-10 font-Jakarta-sans text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illum vel
        nesciunt, expedita officiis deleniti, voluptates nam sunt eaque rerum
        fugiat harum laudantium quidem earum? Saepe vel quaerat blanditiis
        nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
        illum vel nesciunt, expedita officiis deleniti, voluptates nam sunt
        eaque rerum fugiat harum laudantium quidem earum? Saepe vel quaerat
        blanditiis nulla. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Cum illum vel nesciunt, expedita officiis deleniti, voluptates nam
        sunt eaque rerum fugiat harum laudantium quidem earum? Saepe vel quaerat
        blanditiis nulla. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Cum illum vel nesciunt, expedita officiis deleniti, voluptates nam
        sunt eaque rerum fugiat harum laudantium quidem earum? Saepe vel quaerat
        blanditiis nulla. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Cum illum vel nesciunt, expedita officiis deleniti, voluptates nam
        sunt eaque rerum fugiat harum laudantium quidem earum? Saepe vel quaerat
        blanditiis nulla.
      </p>
      <p class="pb-5 font-Jakarta-sans text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illum vel
        nesciunt, expedita officiis deleniti, voluptates nam sunt eaque rerum
        fugiat harum laudantium quidem earum? Saepe vel quaerat blanditiis
        nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
        illum vel nesciunt, expedita officiis deleniti, voluptates nam sunt
        eaque rerum fugiat harum laudantium quidem earum? Saepe vel quaerat
        blanditiis nulla. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Cum illum vel nesciunt, expedita officiis deleniti, voluptates nam
        sunt eaque rerum fugiat harum laudantium quidem earum? Saepe vel quaerat
        blanditiis nulla. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Cum illum vel nesciunt, expedita officiis deleniti, voluptates nam
        sunt eaque rerum fugiat harum laudantium quidem earum? Saepe vel quaerat
        blanditiis nulla.
      </p>
    </div>

    <div>
      <div class="pb-5 lg:pb-0">
        <span class="font-Jakarta-sans text-icono font-bold uppercase text-sm"
          >Capitulo 01</span
        >
        <h2 class="font-syne font-extrabold lg:font-[700] text-2xl lg:text-4xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </h2>
      </div>

      <p class="font-Jakarta-sans text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illum vel
        nesciunt, expedita officiis deleniti, voluptates nam sunt eaque rerum
        fugiat harum laudantium quidem earum? Saepe vel quaerat blanditiis
        nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
        illum vel nesciunt, expedita officiis deleniti, voluptates nam sunt
        eaque rerum fugiat harum laudantium quidem earum? Saepe vel quaerat
        blanditiis nulla. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Cum illum vel nesciunt, expedita officiis deleniti, voluptates nam
        sunt eaque rerum fugiat harum laudantium quidem earum? Saepe vel quaerat
        blanditiis nulla. Lorem ipsum dolor sit amet consectetur adipisicing
        elit.
      </p>

      <!--galeria mobile-->

      <div>
        <div class="py-10 gap-5 h-full w-full">
          <figure class="py-2">
            <img
              src="src/lib/assets/articulo1.jpg"
              alt=""
              class="h-full w-full object-cover"
            />
            <figcaption class="font-Jakarta-sans text-xs">
              — Comida Formosa
            </figcaption>
          </figure>
          <figure class="py-2">
            <img
              src="src/lib/assets/articulo1.jpg"
              alt=""
              class="h-full w-full object-cover"
            />
            <figcaption class="font-Jakarta-sans text-xs">
              — Comida Formosa
            </figcaption>
          </figure>
        </div>
      </div>

      <!--galeria pc-->
      <div class="hidden lg:block">
        <div class="py-10 gap-10 grid grid-cols-2 h-full w-full">
          <figure>
            <img
              src="src/lib/assets/articulo1.jpg"
              alt=""
              class="h-full w-full object-cover"
            />
            <figcaption>— Comida Formosa</figcaption>
          </figure>
          <figure>
            <img
              src="src/lib/assets/articulo1.jpg"
              alt=""
              class="h-full w-full object-cover"
            />
            <figcaption>— Comida Formosa</figcaption>
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
              «En Taiwán no se viaja para ver monumentos; se viaja para seguir
              el aroma del caldo a través de la niebla.»
            </p>
            <span
              class="flex items-center font-Jakarta-sans text-gray-600 font-semibold text-sm tracking-widest uppercase"
              >NOTAS DE CATA — REDACCIÓN GASTRONÓMICA</span
            >
          </div>
        </div>
      </section>

      <!--cita pc-->
      <section class="hidden lg:block">
        <div
          class="bg-gray-100 flex gap-3 items-start py-5 border-l-8 border-l-secondary pl-7 my-5"
        >
          <div class="flex flex-col gap-1">
            <p class="font-syne text-5xl font-bold leading-tight pb-4">
              “En Taiwán no se viaja para ver monumentos; se viaja para seguir
              el aroma del caldo a través de la niebla.”
            </p>
            <span
              class="flex items-center font-Jakarta-sans text-gray-700 font-bold text-sm tracking-widest uppercase"
              >— NOTAS DE CATA<IconPointFilled /> REDACCIÓN GASTRONÓMICA</span
            >
          </div>
        </div>
      </section>

      <p class="pb-10 font-Jakarta-sans text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illum vel
        nesciunt, expedita officiis deleniti, voluptates nam sunt eaque rerum
        fugiat harum laudantium quidem earum? Saepe vel quaerat blanditiis
        nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
        illum vel nesciunt, expedita officiis deleniti, voluptates nam sunt
        eaque rerum fugiat harum laudantium quidem earum? Saepe vel quaerat
        blanditiis nulla. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Cum illum vel nesciunt, expedita officiis deleniti, voluptates nam
        sunt eaque rerum fugiat harum laudantium quidem earum? Saepe vel quaerat
        blanditiis nulla. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Cum illum vel nesciunt, expedita officiis deleniti, voluptates nam
        sunt eaque rerum fugiat harum laudantium quidem earum? Saepe vel quaerat
        blanditiis nulla.
      </p>
    </div>
    <div>
      <div class="pb-5 lg:pb-0">
        <span class="font-Jakarta-sans text-icono font-bold uppercase text-sm"
          >Capitulo 02</span
        >
        <h2 class="font-syne font-extrabold lg:font-[700] text-2xl lg:text-4xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </h2>
      </div>

      <div>
        <p class="pb-5 font-Jakarta-sans text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illum vel
          nesciunt, expedita officiis deleniti, voluptates nam sunt eaque rerum
          fugiat harum laudantium quidem earum? Saepe vel quaerat blanditiis
          nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
          illum vel nesciunt, expedita officiis deleniti, voluptates nam sunt
          eaque rerum fugiat harum laudantium quidem earum? Saepe vel quaerat
          blanditiis nulla. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Cum illum vel nesciunt, expedita officiis deleniti, voluptates
          nam sunt eaque rerum fugiat harum laudantium quidem earum? Saepe vel
          quaerat blanditiis nulla. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Cum illum vel nesciunt, expedita officiis deleniti,
          voluptates nam sunt eaque rerum fugiat harum laudantium quidem earum?
          Saepe vel quaerat blanditiis nulla.
        </p>
        <p class="pb-5 font-Jakarta-sans text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illum vel
          nesciunt, expedita officiis deleniti, voluptates nam sunt eaque rerum
          fugiat harum laudantium quidem earum? Saepe vel quaerat blanditiis
          nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
          illum vel nesciunt, expedita officiis deleniti, voluptates nam sunt
          eaque rerum fugiat harum laudantium quidem earum? Saepe vel quaerat
          blanditiis nulla. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Cum illum vel nesciunt, expedita officiis deleniti, voluptates
          nam sunt eaque rerum fugiat harum laudantium quidem earum? Saepe vel
          quaerat blanditiis nulla. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Cum illum vel nesciunt, expedita officiis deleniti,
          voluptates nam sunt eaque rerum fugiat harum laudantium quidem earum?
          Saepe vel quaerat blanditiis nulla.
        </p>
      </div>
    </div>
  </div>
</section>

<!--Usuario mobile-->
<section class="md:hidden px-3">
      <div class="flex items-start">
      <div class="flex-1 w-full h-full">
        <img src="src/lib/assets/luffy-icon.jpg" alt="" class="rounded-full h-fit w-fit"/>
      </div>
      <div class="flex flex-2 flex-col">
        <span class="font-syne font-[700] text-3xl">Victor Leal</span>
        <span class="font-Jakarta-sans font-bold uppercase text-icono text-sm">Editor de crónica urbana</span>
         <p class="font-Jakarta-sans text-gray-700 font-light text-lg pb-2 pr-12">
          Crítico culinario y fotógrafo documental residente entre Taipei y
          Kioto. Especialista en patrimonio gastronómico insular, mercados
          populares de Asia Oriental y técnicas de fermentación tradicional.
        </p>
    </div>    
      </div>
      <div>
       
      </div>
</section>

<!--Usuario PC-->
<section class="hidden lg:block">
  <div class="flex py-7 bg-gray-100 mx-32 gap-4 pl-5">
    <div class="h-24 w-32">
      <img
        src="src/lib/assets/luffy-icon.jpg"
        alt=""
        class="rounded-full h-full w-full"
      />
    </div>
    <div>
      <div class="flex items-start gap-1 hide">
        <span class="font-syne font-[700] text-3xl">Victor Leal</span>
        <span class="font-Jakarta-sans font-bold uppercase text-icono text-sm"
          >Editor de crónica</span
        >
      </div>
      <div>
        <p
          class="font-Jakarta-sans text-gray-700 font-light text-lg pb-2 pr-12"
        >
          Crítico culinario y fotógrafo documental residente entre Taipei y
          Kioto. Especialista en patrimonio gastronómico insular, mercados
          populares de Asia Oriental y técnicas de fermentación tradicional.
        </p>
        <span class="font-Jakarta-sans font-bold text-gray-700 text-sm"
          >PUBLICACIÓN Nº 108 • TAIPEI, REPÚBLICA DE CHINA</span
        >
      </div>
    </div>
  </div>
</section>
