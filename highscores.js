// // Retrieve the user's score from local storage
// let score = localStorage.getItem("score");

// // Compare the user's score to previous scores to determine the highest score
// let highestScore = 0;
// if (score > highestScore) {
//   highestScore = score;
// }

// // Display the high score page
// document.getElementById("username").textContent = localStorage.getItem("username");
// document.getElementById("email").textContent = localStorage.getItem("email");
// document.getElementById("score").textContent = score;
// document.getElementById("highest-score").textContent = highestScore;

const scoreData = JSON.parse(localStorage.getItem("scoreData")) || [];

// sort scores by descending order
scoreData.sort((a, b) => b.score - a.score);

const scoresTable = document.getElementById("scores");

// display scores in table
for (let i = 0; i < scoreData.length; i++) {
  const scoreEntry = scoreData[i];
  const row = document.createElement("tr");
  const nameCell = document.createElement("td");
  const scoreCell = document.createElement("td");
  nameCell.textContent = scoreEntry.name;
  scoreCell.textContent = scoreEntry.score;
  row.appendChild(nameCell);
  row.appendChild(scoreCell);
  scoresTable.appendChild(row);
}
