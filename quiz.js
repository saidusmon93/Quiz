(function () {
  function buildQuiz() {
    const output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answers = [];

      for (letter in currentQuestion.answers) {
        answers.push(
          `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
        );
      }

      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>`
      );
    });

    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    const answerContainers = quizContainer.querySelectorAll(".answers");

    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if (userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;

        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        answerContainers[questionNumber].style.color = "red";
      }
    });

    resultsContainer.innerHTML = `${numCorrect} / ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [
    {
      question:
        "Faraz qilish degan ma’noni bildiruvchi matematik terminni toping.",
      answers: {
        a: "Teorema",
        b: "Aksioma",
        c: "Gipoteza",
      },
      correctAnswer: "a",
    },
    {
      question: "Teorema nima uzi",
      answers: {
        a: "Aksioma",
        b: "Gipoteza",
        c: "Logarifm",
      },
      correctAnswer: "c",
    },
  ];

  buildQuiz();

  submitButton.addEventListener("click", showResults);
})();


// myQuestions ga push qiladigan funksiya
//   function addQuestions() {
    // 
    // 
    // 
//   }