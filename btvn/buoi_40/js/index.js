let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

const quizArray = [
  {
    id: "0",
    question: "HTML là viết tắt của cụm từ nào?",
    options: [
      "HyperText Mark Language",
      "Home Markup Language",
      "HyperText Markup Language",
      "Hyperlinks and Text Markup Language",
    ],
    correct: "HyperText Markup Language",
  },
  {
    id: "1",
    question: "Java Script được sử dụng ở?",
    options: [
      "Client Side",
      "Server Side",
      "Client and Server Side",
      "None of these",
    ],
    correct: "Client and Server Side",
  },
  {
    id: "2",
    question: `"Thuộc tính _______ của thẻ TABLE được sử dụng để chỉ ra độ rộng của
bảng.`,
    options: ["WIDTH", "SPAN", "AREA", "SIZE"],
    correct: "WIDTH",
  },
  {
    id: "3",
    question:
      "Địa chỉ (đường dẫn) cho phép xác định một tài nguyên trên Web được gọi là?",
    options: ["URL", "Protocol", "WebAddress", "Http"],
    correct: "URL",
  },
  {
    id: "4",
    question: `Sự kiện ________ sẽ được kích hoạt khi con trỏ chuột di chuyển lên một
phần tử?`,
    options: ["onSubmit", "onMouseUp", "onMouseOut", "onMouseOver"],
    correct: "onMouseOver",
  },
];

restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});

nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    questionCount += 1;

    if (questionCount == quizArray.length) {
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      userScore.innerHTML = "Điểm của bạn là " + scoreCount * 2;
    } else {
      countOfQuestion.innerHTML =
        questionCount + 1 + " trên " + quizArray.length + " câu hỏi";

      quizDisplay(questionCount);
      count = 11;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);

const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");

  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  quizCards[questionCount].classList.remove("hide");
};

function quizCreater() {
  quizArray.sort(() => Math.random() - 0.5);

  for (let i of quizArray) {
    i.options.sort(() => Math.random() - 0.5);
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");

    countOfQuestion.innerHTML = 1 + " trên " + quizArray.length + " câu ";

    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);

    div.innerHTML += `<button class="option-div" onclick="checker(this)">${i.options[0]}</button>
    <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
    <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
    <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;

    quizContainer.appendChild(div);
  }
}

function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");

    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  clearInterval(countdown);
  options.forEach((element) => {
    element.disabled = true;
  });
}

function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  scoreCount = 0;
  count = 11;
  clearInterval(countdown);
  timerDisplay();
  quizCreater();
  quizDisplay(questionCount);
}

startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};
