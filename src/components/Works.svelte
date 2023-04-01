<script>
	import ProjectButtons from './projects/ProjectButtons.svelte';
	import ProjectsTagline from './projects/ProjectsTagline.svelte';
</script>

<section id="works" class="max-w-[928px] w-full mx-auto p-6 lg:p-20 pt-0">
	<div class="flex justify-between md:flex-row flex-col">
		<ProjectsTagline />
		<ProjectButtons />
	</div>
	<div
		class="bg-quartenary p-16 pb-28 h-fit w-full relative mt-8 grid gap-[78px] md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows1 rounded-2xl z-0 justify-items-center"
	>
		<div class="w-[241px] h-[203px] lg:w-[314px] lg:h-[264px] my-shadow rounded-lg bg-white">
			314 x 264
		</div>
		<div class="w-[241px] h-[203px] lg:w-[314px] lg:h-[264px] my-shadow rounded-lg bg-white">
			314 x 264
		</div>
		<div class="w-[241px] h-[203px] lg:w-[314px] lg:h-[264px] my-shadow rounded-lg bg-white">
			314 x 264
		</div>
		<div class="w-[241px] h-[203px] lg:w-[314px] lg:h-[264px] my-shadow rounded-lg bg-white">
			314 x 264
		</div>
		<div
			class="bg-tertiary absolute md:h-3/4 h-[86%] lg:h-full lg:max-h-[608px] w-[120%] xs:left-16 left-12 lg:left-8 top-28 -z-[1] rounded-lg"
		/>
	</div>
</section>
