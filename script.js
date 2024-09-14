document.addEventListener('DOMContentLoaded', function () {
    const quizForm = document.getElementById('quizForm');
    const resultsDisplay = document.getElementById('resultsDisplay');

    // Debugging: Check if the form element is found
    console.log('Quiz Form Element:', quizForm);

    if (quizForm) {
        quizForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent default form submission

            let score = 0;
            const correctAnswers = {
                q1: 'B', // Paris
                q2: 'B', // 4
                q3: 'C', // Pacific Ocean
                q4: 'A', // Albert Einstein
                q5: 'B'  // H2O
            };

            // Loop through questions and calculate score
            for (let i = 1; i <= 5; i++) {
                const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
                if (selectedAnswer && selectedAnswer.value === correctAnswers[`q${i}`]) {
                    score++;
                }
            }

            // Save score to localStorage
            localStorage.setItem('quizScore', score);
            console.log('Score saved:', score); // Debugging line

            // Check if redirection is working
            console.log('Redirecting to results.html');
            window.location.href = 'results.html';
        });
    }

    // Display score on results page if applicable
    if (resultsDisplay) {
        const score = localStorage.getItem('quizScore');
        const totalQuestions = 5;
        resultsDisplay.textContent = `You scored ${score} out of ${totalQuestions}.`;
    }
});
