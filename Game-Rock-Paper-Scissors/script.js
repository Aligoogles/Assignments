var count = 0;
var result = "Loser";

document.getElementById("rock").addEventListener("click", function(){
    count++;
  var playerChoice = "rock";
  var computerOptions = ['rock', 'paper', 'scissors'];
  var computerChoice = computerOptions[Math.floor(Math.random()*3)];
  
  if (playerChoice == 'rock' && computerChoice == 'scissors' ) {
      result = "Winner";
  }
  else if (playerChoice == 'rock' && computerChoice == 'paper' ) {
      result = "Loser";
  }
  else if (playerChoice == 'rock' && computerChoice == 'rock' ) {
    result = "Draw";
  }
  
    document.getElementById("choicePlayer").innerHTML = playerChoice;
    document.getElementById("choiceComp").innerHTML = computerChoice;
    document.getElementById("result-text").innerHTML = result;
    document.getElementById("result-text").style.display = "block";
    document.getElementById("player").style.display = "flex";
    document.getElementById("computer").style.display = "flex";
    if(count == 3 || result == "Winner"){
        document.getElementById("result-text").innerHTML = result;
        document.getElementById("result-text").style.display = "block";
        document.getElementById("rock").style.display = "none";
        document.getElementById("paper").style.display = "none";
        document.getElementById("scissors").style.display = "none";
    }
  });
  
document.getElementById("paper").addEventListener("click", function(){
    count++;
    var playerChoice = "paper";
  var computerOptions = ['rock', 'paper', 'scissors'];
  var computerChoice = computerOptions[Math.floor(Math.random()*3)];
  
  if (playerChoice == 'paper' && computerChoice == 'rock' ) {
      result = "Winner";
  }
  else if (playerChoice == 'paper' && computerChoice == 'scissors' ) {
      result = "Loser";
  }
  else if (playerChoice == 'paper' && computerChoice == 'paper' ) {
    result = "Draw";
  }
      
    document.getElementById("choicePlayer").innerHTML = playerChoice;
    document.getElementById("choiceComp").innerHTML = computerChoice;
    document.getElementById("result-text").innerHTML = result;
    document.getElementById("result-text").style.display = "block";
    document.getElementById("player").style.display = "flex";
    document.getElementById("computer").style.display = "flex";
    if(count == 3 || result == "Winner"){
      document.getElementById("result-text").innerHTML = result;
      document.getElementById("result-text").style.display = "block";
      document.getElementById("rock").style.display = "none";
      document.getElementById("paper").style.display = "none";
      document.getElementById("scissors").style.display = "none";
    }
  });

document.getElementById("scissors").addEventListener("click", function(){
	count++;
	var playerChoice = "scissors";
  var computerOptions = ['rock', 'paper', 'scissors'];
  var computerChoice = computerOptions[Math.floor(Math.random()*3)];
  
  if (playerChoice == 'scissors' && computerChoice == 'rock' ) {
      result = "Loser";
  }
  else if (playerChoice == 'scissors' && computerChoice == 'paper' ) {
      result = "Winner";
  }
  else if (playerChoice == 'scissors' && computerChoice == 'scissors' ) {
    result = "Draw";
  }
      
    document.getElementById("choicePlayer").innerHTML = playerChoice;
    document.getElementById("choiceComp").innerHTML = computerChoice;
    document.getElementById("result-text").innerHTML = result;
    document.getElementById("result-text").style.display = "block";
    document.getElementById("player").style.display = "flex";
    document.getElementById("computer").style.display = "flex";
    if(count == 3 || result == "Winner"){
    	document.getElementById("result-text").innerHTML = result;
    	document.getElementById("result-text").style.display = "block";
      document.getElementById("rock").style.display = "none";
      document.getElementById("paper").style.display = "none";
      document.getElementById("scissors").style.display = "none";
    }
  });
  

function startGame () {
    document.getElementById("start").style.display = "none";
    document.getElementById("choices").style.display = "block";
}
