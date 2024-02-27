let radioCheck = document.getElementsByTagName("INPUT");
let answer1 = document.getElementById("choice1");
let answer2 = document.getElementById("choice2");
let answer3 = document.getElementById("choice3");
let answer4 = document.getElementById("choice4");
let setQuestion = document.getElementById("Question");
let restartButton = document.getElementById("reset");

function reset() {
  location.reload();
}

let questions = [
  ["How old is the creator at the time of writing this program?", 18],
  ['Which of these is the real "java script?"', "java script"],
  [
    "Which of the following vitamins/minerals would be found in the ingredients of a cheese pizza?",
    "Vitamin K",
  ],
  [
    "What year range will the gas Helium (He), be expected to run out?",
    "25-30 years",
  ],
  ["What came first? The chicken, or the egg?", "I don't know."],
];
let answers = [
  ["18", "23", "20", "26"],
  ["JS", "JavaScript", "javaScript()", "java script"],
  ["Vitamin E", "Iron", "Vitamin K", "Vitamin B"],
  ["60-75 years", "25-30 years", "30-60 years", "100-125 years"],
  ["Chicken", "Egg", "Both", "I don't know."],
];
//18
//java script
//Vitamin K
//25-30
//I don't know
let totalCorrect = 0;
let questionCount = 0;

function generateQuestion() {
  setQuestion.innerHTML = questions[questionCount][0];
  for (
    let answerCount = 1;
    answerCount < answers[questionCount].length + 1;
    answerCount++
  ) {
    let radio = document.getElementById("choice" + answerCount);
    let answerNumber = document.getElementById("choiceLabel" + answerCount);
    answerNumber.innerHTML = answers[questionCount][answerCount - 1];
    radio.checked = false;
  }
}

function submit() {
  let correctAnswer = questions[questionCount][1];
  for (let i = 1; i < 5; i++) {
    if (document.getElementById("choice" + i).checked) {
      if (
        document.getElementById("choiceLabel" + i).innerHTML == correctAnswer
      ) {
        totalCorrect++;
        let score = document.getElementById("score");
        score.innerHTML = totalCorrect;
        break;
      } else {
        break;
      }
    }
  }
  questionCount++;
  if (questionCount == 5) {
    restartButton.style.display = "block";
  } else {
    generateQuestion();
  }
}

generateQuestion();
