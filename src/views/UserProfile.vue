<script>
	import { computed, reactive, ref, watch } from "vue"
	import { useRoute } from "vue-router"
	import { users } from "../assets/users"
	import Twoot from "../components/Twoot.vue"

	export default {
		setup() {
			const route = useRoute()
			const userId = ref(route.params.userId)
			watch(
				() => route.params.userId,
				async (newId) => {
					userId.value = newId
					state.user = users.find(({ id }) => id == newId)
				}
			)
			const newTwoot = ref("")
			const typeTwoot = ref(null)
			const twootTypes = reactive([
				{ value: "draft", name: "Draft" },
				{ value: "instant", name: "Instant Twoot" },
			])
			const state = reactive({
				followers: 0,
				user:users.find(({ id }) => id == userId.value)
			})
			const handleFav = (id) => {
				console.log(id)
			}
			const resetForm = () => {
				newTwoot.value = ""
				typeTwoot.value = null
			}
			const newTwootSize = computed(() => {
				return newTwoot.value.length
			})
			const handleSubmit = (e) => {
				if (newTwoot.value && typeTwoot.value === "instant") {
					let idArr = state.user.twoots.map((tw) => tw.id)
					let maxNumber = Math.max(...idArr)
					state.user.twoots.unshift({
						id: maxNumber + 1,
						content: newTwoot.value,
					})
					resetForm()
				}
			}
			return {
				twootTypes,
				newTwoot,
				typeTwoot,
				handleFav,
				handleSubmit,
				newTwootSize,
				state,
			}
		},
		components: { Twoot },
	}
</script>
<template>
	<div class="user-profile">
		<div class="user-profile__container">
			<h1 class="user-profile__username">@{{ state.user.username }}</h1>
			<span class="user-profile__badge" v-if="state.user.isAdmin">Admin</span>
			<div class="user-profile__followers-count">
				<strong>Followers: </strong> {{ state.followers }}
			</div>
			<form class="user-profile__create-twoot" @submit.prevent="handleSubmit">
				<label for="newTwoot"
					><strong>New twoot ({{ newTwootSize }}/180)</strong></label
				>
				<textarea
					id="newTwoot"
					rows="5"
					v-model="newTwoot"
					:class="newTwootSize > 180 ? '--exceded' : ''"
				></textarea>

				<div class="user-profile__create-twoot-type">
					<label for="newTwootType">Type: </label>
					<select id="newTwootType" v-model="typeTwoot">
						<option value="null" disabled selected>Select a type</option>
						<option
							v-for="{ name, value } in twootTypes"
							:key="value"
							:value="value"
						>
							{{ name }}
						</option>
					</select>
				</div>
				<button>Twoot</button>
			</form>
		</div>
		<div class="user-profile__twoots-wrapper">
			<Twoot
				v-for="twoot in state.user.twoots"
				:key="twoot.id"
				:username="state.user.username"
				:twoot="twoot"
				@favorite="handleFav"
			/>
		</div>
	</div>
</template>
<style>
	.user-profile {
		display: grid;
		grid-template-columns: 1fr 3fr;
		width: 100%;
	}
	.user-profile__container {
		display: flex;
		flex-direction: column;
		margin-right: 50px;
		padding: 20px;
		background-color: #fff;
		border-radius: 5px;
		border: 1px solid #dfe3e8;
	}
	.user-profile__badge {
		background: green;
		text-align: left;
		color: #fff;
		margin: 6px auto 6px 0px;
		border-radius: 15px;
		padding: 5px 10px;
		font-weight: 500;
	}
	.user-profile__twoots-wrapper {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.user-profile__create-twoot {
		display: flex;
		flex-direction: column;
		border-top: 2px solid #0003;
		margin-top: 10px;
		padding: 5px 0px;
		gap: 10px;
	}
	.user-profile__create-twoot textarea,
	.user-profile__create-twoot select {
		border-radius: 5px;
		border: 2px solid #0003;
		resize: none;
	}
	.user-profile__create-twoot button {
		padding: 0.4rem 1rem;
		background: #96dd16;
		border-radius: 5px;
		border: 2px solid #0003;
		font-weight: bold;
	}
	.--exceded {
		border-color: #f00;
		outline-color: #f00;
		color: #f00;
	}
</style>
