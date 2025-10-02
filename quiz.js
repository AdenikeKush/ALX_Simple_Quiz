// Declare the function as specified
function checkAnswer() {
  // 1) Identify the correct answer
  const correctAnswer = "4";

  // 2) Retrieve the user's selected answer (radio with name="quiz")
  const selected = document.querySelector('input[name="quiz"]:checked');

  // Safety: if nothing selected, prompt the user and stop
  if (!selected) {
    document.getElementById('feedback').textContent = "Please select an answer.";
    return;
  }

  const userAnswer = selected.value;

  // 3) Compare and display feedback
  const feedback = document.getElementById('feedback');
  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
  }
}

// 4) Add event listener to the Submit button (do not call the function here)
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
