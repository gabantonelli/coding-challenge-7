(function() {
  // constructor function to create new questions
  var Question = function(question, arrAnswers, correctAnswer) {
    this.question = question;
    this.answers = arrAnswers;
    this.correct = correctAnswer;
  };

  // declare a variable to host user's answer
  var usersAnswer;

  // add method to display the question
  Question.prototype = {
    askQuestion: function() {
      // log the question
      console.log(this.question);
      // log all the possible answers
      for (var i = 0; i < this.answers.length; i++) {
        console.log("[" + i + "]" + " " + this.answers[i]);
      }
      // prompt the user for the answer
      usersAnswer = prompt(
        "Please select the correct answer (just type the number)"
      );
    },
    checkAnswer: function() {
      if (usersAnswer == this.correct) {
        console.log("Correct!");
      } else {
        console.log("Please try again, you can do better");
      }
    }
  };

  // create an empty array for storing questions
  var questions = [];

  // create a few questions (Question instances)
  questions[0] = new Question(
    "How is Javascript?",
    ["Hard", "Boring", "Cool"],
    2
  );
  questions[1] = new Question(
    "How useful is this quiz?",
    [
      "Not useful at all",
      "Useful only for the programmer to practice",
      "Very useful"
    ],
    1
  );
  questions[2] = new Question(
    "What is the best browser?",
    ["MS Edge", "Firefox", "Chrome"],
    2
  );

  // pick a random number of question
  var randomQuestion = Math.floor(Math.random() * 3);

  questions[randomQuestion].askQuestion();
  questions[randomQuestion].checkAnswer();
})();
