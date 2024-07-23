'use strict';
const fs = require('fs');
const path = require('path');
const db = uniCloud.database();

exports.main = async (event, context) => {
	const filePath = path.resolve(__dirname, 'questionMbtiA.txt');
	const fileContent = fs.readFileSync(filePath, 'utf-8');
	const questions = JSON.parse(fileContent);

	const collection = db.collection('mbti_questions_93_A');

	for (const question of questions) {
		await collection.add(question);
	}

	return {
		message: 'Data imported successfully'
	};
};