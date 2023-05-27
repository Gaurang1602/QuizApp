const quizData = [
    {
        question: "Who Developed Python?",
        a: "Guido van Rossum",
        b: "James Gosling",
        c: "Bjarne Stroustrup",
        d: "Brendan Eich",
        correct: "a",
    },
    {
        question: "What does  HTML Stands for?",
        a: "Hyperloop Markup Language",
        b: "Hyperloop Makedown Language",
        c: "Hypertext Markup Language",
        d: "Hypertext Machine Language",
        correct: "c",
    },
    {
        question: "When was Java developed?",
        a: "1906",
        b: "1996",
        c: "1990",
        d: "2000",
        correct: "c",
    },
    {
        question: "Which language is used to style webpage?",
        a: "HTML",
        b: "Java",
        c: "Python",
        d: "CSS",
        correct: "d",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
// const quiz=document.getElementById('quiz')
// const answerEls =document.querySelectorAll('.answer')
// const questionEl=document.getElementById('question')
// const a_text=document.getElementById('a_text')
// const b_text=document.getElementById('b_text')
// const c_text=document.getElementById('c_text')
// const d_text=document.getElementById('d_text')
// const submitBtn=document.getElementById('submit')


// let currentQuiz = 0
// let score = 0

// loadQuiz()

// function loadQuiz(){
//     deselectAnswers()

//     const currentQuizData =quizData[currentQuiz]

//     questionEl.innerText=currentQuizData.question
//     a_text.innerText = currentQuizData.a
//     b_text.innerText = currentQuizData.b
//     c_text.innerText = currentQuizData.c
//     d_text.innerText = currentQuizData.d
// }

// function deselectAnswers(){
//     answerEls.forEach(answerEls => answerEls.Checked = false)
// }

// function getSelected(){
//     let answerEls
//     answerEls.forEach(answerEl => {
//         if(answerEl.Checked){
//             answer = answerEl.id
//         }
//     })
//     return answer
// }

// submitBtn.addEventListener('click',()=>{
//     const answer =getSelected()
//     if(answer){
//         if(answer === quizData[currentQuiz].correct){
//             score++
//         }

//         currentQuiz++

//         if(currentQuiz < quizData.length){
//             loadQuiz()
//         }
//         else{
//             quiz.innerHtml=
//             <h2>You Answered  ${score}/${quizData.length} questions correctly</h2>

//             <button onclick="location.reload()">Reload</button>
//         }
//     }
// })
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})