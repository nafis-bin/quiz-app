const questions = [
  {
    question: 'What is the largest animal in the world',
    answers: [
      { text: 'shark', correct: false },
      { text: 'blue Whale', correct: true },
      { text: 'elephant', correct: false },
      { text: 'giraffe', correct: false },
    ]
  },

  {
    question: 'What is the smallest country animal in the world',
    answers: [
      { text: 'vatican city', correct: true },
      { text: 'bhutan', correct: false },
      { text: 'nepal', correct: false },
      { text: 'srilanka', correct: false },
    ]
  },

  {
    question: 'What is the largest desert in the world',
    answers: [
      { text: 'kalahari', correct: false },
      { text: 'gobi', correct: false },
      { text: 'sahara', correct: false },
      { text: 'antartica', correct: true },
    ]
  },

  {
    question: 'What is the smallest continent in the world',
    answers: [
      { text: 'asia', correct: false },
      { text: 'australia', correct: true },
      { text: 'europe', correct: false },
      { text: 'africa', correct: false },
    ]
  },
]


const question = document.querySelector('#question');
const ansBtns = document.querySelector('#answer-buttons');
const nextBtn = document.querySelector('#next-btn');

let qIdx = 0;
let score = 0;

function startQuiz() {
  qIdx = 0;
  score = 0;

  nextBtn.innerHTML = 'Next';
  showQuestion();
}

function showQuestion() {
  let curr_ques = questions[qIdx];

  question.innerHTML = (curr_ques + 1) + '. ' + curr_ques.question;

  curr_ques.answers.forEach(ans => {
    const button = document.createElement('button');
    button.innerHTML = ans.text;
    button.classList.add('btn');
    ansBtns.appendChild(button);
  })
}
