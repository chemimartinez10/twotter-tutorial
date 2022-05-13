<template>
	<div>
		<h1>Home</h1>
		<div class="user-list">
			<router-link
				v-for="user in users"
				:to="{ name: 'profile', params: { userId: user.id } }"
				:key="user.id"
			>
				{{ user.username }}
			</router-link>
		</div>
	</div>
</template>

<script>
	import { users } from "../assets/users"
	export default {
		setup() {
			return {
				users,
			}
		},
	}
</script>

<style scoped>
	.user-list {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		margin: 2rem 0;
	}
</style>
