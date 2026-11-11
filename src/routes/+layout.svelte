<script>
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import usuario from '#lib/assets/usuario.png';
	import lupa from '#lib/assets/lupa.png';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>


<header class="flex justify-between items-center px-12 py-7">
	<span>Discover Taiwan</span>

	<nav>
		<ul class="flex gap-10">
			<li><a href="/">Inicio</a></li>
			<li><a href="/gastronomia">Gastronomia</a></li>
			<li><a href="/turismo">Turismo</a></li>
			<li><a href="/tradiciones">Cultura y Tradiciones</a></li>
		</ul>
	</nav>

	<div class="flex gap-7">
		<button><img src={lupa} alt=""></button>
		<button class="bg-secondary px-5 py-2 rounded-xl text-tertiary font-bold">Explorar Guías</button>
		<button><img src={usuario} alt=""></button>
	</div>
</header>

{@render children()}

<footer>

	<div>
		<span>Revista & Guía de Viajes</span>
		<span>Un acercamiento editorial y sensorial a los paisajes, sabores milenarios y cultura comtemporánea de Formosa</span>
		<span>Discover Taiwan</span>
	</div>

	<div>
		<span>Explorar</span>
		<ul>
			<li><a href="/">Inicio</a></li>
			<li><a href="/gastronomia">Gastronomia</a></li>
			<li><a href="/turismo">Turismo</a></li>
			<li><a href="/tradiciones">Cultura y Tradiciones</a></li>
		</ul>
	</div>

	<div>
		<span>Culturas y Guías</span>
		<ul>
			<li><a href="/">Mercados Nocturnos</a></li>
			<li><a href="/gastronomia">Festival de Faroles</a></li>
			<li><a href="/turismo">Templos</a></li>
			<li><a href="/tradiciones">Sun Moon Lake</a></li>
		</ul>
	</div>

	<div>
		<span>Conectar</span>
		<ul>
			<li><a href="/">Newsletter</a></li>
			<li><a href="/gastronomia">Contacto</a></li>
			<li><a href="/turismo">Instagram</a></li>
			<li><a href="/tradiciones">YouTube</a></li>
		</ul>
	</div>

</footer>