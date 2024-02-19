function checkQuiz() {
    const correctAnswer = "pufferfish"; // Convert correct answer to lowercase
    const userAnswer = document.getElementById('quizAnswer').value.toLowerCase(); // Convert user input to lowercase
    const correctAnswer2 = "emaline"; // Convert correct answer to lowercase
    const userAnswer2 = document.getElementById('quizAnswer2').value.toLowerCase(); // Convert user input to lowercase
    
    if(userAnswer === correctAnswer && userAnswer2 === correctAnswer2) {
        window.location.href = 'main.html';
    } else {
        alert("Noooo little mems thats not right!");
    }
}
