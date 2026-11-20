<script>
  import { IconArrowNarrowRight } from "@tabler/icons-svelte";
  const card = $props();
</script>

<div class="flex flex-col bg-white pb-5">
  <div class="relative">
    <img src={card.portada} alt="" class="w-full h-120 object-cover" />
    <span
      class="absolute top-4 left-4 uppercase py-1 px-2 bg-black text-secondary font-Jakarta-sans font-bold self-start"
      >{card.etiqueta}</span
    >
  </div>
  <h3 class="pb-2 px-8 pt-4 font-syne font-bold text-3xl">{card.titulo}</h3>
  <p class="pb-10 px-8 font-Jakarta-sans font-light">{card.resumen}</p>
  <a href={card.href} class="group flex px-8 font-Jakarta-sans font-semibold uppercase"
    ><span class="border-b-2 border-secondary pb-1 inline-block pr-1"
      >{card.categoria}</span
    ><IconArrowNarrowRight
      size={24}
      class="text-icono transition-transform duration-300 group-hover:translate-x-2"
    /></a>
</div>
