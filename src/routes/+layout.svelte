<script>
	import '../app.css';
</script>

<slot />

<style>
	:global(html) {
		overflow-x: hidden;
		scroll-behavior: smooth;
	}
	:global(body) {
		overflow-x: hidden;
		background-color: #eff5f5;
	}
</style>
