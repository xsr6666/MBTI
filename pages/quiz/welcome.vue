<template>
	<view class="container">
		<view class="title animated-title">探索之旅</view>
		<view class="subtitle">开始你的自探旅程</view>
		<button class="start-button" @click="navigateToOtherPage">立即体验</button>
		<view class="footer">继续即表示您同意《脑脑服务协议》和《隐私条款》</view>
	</view>
</template>

<script>
	export default {
		methods: {
			navigateToOtherPage() {
				uni.navigateTo({
					url: '/pages/quiz/index' // The path to the other page
				});
			}
		}
	}
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100vh;
		padding: 20px;
		box-sizing: border-box;
		background-color: #ffffff;
		position: relative;
	}

	.title {
		font-size: 36px;
		font-weight: bold;
		color: #199c98;
		margin-top: 20px;
		animation: fadeInDown 2s;
		font-family: 'STKaiti', 'STFangsong', sans-serif;
	}

	.subtitle {
		font-size: 18px;
		color: #199c98;
		margin-top: 10px;
		animation: fadeInDown 2s;
		font-family: 'STKaiti', 'STFangsong', sans-serif;
	}

	.start-button {
		width: 200px;
		height: 50px;
		background-color: #199c98;
		color: white;
		border: none;
		border-radius: 25px;
		font-size: 18px;
		position: absolute;
		bottom: 60px;
		animation: fadeInDown 4s;
		font-family: 'STKaiti', 'STFangsong', sans-serif;
	}

	.footer {
		font-size: 12px;
		color: #B0B0B0;
		text-align: center;
		position: absolute;
		bottom: 20px;
		animation: fadeInDown 4s;
		font-family: 'STKaiti', 'STFangsong', sans-serif;
	}

	@keyframes fadeInDown {
		0% {
			opacity: 0;
			transform: translateY(-20px);
		}

		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>