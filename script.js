const quizData = [
    {
      question: "How old is Florin?",
      a: "10",
      b: "17",
      c: "26",
      d: "110",
      correct: "c"
    },
    {
      question: "What is the most used programming language in 2023?",
      a: "java",
      b: "C",
      c: "Python",
      d: "Javascript",
      correct: "d"
    },
    {
      question: "Who is the President of India",
      a: "Narendra modi",
      b: "Ramnath Kobind",
      c: " Droupadi Murmu",
      d: "Yogi Adityanaath",
      correct: "c"
    },
    {
      question: "What does HTML stand for?",
      a: "Hyper Markup Language",
      b: "Cascading Style Sheet",
      c: "Jason Object Notation",
      d: "Application programming Interface",
      correct: "a"
    },
    {
      question: "Which year was Javascript launched?",
      a: "2020",
      b: "2000",
      c: "2018",
      d: "none of the above",
      correct: "b"
    }
  ];
  
  document.addEventListener("DOMContentLoaded", function() {
    const quiz = document.getElementById("quiz");
    const answersEls = document.querySelectorAll(".answer");
    const questionEl = document.getElementById("question");
    const a_text = document.getElementById("a_text");
    const b_text = document.getElementById("b_text");
    const c_text = document.getElementById("c_text");
    const d_text = document.getElementById("d_text");
    const submitBtn = document.getElementById("submit");
  
    let currentQuiz = 0;
    let score = 0;
  
    loadQuiz();
  
    function loadQuiz() {
      if (currentQuiz < quizData.length) {
        deselectAnswer();
        const currentQuizData = quizData[currentQuiz];
        questionEl.innerText = currentQuizData.question;
        a_text.innerText = currentQuizData.a;
        b_text.innerText = currentQuizData.b;
        c_text.innerText = currentQuizData.c;
        d_text.innerText = currentQuizData.d;
      } else {
        quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
        <button onclick= "location.reload()">Play Again<button/>`;
      }
    }
  
    function getSelected() {
      let answer = undefined;
  
      answersEls.forEach((answerEl) => {
        if (answerEl.checked) {
          answer = answerEl.id;
        }
      });
      return answer;
    }
  
    function deselectAnswer() {
      answersEls.forEach((answerEl) => {
        answerEl.checked = false;
      });
    }
  
  
    submitBtn.addEventListener("click", () => {
      const answer = getSelected();
      if (answer !== undefined) {
        if (answer === quizData[currentQuiz].correct) {
          score++;
        }
        currentQuiz++;
        loadQuiz();
      } else {
        alert("Please select an answer.");
      }
    });
  });