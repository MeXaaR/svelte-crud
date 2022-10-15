<script lang="ts">
	import 'bulma';
	import { Toy } from '@leveluptuts/svelte-toy';
	import Header from '$lib/components/Header.svelte';

	import './styles.css';
</script>

<svelte:head>
	<script
		defer
		src="https://use.fontawesome.com/releases/v5.15.4/js/all.js"></script>
</svelte:head>
<div class="app">
	<Header />

	<main class="container">
		<slot />
	</main>

	<!-- <footer class="footer">
		<div class="content has-text-centered">
			<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
		</div>
	</footer> -->
	<Toy register={[]} />
</div>

<style>
	main {
		min-height: 50vh;
		padding-top: 70px;
	}
</style>
