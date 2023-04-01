<script lang="ts">
	export let text: string = 'Cheerful';
	export let smaller: boolean = false;
</script>

<div class={`bg-quartenary text-secondary w-20 h-20 rounded-full relative`}>
	<h2
		class={`title absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
			smaller ? '!text-4xl' : ''
		} xs:!text-4xl`}
	>
		{text}
	</h2>
</div>
