<script lang="ts">
	import { page } from '$app/stores';
	const crudLinks = [
		{
			name: 'Posts',
			link: '/admin/posts'
		},
		{
			name: 'Music',
			link: '/admin/music'
		}
	];
</script>

<div class="tabs is-boxed">
	<ul>
		{#each crudLinks as link}
			<li
				class:is-active={$page.url.pathname.indexOf(link.link) === 0}
			>
				<a href={link.link}>{link.name}</a>
			</li>
		{/each}
	</ul>
</div>
