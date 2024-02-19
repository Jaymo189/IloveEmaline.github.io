function checkQuiz() {
    const correctAnswer = "Pufferfish";
    const userAnswer = document.getElementById('quizAnswer').value;
    const correctAnswer2 = "Emaline";
    const userAnswer2 = document.getElementById('quizAnswer2').value;
    if(userAnswer === correctAnswer && userAnswer2 === correctAnswer2) {
        window.location.href = 'main.html';
    } else {
        alert("Noooo little mems thats not right!");
    }
}
