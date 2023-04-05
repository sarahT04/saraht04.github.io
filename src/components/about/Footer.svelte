<script>
	import Logos from '../Logos.svelte';
	import EmailInput from './EmailInput.svelte';
</script>

<footer class="text-tertiary p-6 !pb-0 lg:px-20">
	<div class="lg:inline-flex lg:w-full justify-between items-center">
		<h1 class="title mb-4">Let's connect!</h1>
		<EmailInput />
	</div>
	<div
		class="inline-flex items-center justify-between w-full xs:flex-col xs:items-start gap-3 mt-4"
	>
		<p class="section-title !text-xl">Made with 🧡 by SvelteKit and Sarah.</p>
		<Logos goTop={true} />
	</div>
	<div class="bg-secondary w-full h-10 block mt-5 absolute left-0" />
</footer>
