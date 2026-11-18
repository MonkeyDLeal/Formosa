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
	<div class="border-b border-b-gray-300 pt-15">
		<div class="flex px-12 pr-20 py-10 justify-between font-Jakarta-sans font-light">
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

	<div class="flex justify-between px-12 py-5 font-Jakarta-sans font-extralight pr-20">
		<div>
			<span>@2025 Discover Taiwan. Una isla que lo tiene todo. Diseñado con estética editorial minimalista.</span>
		</div>
		<div class="flex gap-5">
			<a href="/">Privacidad</a>
			<a href="/">Términos</a>
		</div>
	</div>
</footer>