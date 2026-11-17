<script>
    import { IconCrop11Filled } from '@tabler/icons-svelte';
    import { IconPointFilled } from '@tabler/icons-svelte';
    import bannerGastronomia from '#lib/assets/gastronomiabanner.jpg';
    import Card from '#lib/components/card.svelte';
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

<section class="px-12 pt-15 pb-25 gap-12 grid grid-cols-[repeat(auto-fill,minmax(500px,1fr))]">
    <Card
    portada = 'src/lib/assets/bubble-tea.jpg'
        etiqueta = '01/BEBIDAS'
        titulo = 'Bubble Tea'
        resumen = 'La famosa bebida nacida en Taiwán que combina té, leche y suaves perlas de tapioca. Un ícono que conquistó el mundo.'
        categoria = 'LEER ARTICULO'
    ></Card>
    <Card
    portada = 'src/lib/assets/chou-dou-fu.jpg'
        etiqueta = '02/FERMENTADO'
        titulo = 'Chou Dou Fu'
        resumen = 'Crujiente por fuera y suave por dentro, este tofu fermentado destaca por su intenso aroma y su acompañamiento de col encurtida.'
        categoria = 'LEER ARTICULO'
    ></Card>
    <Card
    portada = 'src/lib/assets/gua-bao.jpg'
        etiqueta = '03/VAPOR'
        titulo = 'Gua Bao'
        resumen = 'Suave pan al vapor relleno de panceta de cerdo, vegetales encurtidos, cilantro y maní triturado. Una joya de la comida callejera.'
        categoria = 'LEER ARTICULO'
    ></Card>
    <Card
    portada = 'src/lib/assets/lu-rou-fan.jpg'
        etiqueta = '04/ESTOFADO'
        titulo = 'Lu Rou Fan'
        resumen = 'Un clásico taiwanés de arroz blanco cubierto con cerdo cocinado lentamente en salsa de soja y especias, lleno de sabor y tradición.'
        categoria = 'LEER ARTICULO'
    ></Card>
    <Card
    portada = 'src/lib/assets/niu-rou-mian.jpg'
        etiqueta = '05/CALDOS'
        titulo = 'Niu Rou Mian'
        resumen = 'Fideos de trigo acompañados de ternera tierna y un caldo aromático de especias, uno de los platos más queridos de la isla.'
        categoria = 'LEER ARTICULO'
    ></Card>
    <Card
    portada = 'src/lib/assets/xiao-long-bao.jpg'
        etiqueta = '06/CALDOS'
        titulo = 'Xiao Long Bao'
        resumen = 'Delicados bocados rellenos de carne y caldo caliente, envueltos en una fina masa y cocinados al vapor. Muy populares en Taiwán.'
        categoria = 'LEER ARTICULO'
    ></Card>
</section>

<section class="bg-gray-50 flex gap-3 items-start py-25 px-40">
    <div class="h-20 w-4 bg-secondary"></div>
    <div class="flex flex-col gap-1">
        <p class="font-syne text-5xl font-bold leading-tight pb-4">“En Taiwán no se viaja para ver monumentos; se viaja para seguir el aroma del caldo a través de la niebla.”</p>
        <span class="flex items-center font-Jakarta-sans text-gray-600 font-medium text-sm tracking-widest uppercase ">NOTAS DE CATA<IconPointFilled /> REDACCIÓN GASTRONÓMICA</span>
    </div>
</section>