<script lang="ts">
	import { page } from '$app/stores';
</script>

<nav
	class="navbar is-fixed-top is-light"
	role="navigation"
	aria-label="main navigation"
>
	<div class="navbar-brand">
		<a class="navbar-item" href="/">
			<img
				src="https://bulma.io/images/bulma-logo.png"
				width="112"
				height="28"
			/>
		</a>

		<div
			role="button"
			class="navbar-burger"
			aria-label="menu"
			aria-expanded="false"
		>
			<span aria-hidden="true" />
			<span aria-hidden="true" />
			<span aria-hidden="true" />
		</div>
	</div>

	<div class="navbar-menu">
		<div class="navbar-start">
			<a
				class="navbar-item"
				class:is-active={$page.url.pathname === '/'}
				href="/"
			>
				Home
			</a>
			<a
				class="navbar-item"
				class:is-active={$page.url.pathname === '/documentation'}
				href="/documentation"
			>
				Documentation
			</a>
			<a
				class="navbar-item"
				class:is-active={$page.url.pathname === '/admin'}
				href="/admin"
			>
				Admin
			</a>
		</div>

		<div class="navbar-end">
			<div class="navbar-item">
				<div class="buttons">
					<button class="button is-primary">
						<strong>Sign up</strong>
					</button>
					<button class="button is-light"> Log in </button>
				</div>
			</div>
		</div>
	</div>
</nav>
