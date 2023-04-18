const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results-container');
const submitButton = document.getElementById('submit');

let currentQuestion = 0;
let score = 0;

// Show quiz questions
function showQuestions() {
  const currentQuestionData = questions[currentQuestion];
  const title = currentQuestionData.title;
  const choices = currentQuestionData.choices;
  
  quizContainer.innerHTML = `
    <h2>${title}</h2>
    <form id="quiz-form">
      ${choices.map(choice => `
        <label>
          <input type="radio" name="answer" value="${choice}">
          ${choice}
        </label>
      `).join('')}
      <button type="submit">Next</button>
    </form>
  `;
}

// Show quiz results
function showResults(){
 resultsContainer.innerHTML =
 `<h2>Results</h2>
 <p>Your score is ${score} out of ${questions.length}.</p>
 <button onclick="location.reload()">Try Again</button>
`;
}

// Check answer and show next question or result
function checkAnswer(event) {
  event.preventDefault();
  
  const quizForm = document.getElementById('quiz-form');
  const answer = quizForm.answer.value;
  
  if (answer === questions[currentQuestion].answer) {
    score++;
  }
  
  currentQuestion++;
  
  if (currentQuestion === questions.length) {
    quizContainer.style.display = 'none';
    showResults();
  }


}


let questions = [
  { 
    title: "What tag is used to define an image – or add an image – to an HTML page?",
    choices: ["<meta>","<table>", "<div>", "<img>"],
    answer: "<img>",
    points: 1

  },

  { 
    title: "What tag is used to define a hyperlink, or link to another page?",
    choices: [ "<em>","<strong>", "<blockquote>","<a>"],
    answer: "<a>",
    points: 1

  },

  { 
    title: "What is the object called that lets you work with both dates and time-related data?",
    choices: ["Dates","Time-warp","Time field", "Clock"],
    answer: "Dates",
    points: 1

  },

  { 
    title: "In JavaScript, what is used in conjunction with HTML to “react” to certain elements?",
    choices: ["Boolean","Condition","RegExp","Events"    ],
    answer: "Events",
    points: 1

  },

  { 
    title: "What is the type of loop that continues through a block of code as long as the specified condition remains TRUE?",
    choices: ["For Loop","While Loop","Else Loop","Conditional Loop"],
    answer: "While Loop",
    points: 1

  },

  { 
    title: "What is the name of the stylesheet that defines the presentation of an HTML or XML document?",
    choices: ["CSS","PHP","Java","jQuery"],
    answer: "CSS",
    points: 1

  },

  { 
    title: "What is the name of the property that is used to define the special state of an element?",
    choices: ["Style","Syntax","Alignment","Pseudo-class"],
    answer: "Pseudo-class",
    points: 1

  },

  { 
    title: "What is the most important CSS property, used for controlling the layout?",
    choices: ["Margin","<div>","Table","Display"],
    answer: "Display",
    points: 1

  },

  { 
    title: "[What is the CSS property that offers extra information about something when you hover over an element?",
    choices: ["Hint","Info Block","Tutorial","Tooltip"],
    answer: "Tooltip",
    points: 1

  },

  { 
    title: "With CSS you can transform bland HTML menus into this property.",
    choices: ["Comments","Navigation Bars", "Dialog Boxes","Menus"],
    answer: "Navigation Bars",
    points: 1

  },

];

// After the quiz is completed, save the user's score to local storage
localStorage.setItem("username", nameInput);
localStorage.setItem("email", emailInput);
localStorage.setItem("score", score);

// store name and score in local storage
const scoreData = JSON.parse(localStorage.getItem("scoreData")) || [];
scoreData.push({ nameInput, score });
localStorage.setItem("scoreData", JSON.stringify(scoreData));

// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 300;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left until quiz is complete.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}

// Function to create and append 
function sendMessage() {
  timeEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);

}

setTime();
