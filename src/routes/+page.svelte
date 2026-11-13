<script>
   import hero from '#lib/assets/HeroTaiwan.jpg';
   import gastronomia from '#lib/assets/sopafideos.jpg'
   import turismo from '#lib/assets/rezo.jpg'
   import cultura from '#lib/assets/templotaiwan.jpg'
</script>

<!--Hero-->

<section class="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed flex flex-col place-content-end pb-40 px-12" style:background-image={`linear-gradient(rgb(0 0 0 / 15%), rgb(0 0 0 / 80%)), url('${hero}')`}>
    <div class="flex flex-col">
        <span class="text-secondary text-xl font-bold font-Jakarta-sans flex items-center pb-3"><svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  fill="currentColor" viewBox="0 0 24 24" ><path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20"></path></svg>EDICION MONOGRÁFICA</span>
        <h1 class="font-syne font-[800] text-8xl text-white pb-3">Descubre <br> Taiwán</h1>
        <p class="font-Jakarta-sans text-white text-2xl pb-5">Una isla forjada entre cumbres brumosas y vanguardia serena. <br> El pulso íntimo donde el sosiego de la tradición abraza el <br> porvenir.</p>
        <a href="/"><button class="bg-secondary py-4 text-tertiary font-Jakarta-sans font-bold w-65 flex justify-center items-center text-lg">Comenzar el viaje <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"fill="currentColor" viewBox="0 0 24 24" ><path d="M13 12V6h-2v6H7l5 6 5-6z"></path></svg></button></a>
    </div>
</section>

<!--Articulos-->

<section class="flex justify-between px-12 pt-12 bg-gray-50">
    <div>
        <span class="font-bold text-lime-900 font-Jakarta-sans font-bold">CUADERNO DE VIAJE</span>
        <h2 class="font-syne font-[700] text-6xl">Explora Taiwán</h2>
    </div>
    <div>
        <p class="font-Jakarta-sans font-light text-lg">Tres miradas pausadas para desvelar el alma <br> singular de la isla de Formosa.</p>
    </div>

</section>


<!--Cards-->
<section class="px-12 pt-15 pb-25 gap-12 bg-gray-50 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
    <div class="flex flex-col bg-white pb-5">
        <img src={gastronomia} alt="" class="w-full h-120 object-cover">
        <h3 class="pb-2 px-8 pt-4 font-syne font-bold text-3xl">Gastronomía</h3>
        <p class="pb-10 px-8 font-Jakarta-sans font-light">Sabores callejeros, tecnicas ancestrales y a la calidez de un bol humeante.</p>
        <a href="/gastronomia" class="group flex px-8 font-Jakarta-sans font-semibold"><span class="border-b-2 border-secondary pb-1 inline-block">VER GASTRONOMÍA</span><svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  fill="currentColor" viewBox="0 0 24 24" class="text-lime-900 transition-transform duration-300 group-hover:translate-x-2"><path d="M6 13h8.09l-3.3 3.29 1.42 1.42 5.7-5.71-5.7-5.71-1.42 1.42 3.3 3.29H6z"></path></svg></a>
    </div>

    <div class="flex flex-col bg-white pb-5">
        <img src={cultura} alt="" class="w-full h-120 object-cover">
        <h3 class="pb-2 px-8 pt-4 font-syne font-bold text-3xl">Destinos Turísticos</h3>
        <p class="pb-10 px-8 font-Jakarta-sans font-light">Sabores callejeros, tecnicas ancestrales y a la calidez de un bol humeante.</p>
        <a href="/gastronomia" class="group flex px-8 font-Jakarta-sans font-semibold"><span class="border-b-2 border-secondary pb-1 inline-block">VER DESTINOS</span><svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  fill="currentColor" viewBox="0 0 24 24" class="text-lime-900 transition-transform duration-300 group-hover:translate-x-2"><path d="M6 13h8.09l-3.3 3.29 1.42 1.42 5.7-5.71-5.7-5.71-1.42 1.42 3.3 3.29H6z"></path></svg></a>
    </div>

    <div class="flex flex-col bg-white pb-5">
        <img src={turismo} alt="" class="w-full h-120 object-cover">
        <h3 class="pb-2 px-8 pt-4 font-syne font-bold text-3xl">Tradiciones</h3>
        <p class="pb-10 px-8 font-Jakarta-sans font-light">Sabores callejeros, tecnicas ancestrales y a la calidez de un bol humeante.</p>
        <a href="/gastronomia" class="group flex px-8 font-Jakarta-sans font-semibold"><span class="border-b-2 border-secondary pb-1 inline-block">VER TRADICIONES</span><svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  fill="currentColor" viewBox="0 0 24 24" class="text-lime-900 transition-transform duration-300 group-hover:translate-x-2"><path d="M6 13h8.09l-3.3 3.29 1.42 1.42 5.7-5.71-5.7-5.71-1.42 1.42 3.3 3.29H6z"></path></svg></a>
    </div>
</section>