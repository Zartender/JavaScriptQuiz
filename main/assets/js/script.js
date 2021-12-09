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

var options = $('.options');
options.on('click', '.option', chooseSelection);

//var button = $('.input');
//button.on('click', '.input', enterInitials);

//Displays Question and Options from Object entered
function displayQuestion(question) {
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