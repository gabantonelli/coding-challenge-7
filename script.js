// constructor function to create new questions
var Question = function(question, arrAnswers, correctAnswer) {
  this.question = question;
  this.answers = arrAnswers;
  this.correct = correctAnswer;
};

// add method to display the question
Question.prototype = {
  askQuestion: function() {
    console.log(this.question);
  }
};

// create an empty array for storing questions
var questions = [];

// create a few questions (Question instances)
questions[0] = new Question("2+2", ["4", "1", "3"], 0);
questions[1] = new Question("8-2", ["4", "6", "2"], 1);
questions[2] = new Question("2+3", ["8", "9", "5"], 1);

// pick a random number of question
var randomQuestion = Math.floor(Math.random() * 3);

questions[randomQuestion].askQuestion();
