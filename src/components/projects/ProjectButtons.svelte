<script lang="ts">
	import Python from '../assets/svg/Python.svelte';
	import React from '../assets/svg/React.svelte';
	import Svelte from '../assets/svg/Svelte.svelte';
	import { setActiveTab, worksActiveTab, worksActiveDatas } from '../stores/stores';
	import type { ProjectKeys } from './ProjectDatas';
	const keys: ProjectKeys[] = ['React', 'Svelte', 'Python'];
</script>

<aside
	class="w-full max-w-[352px] h-[121px] bg-secondary border-tertiary rounded-lg border-[1px] border-solid inline-flex justify-around items-center xs:mt-8 mx-auto lg:mx-0"
>
	{#each keys as _key}
		<div
			title={`Check my ${_key} project!`}
			class={`w-[70px] h-[70px] bg-quartenary rounded-lg inline-flex items-center justify-center ${
				$worksActiveTab === _key ? '' : 'grayscale'
			} hover:grayscale-0 transition-all cursor-pointer`}
			on:click={() => setActiveTab(_key)}
			on:keypress={() => setActiveTab(_key)}
		>
			{#if _key === 'React'}
				<React />
			{:else if _key === 'Svelte'}
				<Svelte />
			{:else}
				<Python />
			{/if}
		</div>
	{/each}
</aside>
