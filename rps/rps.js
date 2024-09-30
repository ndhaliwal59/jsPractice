var userScore = 0;
var botScore = 0;
var userScoreSpan = document.getElementById("userScore");
var botScoreSpan = document.getElementById("botScore");
const result = document.getElementById("res");
const rockSvg = document.getElementById("rock");
const paperSvg = document.getElementById("paper");
const scissorsSvg = document.getElementById("scissors");
var fight1 = document.getElementById("fight1");
var fight2 = document.getElementById("fight2");


var botOption ="";

function botPick(){
  const compOptions = ["rock", "paper", "scissors"];
  var randomOption = Math.floor(Math.random() * 3);
  return compOptions[randomOption];
}

main();
function main(){
  rockSvg.addEventListener('click', function(e){
    game('rock');
 });
 
 paperSvg.addEventListener('click', function(){
  game('paper');
 })
 
 scissorsSvg.addEventListener('click', function(){
  game('scissors');
 }) 
}



function game(userChoice){
  const botChoice = botPick();
  console.log(botChoice + userChoice);
  endDisplay();

  if(userChoice === botChoice){
    result.innerHTML = "Draw";
  }

  else if(userChoice === "rock"){
    if(botChoice === "paper"){
      result.innerHTML = "Paper(bot) beats Rock";
      botScore ++;
    }
    else if(botChoice === "scissors"){
      result.innerHTML = "Rock beats scissors(bot)";
      userScore ++;
    }
  }

  else if(userChoice === "paper"){
    if(botChoice === "scissors"){
      result.innerHTML = "Scissors(bot) beats paper";
      botScore ++;
    }
    else if(botChoice === "rock"){
      result.innerHTML = "Paper beats rock(bot)";
      userScore ++;
    }
  }

  else if(userChoice === "scissors"){
    if(botChoice === "rock"){
      result.innerHTML = "Rock(bot) beats scissors";
      botScore ++;
    }
    else if(botChoice === "paper"){
      result.innerHTML = "Scissors beats paper(bot)";
      userScore ++;
    }
  }


  function endDisplay(){
    fight1.innerHTML = document.getElementById(userChoice).innerHTML;
    fight2.innerHTML = document.getElementById(botChoice).innerHTML;
    fight1.classList.remove("hidden");
    fight2.classList.remove("hidden");
  }

  userScoreSpan.innerHTML = userScore;
botScoreSpan.innerHTML = botScore;
}



game();

