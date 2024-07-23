<template>
	<view class="container">
		<view class="header">
			<text class="title">小狗身份证注册</text>
		</view>
		<swiper class="swiper" autoplay="true" interval="3000" indicator-dots="true">
			<swiper-item>
				<image class="swiper-image" src="/static/choose-dog.png" />
			</swiper-item>
			<swiper-item>
				<image class="swiper-image" src="/static/dog-house.png" />
			</swiper-item>
			<swiper-item>
				<image class="swiper-image" src="/static/logo.png" />
			</swiper-item>
		</swiper>
		<view class="form">
			<input class="input" placeholder="输入小狗的名字" v-model="dog.name" />
			<input class="input" placeholder="输入小狗的种类" v-model="dog.breed" />
			<input class="input" placeholder="输入小狗的年龄（年）" v-model="dog.age" type="number" />
			<input class="input" placeholder="输入小狗的身高（cm）" v-model="dog.height" type="number" />
			<input class="input" placeholder="输入小狗的体重（kg）" v-model="dog.weight" type="number" />
			<button class="button" @click="registerDog">提交</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dog: {
					name: '',
					breed: '',
					age: '',
					height: '',
					weight: ''
				}
			}
		},
		methods: {
			registerDog() {
				if (!this.dog.name || !this.dog.breed || !this.dog.age || !this.dog.height || !this.dog.weight) {
					uni.showToast({
						title: '请填写所有信息',
						icon: 'none'
					});
					return;
				}
				uni.setStorageSync('dogInfo', this.dog);
				uni.navigateTo({
					url: '/pages/home/home'
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
		justify-content: center;
		padding: 20px;
		background: url('/static/R.jpg') no-repeat center center fixed;
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

	.swiper {
		width: 100%;
		height: 200px;
		margin-bottom: 20px;
	}

	.swiper-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 15px;
	}

	.form {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: rgba(255, 255, 255, 0.8);
		padding: 20px;
		border-radius: 15px;
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
	}

	.input {
		width: 80%;
		padding: 10px;
		margin: 10px 0;
		border: 1px solid #ccc;
		border-radius: 5px;
		font-family: 'Patrick Hand', cursive;
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
</style>