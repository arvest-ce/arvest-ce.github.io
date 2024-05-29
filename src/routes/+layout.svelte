<script>
	import './reset.css';
	import './theme.css';
	import {fade} from 'svelte/transition';

	export let data;
	
	// import TopNav from '$lib/components/TopNav.svelte';
	// import Footer from '$lib/components/Footer.svelte';
	// import { onMount } from 'svelte';

	// let globalDiv;
	// let containerDiv;
	// let headerComp;
	// let footerComp;

	// onMount(async () => {
	// 	//setHeight();
	// 	//window.onresize = setHeight;
	// });

	// /*
	// function setHeight(){
	// 	if(globalDiv.offsetHeight < window.innerHeight){
	// 		const toSet = (window.innerHeight - headerComp.offsetHeight) - footerComp.offsetHeight;
	// 		containerDiv.style.height = String(toSet) + 'px';
	// 	};
	// };
	// */
</script>

<!-- <div bind:this={globalDiv}>

	<div bind:this={headerComp} style="height:fit-content">
		<TopNav />
	</div>
	
	<div bind:this={containerDiv} class="container">
		<slot />
	</div>

	<div bind:this={footerComp}>
		<Footer />
	</div>
</div> -->

<div class="container">
	<div class="actual_image">

	<div class="screen"></div>

	
	{#key data.url}
		<div class="transition_div"
			in:fade={{x: 0, duration:100, delay:100}}
			out:fade={{x: 0, duration:100}}
		>
			<slot />
		</div>
	{/key}

	</div>
</div>

<style>
	.container{
        margin: 0;
		padding: 0;
		width: 100vw;
		height: 100vh;
        
		overflow: hidden;
		position: relative;

		/* background-image: url('svg/ST2404-trame-SML.svg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-size: cover;
		background-position: center; */
	
    }

	/* .screen{
		width: 100vw;
		height: 100vh;
		background-color: red;
		z-index: 2;
	} */

	.actual_image{
		width: 100%;
		height: 100%;
	}

	/* .actual_image{
		width: 100%;
		height: 100%;

		background-image: url('svg/ST2404-trame-SML.svg');
        background-repeat: repeat-x;
        background-size: cover;
        background-position: center;
        background-size: cover;
		background-position: center;

		animation: slide 150s linear infinite; 
	}

	@keyframes slide {
    from { background-position: 0 0; }
    to { background-position: -100vw 0; }
} */



	.transition_div{
		z-index: 1;
		width: 100%;
		height: 100%;
		display: flex;
        justify-content: center;
        align-items: center;
	}
</style>