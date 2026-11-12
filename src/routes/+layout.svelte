<script>
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import lupa from '#lib/assets/lupa.png';
	import Logo from '#lib/assets/LogoTaiwan.png';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>


<header class="flex justify-between items-center px-12 py-7">
	<a href="/"><img src={Logo} alt="" class="w-sm"></a>

	<nav>
		<ul class="flex gap-10 font-bold font-Jakarta-sans">
			<li><a href="/">INICIO</a></li>
			<li><a href="/gastronomia">GASTRONOMÍA</a></li>
			<li><a href="/turismo">DESTINOS</a></li>
			<li><a href="/tradiciones">CULTURA</a></li>
		</ul>
	</nav>

	<div class="flex gap-7 font-Jakarta-sans">
		<button><img src={lupa} alt=""></button>
		<button class="bg-secondary px-5 py-2 rounded-xl text-tertiary font-bold">Explorar Guías</button>
	</div>
</header>

{@render children()}

<footer >
	<div class="relative after:content-[''] after:block after:w-384 after:h-[1px] after:bg-gray-300 after:mx-auto after:mt-2">
		<div class="flex px-12 pr-36 py-10 justify-between font-Jakarta-sans font-light">
			<div class="flex flex-col gap-2">
				<a href="/"><img src={Logo} alt="" class="w-xs mb-3"></a>
				<span class="font-bold text-lime-900">REVISTA Y GUÍA DE VIAJES</span>
				<span>Un acercamiento editorial y sensorial a los paisajes, <br> sabores milenarios y cultura comtemporánea de <br> Formosa</span>
			</div>

				<div>
					<span class="font-bold">EXPLORAR</span>
					<ul>
						<li><a href="/">Inicio</a></li>
						<li><a href="/gastronomia">Gastronomia</a></li>
						<li><a href="/turismo">Turismo</a></li>
						<li><a href="/tradiciones">Cultura y Tradiciones</a></li>
					</ul>
				</div>

				<div>
					<span class="font-bold">CULTURAS Y GUIAS</span>
					<ul>
						<li><a href="/">Mercados Nocturnos</a></li>
						<li><a href="/gastronomia">Festival de Faroles</a></li>
						<li><a href="/turismo">Templos</a></li>
						<li><a href="/tradiciones">Sun Moon Lake</a></li>
					</ul>
				</div>

				<div>
					<span class="font-bold">CONECTAR</span>
					<ul>
						<li><a href="/">Newsletter</a></li>
						<li><a href="/gastronomia">Contacto</a></li>
						<li><a href="/turismo">Instagram</a></li>
						<li><a href="/tradiciones">YouTube</a></li>
					</ul>
				</div>
			</div>
	</div>

	<div class="flex justify-between px-12 py-5 font-Jakarta-sans font-extralight">
		<div>
			<span>@2025 Discover Taiwan. Una isla que lo tiene todo. Diseñado con estética editorial minimalista.</span>
		</div>
		<div class="flex gap-5">
			<a href="/">Privacidad</a>
			<a href="/">Términos</a>
		</div>
	</div>
</footer>