<template>
	<view class="container">
		<image src="/static/bg.png" class="background-image"></image>
		<view class="content">
			<view class="header">
				<text class="title">{{ personalityType }}</text>
				<text class="subtitle">{{ personalityDescription }}</text>
				<image :src="characterImage" class="character-image"></image>
			</view>
			<view class="details">
				<text class="congrats">恭喜您完成测试！！</text>
				<text class="info">测试时间：{{ testTime }}</text>
				<text class="info">测试内容：{{ testContent }}</text>
				<text class="info">你的性格类型是：{{ personalityType }}</text>
				<view class="traits">
					<view class="trait" v-for="trait in traits" :key="trait.code">
						<text class="trait-code">{{ trait.code }}</text>
						<text class="trait-name">{{ trait.name }}</text>
					</view>
				</view>
			</view>
			<view class="chart">
				<echarts ref="radarChart" class="radar-chart"></echarts>
			</view>
			<view class="buttons">
				<button class="button">查看详细报告</button>
				<button class="button">再测一次</button>
				<button class="button">返回首页</button>
				<button class="button">卡片分享</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				personalityType: 'ENFP Female',
				personalityDescription: 'Enfp',
				characterImage: '/static/9d80c84bd526de51ad9d52d26a93c4d.png', // 使用上传的图片
				testTime: '2024年7月18日16:00',
				testContent: 'MBTI性格测试专业版',
				traits: [{
						code: 'E',
						name: '外向(Extraversion)'
					},
					{
						code: 'N',
						name: '直觉(Intuition)'
					},
					{
						code: 'F',
						name: '情感(Feeling)'
					},
					{
						code: 'P',
						name: '感知(Perceiving)'
					}
				],
				radarData: {
					indicators: [{
							name: 'E',
							max: 100
						},
						{
							name: 'N',
							max: 100
						},
						{
							name: 'F',
							max: 100
						},
						{
							name: 'P',
							max: 100
						},
						{
							name: 'T',
							max: 100
						},
						{
							name: 'S',
							max: 100
						},
						{
							name: 'J',
							max: 100
						},
						{
							name: 'I',
							max: 100
						}
					],
					values: [80, 90, 70, 60, 50, 30, 40, 60]
				}
			};
		},
		mounted() {
			this.initChart();
		},
		methods: {
			initChart() {
				const chart = echarts.init(this.$refs.radarChart);
				const option = {
					title: {
						text: ''
					},
					tooltip: {},
					radar: {
						indicator: this.radarData.indicators
					},
					series: [{
						name: 'MBTI',
						type: 'radar',
						data: [{
							value: this.radarData.values,
							name: 'MBTI'
						}]
					}]
				};
				chart.setOption(option);
			}
		}
	};
</script>

<style scoped>
	.container {
		position: relative;
		width: 100%;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #00B3E9;
	}

	.background-image {
		position: absolute;
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: -1;
	}

	.content {
		background-color: white;
		padding: 20px;
		border-radius: 10px;
		width: 90%;
		max-width: 600px;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
		overflow-y: auto;
	}

	.header {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.title {
		font-size: 36px;
		font-weight: bold;
		color: #00B3E9;
		margin-top: 20px;
	}

	.subtitle {
		font-size: 18px;
		color: #00B3E9;
		margin-top: 10px;
	}

	.character-image {
		width: 100px;
		height: 100px;
		margin-top: 20px;
	}

	.details {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin-top: 20px;
		width: 100%;
	}

	.congrats {
		font-size: 18px;
		color: #00B3E9;
		margin-bottom: 10px;
	}

	.info {
		font-size: 16px;
		color: #333333;
		margin-bottom: 10px;
	}

	.traits {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.trait {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-bottom: 5px;
	}

	.trait-code {
		font-size: 16px;
		color: #00B3E9;
		margin-right: 5px;
	}

	.trait-name {
		font-size: 16px;
		color: #333333;
	}

	.chart {
		width: 100%;
		height: 300px;
		margin-top: 20px;
	}

	.radar-chart {
		width: 100%;
		height: 100%;
	}

	.buttons {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		margin-top: 20px;
	}

	.button {
		background-color: #00B3E9;
		color: white;
		border: none;
		border-radius: 25px;
		padding: 10px 20px;
		font-size: 16px;
		text-align: center;
		margin-bottom: 10px;
		width: 100%;
		max-width: 300px;
	}
</style>