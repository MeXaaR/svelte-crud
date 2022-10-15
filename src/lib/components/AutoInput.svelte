<script lang="ts">
	import type { Field, FormErrorDataItem } from '$lib/types/Form';

	export let field: Field;
	export let initialData;
	export let formData: FormErrorDataItem;

	const findErrorMessage = () => formData?.message;
	const generateType = () => {
		if (field.type === 'number' || field.type === 'integer') {
			return 'number';
		}
		if (field.format === 'date-time') {
			return 'date';
		}
		if (field.format === 'email') {
			return 'email';
		}
		return 'text';
	};
</script>

<div class="control">
	{#if !!field.enum}
		<div class="select is-fullwidth">
			<select
				name={field.name}
				value={initialData}
				readonly={field.readOnly}
				class:is-danger={formData}
			>
				{#each field.enum as item}
					<option>{item}</option>
				{/each}
			</select>
		</div>
	{:else if field.type === 'boolean'}
		<label class="switch">
			<input
				type="checkbox"
				value={initialData}
				name={field.name}
				class:is-danger={formData}
				readonly={field.readOnly}
			/>
			<span class="slider round" />
		</label>
	{:else}
		<input
			class="input"
			name={field.name}
			readonly={field.readOnly}
			type={generateType(field)}
			class:is-danger={formData}
			value={initialData}
			placeholder="Entrez {field.name}"
		/>
	{/if}
</div>
{#if formData}
	<p class="help is-danger">{findErrorMessage()}</p>
{/if}

<style lang="scss">
	/* The switch - the box around the slider */
	[readonly].input {
		opacity: 0.5;
		background-color: lightgray;
	}
	.switch {
		position: relative;
		display: inline-block;
		width: 60px;
		height: 34px;
	}

	/* Hide default HTML checkbox */
	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	/* The slider */
	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #ccc;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	.slider:before {
		position: absolute;
		content: '';
		height: 26px;
		width: 26px;
		left: 4px;
		bottom: 4px;
		background-color: white;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	input:checked + .slider {
		background-color: hsl(171deg, 100%, 41%);
	}

	input:focus + .slider {
		box-shadow: 0 0 1px hsl(171deg, 100%, 41%);
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(26px);
		-ms-transform: translateX(26px);
		transform: translateX(26px);
	}

	/* Rounded sliders */
	.slider.round {
		border-radius: 34px;
	}

	.slider.round:before {
		border-radius: 50%;
	}
</style>
