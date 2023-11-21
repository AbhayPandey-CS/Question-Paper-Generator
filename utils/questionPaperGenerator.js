
const Question = require('../models/questionModel');

function generateQuestionPaper(totalMarks, difficultyDistribution, questions) {
    const questionPaper = [];

    difficultyDistribution.forEach(({ difficulty, percentage }) => {
        const questionsOfType = questions.filter(q => q.difficulty === difficulty);
        const numQuestions = Math.floor((percentage / 100) * totalMarks / averageMarks(questionsOfType));

        questionPaper.push(...selectRandomQuestions(questionsOfType, numQuestions));
    });

    return questionPaper;
}

function averageMarks(questions) {
    const totalMarks = questions.reduce((sum, q) => sum + q.marks, 0);
    return totalMarks / questions.length || 1;
}

function selectRandomQuestions(questions, num) {
    const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    return shuffledQuestions.slice(0, num);
}

module.exports = generateQuestionPaper;
