function checkQuiz() {
    const correctAnswer = "pufferfish";
    const userAnswer = document.getElementById('quizAnswer').value.toLowerCase(); 
    const correctAnswer2 = "emaline"; 
    const userAnswer2 = document.getElementById('quizAnswer2').value.toLowerCase(); 
    
    if(userAnswer === correctAnswer && userAnswer2 === correctAnswer2) {
        window.location.href = 'main.html';
    } else {
        alert("Noooo little mems thats not right!");
    }
}
