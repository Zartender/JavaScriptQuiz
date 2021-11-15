// queryselector inputs time into p with class timer

// let questionRemaining = 0;
// let myQuestions = document.querySelector("#myQuestions");
// objects related to time
// let timeFinished = document.querySelector("#timeFinished");
// let contender = document.querySelector("#contender");
// var win = document.querySelector(".win");
// var lose = document.querySelector(".lose");

// start button
var beginButton = document.querySelector(".begin-quiz");
var multipleChoice = document.querySelector(".multi-choice");
var chosenWord = "";
var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var stopWatch;

// win or lose 
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
// start button to begin quiz

var stopWatch = document.querySelector("stop-watch");


const answerOne = document.querySelector("oneAnswer");
const answerTwo = document.querySelector("twoAnswer");
const answerThree = document.querySelector("#threeAnswer");

function beginQuiz() {
    console.log("Begin Quiz");
    timerAllowance = 45;
    startTimer();
    
}

// on start
beginButton.addEventListener("click", beginQuiz);


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
      timerAllowance--;
      stopWatch.textContent = timerAllowance;
      if (stopWatch >= 0) {
        // Tests if win condition is met
        if (isWin && timerAllowance > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
      }
      // Tests if time has run out
      if (stopWatch === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  }