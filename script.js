//pulling variables from the html
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
var currentQuestion;
var currentQuestionIndex = 0;
var questionCount = 0;
var timerCount;
var choice;
var userChoice;
var userInitials;
//sets the timer, and makes everything but the question area and highscore button go away
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
//checks if the answer is right or wrong
function checkAnswer () {
 if (choiceClick.innerText !== questions[currentQuestionIndex].answer.innerText) {
   timerCount -= 15;
   timerElement.textContent = timerCount;
   console.log ("incorrect");
   correctCheck.textContent = "Incorrect";
   correctCheck.style.display = "block";
   currentQuestionIndex++;
   nextQuestion();
   //reflect if q was wrong
 } else {
 console.log ("correct");
 correctCheck.textContent = "correct";
 correctCheck.style.display = "block";
    currentQuestionIndex++;
   nextQuestion();
 }
}
//sets the next question
function nextQuestion() {
  showNextQuestion(questions[currentQuestionIndex]); 
}
//checks to see if the game is still running or not
function choiceClick(clickedChoice) {
   var userChoice = clickedChoice.innerText;
   questionCount++;
   if ( questionCount < 5){
    checkAnswer(userChoice);
   } else{
     winGame();
   }
}
//allows user to input their initials and it'll put it next to their time
function winGame() {
  clearInterval(timer);
  userInitials = window.prompt("Enter your initials");
  inputHighScoreHere.innerText = "1. " + userInitials +" time left:" + timerCount
  showHighScores();
}
//shows the questions
function showNextQuestion(questions) {
  questionEL.innerText = questions.title;
  option1.innerText = (questions.choices[0])
  option2.innerText = (questions.choices[1])
  option3.innerText = (questions.choices[2])
  option4.innerText = (questions.choices[3])
}
//runs the timer and checks if the game is lost
function startTimer() {
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = "Time: " + timerCount;
    if (timerCount < 0){
      clearInterval(timer);
      alert ("You lost")
      timerElement.textContent = "Time: 0";
      showHighScores();
    }
  }, 1000);
}
//shows the highscore page
function showHighScores () {
  clearInterval(timer);
  startPrompt.style.display = "none";
  questionArea.style.display = "none";
  correctCheck.style.display = "none";
  startButton.style.display = "block";
  highScoreEL.style.display = "block";
}
highScoreBtn.addEventListener("click", showHighScores);
startButton.addEventListener("click", startTest);
choice.addEventListener("click", choiceClick);


// var startButton = document.querySelector('#start');
// var buttonA = document.querySelector('#A')
// var buttonB = document.querySelector('#B')
// var buttonC = document.querySelector('#C')
// var buttonD = document.querySelector('#D')
// var timerCount;
// var choice;
// var question = document.querySelector('#question')
// function startTest() {
//     timerCount = 60;
//     startTimer();
//     question1();
// }

// function question1(clickChoice) {
//     question.innerText = 'What is JavaScript?';
//     buttonA.innerText = 'programming language';
//     buttonB.innerText = 'internet browser';
//     buttonC.innerText = 'website';
//     buttonD.innerText = 'social media platform';
//     if () {

//     }

// }

// function question2() {
//     question.innerText = 'What is JavaScript?';
//     buttonA.innerText = 'programming language';
//     buttonB.innerText = 'internet browser';
//     buttonC.innerText = 'website';
//     buttonD.innerText = 'social media platform'
// }

// function question3() {
//     question.innerText = 'What is JavaScript?';
//     buttonA.innerText = 'programming language';
//     buttonB.innerText = 'internet browser';
//     buttonC.innerText = 'website';
//     buttonD.innerText = 'social media platform'
// }

// function question4() {
//     question.innerText = 'What is JavaScript?';
//     buttonA.innerText = 'programming language';
//     buttonB.innerText = 'internet browser';
//     buttonC.innerText = 'website';
//     buttonD.innerText = 'social media platform'
// }

// function question5() {
//     question.innerText = 'What is JavaScript?';
//     buttonA.innerText = 'programming language';
//     buttonB.innerText = 'internet browser';
//     buttonC.innerText = 'website';
//     buttonD.innerText = 'social media platform'
// }

