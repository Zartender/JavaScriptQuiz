// queryselector inputs time into p with class timer

let questionRemaining = 0;
let myQuestions = document.querySelector("#myQuestions");
// objects related to time
let timeFinished = document.querySelector("#timeFinished");
let contender = document.querySelector("#contender");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector("p.timer-count");
;

var chosenWord = "";
var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;
// start button to begin quiz
const startButton = document.querySelector("#begin");

const answerOne = document.querySelector("oneAnswer");
const answerTwo = document.querySelector("twoAnswer");
const answerThree = document.querySelector("#threeAnswer");

function startQuiz() {
    console.log("Begin Quiz");
    timerCount = 85;
    startTimer();
    
}

// on start
startButton.addEventListener("click", startQuiz);


// array of my questions, possible answers, and correct answer.
const questionaires = [
    {
                    question: "Who invented JavaScript?",
                    answers: {
                        a: "Mark Twain",
                        b: "Joseph Stihl",
                        c: "Brendan Eich"
                    },
                    correctAnswer: "c"
                },
                {
                    question: "What is JavaScript best utilized for?",
                    answers: {
                        a: "Making pages dynamic",
                        b: "Building forts",
                        c: "Creating paper airplanes"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Which tool does Javascript pair like 'lamb and tuna fish' with?",
                    answers: {
                        a: "Angular",
                        b: "jQuery",
                        c: "RequireJS",
                        d: "ESLint"
                    },
                    correctAnswer: "b"
                }

];

// timer function trouble
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  }