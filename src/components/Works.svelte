<script lang="ts">
	import ProjectButtons from './projects/ProjectButtons.svelte';
	import ProjectGallery from './projects/ProjectGallery.svelte';
	import ProjectsTagline from './projects/ProjectsTagline.svelte';
	import { worksActiveDatas } from './stores/stores';
	$: console.log($worksActiveDatas);
</script>

<section id="works" class="max-w-[928px] w-full mx-auto p-6 lg:p-20 pt-0">
	<div class="flex justify-between md:flex-row flex-col gap-4 mx-auto">
		<ProjectsTagline />
		<ProjectButtons />
	</div>
	<div
		class="bg-quartenary p-16 pb-28 h-fit w-full relative mt-8 grid gap-[78px] md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows1 rounded-2xl z-0 justify-items-center"
	>
		{#each $worksActiveDatas as project (project.title)}
			<ProjectGallery none={project.none} projectDatas={project} />
		{/each}
		<div
			class="bg-tertiary absolute md:h-3/4 h-[86%] lg:h-full lg:max-h-[608px] w-[150%] left-12 lg:left-8 top-28 -z-[1] rounded-lg"
		/>
	</div>
</section>
