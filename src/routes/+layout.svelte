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


<header>
	<span>Discover Taiwan</span>

	<nav>
		<ul>
			<li><a href="/">Inicio</a></li>
			<li><a href="/gastronomia">Gastronomia</a></li>
			<li><a href="/turismo">Turismo</a></li>
			<li><a href="/tradiciones">Cultura y Tradiciones</a></li>
		</ul>
	</nav>

	<div>
		<button><img src={lupa} alt=""></button>
		<button>Explorar Guías</button>
		<button><img src={usuario} alt=""></button>
	</div>
</header>

{@render children()}

<footer>

</footer>