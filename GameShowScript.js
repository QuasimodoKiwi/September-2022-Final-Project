let radioCheck = document.getElementsByTagName("INPUT");
let answer1 = document.getElementById("choice1");
let answer2 = document.getElementById("choice2");
let answer3 = document.getElementById("choice3");
let answer4 = document.getElementById("choice4");
let setQuestion = document.getElementById("Question");
let restartButton = document.getElementById("restartButton");
let lifeline1 = true; 
let lifeline2 = true;
let lifeline3 = true;

function reset() {
  location.reload();
}

function fiftyFifty(halfChance) {
  let label1 = document.getElementById("choiceLabel1");
  let label2 = document.getElementById("choiceLabel2");
  let label3 = document.getElementById("choiceLabel3");
  let label4 = document.getElementById("choiceLabel4");
  let options = [];
  options.push(label1, label2, label3, label4);
  for (let i = 0; i < options.length; i++) {
    if (options[i].innerHTML == questions[questionCount][1]) {
      options.splice(i, 1);
      options.splice((Math.floor() * options.length), 1);
      for (let j = 0; j < options.length; j++) {
        options[j].style.textDecoration = "line-through";
      }
    }
  }
  if(lifeline1 == true){
    lifeline1 = false;
    document.getElementById("lifeline1").style.display = 'none';
  }
}

function phoneFriend(phone) {
  let label1 = document.getElementById("choiceLabel1");
  let label2 = document.getElementById("choiceLabel2");
  let label3 = document.getElementById("choiceLabel3");
  let label4 = document.getElementById("choiceLabel4");
  let options = [];
  options.push(label1, label2, label3, label4);
  
  let ranNum = Math.floor(Math.random() * 4);

  options[ranNum].style.backgroundColor = "yellow"; 

  phone = document.getElementById("lifeline2");
  
  if(lifeline2 == true){
    lifeline2 = false;
    document.getElementById("lifeline2").style.display = 'none';
  }
}

function audienceHelp(aud) {
  let label1 = document.getElementById("choiceLabel1");
  let label2 = document.getElementById("choiceLabel2");
  let label3 = document.getElementById("choiceLabel3");
  let label4 = document.getElementById("choiceLabel4");
  let options = [];
  options.push(label1, label2, label3, label4);
  
  let ranNum = Math.floor(Math.random() * 4);

  options[ranNum].style.backgroundColor = "lightblue"; 

  aud = document.getElementById("lifeline3");
  
  if(lifeline3 == true){
    lifeline3 = false;
    document.getElementById("lifeline3").style.display = 'none';
  }
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

//Answers:
//18
//java script
//Vitamin K
//25-30
//I don't know

let totalAmount = 0;
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
    answerNumber.style.textDecoration = "none";
    answerNumber.style.backgroundColor = "";
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
        totalAmount += 100;
        document.getElementById("score").innerHTML = "$" + totalAmount;
        break;
      } 
    }
  }
  questionCount++;
  if (questionCount == 5) {
    restartButton.style.display = "block";
    restartButton.style.margin = "0 auto";
    restartButton.style.marginTop = "10px";
    document.getElementById("scoreMessage").innerHTML =
          "Congratulations! You won:";
        restartButton.style.display = "block";
        return;
  } 

  else {
    generateQuestion();
  }
}

generateQuestion();
