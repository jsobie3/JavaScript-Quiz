var startButton = document.getElementById('startBtn');
var nextButton = document.getElementById('nextBtn');
var questionContainerElement = document.getElementById(`question-container`)
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
var timerEl = document.getElementById('time');
let shuffledQuestions, currentQuestionIndex
var wrongAnswer = 0
var rightAnswer = 0
var score = document.querySelector("score")

var score = 0;

startButton.addEventListener(`click`, startGame);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  NextQuestion()
})

function startGame() {
  console.log("test")
  setTime();
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - 0)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  NextQuestion()
  if (secondsLeft <=0 ){
    clearInterval(secondsLeft)
    quizEnd();
  }
}

function quizEnd() {
  secondsLeft.textContent = "Done";
  clearInterval(timerId);
}

function NextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])

}
var secondsLeft = 60;
function setTime() {
  startButton.classList.add("hide")
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " seconds remaining"

    if(secondsLeft <= 0) {
      clearInterval(timerInterval);
      
      timeUp();
    }
  }, 1000);
  
}

console.log(timerEl)

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {

      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
    nextButton.classList.remove("hide")
  })

  
  function setStatusClass(element, corect) {
    if (correct) {
      element.classList.add('correct')
      score++
    }
    
    else {
      element.classList.add('wrong')
      wrongAnswer++
      secondsLeft - 5;
    }
  }
}






const questions = [
  {
    question: "what is Javascript?",

    answers: [
      { text: "A programing language", correcet: true },
      { text: "A keyboard brand", correcet: false },
      { text: "A web browsers", correcet: false },
      { text: "A fancy pen", correcet: false },
    ]
  },

  {
    question: "what is HTML?",

    answers: [
      { text: "Hype Text Markup Langage", correcet: true },
      { text: "CSS", correcet: false },
      { text: "Javascript", correcet: false },
      { text: "None of the above", correcet: false },
    ]
  },

  {
    question: "what is CSS?",

    answers: [
      { text: "Cascading Style Sheet", correcet: true },
      { text: "HTML", correcet: false },
      { text: "Javascript", correcet: false },
      { text: "None of the above", correcet: false },
    ]
  },

  {
    question: "What is an event listener?",

    answers: [
      { text: "A JS procedure that waits for an event occur", correcet: true },
      { text: "A club promoter", correcet: false },
      { text: "People at a concert", correcet: false },
      { text: "All the above", correcet: false },
    ]
  },

  { question: "All Done!" }

]