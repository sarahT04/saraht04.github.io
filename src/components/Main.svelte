<script>
	import HomeTagline from './home/HomeTagline.svelte';
	import Navbar from './home/Navbar.svelte';
	import Logos from './Logos.svelte';
	import Illustration from './assets/img/Illustration.png';
</script>

<main id="main" class="flex p-6 lg:p-20 pt-0 justify-evenly">
	<img src={Illustration} alt="Illustration of Sarah" class="xs:hidden" />
	<div>
		<Navbar />
		<HomeTagline />
		<Logos />
		<a
			href="#works"
			class="paragraph flex rounded-lg w-[136px] h-[40px] text-center bg-secondary text-quartenary items-center justify-center mt-5"
			>Know more</a
		>
	</div>
</main>
