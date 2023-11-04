const form = document.getElementById('survey-form');
const submitButton = document.getElementById('submit-button');
const resultContainer = document.getElementById('result');

submitButton.addEventListener('click', calculatePercentage);

function calculatePercentage(event) {
  event.preventDefault();

  const q1Answer = parseInt(form.querySelector('input[name="q1"]:checked').value);
  const q2Answer = parseInt(form.querySelector('input[name="q2"]:checked').value);
  const q3Answer = parseInt(form.querySelector('input[name="q3"]:checked').value);
  const q4Answer = parseInt(form.querySelector('input[name="q4"]:checked').value);
  const q5Answer = parseInt(form.querySelector('input[name="q5"]:checked').value);
  const q6Answer = parseInt(form.querySelector('input[name="q6"]:checked').value);
  const q7Answer = parseInt(form.querySelector('input[name="q7"]:checked').value);
  const q8Answer = parseInt(form.querySelector('input[name="q8"]:checked').value);
  const q9Answer = parseInt(form.querySelector('input[name="q9"]:checked').value);
  const q10Answer = parseInt(form.querySelector('input[name="q10"]:checked').value);

  const totalOptions = 40; // Total number of options (4 options per question, 2 questions)
  const selectedOptionsSum = q1Answer + q2Answer + q3Answer + q4Answer + q5Answer + q6Answer + q7Answer + q8Answer + q9Answer + q10Answer;
  const percentage = (selectedOptionsSum / totalOptions) * 100;

  resultContainer.textContent = `Mental Health Percentage: ${percentage}%`;

  // Define destinations based on percentage ranges
  let destinations = [];

  if (percentage >= 70) {
    destinations = ['music.html', 'ted.html'];
  } else if (percentage >= 30) {
    destinations = ['books.html', 'blogs.html'];
  } else {
    destinations = ['counsellor.html'];
  }

  // Randomly select a destination from the available ones
  const randomIndex = Math.floor(Math.random() * destinations.length);
  const nextPage = destinations[randomIndex];

  // Delay the redirection to the selected page after 5 seconds (5000 milliseconds)
  setTimeout(function () {
    window.location.href = nextPage;
  }, 5000);
}
