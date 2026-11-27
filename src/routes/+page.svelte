<script>
   import hero from '#lib/assets/HeroTaiwan.jpg';
   import Card from '#lib/components/card.svelte';
   import { cardInicio } from '#lib/data/cardinicio.js';
   import { IconArrowNarrowDown } from '@tabler/icons-svelte';
   import { IconPlayerRecordFilled } from '@tabler/icons-svelte';

</script>

<!--Hero-->
<section class="border-t-2 border-t-secondary bg-white pb-10 sm:hidden">
    <div class="relative">
        <img src="{hero}" alt="" class="h-120 w-full object-cover object-right px-5 pt-5 rounded-4xl">
        <span class="text-secondary bg-black text-xs px-2 py-1 rounded-full font-bold font-Jakarta-sans flex items-center absolute left-6 top-8"><IconPlayerRecordFilled size="15px" />CUADERNO MONOGRÁFICO</span>
        <span class="text-white font-bold font-Jakarta-sans text-sm uppercase absolute bottom-4 left-8">EDICIÓN 2025 • FORMOSA</span>
        <span class="text-secondary font-bold font-Jakarta-sans text-sm uppercase absolute bottom-4 right-8">VOL. 01</span>
    </div>
    <div class="px-5 pt-5">
        <span class="font-Jakarta-sans uppercase text-gray-700">prólogo visual</span>
        <h1 class="font-syne text-4xl font-bold">Descubre Taiwán</h1>
        <p class="font-Jakarta-sans text-lg text-gray-700 py-3">Una isla forjada entre cumbres brumosas y vanguardia serena. El pulso íntimo donde el sosiego de la tradición abraza el porvenir.</p>
        <a href="/"><button class="bg-secondary py-4 text-tertiary font-Jakarta-sans text-base font-bold w-full rounded-lg flex justify-between px-5 items-center">Comenzar el viaje <IconArrowNarrowDown size={24} /></button></a>
    </div>
</section>



<section class="min-h-180 lg:min-h-220 bg-cover bg-top-right bg-no-repeat bg-fixed place-content-end pb-40 px-12 hidden sm:block" style:background-image={`linear-gradient(rgb(0 0 0 / 15%), rgb(0 0 0 / 80%)), url('${hero}')`}>
    <div class="flex flex-col items-center lg:items-start">
        <span class="text-secondary text-xl font-bold font-Jakarta-sans flex items-center pb-3 "><IconPlayerRecordFilled />EDICION MONOGRÁFICA</span>
        <h1 class="font-syne font-extrabold text-7xl md:text-6xl lg:text-8xl text-white text-center lg:text-start pb-3">Descubre <br class="md:hidden lg:block"> Taiwán</h1>
        <p class="font-Jakarta-sans sm:text-lg text-white md:text-xl text-center lg:text-start pb-5">Una isla forjada entre cumbres brumosas y vanguardia serena. <br> El pulso íntimo donde el sosiego de la tradición abraza el <br> porvenir.</p>
        <a href="/"><button class="bg-secondary py-4 text-tertiary font-Jakarta-sans font-bold w-65 flex justify-center items-center text-base lg:text-lg">Comenzar el viaje <IconArrowNarrowDown size={24} /></button></a>
    </div>
</section>

<!--Articulos-->

<section class="flex flex-col justify-between px-12 pt-12 bg-gray-50 text-center sm:text-start">
    <div>
        <span class="font-bold text-icono font-Jakarta-sans ">CUADERNO DE VIAJE</span>
        <h2 class="font-syne font-bold text-3xl sm:text-6xl">Explora Taiwán</h2>
    </div>
    <div>
        <p class="font-Jakarta-sans font-light text-lg">Tres miradas pausadas para desvelar el alma singular de la isla de Formosa.</p>
    </div>

</section>


<!--Cards-->
<section class="px-5 lg:px-12 pt-15 pb-25 gap-12 bg-gray-50 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
    
    {#each cardInicio as tarjeta}
        <Card 
            {...tarjeta}
        />
    {/each}

</section>

<section class="bg-white flex gap-3 items-start px-5 py-10 sm:py-25 sm:px-40 sm:hidden">
    <div class="h-30 w-4 bg-secondary"></div>
    <div class="flex flex-col gap-1">
        <p class="font-syne text-3xl font-bold leading-tight pb-4">«El viaje a Taiwán no se mide en kilómetros, sino en el tiempo suspendido entre cada sorbo de té de alta montaña.»</p>
        <span class="flex items-center font-Jakarta-sans text-gray-600 font-medium text-sm tracking-widest uppercase ">ALISHAN OOLONG CHRONICLES</span>
    </div>
</section>
