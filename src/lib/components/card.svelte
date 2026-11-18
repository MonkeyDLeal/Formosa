<script>
	const card = $props();
</script>

<div class="flex flex-col bg-white pb-5">
        <div class="relative">
        <img src={card.portada} alt="" class="w-full h-120 object-cover">
        <span class="absolute top-4 left-4 py-1 px-2 bg-black text-secondary font-Jakarta-sans font-bold self-start">{card.etiqueta}</span>
        </div>
        <h3 class="pb-2 px-8 pt-4 font-syne font-bold text-3xl">{card.titulo}</h3>
        <p class="pb-10 px-8 font-Jakarta-sans font-light">{card.resumen}</p>
        <a href={card.href} class="group flex px-8 font-Jakarta-sans font-semibold"><span class="border-b-2 border-secondary pb-1 inline-block">{card.categoria}</span><svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  fill="currentColor" viewBox="0 0 24 24" class="text-lime-900 transition-transform duration-300 group-hover:translate-x-2"><path d="M6 13h8.09l-3.3 3.29 1.42 1.42 5.7-5.71-5.7-5.71-1.42 1.42 3.3 3.29H6z"></path></svg></a>
    </div>