// function question1() {
//     question.innerText = 'What is JavaScript?';
//     buttonA.innerText = 'programming language';
//     buttonB.innerText = 'internet browser';
//     buttonC.innerText = 'website';
//     buttonD.innerText = 'social media platform'
// }






// function startTimer() {
//     timer = setInterval(function () {
//       timerCount--;
//       timerElement.textContent = "Time: " + timerCount;
//       if (timerCount < 0){
//         clearInterval(timer);
//         alert ("You lost")
//         timerElement.textContent = "Time: 0";
//        // showHighScores();
//       }
//     }, 1000);
//   }
// // store options, questions, and answers in separate arrays, 
// var questions = [
//     {
//         question:"hat isW JavaScript?",
//         choices:["programming language", "internet browser","website","social media platform"],
//         answer:0
//     },
//     {
//         question:"What is JavaScript2?",
//         choices:["programming language", "internet browser","website","social media platform"],
//         answer:0
//     },
//     {
//         question:"What is JavaScript3?",
//         choices:["programming language", "internet browser","website","social media platform"],
//         answer:0
//     },
//     {
//         question:"What is JavaScript?",
//         choices:["programming language", "internet browser","website","social media platform"],
//         answer:0
//     },
//     {
//         question:"What is node.js?",
//         choices:["an object", "a dependency","type of script file","a JavaScript runtime"],
//         answer:3
//     },
//     {
//         question:"What is a for loop?",
//         choices:["", "internet browser","website","social media platform"],
//         answer:0
//     },
//     {
//         question:"What is an array?",
//         choices:["a function", "internet browser","website","social media platform"],
//         answer:0
//     },
//     {
//         question:"What is the best way to iterate through an array?",
//         choices:["programming language", "internet browser","website","social media platform"],
//         answer:0
//     },
//     {
//         question:"What is a local variable?",
//         choices:["programming language", "internet browser","website","social media platform"],
//         answer:0
//     },
//     {
//         question:"What is a global variable?",
//         choices:["programming language", "internet browser","website","social media platform"],
//         answer:0
//     },
//     {
//         question:"What is a boolean?",
//         choices:["programming language", "internet browser","website","social media platform"],
//         answer:0
//     },
//     {
//         question:"What is a String?",
//         choices:["programming language", "internet browser","website","social media platform"],
//         answer:0
//     },
//     {
//         question:"What does the typeOf operator do?",
//         choices:["changes the variable to th", "internet browser","website","social media platform"],
//         answer:0
//     },
//     {
//         question:"What is an arrow function?",
//         choices:["programming language", "internet browser","website","social media platform"],
//         answer:0
//     },
//     {
//         question:"What is a parameter?",
//         choices:["programming language", "internet browser","website","social media platform"],
//         answer:0
//     },
//     {
//         question:"What is a method?",
//         choices:["programming language", "internet browser","website","social media platform"],
//         answer:0
//     },
//     {
//         question:"What is a class?",
//         choices:["programming language", "internet browser","website","social media platform"],
//         answer:0
//     },
//     {
//         question:"What is a constructor?",
//         choices:["programming language", "internet browser","website","social media platform"],
//         answer:0
//     },
//     {
//         question:"What is a promise?",
//         choices:["programming language", "internet browser","website","social media platform"],
//         answer:0
//     },
//     {
//         question:"What is a callback?",
//         choices:["programming language", "internet browser","website","social media platform"],
//         answer:0
//     },
//     {
//         question:"What is JavaScript7?",
//         choices:["programming language", "internet browser","website","social media platform"],
//         answer:0
//     },
//     {
//         question:"What is JavaScript5?",
//         choices:["programming language", "internet browser","website","social media platform"],
//         answer:0
//     },
//     {
//         question:"What is JavaScript6?",
//         choices:["programming language", "internet browser","website","social media platform"],
//         answer:0
//     },
//     {
//         question:"What is JavaScript5?",
//         choices:["programming language", "internet browser","website","social media platform"],
//         answer:0
//     },
//     {
//         question:"What is JavaScript6?",
//         choices:["programming language", "internet browser","website","social media platform"],
//         answer:0
//     },
//     {
//         question:"What is JavaScript6?",
//         choices:["programming language", "internet browser","website","social media platform"],
//         answer:0
//     },
//     {
//         question:"What is JavaScript5?",
//         choices:["programming language", "internet browser","website","social media platform"],
//         answer:0
//     },
//     {
//         question:"What is JavaScript?6",
//         choices:["programming language", "internet browser","website","social media platform"],
//         answer:0
//     },
//     {
//         question:"What is JavaScript?5",
//         choices:["programming language", "internet browser","website","social media platform"],
//         answer:0
//     },
//     {
//         question:"What is JavaScript?6",
//         choices:["programming language", "internet browser","website","social media platform"],
//         answer:0
//     }
// ];

