// store options, questions, and answers in separate arrays, 
var questions = [
    {
        question:"What is JavaScript?",
        choices:["programming language", "internet browser","website","social media platform"],
        answer:0
    },
    {
        question:"What is JavaScript2?",
        choices:["programming language", "internet browser","website","social media platform"],
        answer:0
    },
    {
        question:"What is JavaScript3?",
        choices:["programming language", "internet browser","website","social media platform"],
        answer:0
    },
    {
        question:"What is JavaScript?",
        choices:["programming language", "internet browser","website","social media platform"],
        answer:0
    },
    {
        question:"What is node.js?",
        choices:["an object", "a dependency","type of script file","a JavaScript runtime"],
        answer:3
    },
    {
        question:"What is a for loop?",
        choices:["", "internet browser","website","social media platform"],
        answer:0
    },
    {
        question:"What is an array?",
        choices:["a function", "internet browser","website","social media platform"],
        answer:0
    },
    {
        question:"What is the best way to iterate through an array?",
        choices:["programming language", "internet browser","website","social media platform"],
        answer:0
    },
    {
        question:"What is a local variable?",
        choices:["programming language", "internet browser","website","social media platform"],
        answer:0
    },
    {
        question:"What is a global variable?",
        choices:["programming language", "internet browser","website","social media platform"],
        answer:0
    },
    {
        question:"What is a boolean?",
        choices:["programming language", "internet browser","website","social media platform"],
        answer:0
    },
    {
        question:"What is a String?",
        choices:["programming language", "internet browser","website","social media platform"],
        answer:0
    },
    {
        question:"What does the typeOf operator do?",
        choices:["changes the variable to th", "internet browser","website","social media platform"],
        answer:0
    },
    {
        question:"What is an arrow function?",
        choices:["programming language", "internet browser","website","social media platform"],
        answer:0
    },
    {
        question:"What is a parameter?",
        choices:["programming language", "internet browser","website","social media platform"],
        answer:0
    },
    {
        question:"What is a method?",
        choices:["programming language", "internet browser","website","social media platform"],
        answer:0
    },
    {
        question:"What is a class?",
        choices:["programming language", "internet browser","website","social media platform"],
        answer:0
    },
    {
        question:"What is a constructor?",
        choices:["programming language", "internet browser","website","social media platform"],
        answer:0
    },
    {
        question:"What is a promise?",
        choices:["programming language", "internet browser","website","social media platform"],
        answer:0
    },
    {
        question:"What is a callback?",
        choices:["programming language", "internet browser","website","social media platform"],
        answer:0
    },
    {
        question:"What is JavaScript7?",
        choices:["programming language", "internet browser","website","social media platform"],
        answer:0
    },
    {
        question:"What is JavaScript5?",
        choices:["programming language", "internet browser","website","social media platform"],
        answer:0
    },
    {
        question:"What is JavaScript6?",
        choices:["programming language", "internet browser","website","social media platform"],
        answer:0
    },
    {
        question:"What is JavaScript5?",
        choices:["programming language", "internet browser","website","social media platform"],
        answer:0
    },
    {
        question:"What is JavaScript6?",
        choices:["programming language", "internet browser","website","social media platform"],
        answer:0
    },
    {
        question:"What is JavaScript6?",
        choices:["programming language", "internet browser","website","social media platform"],
        answer:0
    },
    {
        question:"What is JavaScript5?",
        choices:["programming language", "internet browser","website","social media platform"],
        answer:0
    },
    {
        question:"What is JavaScript?6",
        choices:["programming language", "internet browser","website","social media platform"],
        answer:0
    },
    {
        question:"What is JavaScript?5",
        choices:["programming language", "internet browser","website","social media platform"],
        answer:0
    },
    {
        question:"What is JavaScript?6",
        choices:["programming language", "internet browser","website","social media platform"],
        answer:0
    }
];

startButton.addEventListener("click", startGame);

// Calls init() so that it fires when page opened
init();

// Bonus: Add reset button
var resetButton = document.querySelector(".reset-button");

function resetGame() {
  // Resets win and loss counts
  winCounter = 0;
  loseCounter = 0;
  // Renders win and loss counts and sets them into client storage
  setWins()
  setLosses()
}
// Attaches event listener to button
resetButton.addEventListener("click", resetGame);

/*var score = 0;
let timer = 90;
var playerName;
var numberOfQuestions = 30;
var current = 0;
*/



/*function init() {

}
function displayQuestions() {
    //show questions
    var currentQuestion = gameQuestionEl.innerHTML = questions[currentQuestion].question;
    console.log("Displayed question: ", displayedQuestion);
    choiceA.innerHTML = questions[currentQuestion].choices[0];
    choiceB.innerHTML = questions[currentQuestion].choices[1];
    choiceC.innerHTML = questions[currentQuestion].choices[2];
    choiceD.innerHTML = questions[currentQuestion].choices[3];

};
function answer() {
    currentQuestion += 1;
    setTimeout(function() {
        gameAnswerEl.HTML = "";

    }, 500)
    if(questions[currentQuestion]) {
        displayQuestions();
    } else {
        clearInterval(gameTimer);
        gameQuestionEl.innerHTML = "";
        gameQuestionEl.innerHTML = "";
        choiceA.innerHTML = "";
        choiceB.innerHTML = "";
        choiceC.innerHTML = "";
        choiceD.innerHTML = "";
    }
}

*/
//let timerText = document.getElementById("timer");
//timerText.innerText = timer;

//let start = document.getElementById("start");
//start.addEventListener("click", startQuiz);


/*let answerButtons = document.getElementsByClassName("quiz-button");
for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].addEventListener("click", nextQuestion)

}
function reduceTimer() {
    timer--;
    timerText.innerText = timer;
}
function startQuiz() {
    setInterval(reduceTimer, 1000);
    takeQuiz();
    //
    // return "Your score is + score"
}


function takeQuiz() {
    let quizDiv = document.getElementById("quiz");
    quizDiv.hidden = false;
    let question = document.getElementById("question");
    question.innerText = questions[0];
    for (let i = 0; i < 4; i++) {
        quizDiv.children[1].children[i].innerText = questions[i];
    }
}

function nextQuestion() {
    alert();

    // question (insert next question here)
    // answers (show new answers)
}

function calculateScore() {
    return score;
}

// function answerQuestion() {
//     for (var i = 0; i < numberOfQuestions; i++) {
//         if () {
//             score++;
//         }
//     }
// }


// button to start and buttons to submit and go to whatever screen
*/