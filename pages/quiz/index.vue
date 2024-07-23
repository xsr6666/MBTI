<template>
	<view class="container">
		<button @click="startQuiz">开始答题</button>
	</view>
</template>

<script>
	export default {
		methods: {
			startQuiz() {
				uni.navigateTo({
					url: '/pages/quiz/quiz'
				});
			}
		}
	}
</script>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	button {
		padding: 10px 20px;
		font-size: 16px;
	}
</style>