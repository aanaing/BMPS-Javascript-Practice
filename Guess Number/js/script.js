let secretNo = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const display = function (message) {
  document.querySelector(".message").textContent = message;
};
const game = function () {
  let guessNo = Number(document.querySelector(".input").value); // Change String to Number
  if (!guessNo) {
    display("No number! Please enter a number");
  } else if (guessNo > 20) {
    display("Please Enter number between 1 to 20");
  } else if (guessNo === secretNo) {
    {
      display("Correct Number .......");
      document.querySelector("body").style.backgroundColor = "green";
      document.querySelector(".guessNo").textContent = secretNo;
      if (score > highScore) {
        highScore = score;
        document.querySelector(".highScore").textContent = highScore;
      }
    }
  } else if (guessNo !== secretNo) {
    if (score > 0) {
      display(guessNo > secretNo ? "Too High ..... " : "Too Low ......");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      display("Loose Game ....");
      document.querySelector(".message").style.color = "red";
      document.querySelector(".score").textContent = "0";
    }
  }
};

const reGame = function () {
  secretNo = Math.trunc(Math.random() * 20) + 1;
  display("Start Guessing.....");
  document.querySelector(".score").textContent = 20;
  document.querySelector("input").value = "null";
  document.querySelector("body").style.backgroundColor = "#262626";
  document.querySelector(".guessNo").textContent = "?";
  document.querySelector(".guessNo").style.fontSize = "5rem";
};

document.querySelector(".check").addEventListener("click", game);
document.querySelector(".again").addEventListener("click", reGame);
