<script lang="ts">
	import Email from '../assets/svg/Email.svelte';
	import TiltedArrow from '../assets/svg/SlightlyTiltedArrow.svelte';

	let text: string = 'Say something nice..';
</script>

<section class="inline-flex gap-1 lg:w-[438px] lg:h-[44px] w-full">
	<div
		class="inline-flex gap-3 max-w-[438px] w-full bg-quartenary items-center rounded-xl paragraph !text-[22px] text-slate-600 pl-2"
	>
		<Email />
		<div contenteditable="true" bind:innerHTML={text} class="mt-2 w-full focus:outline-0" />
	</div>
	<a
		href={`mailto: sarahtanujaya@gmail.com?subject=Connecting from your portofolio website&body=${text}`}
		class="inline-flex bg-secondary items-center justify-center rounded-full w-16 h-11"
		title="Send me a mail!"><TiltedArrow /></a
	>
</section>
