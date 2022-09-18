let mcqs = [
  {
    question:
      "  Which of the following keywords is used to define a variable in Javascript?",
    ans1: "var",
    ans2: "const",
    ans3: "let",
    rightAns: "var",
  },
  {
    question:
      "  Which of the following methods can be used to display data in some form using Javascript?",
    ans1: "document.write()",
    ans2: "prompt()",
    ans3: "alert()",
    rightAns: "document.write()",
  },
  {
    question:
      "  What will be the output of the following code snippet? a = [1, 2, 3, 4, 5];print(a.slice(2, 4));",
    ans1: "3,4",
    ans2: "2,3",
    ans3: "2,4,5",
    rightAns: "2,3",
  },
  {
    question: "  How do we write a comment in javascript?",
    ans1: "/* */",
    ans2: "//",
    ans3: "$$",
    rightAns: "/* */",
  },
];

// Containers
let exam = document.querySelector("#exam");
let result = document.querySelector("#result");

// Question
let question = document.querySelector("#question");

//Count
let count = document.querySelector("#count");

// Labels
let ansLabel1 = document.querySelector("#ans1");
let ansLabel2 = document.querySelector("#ans2");
let ansLabel3 = document.querySelector("#ans3");

//Radios
let ansRadio1 = document.querySelector("#radio1");
let ansRadio2 = document.querySelector("#radio2");
let ansRadio3 = document.querySelector("#radio3");
let radioAns = document.getElementsByName("ans");

// Actions
let btnNext = document.querySelector("#next");
let btnPrev = document.querySelector("#previous");
let btnEnd = document.querySelector("#khatam");

// Result Screen Elements
let totalQuestions = document.querySelector("#totalQuestions");
let totalCorrectAns = document.querySelector("#totalCorrect");
let totalIncorrectAns = document.querySelector("#totalWrong");

let questionCount = 1;
let questionIndex = 0;
let correctAnswers = 0;

// By default hiding Result screen
result.style.display = "none";

function setValues() {
  count.innerHTML = questionCount;
  question.innerHTML = mcqs[questionIndex].question;
  ansLabel1.innerHTML = mcqs[questionIndex].ans1;
  ansLabel2.innerHTML = mcqs[questionIndex].ans2;
  ansLabel3.innerHTML = mcqs[questionIndex].ans3;
  ansRadio1.value = mcqs[questionIndex].ans1;
  ansRadio2.value = mcqs[questionIndex].ans2;
  ansRadio3.value = mcqs[questionIndex].ans3;
  btnEnd.style.display = "none";
}
setValues();

// Next Button Code
btnNext.addEventListener("click", function () {
  checkQuestion();
});

// Previous Button Code
btnPrev.addEventListener("click", function () {
  if (questionCount >= 1) {
    --correctAnswers;
    --questionIndex;
    --questionCount;
    btnNext.style.display = "inline-block";
    setValues();
    tooglePrevBtn();
  }
});

// Khatam Button Code
btnEnd.addEventListener("click", function () {
  alert("Khatam");
  checkLastQuestion();
  showResults();
});

function tooglePrevBtn() {
  if (questionIndex === 0) {
    btnPrev.style.display = "none";
  } else {
    btnPrev.style.display = "inline-block";
  }
}
tooglePrevBtn();

function checkLastQuestion() {
  if (questionCount === mcqs.length) {
    btnNext.style.display = "none";
    btnEnd.style.display = "inline-block";
  }
}

function checkQuestion() {
  for (let i = 0; i < radioAns.length; i++) {
    if (radioAns[i].checked) {
      //Yahan pe aap check kar sakty hain selected radio ki value
      alert(radioAns[i].value);
      if (radioAns[i].value === mcqs[questionIndex].rightAns) {
        // yahan pe right ans check horaha hai
        alert("right ans");
        ++correctAnswers;
        ++questionIndex;
        ++questionCount;
        setValues();
        tooglePrevBtn();
        console.log(correctAnswers);
        checkLastQuestion();
      } else {
        alert("wrong ans");
        ++questionIndex;
        ++questionCount;
        setValues();
        tooglePrevBtn();
        console.log(correctAnswers);
        checkLastQuestion();
      }
    }
  }
}

function showResults() {
  exam.style.display = "none";
  result.style.display = "block";
  totalQuestions.innerHTML = mcqs.length;
  totalCorrectAns.innerHTML = correctAnswers;
  totalIncorrectAns.innerHTML = mcqs.length - correctAnswers;
}
