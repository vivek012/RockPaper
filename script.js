let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const mssg = document.querySelector("#mssg");
const user = document.querySelector("#user");
const comp = document.querySelector("#computer");


const userUpdate=()=>{
    return ++userScore;
}
const compUpdate=()=>{
    return ++compScore;
}

const drawGame = () => {
  console.log("Game was draw");
  mssg.innerText = "You both choose the same text\n Game Draw";
  mssg.style.backgroundColor = "yellow"
  mssg.style.color = "black"
};

const genCompChoice = () => {
  let options = ["rock", "paper", "scissor"];
  let randomNum = Math.floor(Math.random() * 3);
  return options[randomNum];
};

const win = () => {
  mssg.style.backgroundColor = "green";
};
const lose = () => {
  mssg.style.backgroundColor = "red";
};

const playGame = (userChoice) => {
  console.log("user choice =", userChoice);

  //Generate Computer choice
  const compChoice = genCompChoice();
  console.log("Computer choice =", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else if (userChoice === "rock" && compChoice === "paper") {
    mssg.innerText = "You choose rock and computer choose paper\nYou Lose";
    lose();
    comp.innerText = compUpdate()
    
} else if (userChoice === "rock" && compChoice === "scissor") {
    mssg.innerText = "You choose rock and computer choose scissor\nYou Won";
    win();
    user.innerText = userUpdate()
} else if (userChoice === "paper" && compChoice === "rock") {
    mssg.innerText = "You choose Paper and computer choose Rock\nYou Won";
    win()
    user.innerText = userUpdate()
} else if (userChoice === "paper" && compChoice === "scissor") {
    mssg.innerText =
    "You choose Paper and computer choose scissor\n You Lose";
    lose()
    comp.innerText = compUpdate()
} else if (userChoice === "scissor" && compChoice === "paper") {
    mssg.innerText = "You choose scissor and computer choose Paper\nYou Won";
    win()
    user.innerText = userUpdate()
} else if (userChoice === "scissor" && compChoice === "rock") {
    mssg.innerText =
    "You choose scissor and computer choose Rock\n You Lose";
    lose()
    comp.innerText = compUpdate()
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
