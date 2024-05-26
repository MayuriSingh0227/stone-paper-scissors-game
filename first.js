let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    //array isliye bnaya h kyuki random function hota a math class jjo rand num gen(0-1) krta h
    //rock,paper,scissor
    const randIdx = Math.floor(Math.random() * 3);
    //to generate randomNumber between 0 and 2
    return options[randIdx];

}


const drawGame = () => {
    // console.log("game was draw");
    msg.innerText = "Game was drawn,play again";
    msg.style.backgroundColor = "oraange";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("You win");
        msg.innerText = `you win! your${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("You loss");
        msg.innerText = "you loss";
        msg.innerText = `you lost, ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("user choice=", userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("computer choice=", compChoice);
    if (userChoice === compChoice) {
        //draw
    }
    else {
        let userwin = true;
        if (userChoice === "rock") {
            //sci,paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            //rock,sci
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock,paper
            userwin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    //  console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("Choice was clicked", userChoice);
        playGame(userChoice);
    });
});