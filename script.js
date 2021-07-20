const quizData = [
    {
        question: "Каков срок временного перевода на другую работу в случае простоя?",
        a: "два месяц",
        b: "один месяц",
        c: "три месяц",
        d: "четыре месяц",
        correct: "b",
    },
    {
        question: "За какой срок до увольнения работника собственник должен предупредить его об этом персонально?",
        a: "не позднее чем за один месяца",
        b: "не позднее чем за два месяца",
        c: "не позднее чем за три месяца",
        d: "не позднее чем за две недели",
        correct: "b",
    },
    {
        question: "При заключении трудового договора, разрешается ли установление испытания с целью проверки соответствия работника работе, которая ему поручается?",
        a: "разрешается по согласованию сторон",
        b: "нет",
        c: "разрешается по согласованию  одной из сторон",
        d: "разрешается по согласованию с работником",
        correct: "a",
    },
    {
        question: "На какой минимальный срок предоставляется ежегодный основной отпуск?",
        a: "не менее 24-х дней",
        b: "не менее 14-х дней",
        c: "не менее 28-х дней",
        d: "не нормируется",
        correct: "ф",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
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
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
