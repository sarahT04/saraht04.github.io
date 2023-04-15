<script>
	import HomeTagline from './home/HomeTagline.svelte';
	import Navbar from './home/Navbar.svelte';
	import Logos from './Logos.svelte';
	import Me from './assets/svg/Me.svelte';
</script>

<main id="main" class="flex lg:p-20 xs:pt-0 justify-evenly lg:pb-2 p-10 overflow-y-visible">
	<Me />
	<!-- <img src={Illustration} alt="Illustration of Sarah" class="md:block hidden" /> -->
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
