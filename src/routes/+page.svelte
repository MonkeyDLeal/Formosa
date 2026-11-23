<script>
   import hero from '#lib/assets/HeroTaiwan.jpg';
   import Card from '#lib/components/card.svelte';
   import { cardInicio } from '#lib/data/cardinicio.js';
   import { IconArrowNarrowDown } from '@tabler/icons-svelte';
   import { IconPlayerRecordFilled } from '@tabler/icons-svelte';

</script>

<!--Hero-->

<section class="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed flex flex-col place-content-end pb-40 px-12" style:background-image={`linear-gradient(rgb(0 0 0 / 15%), rgb(0 0 0 / 80%)), url('${hero}')`}>
    <div class="flex flex-col">
        <span class="text-secondary text-xl font-bold font-Jakarta-sans flex items-center pb-3"><IconPlayerRecordFilled />EDICION MONOGRÁFICA</span>
        <h1 class="font-syne font-[800] text-8xl text-white pb-3">Descubre <br> Taiwán</h1>
        <p class="font-Jakarta-sans text-white text-2xl pb-5">Una isla forjada entre cumbres brumosas y vanguardia serena. <br> El pulso íntimo donde el sosiego de la tradición abraza el <br> porvenir.</p>
        <a href="/"><button class="bg-secondary py-4 text-tertiary font-Jakarta-sans font-bold w-65 flex justify-center items-center text-lg">Comenzar el viaje <IconArrowNarrowDown size={24} /></button></a>
    </div>
</section>

<!--Articulos-->

<section class="flex justify-between px-12 pt-12 bg-gray-50">
    <div>
        <span class="font-bold text-icono font-Jakarta-sans">CUADERNO DE VIAJE</span>
        <h2 class="font-syne font-bold text-6xl">Explora Taiwán</h2>
    </div>
    <div>
        <p class="font-Jakarta-sans font-light text-lg">Tres miradas pausadas para desvelar el alma <br> singular de la isla de Formosa.</p>
    </div>

</section>


<!--Cards-->
<section class="px-12 pt-15 pb-25 gap-12 bg-gray-50 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
    
    {#each cardInicio as tarjeta}
        <Card 
            {...tarjeta}
        />
    {/each}

</section>

 <!-- <a href="/articulos"><button class="bg-secondary text-black px-5 py-5">Hola</button></a> -->