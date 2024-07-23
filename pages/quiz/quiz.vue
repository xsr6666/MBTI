<template>
	<view class="container">
		<view v-if="loading" class="loading">加载中...</view>
		<swiper v-else class="swiper-container" :current="currentIndex" duration="300" @change="onSwiperChange">
			<swiper-item v-for="(question, index) in questions" :key="index" class="swiper-item">
				<view class="question-card">
					<text class="question">{{ question.question }}</text>
					<view class="choices">
						<view :class="['choice-button', { selected: answers[index] === question.choice_a.value }]"
							@click="selectAnswer(index, question.choice_a.value)">
							<text class="choice-text">{{ question.choice_a.text }}</text>
						</view>
						<view :class="['choice-button', { selected: answers[index] === question.choice_b.value }]"
							@click="selectAnswer(index, question.choice_b.value)">
							<text class="choice-text">{{ question.choice_b.text }}</text>
						</view>
					</view>
				</view>
			</swiper-item>
		</swiper>
		<view class="counter">{{ answeredCount }}/{{ questions.length }}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				questions: [],
				answers: [],
				loading: true,
				currentIndex: 0
			};
		},
		computed: {
			answeredCount() {
				return this.answers.filter(answer => answer !== null).length;
			}
		},
		onLoad() {
			this.fetchQuestions();
		},
		methods: {
			async fetchQuestions() {
				try {
					const res = await uniCloud.callFunction({
						name: 'getQuestionsMbtiA'
					});
					if (res.result && res.result.data) {
						this.questions = res.result.data;
						this.answers = new Array(this.questions.length).fill(null); // 初始化answers数组
					}
				} catch (e) {
					console.error(e);
				} finally {
					this.loading = false;
				}
			},
			selectAnswer(index, value) {
				this.$set(this.answers, index, value);
				if (index === this.questions.length - 1) {
					this.submitQuiz();
				} else if (this.currentIndex < this.questions.length - 1) {
					this.currentIndex++;
				}
			},
			submitQuiz() {
				uni.setStorageSync('answers', this.answers);
				uni.navigateTo({
					url: '/pages/quiz/result'
				});
			},
			onSwiperChange(event) {
				this.currentIndex = event.detail.current;
			}
		}
	}
</script>

<style>
	html,
	body {
		height: 100%;
		margin: 0;
		overflow: hidden;
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		/* 确保容器高度为视口高度 */
		background: #f5f5f5;
		padding: 20px;
		box-sizing: border-box;
		background-image: url('/static/11.png');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		/* 确保背景图不重复 */
		position: relative;
		/* 确保子元素能够使用绝对定位 */
	}

	.loading {
		font-size: 18px;
		color: #666;
	}

	.swiper-container {
		width: 100%;
		flex: 1;
		/* 确保swiper占据剩余空间 */
	}

	.swiper-item {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.question-card {
		background: #fff;
		padding: 40px;
		border-radius: 10px;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
		width: 80%;
		max-width: 600px;
		text-align: center;
		margin-bottom: 30px;
	}

	.question {
		font-size: 18px;
		font-weight: bold;
		color: #656565;
		margin-bottom: 30px;
	}

	.choices {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.choice-button {
		background: #55aa7f;
		color: #fff;
		padding: 8px 40px;
		border-radius: 25px;
		margin: 8px 0px;
		text-align: center;
		cursor: pointer;
		transition: background 0.3s ease;
	}

	.choice-button.selected {
		background: #ff9800;
	}

	.choice-text {
		font-size: 15px;
	}

	.counter {
		position: absolute;
		top: 10px;
		right: 10px;
		background: rgba(222, 222, 222, 0.6);
		color: white;
		padding: 5px 10px;
		border-radius: 5px;
		font-size: 14px;
	}
</style>