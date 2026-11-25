<script>
  import { IconPointFilled } from "@tabler/icons-svelte";
  import bannerTradiciones from "#lib/assets/tradicionestaiwan.jpg";
  import { cardTradiciones } from "#lib/data/cardtradiciones.js";
  import Card from "#lib/components/card.svelte";
</script>

<!--Portada mobile tradiciones-->
<section class="lg:hidden">
  <div class="px-3 pt-10 bg-gray-50 pb-10">
    <div class="pb-3 flex flex-col gap-1">
      <div class="flex">
        <IconPointFilled class="text-secondary" /><span
          class="flex items-center font-Jakarta-sans text-gray-600 font-semibold text-base tracking-widest uppercase"
          >cuaderno de campo - taiwan</span
        >
      </div>
      <h1 class="font-syne text-3xl font-extrabold">Cultura y tradiciones</h1>
      <p class="font-Jakarta-sans text-lg text-gray-600">
        La espiritualidad cotidiana en Formosa respira entre humo de sándalo,
        templos vibrantes que conviven con rascacielos y ritos milenarios que
        marcan el ritmo del calendario lunar.
      </p>
    </div>

    <div class="relative">
        <img
            src={bannerTradiciones}
            alt=""
            class="h-full w-full bg-cover bg-center bg-no-repeat bg-fixed rounded-lg"
        />
        <div class="absolute left-2 bottom-2">
            <span class="text-white text-sm font-Jakarta-sans p-2"
                >La noche mas hermosa vista desde Taiwan.</span
            >
        </div>
    </div>
  </div>
</section>

<!--Portada PC Tradiciones-->
<section class="hidden lg:block">
  <div class="px-12 pr-20 pt-30 bg-gray-50 -mt-30 pb-15">
    <div class="pt-12 pb-3 flex gap-1">
      <IconPointFilled class="text-secondary" /><span
        class="flex items-center font-Jakarta-sans text-gray-600 font-semibold text-base tracking-widest uppercase"
        >cuaderno de tradiciones - taiwan</span
      >
    </div>

    <div class="flex justify-between items-center pb-10 gap-20">
      <h1 class="font-syne text-7xl font-[800]">Cultura y tradiciones</h1>
      <p class="font-Jakarta-sans text-lg text-gray-600">
        La espiritualidad cotidiana en Formosa respira entre humo de sándalo,
        templos vibrantes que conviven con rascacielos y ritos milenarios que
        marcan el ritmo del calendario lunar.
      </p>
    </div>

    <div class="h-screen">
      <div
        class="relative size-full bg-cover bg-center"
        style:background-image={`linear-gradient(rgb(0 0 0 / 5%), rgb(0 0 0 / 25%)), url('${bannerTradiciones}')`}
      >
        <div class="absolute right-0 bottom-0 pr-5 pb-5">
          <span class="bg-black text-secondary font-bold font-Jakarta-sans p-2"
            >台北市 • TAIPEI HISTÓRICO</span
          >
        </div>
        <div class="absolute left-0 bottom-0 pb-5 pl-5">
          <span class="text-white font-bold font-Jakarta-sans p-2"
            >TEMPLO LONGSHAN • NIEBLA DE SÁNDALO Y OFRENDAS MATUTINAS</span
          >
        </div>
      </div>
    </div>
  </div>
</section>

<!--Card tradiciones-->
<div class="px-12 hidden md:block">
  <div
    class="border-b-2 border-gray-200 flex justify-between text-gray-500 font-bold font-Jakarta-sans pb-8 pt-10"
  >
    <span class="uppercase">Registros documentales</span>
    <span class="capitalize">06 archivos esenciales</span>
  </div>
</div>

<section
  class="px-3 lg:px-12 pt-5 md:pt-15 pb-15 gap-12 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] lg:grid-cols-3"
>
  {#each cardTradiciones as tarjetaTradiciones}
    <Card {...tarjetaTradiciones} />
  {/each}
</section>

<!--cita pc-->

<section class="bg-gray-50 hidden md:block">
    <div class="flex items-start gap-3 py-25 px-40 mb-10">
        <div class="h-45 w-4 bg-secondary"></div>
        <div class="flex flex-col gap-1">
          <p class="font-syne text-5xl font-bold leading-tight pb-4">
            “En Taiwán, lo sagrado no habita en el pasado ni en vitrinas silenciosas:
            comparte el asfalto, sazona las comidas y viaja en el humo de cada
            esquina.”
          </p>
        </div>
    </div>
</section>

<!--cita mobile-->

<section class="md:hidden pt-10 pb-15">
  <div
    class="bg-gray-100 flex gap-3 py-10 mx-3 px-4 border-l-4 border-l-secondary"
  >
    <div class="flex flex-col gap-1">
      <p class="font-syne text-3xl font-bold leading-tight pb-4">
        «En Taiwán, lo sagrado no habita en el pasado ni en vitrinas
        silenciosas: comparte el asfalto, sazona las comidas y viaja en el humo
        de cada esquina.»
      </p>
      <span
        class="flex items-center font-Jakarta-sans text-gray-600 font-semibold text-sm tracking-widest uppercase"
        >EQUIPO EDITORIAL — DISCOVER TAIWAN</span
      >
    </div>
  </div>
</section>
