function checkQuiz() {
    const correctAnswer = "pufferfish";
    const userAnswer = document.getElementById('quizAnswer').value.toLowerCase().trim(); 
    const correctAnswer2 = "emaline"; 
    const userAnswer2 = document.getElementById('quizAnswer2').value.toLowerCase().trim(); 
    
    if(userAnswer === correctAnswer && userAnswer2 === correctAnswer2) {
        window.location.href = 'main.html';
    } else {
        alert("Noooo little mems that's not right!");
    }
}
