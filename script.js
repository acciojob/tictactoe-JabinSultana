//your JS code here. If required.
let player1 = "";
let player2 = "";
let currentPlayer = "X";
let gameActive = true;

// Winning combinations
const winPatterns = [
  ["1","2","3"],
  ["4","5","6"],
  ["7","8","9"],
  ["1","4","7"],
  ["2","5","8"],
  ["3","6","9"],
  ["1","5","9"],
  ["3","5","7"]
];

// Start game
document.getElementById("submit").addEventListener("click", () => {
  player1 = document.getElementById("player-1").value;
  player2 = document.getElementById("player-2").value;

  document.getElementById("game").style.display = "block";
  document.querySelector(".message").textContent = `${player1}, you're up`;
});

// Cell click
document.querySelectorAll(".cell").forEach(cell => {
  cell.addEventListener("click", handleClick);
});

function handleClick(e) {
  const cell = e.target;

  if (cell.textContent !== "" || !gameActive) return;

  cell.textContent = currentPlayer.toLowerCase();

  if (checkWin()) {
    const winner = currentPlayer === "X" ? player1 : player2;
    document.querySelector(".message").textContent =
      `${winner} congratulations you won!`;
    gameActive = false;
    return;
  }

  // Switch player
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  const nextPlayer = currentPlayer === "X" ? player1 : player2;

  document.querySelector(".message").textContent =
    `${nextPlayer}, you're up`;
}

// Check winner
function checkWin() {
  return winPatterns.some(pattern => {
    const [a, b, c] = pattern;
    return (
      document.getElementById(a).textContent === currentPlayer &&
      document.getElementById(b).textContent === currentPlayer &&
      document.getElementById(c).textContent === currentPlayer
    );
  });
}