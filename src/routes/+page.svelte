<script lang="ts">
	import About from '../components/About.svelte';
	import Wave from '../components/assets/svg/Wave.svelte';
	import Main from '../components/Main.svelte';
	import Works from '../components/Works.svelte';
	let innerWidth: number = 0;
</script>

<svelte:window bind:innerWidth />
<Main />
<Wave/>
<Works />
<Wave/>
<About />
