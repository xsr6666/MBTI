<template>
	<view class="container">
		<text>您的MBTI性格类型是：{{ result }}</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				result: ''
			};
		},
		onLoad() {
			const answers = uni.getStorageSync('answers');
			this.calculateResult(answers);
		},
		methods: {
			calculateResult(answers) {
				const typeCounts = {
					E: 0,
					I: 0,
					S: 0,
					N: 0,
					T: 0,
					F: 0,
					J: 0,
					P: 0
				};
				answers.forEach(answer => {
					typeCounts[answer]++;
				});
				const result =
					`${typeCounts.E >= typeCounts.I ? 'E' : 'I'}${typeCounts.S >= typeCounts.N ? 'S' : 'N'}${typeCounts.T >= typeCounts.F ? 'T' : 'F'}${typeCounts.J >= typeCounts.P ? 'J' : 'P'}`;
				this.result = result;
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
		font-size: 20px;
	}
</style>