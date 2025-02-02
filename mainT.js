let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true; //playerX, player0
// let playerSymbol = "";
// let opponentSymbol = "";

// let arr = ["apple", "banana", "litchi"];

// 2D array(for winning pattern)
/*let arr2 = [
  ["apple", "litchi"],
  ["potato", "mushroom"],
  ["pants", "shirts"],
];*/

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
// const chooseSymbol = () => {
//   playerSymbol = prompt("Choose your symbol: X or O").toUpperCase();
//   if (playerSymbol !== "X" && playerSymbol !== "O") {
//     alert("Invalid choice, please choose either X or O.");
//     chooseSymbol(); // Recursive call until valid input
//   } else {
//     opponentSymbol = playerSymbol === "X" ? "O" : "X";
//     turn0 = playerSymbol === "X"; // Set the first turn based on player symbol
//     msg.innerText = `You are ${playerSymbol}. Let's start the game!`;
//   }
// };

// // Call chooseSymbol when starting a new game
// const startNewGame = () => {
//   chooseSymbol(); // Prompt player to choose their symbol
//   enableBoxes();   // Enable the game board
//   msgContainer.classList.add("hide"); // Hide the message container initially
// };

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turn0 === true) {
      box.innerText = "O";
      // box.style.color = "red";
      turn0 = false;
    } else {
      box.innerText = "X";
      // box.style.color = "blue"; 
      turn0 = true;
    }
    box.disabled = true;
    //to disable from changing value

    checkWinner();
  });
});

const resetGame = () => {
  turn0 = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};
const showDraw = (draw) => {
  msg.innerText = `Its a draw`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  let winnerFound = false;
  for (let pattern of winPatterns) {
    /*console.log(pattern[0], pattern[1], pattern[2]);
    console.log(
      boxes[pattern[0]].innerText,
      boxes[pattern[1]].innerText,
      boxes[pattern[2].innerText]
    );*/

    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner", pos1Val);
        showWinner(pos1Val);
        winnerFound = true;
        break;
      }
    }

    if (!winnerFound) {
      let allFilled = Array.from(boxes).every((box) => box.innerText !== "");
      if (allFilled) {
        showDraw();
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