// var score = 0;
// var timer;
// var timerCount;

// function displayQuestions() {
//     //show questions
//     var currentQuestion = gameQuestionEl.innerHTML = questions[currentQuestion].question;
//     console.log("Displayed question: ", displayedQuestion);
//     choiceA.innerHTML = questions[currentQuestion].choices[0];
//     choiceB.innerHTML = questions[currentQuestion].choices[1];
//     choiceC.innerHTML = questions[currentQuestion].choices[2];
//     choiceD.innerHTML = questions[currentQuestion].choices[3];

// };

// startButton.addEventListener("click", startGame);

// // Calls init() so that it fires when page opened
// init();

// // Bonus: Add reset button
// var resetButton = document.querySelector(".reset-button");

// function resetGame() {
//   // Resets win and loss counts
//   winCounter = 0;
//   loseCounter = 0;
//   // Renders win and loss counts and sets them into client storage
//   setWins()
//   setLosses()
// }
// // Attaches event listener to button
// resetButton.addEventListener("click", resetGame);

// /*var score = 0;
// let timer = 90;
// var playerName;
// var numberOfQuestions = 30;
// var current = 0;
// */



// /*function init() {

// }
// function displayQuestions() {
//     //show questions
//     var currentQuestion = gameQuestionEl.innerHTML = questions[currentQuestion].question;
//     console.log("Displayed question: ", displayedQuestion);
//     choiceA.innerHTML = questions[currentQuestion].choices[0];
//     choiceB.innerHTML = questions[currentQuestion].choices[1];
//     choiceC.innerHTML = questions[currentQuestion].choices[2];
//     choiceD.innerHTML = questions[currentQuestion].choices[3];

// };
// function answer() {
//     currentQuestion += 1;
//     setTimeout(function() {
//         gameAnswerEl.HTML = "";

//     }, 500)
//     if(questions[currentQuestion]) {
//         displayQuestions();
//     } else {
//         clearInterval(gameTimer);
//         gameQuestionEl.innerHTML = "";
//         gameQuestionEl.innerHTML = "";
//         choiceA.innerHTML = "";
//         choiceB.innerHTML = "";
//         choiceC.innerHTML = "";
//         choiceD.innerHTML = "";
//     }
// }

// */
// //let timerText = document.getElementById("timer");
// //timerText.innerText = timer;

// //let start = document.getElementById("start");
// //start.addEventListener("click", startQuiz);


// /*let answerButtons = document.getElementsByClassName("quiz-button");
// for (let i = 0; i < answerButtons.length; i++) {
//     answerButtons[i].addEventListener("click", nextQuestion)

// }
// function reduceTimer() {
//     timer--;
//     timerText.innerText = timer;
// }
// function startQuiz() {
//     setInterval(reduceTimer, 1000);
//     takeQuiz();
//     //
//     // return "Your score is + score"
// }


// function takeQuiz() {
//     let quizDiv = document.getElementById("quiz");
//     quizDiv.hidden = false;
//     let question = document.getElementById("question");
//     question.innerText = questions[0];
//     for (let i = 0; i < 4; i++) {
//         quizDiv.children[1].children[i].innerText = questions[i];
//     }
// }

// function nextQuestion() {
//     alert();

//     // question (insert next question here)
//     // answers (show new answers)
// }

// function calculateScore() {
//     return score;
// }

// // function answerQuestion() {
// //     for (var i = 0; i < numberOfQuestions; i++) {
// //         if () {
// //             score++;
// //         }
// //     }
// // }


// // button to start and buttons to submit and go to whatever screen
// */

// choice.addEventListener('click', choiceClick);