const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestion, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    shuffledQuestion = question.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
 showQuestion( shuffledQuestion[currentQuestionIndex])
}

function showQuestion(question) {
   questionElement.innerText = question.question
   question.answers.foreach(answer => {
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

function selectAnswer(e) {

}

const question = [
    {
        question: 'What is my name',
        answers: [
            { text:'Joseph', correct: true},
            {text:'Ezinne', correct: false}
        ]
    }
]