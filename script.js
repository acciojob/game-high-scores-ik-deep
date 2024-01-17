// complete the JS code
const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
// const scores = document.getElementById("scores");

// Save score to Local Storage
function saveScore() {
  // complete the code here
	let name = nameInput.value;
	let score = scoreInput.value;
	
	  var scores = JSON.parse(localStorage.getItem('scores')) || [];
	scores.push({
                name: name,
                score: score
            });
	  localStorage.setItem('scores', JSON.stringify(scores));
  showScores();
}

// Show scores in div
function showScores() {
  // Get the scores from local storage
            var scores = JSON.parse(localStorage.getItem('scores')) || [];

            // Get the scores div
            var scoresDiv = document.getElementById('scores');

            // Clear the previous content
            scoresDiv.innerHTML = '';

            if (scores.length === 0) {
                // Display a message if there are no scores
                scoresDiv.textContent = 'No scores yet';
            } else {
                // Create a table to display the scores
                // var table = document.createElement('table');

                // // Create the header row
                // var headerRow = table.insertRow(0);
                // var nameHeader = headerRow.insertCell(0);
                // var scoreHeader = headerRow.insertCell(1);
                // nameHeader.textContent = 'Name';
                // scoreHeader.textContent = 'Score';
              let table = '<table>';  
               table += '<tr><th>Name</th><th>Score</th><th>Score</th></tr>';  
                // Create a row for each score
                for (var i = 0; i < scores.length; i++) {
                    // var row = table.insertRow(i + 1);
                    // var nameCell = row.insertCell(0);
                    // var scoreCell = row.insertCell(1);
                    // nameCell.textContent = scores[i].name;
                    // scoreCell.textContent = scores[i].score;
					table += `<tr><td>${scores[i].name}</td><td>${scores[i].score}</td></tr>`;
                } 
               table += '</table>';  
                // Append the table to the scores div
                scoresDiv.innerHTML=table;
            }
}
