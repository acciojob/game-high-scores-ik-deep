// Function to save the score to local storage
function saveScore() {
  var nameInput = document.getElementById("name");
  var scoreInput = document.getElementById("score");

  var name = nameInput.value;
  var score = scoreInput.value;

  if (name && score) {
    // Check if scores exist in local storage
    var scores = JSON.parse(localStorage.getItem("scores")) || [];

    // Add the new score
    scores.push({ name: name, score: score });

    // Save the updated scores to local storage
    localStorage.setItem("scores", JSON.stringify(scores));

    // Clear the input fields
    nameInput.value = "";
    scoreInput.value = "";

    // Display the updated scores
    showScores();
  } else {
    alert("Please enter both name and score before submitting.");
  }
}

// Function to display scores from local storage
function showScores() {
  var scoresContainer = document.getElementById("scores");
  var scores = JSON.parse(localStorage.getItem("scores")) || [];

  if (scores.length > 0) {
    // Create a table and set the first row as headings
    var table = "<table><tr><th>Name</th><th>Score</th></tr>";

    // Add each score as a new row
    scores.forEach(function (score) {
      table += "<tr><td>" + score.name + "</td><td>" + score.score + "</td></tr>";
    });

    table += "</table>";

    // Display the table in the scores container
    scoresContainer.innerHTML = table;
  } else {
    // If no scores, display a message
    scoresContainer.innerHTML = "No scores yet";
  }
}

// Display scores when the page loads
document.onload = showScores();
