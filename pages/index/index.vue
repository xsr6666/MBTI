<template>
	<view class="container">
		<view class="header">
			<text class="title">小狗来了</text>
		</view>
		<view class="main-banner">
			<image src="/static/banner.png" class="banner-image"></image>
		</view>
		<view class="info-card">
			<view class="info-content">
				<text class="info-title">365天重疾保障</text>
				<text class="info-subtitle">包终生疫苗 终生售后咨询</text>
			</view>
		</view>
		<view class="options">
			<view class="option">
				<view class="option-content">
					<image src="/static/choose-dog.png" class="option-icon"></image>
					<text class="option-title">选狗</text>
					<text class="option-subtitle">365天重疾保障</text>
				</view>
			</view>
			<view class="option">
				<view class="option-content">
					<image src="/static/dog-house.png" class="option-icon"></image>
					<text class="option-title">狗舍</text>
					<text class="option-subtitle">全国共19家线下狗舍</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		}
	}
</script>

<style scoped>
	.container {
		padding: 20px;
		background: linear-gradient(135deg, #FFB6C1 0%, #FFC0CB 100%);
		min-height: 100vh;
	}

	.header {
		text-align: center;
		margin-bottom: 20px;
	}

	.title {
		font-size: 28px;
		font-weight: bold;
		color: #fff;
	}

	.main-banner {
		display: flex;
		justify-content: center;
		margin-bottom: 20px;
	}

	.banner-image {
		width: 100%;
		border-radius: 20px;
	}

	.info-card {
		background-color: #fff;
		border-radius: 20px;
		padding: 20px;
		text-align: center;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		margin-bottom: 20px;
	}

	.info-content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.info-title {
		font-size: 22px;
		font-weight: bold;
		color: #333;
		margin-bottom: 5px;
	}

	.info-subtitle {
		font-size: 16px;
		color: #666;
	}

	.options {
		display: flex;
		justify-content: space-around;
	}

	.option {
		background-color: #fff;
		border-radius: 20px;
		padding: 20px;
		text-align: center;
		width: 45%;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}

	.option-content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.option-icon {
		width: 50px;
		height: 50px;
		margin-bottom: 10px;
	}

	.option-title {
		font-size: 20px;
		font-weight: bold;
		color: #333;
		margin-bottom: 5px;
	}

	.option-subtitle {
		font-size: 16px;
		color: #666;
		text-align: center;
		white-space: nowrap;
	}
</style>