let scores = JSON.parse(localStorage.getItem('scores'));
      if (scores==null){
        scores={
          losses:0,
        tie:0,
      wins:0
      };}

      updatescoreelement();

      function playGame(playerMove) {
        const computerMove = pickComputerMove();

        let result = '';

        if (playerMove === 'scissors') {
          if (computerMove === 'rock') {
            result = 'You lose.';
          } else if (computerMove === 'paper') {
            result = 'You win.';
          } else if (computerMove === 'scissors') {
            result = 'Tie.';
          }

        } else if (playerMove === 'paper') {
          if (computerMove === 'rock') {
            result = 'You win.';
          } else if (computerMove === 'paper') {
            result = 'Tie.';
          } else if (computerMove === 'scissors') {
            result = 'You lose.';
          }
          
        } else if (playerMove === 'rock') {
          if (computerMove === 'rock') {
            result = 'Tie.';
          } else if (computerMove === 'paper') {
            result = 'You lose.';
          } else if (computerMove === 'scissors') {
            result = 'You win.';
          }
        }

          if (result === 'You win.'){
            scores.wins++;
          }
          else if(result === 'You lose.'){
            scores.losses++;
          }
          else if(result === 'Tie.'){
            scores.tie++;
          }
        localStorage.setItem('scores',JSON.stringify(scores));
       

        document.querySelector('.result-class').innerHTML=result;
        document.querySelector('.moves-class').innerHTML=`You 
        <img src="icons/${playerMove}-emoji.png" class="move-icon">
  <img src="icons/${computerMove}-emoji.png" class="move-icon"> Computer`

        /*alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result} 
Wins:${scores.wins}, Losses:${scores.losses}, Ties:${scores.tie}`);*/

updatescoreelement();
      }

      function updatescoreelement()
      {
        document.querySelector('.scores-class')
      .innerHTML=`Wins:${scores.wins}, Losses:${scores.losses}, Ties:${scores.tie}`;}

      function pickComputerMove() {
        const randomNumber = Math.random();

        let computerMove = '';

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = 'rock';
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computerMove = 'paper';
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
          computerMove = 'scissors';
        }

        return computerMove;
      }