<template>
	<view class="container">
		<view class="header">
			<text class="title">小狗身份证</text>
		</view>
		<view class="card">
			<view class="info">
				<text class="label">名字:</text>
				<text class="value">{{ dog.name }}</text>
			</view>
			<view class="info">
				<text class="label">种类:</text>
				<text class="value">{{ dog.breed }}</text>
			</view>
			<view class="info">
				<text class="label">年龄:</text>
				<text class="value">{{ dog.age }} 年</text>
			</view>
			<view class="info">
				<text class="label">身高:</text>
				<text class="value">{{ dog.height }} cm</text>
			</view>
			<view class="info">
				<text class="label">体重:</text>
				<text class="value">{{ dog.weight }} kg</text>
			</view>
			<image class="dog-image" src="/static/R.jpg" />
		</view>
		<button class="button" @click="showTip">查看养宠贴士</button>
		<uni-popup ref="popup" type="dialog">
			<view class="popup-content">
				<text class="popup-title">养宠贴士</text>
				<text class="popup-tip">{{ currentTip }}</text>
				<button class="popup-button" @click="closeTip">知道了</button>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dog: {},
				currentTip: ''
			}
		},
		mounted() {
			const dogInfo = uni.getStorageSync('dogInfo');
			if (dogInfo) {
				this.dog = dogInfo;
				this.generateTip();
			} else {
				uni.navigateTo({
					url: '/pages/info/info'
				});
			}
		},
		methods: {
			generateTip() {
				const age = parseInt(this.dog.age);
				const breed = this.dog.breed;
				if (age < 1) {
					this.currentTip = `小狗在 ${age} 岁以下需要注射疫苗。`;
				} else if (age >= 1 && age < 3) {
					this.currentTip = `1-3岁的 ${breed} 需要除毛。`;
				} else if (age >= 3) {
					this.currentTip = `${breed} 需要定期进行健康检查，尤其是关节和心脏。`;
				} else {
					this.currentTip = `定期带 ${this.dog.name} 去体检，确保身体健康。`;
				}
			},
			showTip() {
				//this.popup.;
			},
			closeTip() {
				//this.$refs.popup.close();
			}
		}
	}
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px;
		background: url('/static/banner.png') no-repeat center center fixed;
		background-size: cover;
		min-height: 100vh;
	}

	.header {
		text-align: center;
		margin-bottom: 20px;
	}

	.title {
		font-size: 32px;
		font-weight: bold;
		color: #fff;
		text-shadow: 2px 2px 4px #ff69b4;
		font-family: 'Patrick Hand', cursive;
	}

	.card {
		background-color: rgba(255, 255, 255, 0.8);
		border-radius: 15px;
		padding: 20px;
		margin-bottom: 20px;
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
		width: 90%;
		text-align: center;
	}

	.info {
		display: flex;
		justify-content: space-between;
		margin-bottom: 10px;
	}

	.label {
		font-weight: bold;
		color: #555;
		font-family: 'Patrick Hand', cursive;
	}

	.value {
		color: #333;
		font-family: 'Patrick Hand', cursive;
	}

	.dog-image {
		width: 100%;
		height: auto;
		border-radius: 10px;
		margin-top: 20px;
	}

	.button {
		width: 80%;
		padding: 12px;
		background-color: #ff69b4;
		color: #fff;
		border: none;
		border-radius: 5px;
		text-align: center;
		font-size: 18px;
		margin-top: 20px;
		font-family: 'Patrick Hand', cursive;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	}

	.popup-content {
		padding: 20px;
		text-align: center;
	}

	.popup-title {
		font-size: 18px;
		font-weight: bold;
		color: #ff69b4;
		margin-bottom: 10px;
		font-family: 'Patrick Hand', cursive;
	}

	.popup-tip {
		font-size: 16px;
		color: #333;
		margin-bottom: 20px;
		font-family: 'Patrick Hand', cursive;
	}

	.popup-button {
		padding: 10px 20px;
		background-color: #ff69b4;
		color: #fff;
		border: none;
		border-radius: 5px;
		font-family: 'Patrick Hand', cursive;
	}
</style>