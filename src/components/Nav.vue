<template>
	<nav>
		<div class="logo-container">
			<router-link to="/"><h1>Twooter</h1></router-link>
		</div>
		<div class="user-container" v-if="user">
			<router-link :to="{ name: 'profile', params: { userId: user.id } }"
				>@{{ user.username }}</router-link
			>
		</div>
	</nav>
</template>

<script setup>
	import { useStore } from "vuex"
	import { computed } from "vue"

	const store = useStore()
	const user = computed(() => store.state.user)
</script>

<style scoped>
	nav {
		display: flex;
		justify-content: space-between;
		width: 100%;
		padding: 1rem 4rem;
		background: #96dd16;
	}
	a {
		text-decoration: none;
		color: #000;
		font-weight: 300;
	}
</style>
