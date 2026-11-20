<script>
    import { IconPointFilled } from "@tabler/icons-svelte";
    import { IconCompassFilled } from "@tabler/icons-svelte";
    import bannerTurismo from "#lib/assets/turismobanner.jpg";
    import Card from "#lib/components/card.svelte";
    import { cardTurismo } from "#lib/data/cardturismo.js";
</script>

<div class="h-1 bg-gray-100"></div>

<!--Portada Turismo-->
<section class="px-12 pr-20 pt-10">
    <div class="pb-7">
        <span
            class="flex items-center font-Jakarta-sans text-gray-600 font-semibold text-base tracking-widest uppercase pb-1"
            >ATLAS INSULAR<IconPointFilled class="text-secondary" /> VOL. IV — Formosa</span
        >
        <h1 class="font-syne text-6xl font-bold pb-2">DESCUBRE TAIWÁN</h1>

        <div class="flex justify-between gap-10">
            <p class="font-Jakarta-sans text-gray-600 w-3xl flex-initial">
                Una isla modelada por la tensión poética entre la vanguardia
                metropolitana y las densas selvas subtropicales. Desde
                acantilados de mármol que rozan las olas del Pacífico hasta
                cumbres coronadas por mares de bruma y siluetas de neón.
            </p>
            <span
                class="flex font-Jakarta-sans font-bold text-gray-500 pr-32 items-center gap-2"
                >6 ENCLAVES ESENCIALES <IconCompassFilled
                    class="text-icono"
                    size="32"
                /></span
            >
        </div>
    </div>

    <div class="h-screen">
        <div
            class="relative size-full bg-cover"
            style:background-image={`linear-gradient(rgb(0 0 0 / 0%), rgb(0 0 0 / 60%)), url('${bannerTurismo}')`}
        >
            <div class="absolute bottom-0 left-0 pb-10 pl-10">
                <span class="font-Jakarta-sans text-secondary font-bold text-lg"
                    >PANORÁMICA EDITORIAL</span
                >
                <h1 class="text-white font-syne font-bold text-3xl">
                    La dorsal de Formosa: Encuentro de roca, niebla y océano
                </h1>
            </div>
        </div>
    </div>
</section>

<!--Articulos Turismo-->

<section class="px-12 pt-15 pb-25 gap-12 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] lg:grid-cols-3">
    {#each cardTurismo as tarjetaTurismo}
        <Card
        {...tarjetaTurismo}
        />
    {/each}
</section>

<section class="bg-gray-50 flex gap-3 py-25 px-40 ">
    <div class="h-30 w-7 bg-secondary"></div>
    <div class="flex flex-col gap-1">
        <span class="font-Jakarta-sans font-bold text-gray-500 text-lg">CUADERNO DE RUTA</span>
        <p class="font-syne text-5xl font-bold leading-tight pb-4">“Viajar por Taiwán no es medir distancias, sino contemplar cómo la modernidad absoluta rinde tributo continuo a la fuerza telúrica de sus montañas y mares.”</p>
        <span class="flex items-center font-Jakarta-sans text-icono font-medium text-base tracking-widest uppercase">EQUIPO EDITORIAL — DISCOVER TAIWAN</span>
    </div>
</section>