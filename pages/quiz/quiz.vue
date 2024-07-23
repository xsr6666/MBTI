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
		<view v-if="allQuestionsAnswered" class="congratulations-container">
			<view class="congratulations">恭喜你</view>
			<button @click="submitQuiz" class="submit-button">提交</button>
		</view>
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
			allQuestionsAnswered() {
				return this.answers.length === this.questions.length;
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
					}
				} catch (e) {
					console.error(e);
				} finally {
					this.loading = false;
				}
			},
			selectAnswer(index, value) {
				this.$set(this.answers, index, value);
				if (this.currentIndex < this.questions.length) {
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
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 80vh;
		background: #f5f5f5;
		padding: 20px;
		background-image: url('/static/11.png');
		background-size: cover;
		background-position: center;
	}

	.loading {
		font-size: 18px;
		color: #666;
	}

	.swiper-container {
		width: 100%;
		height: 80%;
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

	.congratulations-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		flex: 1;
		width: 100%;
	}

	.congratulations {
		font-size: 18px;
		font-weight: bold;
		color: #656565;
		margin-bottom: 30px;
		background: #fff;
		padding: 40px;
		border-radius: 10px;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
		width: 80%;
		max-width: 600px;
		text-align: center;
		margin-bottom: 30px;
	}

	.submit-button {
		background: #ffffff;
		color: #00aa7f;
		padding: 8px 40px;
		border-radius: 25px;
		margin: 8px 0px;
		text-align: center;
		cursor: pointer;
		transition: background 0.3s;
		margin-top: 20px;
		font-weight: bold;
	}

	.submit-button:hover {
		background: #4c4c4c;
		color: white;
	}
</style>