// queryselector inputs time into p with class timer
let timer = document.querySelector("p.timer");
let questionRemaining = 0;
let myQuestions = document.querySelector("#myQuestions");
let timeFinished = document.querySelector("#timeFinished")
let contender = document.querySelector("#contender")
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
function timeAllowance() {
    let timeFrameInterval = setInterval (function() {
        remainingSeconds--;
        timer.textContent = `Timer:${remainingSeconds}`;
        if(remainingSeconds === 0 || questionRemaining === questionaires.length) {
            clearInterval(timeFrameInterval);
            myQuestions.display = "none";
            timeFinished.display = "block";
            contender.textContent = remainingSeconds;
            

        }
    }, 1000);
    
}



// (() => {
    
//     function CreateQuiz() {
//         var output = [];
//         myQuestions.forEach(

//             (currentQuestion, questionNumber) => {

                
//                 var answers = [];

//                 for (letter in currentQuestion.answers) {

//                     answers.push(
//                         `<label>
//                 <input type="radio" name="question${questionNumber}" value="${letter}">
//                 ${letter} :
//                 ${currentQuestion.answers[letter]}
//               </label>`
//                     );
//                 }

            
//                 output.push(
//                     `<div class="slide">
//               <div class="question"> ${currentQuestion.question} </div>
//               <div class="answers"> ${answers.join("")} </div>
//             </div>`
//                 );
//             }
//         );

        
//         qContainer.innerHTML = output.join('');
//     }

//     function showResults() {

//         // gather answer containers from our quiz
//         const answerContainers = qContainer.querySelectorAll('.answers');

//         // keep track of user's answers
//         let numCorrect = 0;

//         // for each question...
//         myQuestions.forEach((currentQuestion, questionNumber) => {

//             // find selected answer
//             const answerContainer = answerContainers[questionNumber];
//             const selector = `input[name=question${questionNumber}]:checked`;
//             const userAnswer = (answerContainer.querySelector(selector) || {}).value;

//             // if answer is correct
//             if (userAnswer === currentQuestion.correctAnswer) {
//                 // add to the number of correct answers
//                 numCorrect++;

//                 // color the answers green
//                 answerContainers[questionNumber].style.color = 'lightgreen';
//             }

//             // if answer is wrong or blank
//             else {
//                 // color the answers red
//                 answerContainers[questionNumber].style.color = 'red';
//             }
//         });

//         // show number of correct answers out of total
//         resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
//     }

//     function showSlide(n) {
//         slides[currentSlide].classList.remove('active-slide');
//         slides[n].classList.add('active-slide');
//         currentSlide = n;
//         if (currentSlide === 0) {
//             previousButton.style.display = 'none';
//         }
//         else {
//             previousButton.style.display = 'inline-block';
//         }
//         if (currentSlide === slides.length - 1) {
//             nextButton.style.display = 'none';
//             submitButton.style.display = 'inline-block';
//         }
//         else {
//             nextButton.style.display = 'inline-block';
//             submitButton.style.display = 'none';
//         }
//     }

//     function showNextSlide() {
//         showSlide(currentSlide + 1);
//     }

//     function showPreviousSlide() {
//         showSlide(currentSlide - 1);
//     }

//     function startQuiz() {
//         //Hide the start screen 
//         var divStartEL = document.getElementById("startScreen"); 
//         divStartEL.setAttribute("class", "hide");
//         //un-hide the question screen 

//         qContainer.removeAttribute('class');
//         nextButton.style.display = 'inline-block';

//     }
    
//     var qContainer = document.getElementById('quiz');
//     var resultsContainer = document.getElementById('results');
//     var submitButton = document.getElementById('submit');
//     var startButton = document.getElementById('begin');
//     var myQuestions = [
        
        
//         {
//             question: "Who invented JavaScript?",
//             answers: {
//                 a: "Mark Twain",
//                 b: "Joseph Stihl",
//                 c: "Brendan Eich"
//             },
//             correctAnswer: "c"
//         },
//         {
//             question: "What is JavaScript best utilized for?",
//             answers: {
//                 a: "Making pages dynamic",
//                 b: "Building forts",
//                 c: "Creating paper airplanes"
//             },
//             correctAnswer: "a"
//         },
//         {
//             question: "Which tool does Javascript pair like 'lamb and tuna fish' with?",
//             answers: {
//                 a: "Angular",
//                 b: "jQuery",
//                 c: "RequireJS",
//                 d: "ESLint"
//             },
//             correctAnswer: "b"
//         }
//     ];

    
//     CreateQuiz();

    
//     var previousButton = document.getElementById("prev");
//     var nextButton = document.getElementById("next");
//     var slides = document.querySelectorAll(".slide");
//     let currentSlide = 0;

    
//     showSlide(currentSlide);
//     nextButton.style.display = 'none';


//     submitButton.addEventListener('click', showResults);
//     previousButton.addEventListener("click", showPreviousSlide);
//     nextButton.addEventListener("click", showNextSlide);
//     startButton.addEventListener('click', startQuiz); 
// })();

