<script lang="ts">
	import AboutCircle from './about/AboutCircle.svelte';
	import AboutTagline from './about/AboutTagline.svelte';
	import Footer from './about/Footer.svelte';
</script>

<section id="about" class="max-w-2xl mx-auto relative p-6 lg:p-20 pt-0">
	<div class="mb-10 inline-flex w-full xs:justify-around justify-evenly gap-10">
		<AboutCircle text="Critical" />
		<AboutCircle text="Flexible" />
	</div>
	<AboutTagline />
	<div
		class="mt-7 mb-10 inline-flex w-full xs:justify-around justify-evenly gap-10 lg:justify-between"
	>
		<AboutCircle text="Enthusiastic" smaller={true} />
		<AboutCircle text="Cheerful" />
	</div>
</section>
<Footer />
