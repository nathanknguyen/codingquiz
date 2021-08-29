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

  // evaluate if question is right
function checkAnswer () {
    if (choiceClick.innerText !== questions[currentQuestionIndex].answer.innerText) {
        timerCount -= 15;
        timerElement.textContent = timerCount;
        console.log ("incorrect");
        correctCheck.textContent = "Incorrect";
        correctCheck.style.display = "block";
        currentQuestionIndex++;
        nextQuestion();
    } else {
        console.log ("correct");
        correctCheck.textContent = "correct";
        correctCheck.style.display = "block";
        currentQuestionIndex++;
        nextQuestion();
    }
}

// Function to move on to the next question
function nextQuestion() {
    showNextQuestion(questions[currentQuestionIndex]); 
}
  
// function to prompt user to enter inititals and display the time they had left on the quiz
function winGame() {
    clearInterval(timer);
    userInitials = window.prompt("Enter your initials");
    inputHighScoreHere.innerText = "1. " + userInitials +" time left:" + timerCount;
    showHighScores();
}

  // Function to display questions by changing text to the questions
function showNextQuestion(questions) {
    questionEL.innerText = questions.title;
    option1.innerText = (questions.choices[0]);
    option2.innerText = (questions.choices[1]);
    option3.innerText = (questions.choices[2]);
    option4.innerText = (questions.choices[3]);
}

// start timer and check if time is up
function startTimer() {
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = "Time: " + timerCount;
        if (timerCount < 0) {
            clearInterval(timer);
            alert ("Game over...");
            timerElement.textContent = "Time: 0";
            showHighScores();
        }
    }, 1000);
}

// Function for high score page
function showHighScores () {
    clearInterval(timer);
    startPrompt.style.display = "none";
    questionArea.style.display = "none";
    correctCheck.style.display = "none";
    startButton.style.display = "block";
    highScoreEL.style.display = "block";
}

// function to record user choice
function choiceClick(clickedChoice) {
    var userChoice = clickedChoice.innerText;
    questionCount++;
    if ( questionCount < 5){
     checkAnswer(userChoice);
    } else{
      winGame();
    }
 }

// Event listeners for all buttons to record what the user clicks
highScoreBtn.addEventListener("click", showHighScores);
startButton.addEventListener("click", startTest);
choice.addEventListener("click", choiceClick);