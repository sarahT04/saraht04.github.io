<script lang="ts">
	import type { ProjectValues } from './ProjectDatas';

	export let none: boolean = false;
	export let projectDatas: ProjectValues;

	const { title, description, src, technologyUsed, href } = projectDatas;
</script>

<div
	class="w-[241px] h-[203px] lg:w-[314px] lg:h-[264px] my-shadow rounded-lg bg-white inline-flex items-center justify-center flex-col relative project-gallery-wrapper gap-3"
>
	{#if none}
		<p class="section-title text-center !text-2xl lg:!text-3xl">No other projects...</p>
	{:else}
		<img
			{src}
			alt={`Snapshot of ${title}`}
			class="lg:h-[200px] h-[150px] w-full rounded-lg object-cover"
		/>
		<p class="section-title !text-2xl">{title}</p>
		<div
			class="bg-quartenary w-[241px] h-[190px] lg:w-[314px] lg:h-[245px] rounded-lg absolute top-5 px-4 py-3 border-solid border-[1px] border-secondary flex flex-col justify-around items-stretch opacity-0 invisible project-gallery-hover"
		>
			<p class="section-title text-center !text-2xl lg:!text-3xl">{title}</p>
			<p class="paragraph text-justify !text-md lg:!text-xl lg:!leading-5">{description}</p>
			<div>
				<p class="paragraph text-slate-600 lg:mb-1 !text-sm lg:!text-lg">TECH USED:</p>
				<p class="paragraph !text-md lg:!text-xl lg:!leading-5">{technologyUsed}</p>
			</div>
			<a
				{href}
				title={`Check ${title} on Github.`}
				class="paragraph underline !text-sm lg:!text-base">View on Github -&gt;</a
			>
		</div>
	{/if}
</div>
