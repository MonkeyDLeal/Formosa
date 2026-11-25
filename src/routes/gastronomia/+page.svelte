<script>
    import { IconCrop11Filled } from "@tabler/icons-svelte";
    import { IconPointFilled } from "@tabler/icons-svelte";
    import { IconNavigationPin } from '@tabler/icons-svelte';
    import gastronomiaMobile from "#lib/assets/gastronomia-mobile.jpg";
    import bannerGastronomia from "#lib/assets/gastronomiabanner.jpg";
    import Card from "#lib/components/card.svelte";
    import { cardGastronomia } from "#lib/data/cardgastronomia.js";
</script>

<!--portada mobile gastronomia-->

<section class="px-3 py-5 bg-gray-50 md:hidden">
    <div class="flex sm:justify-center pb-5">
        <span
            class="flex items-center font-Jakarta-sans bg-secondary text-black text-xs sm:text-sm tracking-widest uppercase rounded-4xl px-2 py-1"
            ><IconPointFilled />CUADERNO CULINARIO<IconPointFilled />EDICIÓN
            2026</span
        >
    </div>

    <div class="flex flex-col items-start sm:items-center pb-5">
        <h1
            class="font-syne text-5xl font-bold max-w-max text-start sm:text-center"
        >
            Gastronomía Taiwanesa
        </h1>
        <p
            class="font-Jakarta-sans text-gray-600 text-lg text-start sm:text-center"
        >
            Un balance magistral entre la alquimia <br /> callejera y la
            devoción ceremonial de templo, <br /> donde cada caldo y vapor cuenta
            décadas de paciencia.
        </p>
    </div>

    <div class="relative">
        <img
            src={gastronomiaMobile}
            alt=""
            class="h-full w-full bg-cover bg-center bg-no-repeat bg-fixed rounded-lg"
        />
        <div class="absolute right-2 bottom-2">
            <span class="text-secondary text-sm font-Jakarta-sans p-2"
                >08:00 PM</span
            >
        </div>
        <div class="absolute left-2 bottom-2">
            <span
                class="text-white text-sm font-base font-Jakarta-sans p-2 uppercase"
                >Taipei • Mercado callejero da'an</span
            >
        </div>
    </div>
</section>

<!--portada tablet pc gastronomia-->
<section class="px-12 pr-20 pt-30 bg-gray-50 -mt-30 pb-15 hidden md:block">
    <div class="pt-12 pb-10 flex gap-1">
        <IconCrop11Filled class="text-secondary" /><span
            class="flex items-center font-Jakarta-sans text-gray-600 font-semibold text-base tracking-widest uppercase"
            >CUADERNO CULINARIO<IconPointFilled /> EDICIÓN 2026</span
        >
    </div>

    <div class="flex justify-between items-start pb-10 gap-5">
        <h1 class="font-syne text-6xl lg:text-7xl font-bold">Gastronomía Taiwanesa</h1>
        <p class="font-Jakarta-sans text-base lg:text-lg text-gray-600">
            Un balance magistral entre la alquimia <br /> callejera y la
            devoción ceremonial de templo, <br /> donde cada caldo y vapor cuenta
            décadas de paciencia.
        </p>
    </div>

    <div class="relative">
        <img
            src={bannerGastronomia}
            alt=""
            class="h-full w-full bg-cover bg-center bg-no-repeat bg-fixed"
        />
        <div class="absolute right-0 bottom-0 pr-8 pb-5">
            <span class="bg-black text-white font-base font-Jakarta-sans p-2"
                >Taipei - Discover Taiwan</span
            >
        </div>
    </div>
</section>

<!--articulos gastronomia-->

<section
    class="px-3 md:px-12 pt-15 pb-10 gap-y-10 sm:gap-y-0 gap-3 md:gap-5 lg:gap-10 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] lg:grid-cols-3 bg-gray-100"
>
    {#each cardGastronomia as Tarjetagastronomia}
        <Card {...Tarjetagastronomia} />
    {/each}
</section>

<!--cita mobile gastronomia-->
<section class="bg-gray-50 py-10 md:hidden">
    <div class="flex gap-3 items-start py-10 px-3">
        <div class="flex flex-col items-center gap-1 text-center">
            <p class="font-syne text-3xl font-bold leading-tight pb-4">
                «En Taiwán no se viaja para ver monumentos; se viaja para seguir
                el aroma del caldo a través de la niebla.»
            </p>
            <span
                class="flex items-center font-Jakarta-sans font-bold text-gray-600 text-xs tracking-widest uppercase"
                >NOTAS DE CATA<IconPointFilled /> REDACCIÓN GASTRONÓMICA</span
            >
        </div>
    </div>
</section>

<!--articulos pc gastronomia-->
<section class="bg-gray-50 hidden md:block">
    <div class="flex gap-3 items-start py-25 px-40">
        <div class="h-20 w-4 bg-secondary"></div>
        <div class="flex flex-col gap-1">
            <p class="font-syne text-5xl font-bold leading-tight pb-4">
                «En Taiwán no se viaja para ver monumentos; se viaja para seguir
                el aroma del caldo a través de la niebla.»
            </p>
            <span
                class="flex items-center font-Jakarta-sans text-gray-600 font-medium text-sm tracking-widest uppercase"
                >NOTAS DE CATA<IconPointFilled /> REDACCIÓN GASTRONÓMICA</span
            >
        </div>
    </div>
</section>

<section class="pb-10">
    <div class="bg-black mx-3 px-3 flex justify-between items-center md:hidden py-8 gap-3 rounded-2xl">
        <div class="flex-1">
            <h3 class="text-secondary font-Jakarta-sans font-medium text-4xl">¿Hambre en ruta?</h3>
            <span class="text-white font-Jakarta-sans text-lg">Guía de mercados abiertos ahora</span>
        </div>
        <div class="flex-1">
            <a href="https://maps.app.goo.gl/m3ZLcvwbiGBsyPfz6" class="bg-secondary px-5 py-4 flex rounded-lg font-Jakarta-sans font-semibold items-center justify-center">Ver Mapa<IconNavigationPin /></a>
        </div>
    </div>
</section>