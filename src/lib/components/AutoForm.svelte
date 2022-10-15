<script lang="ts">
	import type { Field, FormErrorDataItem } from '$lib/types/Form';
	import AutoInput from './AutoInput.svelte';

	export let fields: Field[];
	export let initialData = {};
	export let form: FormErrorDataItem[];
	console.log(form);
</script>

{#each fields as field}
	{#if field.type === 'object'}
		<div class="box">
			<p class="title is-4">
				{field.name}
			</p>
			<div class="divider" />
			<div class="ml-5">
				<svelte:self
					fields={field.fields}
					initialData={initialData?.[field.name]}
					{form}
				/>
			</div>
		</div>
	{:else}
		<div class="field">
			<label class="label">
				{field.name}{field.required ? '*' : ''}
			</label>
			<AutoInput
				{field}
				initialData={initialData?.[field.name] ||
					field.default ||
					null}
				formData={form?.find &&
					form.find(({ path }) => path[0] === field.name)}
			/>
		</div>
	{/if}
{/each}
