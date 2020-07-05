const choices1 = Array.from(document.getElementsByClassName("choice-text_1"));
const choices2 = Array.from(document.getElementsByClassName("choice-text_2"));
const choices3 = Array.from(document.getElementsByClassName("choice-text_3"));
const choices4 = Array.from(document.getElementsByClassName("choice-text_4"));
const q1 = document.querySelector(".question__1");
const q2 = document.querySelector(".question__2");
const q3 = document.querySelector(".question__3");
const q4 = document.querySelector(".question__4");
const question1 = document.getElementById("question1");
const question2 = document.getElementById("question2");
const question3 = document.getElementById("question3");
const question4 = document.getElementById("question4");
const bar = document.querySelector("#myBar");
const popup = document.querySelector(".model-popup");
const quizSection = document.querySelector(".quiz-section");
console.log(bar);
const handleClick = (e) => {
  e.preventDefault();

  choices1.forEach((choice) => {
    const selectedAnswer = choice.dataset["number"];
    if (selectedAnswer === "1") {
      q1.style.display = "none";
      q2.style.display = "block";
      bar.classList.add("bar__30");
    }
  });
};

const secondClick = (e) => {
  e.preventDefault();
  choices2.forEach((choice) => {
    const selectedAnswer = choice.dataset["number"];
    if (selectedAnswer === "2") {
      q2.style.display = "none";
      q3.style.display = "block";
      bar.classList.add("bar__50");
    }
  });
};
const thirdClick = (e) => {
  e.preventDefault();
  choices3.forEach((choice) => {
    const selectedAnswer = choice.dataset["number"];
    if (selectedAnswer === "3") {
      q3.style.display = "none";
      q4.style.display = "block";
      bar.classList.add("bar__75");
    }
  });
};
const fourthClick = (e) => {
  e.preventDefault();
  choices4.forEach((choice) => {
    const selectedAnswer = choice.dataset["number"];
    if (selectedAnswer === "4") {
      bar.classList.add("bar__100");
      popup.style.display = "block";
      quizSection.style.display = "none";
    }
  });
};

question1.addEventListener("click", handleClick);
question2.addEventListener("click", secondClick);
question3.addEventListener("click", thirdClick);
question4.addEventListener("click", fourthClick);
