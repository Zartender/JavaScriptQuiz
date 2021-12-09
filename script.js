let score = [0, 0];

let Q1 = {
  Q: "_____ require a comma after each new variable.",
  As: ["Arrays", "Objects", "Strings", "Lines"],
  Correct: 2,
}

let Q2 = {
  Q: "A common name for a javascript file is...",
  As: ["style", "index", "README", "script"],
  Correct: 4,
}

let Q3 = {
  Q: "What does API stand far?",
  As: ["Airwaves Perpetrator Imposition", "Alturistic Polygraph Induction", "Applitcation Programming Interface", "Antinodal Plyometric Interference"],
  Correct: 3,
}

let Q4 = {
  Q: "What do you put before a comment in JavaScript?",
  As: ["<!--", "##", "/*", "//"],
  Correct: 4,
}

let Q5 = {
  Q: "Which logical operator compares value and type?",
  As: ["=", "==", "===", "%"],
  Correct: 3,
}

let Q6 = {
  Q: "Which logical operator means 'or'?",
  As: ["@@", "&&", "##", "||"],
  Correct: 4,
}

let Q7 = {
  Q: "Which response means 'An assigned variable with no value'?",
  As: ["null", "undefined", "false", "0"],
  Correct: 1,
}

let Q8 = {
  Q: "An array's first index is assigned which value?",
  As: ["1", "0", "i", "true"],
  Correct: 2,
}

let Q9 = {
  Q: "Which method adds the value as the first element of an arry without removing any elements?",
  As: ["concat", "unshift", "pop", "toUpperCase"],
  Correct: 2,
}

let Q10 = {
  Q: "Which statement creates a loops that continues to run as long as a specified condition is true?",
  As: ["while", "if", "var", "for"],
  Correct: 1,
}






let options = $('.options');
options.on('click', '.option', chooseSelection);

letbutton = $('.input');
// button.on('click', '.input', enterInitials);

//Displays Question and Options from Object entered
function displayQ(question) {
  //Display Question
  const display = document.getElementById("display");
  display.textContent = question.Q;

  //Get Answers
  let first = document.getElementById("Q1");
  let second = document.getElementById("Q2");
  let third = document.getElementById("Q3");
  let fourth = document.getElementById("Q4");

      //Set answers to options
      first.textContent = question.As[0];
      second.textContent = question.As[1];
      third.textContent = question.As[2];
      fourth.textContent = question.As[3];
  }

  const Key = [2,4,3,4,3,4,1,2,2,1];
let qNumber = 0;

function chooseSelection(event){
  let chosen = event.target.value;
  // Keeps track of cor/incorrect answers.
  if(chosen == Key[qNumber - 1]){ 
      score[0]++;
      nextQuestion();
  } else {
      score[1]++;
      nextQuestion();
      timeLeft = timeLeft-5;
  }

}
//injects in Question elements to correct attributes while the clock runs
function selectQ(qNumber){ 
  if (qNumber == 1){
      displayQ(Q1);
  } else if (qNumber == 2){
      displayQ(Q2);
  } else if (qNumber == 3){
      displayQ(Q3);
  } else if (qNumber == 4){
      displayQ(Q4);
  } else if (qNumber == 5){
      displayQ(Q5);
  } else if (qNumber == 6){
      displayQ(Q6);
  } else if (qNumber == 7){
      displayQ(Q7);
  } else if (qNumber == 8){
      displayQ(Q8);
  } else if (qNumber == 9){
      displayQ(Q9);
  } else if (qNumber == 10){
      displayQ(Q10);
  }  
  else {
      clearOptions();
      showScore();
  }
}

function clearOptions(){
  let Q = $('.question');
  Q.empty();
  let O = $('.option')
  O.parent().empty();
  spawnTextbox();
}
//Display score at the end
function showScore(){ 
  let show = $('#scoreboard')
  show.text("You got " + score[0] + " correct and " + score[1] + " wrong.");
}

function nextQuestion (){ 
  qNumber++; 
  selectQ(qNumber);
}

//Save score and initials to local storage
function spawnTextbox(){
  let div = $('.inits');
  let input = $('<input>');
  let message = $('<h3>');
  let button = $('<button>');
  button.addClass('input');
  button.text('Submit');
  
  message.text('Enter your initials!')
  div.append(message);
  div.append(input);
  div.append(button);
  button.on('click', '.input', enterInitials);
}


function enterInitials(){
  let div = $('.inits');
  let input = div.children().eq(1);
  initials = input.value;
  console.log(initials);

  localStorage.setItem("#score", score[0].toString());
  localStorage.setItem("#initials", initials);
}


// Timer Code

let timerEl = document.getElementById('countdown');
let timeLeft = 0;
let timeInterval = 0;

function countdown() {
  timeLeft = 60;

  //
  timeInterval = setInterval(function () {
      timeLeft--;
      timerEl.textContent = timeLeft + " seconds left";
      if (qNumber == 11){
          clearInterval(timeInterval);
      } 
      if (timeLeft == 0) {
          clearInterval(timeInterval);
          if (qNumber !== 11) {
          clearOptions();
          showScore();
          }
      }
  }, 1000);
}

nextQuestion();
countdown();