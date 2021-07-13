const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    } else {
      console.log('error!');
    }
 };
 
 const getComputerChoice = () => {
     let computerChoice = Math.floor(Math.random() * 3)
     if (computerChoice === 0) {
       return 'rock'
     } else if (computerChoice === 1) {
       return 'paper'
     } else {
       return 'scissors'
     }
 };
 
 const determineWinner = (userInput, computerChoice) => {
   if (userInput === computerChoice) {
     return 'Game is a tie'
   };
   if (userInput === 'rock') {
     if (computerChoice === 'paper') {
       return 'The computer wins'
     } else {
       return 'You win'
     }
   }
   if (userInput === 'scissors') {
     if (computerChoice === 'rock') {
       return 'The computer wins' 
     } else {
       return 'You win'
     }
   }
   if (userInput === 'paper') {
     if (computerChoice === 'scissors') {
       return 'The computer wins' 
      } else {
         return 'You win'
         }
       }
 };
     
 const playGame = () => {
   const userChoice = getUserChoice('rock')
   const computerChoice = getComputerChoice();
   console.log('You threw: ' + userChoice);
   console.log('The computer threw: ' + computerChoice);
   console.log(determineWinner(userChoice, computerChoice));
 };
 
 playGame();