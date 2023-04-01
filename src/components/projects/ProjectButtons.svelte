<script lang="ts">
	import Python from '../assets/svg/Python.svelte';
	import React from '../assets/svg/React.svelte';
	import Svelte from '../assets/svg/Svelte.svelte';
</script>

<aside
	class="w-full max-w-[352px] h-[121px] bg-secondary border-tertiary rounded-lg border-[1px] border-solid inline-flex justify-around items-center xs:mt-8"
>
	<div class="w-[70px] h-[70px] bg-quartenary rounded-lg inline-flex items-center justify-center">
		<React />
	</div>
	<div class="w-[70px] h-[70px] bg-quartenary rounded-lg inline-flex items-center justify-center">
		<Svelte />
	</div>
	<div class="w-[70px] h-[70px] bg-quartenary rounded-lg inline-flex items-center justify-center">
		<Python />
	</div>
</aside>
