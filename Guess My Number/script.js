'use strict';

// console.log(document.querySelector(".message").textContent);

// document.querySelector('.message').textContent = "potato rocks...";
// document.querySelector('.number').textContent ='13';
// document.querySelector('.score').textContent ='20';

let secretNumber = Math.round(Math.random()*20)+1;
// console.log(secretNumber);
let score = 20;
let highScore=0;

const dispLayMessage = function (message) {
document.querySelector('.message').textContent=message;
}
document.querySelector('.check').addEventListener('click', function () {
const guess =Number(document.querySelector('.guess').value);
// console.log(typeof guess , guess);

//when there is no input
if (!guess) {
// document.querySelector('.message').textContent = 'No Number!';
//refactored
   dispLayMessage('No Number!');
}
//when guess is correct
else if (guess === secretNumber) {
    
    dispLayMessage('Hureee...! Correct Number...!!');
  

document.querySelector('.number').textContent = secretNumber;


    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if(score > highScore ){
      highScore=score;
      document.querySelector(".highscore").textContent=highScore;
    }
}
// score guess is wrong
//refractored
else if (guess !== secretNumber) {
   if (score > 1) {
    //we are only refactoring this string here to avoid repetition of code using ternanry operator
    //instead of writing two scearios where score higher or lower we are using ternary 
    //that reduces the code repetition
    //  document.querySelector('.message').textContent =
    //    guess > secretNumber ? 'to high!' : 'to low!';
    

    //again refactored by creating function above called displayMessage
    dispLayMessage(guess > secretNumber ? 'to high!' : 'to low!');x
     score--;
     document.querySelector('.score').textContent = score;
   } else {
     dispLayMessage('You lost the game!');
     document.querySelector('.score').textContent = 0;
   }
}
})

// // when is guess is to high
// else if (guess > secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'to high!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'You lost the game!';
//     document.querySelector('.score').textContent = 0;
//   }
//   // when is guess is to low 
// } else if (guess < secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'to low!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'You lost the game!';
//      document.querySelector('.score').textContent = 0;
//   }
// }



document.querySelector('.again').addEventListener("click", function () {
  score=20;
  secretNumber = Math.round(Math.random() * 20) + 1;
  document.querySelector(".score").textContent=score;
  document.querySelector(".guess").textContent=secretNumber;

    document.querySelector('.message').textContent = 'Start guessing...';
document.querySelector('.number').textContent = "?";
document.querySelector('.guess').value='';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';  

});


















