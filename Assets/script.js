var startButton = document.getElementById('startBtn');
var nextButton = document.getElementById('nextBtn');
var questionContainerElement = document.getElementById(`question-container`)
const questionElement = document.getElementById ('question')
const  answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener(`click`, startGame);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame (){
  console.log("test")
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort (() => Math.random() - 0)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove ('hide')
  setNextQuestion()
}

function setNextQuestion () {
resetState()
showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion (question){
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if(answer.correct){

    button.dataset.correct = answer.correct
    }
    button.addEventListener('click',selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState (){
  nextButton.classList.add ('hide')
  while (answerButtonsElement.firstChild){
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer (e)
{
const selectedButton = e.target
const correct = selectedButton.dataset.correct
setStatusClass (document.body, correct)
Array.from(answerButtonsElement.children).forEach(button => {
  setStatusClass(button, button.dataset.correct)
  nextButton.classList.remove("hide")
})

function setStatusClass (element,corect ){
  if (correct){
    element.classList.add('correct')
  }
  else {
    element.classList.add('wrong')
  }
}

function clearStatusClass (element) {
  element.classList.remove ("correct")
  element.classList.remove ("wrong")
}

}

const questions = [
  {
    question: "what is Javascript?",
  
      answers: [
      { text: "stuff 1", correcet: true },
      { text: "stuff 2", correcet: false },
      { text: "stuff 3", correcet: false },
      { text: "stuff 4", correcet: false },
      ]
  },
  
  {
    question: "what is HTML?",
  
      answers: [
      { text: "stuff 1", correcet: true },
      { text: "stuff 2", correcet: false },
      { text: "stuff 3", correcet: false },
      { text: "stuff 4", correcet: false },
      ]
  },

  {
    question: "what is CSS?",
  
      answers: [
      { text: "stuff 1", correcet: true },
      { text: "stuff 2", correcet: false },
      { text: "stuff 3", correcet: false },
      { text: "stuff 4", correcet: false },
      ]
  },

  {
    question: "What is an event listener?",
  
      answers: [
      { text: "stuff 1", correcet: true },
      { text: "stuff 2", correcet: false },
      { text: "stuff 3", correcet: false },
      { text: "stuff 4", correcet: false },
      ]
  }

]