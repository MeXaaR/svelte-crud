<script lang="ts">
	import AdminMenu from '$lib/components/AdminMenu.svelte';
</script>

<svelte:head>
	<title>Admin interface</title>
</svelte:head>

<div class="container mb-6">
	<div class="columns is-multiline is-centered">
		<div class="column is-9"><AdminMenu /></div>
		<div class="column is-9">
			<section>
				<slot />
			</section>
		</div>
	</div>
</div>
