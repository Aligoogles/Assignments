var count = 0;
var result = "Loser";
var guess = [ ];

document.getElementById("rock").addEventListener("click", function(){
    count++;

  var playerChoice = "rock";
  var computerOptions = ['rock', 'paper', 'scissors'];
  var computerChoice = computerOptions[Math.floor(Math.random()*3)];
  guess.push(playerChoice);
  
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
    if(count == 5 || result == "Winner"){
        document.getElementById("result-text").innerHTML = result;
        document.getElementById("guess-text").innerHTML = "<br> Your choice: "+guess;
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
  guess.push(playerChoice);
  
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
    if(count == 5 || result == "Winner"){
      document.getElementById("result-text").innerHTML = result;
      document.getElementById("guess-text").innerHTML = "<br> Your choice: "+guess;
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
  guess.push(playerChoice);
  
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
    if(count == 5 || result == "Winner"){
    	document.getElementById("result-text").innerHTML = result;
      document.getElementById("guess-text").innerHTML = "<br> Your choice: "+guess;
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