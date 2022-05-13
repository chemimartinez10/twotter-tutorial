<script setup>
	import Nav from "./components/Nav.vue"
</script>

<template>
	<Nav />
	<main>
		<router-view v-slot="{ Component }">
			<transition>
				<component :is="Component" />
			</transition>
		</router-view>
	</main>
</template>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@200;300;400;500;700&display=swap");
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	body {
		font-family: "Fira Sans", sans-serif;
		background: #fafafa;
	}
  main{
    padding: 2rem 4rem;
  }
	.v-enter-active,
	.v-leave-active {
    transition: opacity 1s ease;
	}

	.v-enter-from,
	.v-leave-to {
    position: absolute;
		opacity: 0;
	}
</style>
