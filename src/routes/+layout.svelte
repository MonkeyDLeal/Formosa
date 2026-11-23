<script>
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import Logo from '#lib/assets/LogoTaiwan.png';
	import Navbar from '#lib/components/Navbar.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>


<Navbar />

{@render children()}

<footer >
	<div class="border-b border-b-gray-300 pt-10 md:pt-5 lg:pt-15">
		<div class="flex flex-col lg:flex-row lg:items-start lg:gap-10 md:px-12 lg:pr-20 lg:py-10 md:py-5 justify-between font-Jakarta-sans font-light">
			<div class="flex flex-col items-center gap-2">
				<a href="/"><img src={Logo} alt="" class="w-xs mb-3"></a>
				<span class="font-bold text-lime-900">REVISTA Y GUÍA DE VIAJES</span>
				<span class="text-center lg:text-start px-10 text-sm sm:text-base md:text-base">Un acercamiento editorial y sensorial a los paisajes,<br> sabores milenarios y cultura comtemporánea de <br> Formosa</span>
			</div>

				<div>
					<span class="font-bold hidden lg:block">EXPLORAR</span>
					<ul class="flex lg:flex-col justify-center gap-3 md:gap-15 lg:gap-1 pt-3 md:pt-3 pb-3 md:pb-0 text-sm sm:text-base md:text-base">
						<li><a href="/">Inicio</a></li>
						<li><a href="/gastronomia">Gastronomia</a></li>
						<li><a href="/turismo">Turismo</a></li>
						<li><a href="/tradiciones">Cultura y Tradiciones</a></li>
					</ul>
				</div>

				<div class="hidden lg:block">
					<span class="font-bold">CULTURAS Y GUIAS</span>
					<ul>
						<li><a href="/">Mercados Nocturnos</a></li>
						<li><a href="/gastronomia">Festival de Faroles</a></li>
						<li><a href="/turismo">Templos</a></li>
						<li><a href="/tradiciones">Sun Moon Lake</a></li>
					</ul>
				</div>

				<div class="hidden lg:block">
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

	<div class="flex flex-col md:flex-row justify-between px-5 md:px-12 py-5 gap-2 font-Jakarta-sans font-extralight md:pr-20 text-sm sm:text-base md:text-base">
		<div>
			<span>@2025 Discover Taiwan. Una isla que lo tiene todo. Diseñado con estética editorial minimalista.</span>
		</div>
		<div class="flex justify-between md:justify-start gap-5 ">
			<a href="/">Privacidad</a>
			<a href="/">Términos</a>
		</div>
	</div>
</footer>