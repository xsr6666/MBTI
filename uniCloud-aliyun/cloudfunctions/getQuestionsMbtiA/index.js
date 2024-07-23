'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	const collection = db.collection('mbti_questions_93_A');
	const result = await collection.get();
	return result;
};