let userScore =0;
let compScore =0;
const userMsg=document.querySelector("#user-score");
const compMsg =document.querySelector("#comp-score");
const msg = document.querySelector("#click");
const choices = document.querySelectorAll(".choice");

const genComputerChoice = () =>{
    const options = ["rock","paper","scissor"];
    return options[Math.floor(Math.random()*3)];
}

const  winner = (userwin) =>{
    if(userwin){
        console.log("you win ...");
        msg.innerText="YOU WIN";
        userScore++;
        userMsg.innerText=userScore;
        console.log("user score =" ,userScore);
    }
    else {
        console.log("you lose...");
        msg.innerText="YOU LOSE";
        compScore++;
        compMsg.innerText=compScore;
    }
}
const draw = () =>{
    console.log("game was draw");
    msg.innerText="DRAW HOGYA BHAI";
}

const playGame = (userChoice) => {
    console.log("user choice =", userChoice)
    const compChoice = genComputerChoice();
    console.log("computer choice was",compChoice);
    if(userChoice===compChoice){
        draw();
    }
    else{
        let userwin =true;
        if(userChoice=== "rock"){
            userwin = compChoice ==="paper" ? false:true;
        }
         else if(userChoice=== "rock"){
            userwin = compChoice ==="scissor" ? false:true;
        }
        else {
            userwin= compChoice ==="rock"? false : true
        }
         winner(userwin);
    }
};
choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        console.log("choice was clicked");
      
        const userChoice =choice.getAttribute("id")
        playGame(userChoice)
    });
});


