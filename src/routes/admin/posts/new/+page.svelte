<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { post_autoform_schema as fields } from '$db/collections/posts/schema';
	import AutoForm from '$lib/components/AutoForm.svelte';
	import { form_action } from '$lib/forms/enhance';
	import type { FormErrorDataItem } from '$lib/types/Form';

	export let form: FormErrorDataItem[];
</script>

<form
	method="POST"
	use:enhance={form_action(
		{
			message: 'Post créé avec succès'
		},
		() => goto('/admin/posts')
	)}
>
	<AutoForm {fields} {form} />
	<button type="submit" class="button">Créer Post</button>
</form>
