<script lang="ts">
	import type { PageLoad } from '../../$types';
	import { posts_form_options } from '$db/collections/posts/schema';
	import { enhance } from '$app/forms';
	import { form_action } from '$lib/forms/enhance';
	import { invalidateAll } from '$app/navigation';
	export let data: PageLoad;
	$: ({ posts } = data);

	async function deletePost(postId: string) {
		const data = new FormData();
		data.append('postId', postId);
		const response = await fetch('?/delete', {
			method: 'POST',
			body: data
		});
		const result = await response.json();

		if (result.type === 'success') {
			// re-run all `load` functions, following the successful update
			await invalidateAll();
		}

		form_action({ message: 'Post supprimé avec succès' });
	}
</script>

<a class="button" href="/admin/posts/new">New post</a>

<table class="table is-striped is-hoverable is-fullwidth">
	<thead>
		<tr>
			{#each posts_form_options.meta as meta}
				<th>{meta}</th>
			{/each}
			<th>Actions</th>
		</tr>
	</thead>
	<tbody>
		{#each posts as post}
			<tr>
				{#each posts_form_options.meta as meta, i}
					{#if i === 0}
						<th>{post[meta]}</th>
					{:else}
						<td>{post[meta]}</td>
					{/if}
				{/each}

				<td>
					<a
						href="/admin/posts/{post._id}"
						class="button is-small is-info"
					>
						<span class="icon">
							<i class="fas fa-edit" />
						</span>
					</a>
					<button
						on:click={deletePost(post._id)}
						class="button is-small is-danger"
					>
						<span class="icon">
							<i class="fas fa-trash" />
						</span>
					</button>
				</td>
			</tr>
		{/each}
	</tbody>
</table>
