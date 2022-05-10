<template>
	<div class="twoot-item" @click="emit('favorite', twoot.id)">
		<div class="user-profile__twoot">
			<div class="twoot-item__user">@{{ username }}</div>
			<div class="twoot-item__content">
				{{ twoot.content }}
			</div>
		</div>
	</div>
</template>

<script setup>
	const props = defineProps({
		username: {
			type: String,
			required: true,
		},
		twoot: {
			type: Object,
			required: true,
		},
	})
    const emit = defineEmits(['favorite'])
</script>

<style>
	.twoot-item {
		padding: 20px;
		background: #fff;
		border-radius: 5px;
		border: 1px solid #dfe3e8;
		cursor: pointer;
		transition: transform 0.25s ease;
	}
	.twoot-item:hover {
		transform: scale(1.1, 1.1);
	}
	.twoot-item__user {
		font-weight: bold;
	}
</style>
