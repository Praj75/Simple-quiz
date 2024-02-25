function submitQuiz() {
    const answers = {
        q1: "Paris",
        q2: "Tokyo",
        q3: "Rupee",
        q4: "Jupiter",
        q5: "H2O"
    };

    let score = 0;

    if (answers.q1 === document.querySelector('input[name="q1"]:checked').value) {
        score += 1;
    }
    if (answers.q2 === document.querySelector('input[name="q2"]:checked').value) {
        score += 1;
    }
    if (answers.q3 === document.querySelector('input[name="q3"]:checked').value) {
        score += 1;
    }
    if (answers.q4 === document.querySelector('input[name="q4"]:checked').value) {
        score += 1;
    }
    if (answers.q5 === document.querySelector('input[name="q5"]:checked').value) {
        score += 1;
    }

    const resultElement = document.getElementById('result');
    resultElement.textContent = `Your score is ${score}`;
}

function resetQuiz() {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(button => {
        button.checked = false;
    });
    const resultElement = document.getElementById('result');
    resultElement.textContent = "";
}