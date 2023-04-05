<script lang="ts">
	import Github from './assets/svg/Github.svelte';
	import Linkedin from './assets/svg/Linkedin.svelte';
	import UpArrow from './assets/svg/UpArrow.svelte';
	import Wordpress from './assets/svg/Wordpress.svelte';

	export let goTop: boolean = false;

	type Links = {
		[key: string]: {
			href: string;
			title: string;
		};
	};
	const links: Links = {
		github: {
			href: 'https://github.com/sarahT04',
			title: 'Check out my github!'
		},
		linkedin: {
			href: 'https://www.linkedin.com/in/sarah-tanujaya-b9495a1b4/',
			title: 'See my linkedin profile'
		},
		wordpress: {
			href: 'https://sarahsradio.wordpress.com/',
			title: 'Read some of my blog posts'
		}
	};
</script>

<div class="inline-flex gap-2">
	<a href={links.github.href} title={links.github.title}><Github /></a>
	<a href={links.linkedin.href} title={links.linkedin.title}><Linkedin /></a>
	<a href={links.wordpress.href} title={links.wordpress.title}><Wordpress /></a>
	{#if goTop}
		<a href="#main" title="Go back to top"><UpArrow /></a>
	{/if}
</div>
