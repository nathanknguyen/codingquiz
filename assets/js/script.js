// Setting variables for everything inside html
var header = document.querySelector("heading");
var startPrompt = document.querySelector("article");
var startButton = document.querySelector("#start");
var questionArea = document.querySelector("main");
var questionEL = document.querySelector("#question");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");
var timerElement = document.querySelector("#time");
var correctCheck = document.querySelector("#correctCheck");
var option = document.querySelector("#optionButtons");
var highScoreBtn = document.querySelector("#highScoreBtn");
var highScoreEL = document.querySelector("#highScoreScoreboard");
var inputHighScoreHere = document.querySelector("#inputHighScoreHere");

// set variables to keep track of
var currentQuestion;
var currentQuestionIndex = 0;
var questionCount = 0;
var timerCount;
var choice;
var userChoice;
var userInitials;

// set and start timer, hide elements on page to start the quiz
function startTest() {
    timerCount = 60;
    startTimer();
    startPrompt.style.display = "none";
    questionArea.style.display = "block";
    correctCheck.style.display = "none";
    startButton.style.display = "none";
    highScoreEL.style.display = "none";
   nextQuestion ();
  }
  