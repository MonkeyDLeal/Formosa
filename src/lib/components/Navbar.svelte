<script>
	import Logo from '#lib/assets/LogoTaiwan.png';
	import { IconMenu2 } from '@tabler/icons-svelte';
	import { IconX } from '@tabler/icons-svelte';
	import { IconSearch } from '@tabler/icons-svelte';

	let showMenu = $state(false)

	const toggleMenu = () => {
		if (showMenu) {
			showMenu = false
		} else {
			showMenu = true
		}
	}


</script>

<header class="flex justify-between items-center px-12 py-7 pr-20 bg-transparent gap-5">
	<a href="/"><img src={Logo} alt="" class="w-sm"></a>

	<nav class={`${ showMenu ? 'right-0' : '-right-full'} bg-white md:bg-transparent fixed lg:static top-0 p-10 lg:p-0 transition-all h-full z-30`}>
		<div class="flex justify-end pb-12 lg:hidden">
			<button onclick={toggleMenu} class="cursor-pointer">
				<IconX />
			</button>
		</div>
		<ul class="flex flex-col lg:flex-row gap-10 font-bold font-Jakarta-sans">
			<li><a href="/" class="hover:border-b-secondary hover:border-b-3 hover:pb-1">INICIO</a></li>
			<li><a href="/gastronomia" class="hover:border-b-secondary hover:border-b-3 hover:pb-1">GASTRONOMÍA</a></li>
			<li><a href="/turismo" class="hover:border-b-secondary hover:border-b-3 hover:pb-1">DESTINOS</a></li>
			<li><a href="/tradiciones" class="hover:border-b-secondary hover:border-b-3 hover:pb-1">CULTURA</a></li>
		</ul>
	</nav>

	<div class="flex gap-7 font-Jakarta-sans">
		<button><IconSearch/></button>
		<button class="bg-secondary px-5 py-2 rounded-xl text-tertiary font-bold">Explorar Guías</button>

		<button class="lg:hidden" onclick={toggleMenu}>
			<IconMenu2 size={32} />
		</button>
	</div>
</header>