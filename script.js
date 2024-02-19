function checkQuiz() {
    const correctAnswer = "MM/DD"; // Replace MM/DD with your actual anniversary date
    const userAnswer = document.getElementById('quizAnswer').value;
    if(userAnswer === correctAnswer) {
        window.location.href = 'main.html';
    } else {
        alert("Hmm, not quite. Try again!");
    }
}
