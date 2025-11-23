/ Simple Quiz Game for Lab Assignment
// Made by :- Abhinav Kumar Singh (first semester student)

// Questions array (basic HTML, CSS, JS stuff)
const quizQuestions = [
    { question: "What does HTML stand for?", answer: "hypertext markup language" },
    { question: "Which CSS property is used for flexible layouts?", answer: "flexbox" },
    { question: "Which tag links an external CSS file?", answer: "link" },
    { question: "In JavaScript, which keyword declares a variable?", answer: "let" },
    { question: "Which CSS property changes text color?", answer: "color" },
    { question: "What does CSS stand for?", answer: "cascading style sheets" },
    { question: "Which JS function shows a popup message?", answer: "alert" },
    { question: "Which HTML tag creates a form?", answer: "form" },
    { question: "Which CSS property changes background color?", answer: "background-color" },
    { question: "In Flexbox, which property aligns items along the main axis?", answer: "justify-content" }
];

// Function to run the quiz
function runQuiz() {
    let score = 0; // start score at 0

    // loop through all questions
    for (let i = 0; i < quizQuestions.length; i++) {
        let userAnswer = prompt(quizQuestions[i].question); // ask question

        if (userAnswer) {
            // normalize input
            userAnswer = userAnswer.toLowerCase().trim();

            // check answer
            if (userAnswer === quizQuestions[i].answer) {
                alert("✅ Correct!");
                score++;
            } else {
                alert("❌ Wrong! Correct answer: " + quizQuestions[i].answer);
            }
        }
    }

    // final score
    alert("Quiz finished! Your score: " + score + "/" + quizQuestions.length);
}

// run the quiz
runQuiz();
