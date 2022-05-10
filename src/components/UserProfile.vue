<script>
	import { reactive, ref } from "vue"
	import Twoot from "./Twoot.vue"
	export default {
		setup() {
			const count = ref(0)
			const username = ref("chemimartinez10")
			const isAdmin = ref(true)
			const twoots = reactive([
				{ id: 1, content: "Twooter is amazing!" },
				{ id: 2, content: "Don't forget to suscribe" },
			])
			const twootTypes = reactive([
				{ value: 'draft', name: "Draft" },
				{ value: 'instant', name: "Instant Twoot" },
			])
			const handleFav = (id)=>{
				console.log(id)
			}
			return {
				count,
				username,
				isAdmin,
                twoots,
				twootTypes,
				handleFav
			}
		},
		components: { Twoot },
	}
</script>
<template>
	<div class="user-profile">
		<div class="user-profile__container">
			<h1 class="user-profile__username">@{{ username }}</h1>
			<span class="user-profile__badge" v-if="isAdmin">Admin</span>
			<div class="user-profile__followers-count">
				<strong>Followers: </strong> {{ count }}
			</div>
			<form class="user-profile__create-twoot">
				<label for="newTwoot"><strong>New twoot</strong></label>
				<textarea id="newTwoot" rows="5" ></textarea>

				<div class="user-profile__create-twoot-type">
					<label for="newTwootType">Type: </label>
					<select id="newTwootType">
						<option v-for="({name, value}) in twootTypes" :key="value" :value="value">{{name}}</option>
					</select>
				</div>
			</form>
		</div>
		<div class="user-profile__twoots-wrapper">
			<Twoot v-for="twoot in twoots" :key="twoot.id" :username="username" :twoot="twoot" @favorite="handleFav"/>
		</div>
	</div>
</template>
<style>
	.user-profile {
		display: grid;
		grid-template-columns: 1fr 3fr;
		width: 100%;
		padding: 50px 5%;
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
	.user-profile__twoots-wrapper{
		display: flex;
		flex-direction: column;
		gap:10px;
	}
	.user-profile__create-twoot{
		display: flex;
		flex-direction: column;
		border-top: 2px solid #0003;
		margin-top: 10px;
		padding: 5px 0px;
		gap: 10px;
	}
	.user-profile__create-twoot textarea, .user-profile__create-twoot select{
		border-radius: 5px;
		border: 2px solid #0003;
		resize: none;
	}
</style>
