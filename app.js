const generateQuestionPaper = require('./utils/questionPaperGenerator');
const questions = require('./data/questions');

const totalMarks = 100;
const difficultyDistribution = [
    { difficulty: 'Easy', percentage: 20 },
    { difficulty: 'Medium', percentage: 50 },
    { difficulty: 'Hard', percentage: 30 },
];

const questionPaper = generateQuestionPaper(totalMarks, difficultyDistribution, questions);

console.log("Generated Question Paper:", questionPaper);
