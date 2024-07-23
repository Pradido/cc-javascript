let baller = document.getElementById('baller');
let displayLives = document.getElementById('lives');
let displayScore = document.getElementById('score');
let playPitch = document.getElementById('pitch');
let scoreCount = 0;
let lives = 3;

// Start the game
alert('Master Dribbler! Click on the dribbler to score points.\n\n\If you miss the dribbler 3 times, you lose.');


// Move the dribbler to random positions
function move(){
    let num1 = Math.trunc(Math.random() * 80);
    let num2 = Math.trunc(Math.random() * 80);
    let parameter1 = 17;
    let parameter2 = 45;

    if (num1 <parameter1){
        num1 = parameter1;
    } else if (num1 > parameter2){
        num1 = parameter2;
    }

    if (num2 <parameter1){
        num2 = parameter1;
    } else if (num1 > parameter2){
        num2 = parameter2;
    }

    console.log(num1 + ", "  + num2);
    baller.style.top = num1 + '%';
    baller.style.left = num2 + '%';
}

move();

// Increase score count when dribbler is clicked
baller.addEventListener('click', function(){
scoreCount++;
displayScore.innerHTML = 'Score' + scoreCount;
})

// Lose a life when dribbler is not clicked
playPitch.addEventListener('click', function(){
    lives--;
    displayLives.innerHTML += 'X';
    if (lives === 0){
        alert('Game Over! Refresh the page to restart.\n\nScore: ' + scoreCount);
    }
});

// update display according to program activity
setInterval(move, 1600);
// displayScore.innerHTML += scoreCount;

// GameOver
if (lives === 0){
    alert('Game Over! Refresh the page to restart.\n\nScore: ' + scoreCount);
}