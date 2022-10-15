<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import {
		post_autoform_schema as fields,
		type Post
	} from '$db/collections/posts/schema';
	import AutoForm from '$lib/components/AutoForm.svelte';
	import { form_action } from '$lib/forms/enhance';
	import type { FormErrorData } from '$lib/types/Form';

	export let data: { post: Post };
	export let form: FormErrorData;
</script>

<form
	method="POST"
	use:enhance={form_action(
		{
			message: 'Post mis à jour'
		},
		() => goto('/admin/posts')
	)}
>
	<AutoForm {fields} {form} initialData={data.post} />
	<button type="submit" class="button">Update Post</button>
</form>
