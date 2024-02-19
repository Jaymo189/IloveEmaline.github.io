document.addEventListener('DOMContentLoaded', (event) => {
    function checkQuiz() {
        const correctAnswer = "pufferfish";
        const userAnswer = document.getElementById('quizAnswer').value.toLowerCase();
        const correctAnswer2 = "emaline";
        const userAnswer2 = document.getElementById('quizAnswer2').value.toLowerCase();

        if(userAnswer === correctAnswer && userAnswer2 === correctAnswer2) {
            // Consider using a more reliable navigation method if window.location.href doesn't work
            window.location.href = 'main.html';
        } else {
            // Consider using a more subtle way to show errors, especially for mobile users
            alert("Noooo little mems that's not right!");
        }
    }

    // Assuming you have a button with id 'submitQuiz' for users to submit their answers
    document.getElementById('submitQuiz').addEventListener('touchend', checkQuiz);
});
