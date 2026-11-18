<script>
    import { IconCrop11Filled } from '@tabler/icons-svelte';
    import { IconPointFilled } from '@tabler/icons-svelte';
    import bannerGastronomia from '#lib/assets/gastronomiabanner.jpg';
    import Card from '#lib/components/card.svelte';
    import { cardGastronomia } from '#lib/data/cardgastronomia.js';
</script>

<!--portada gastronomia-->

<section class="px-12 pr-20 pt-30 bg-gray-50 -mt-30 pb-15">
    <div class="pt-12 pb-10 flex gap-1">
        <IconCrop11Filled class='text-secondary'/><span class="flex items-center font-Jakarta-sans text-gray-600 font-semibold text-base tracking-widest uppercase">CUADERNO CULINARIO<IconPointFilled /> EDICIÓN 2026</span>
    </div>

    <div class="flex justify-between items-end pb-10">
        <h1 class="font-syne text-7xl font-bold">Gastronomía Taiwanesa</h1>
        <p class="font-Jakarta-sans text-gray-600 ">Un balance magistral entre la alquimia <br> callejera y la devoción ceremonial de templo, <br> donde cada caldo y vapor cuenta décadas de paciencia.</p>
    </div>

    <div class="">
        <img src="{bannerGastronomia}" alt="" class="h-full w-full bg-cover bg-center bg-no-repeat bg-fixed">
    </div>
</section>

<!--articulos gastronomia-->

<section class="px-12 pt-15 pb-25 gap-12 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
    {#each cardGastronomia as Tarjetagastronomia}
        <Card 
            {...Tarjetagastronomia}
        />
    {/each}
</section>

<section class="bg-gray-50 flex gap-3 items-start py-25 px-40">
    <div class="h-20 w-4 bg-secondary"></div>
    <div class="flex flex-col gap-1">
        <p class="font-syne text-5xl font-bold leading-tight pb-4">“En Taiwán no se viaja para ver monumentos; se viaja para seguir el aroma del caldo a través de la niebla.”</p>
        <span class="flex items-center font-Jakarta-sans text-gray-600 font-medium text-sm tracking-widest uppercase ">NOTAS DE CATA<IconPointFilled /> REDACCIÓN GASTRONÓMICA</span>
    </div>
</section>