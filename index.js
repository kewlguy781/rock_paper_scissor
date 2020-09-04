
// Setting up State
let state = {
    weapons: ["Paper", "Scissor", "Rock"],
    winner: false,
    loser: false,
};

// Setting up HTML Strings input
let htmlString = `
<div>
<h1>Rock, Paper, Scissor</h1><br>
${getMessage()}
<div class="main">

</div>
</div>`
// ${renderWeapons} Put it in line 15

// Message Center
function getMessage(){
    const {winner, loser} =state;
    if (winner) {
        return `You have won! <br>
        [Play Again]<br>`
    } else if (loser){
        return `you lost!`
    } else {
        return `Please select your weapon!`
    }
    
    console.log('winner :>> ', winner);
    console.log('loser :>> ', loser);
}

// Setting up Array with paper, rock, scissor

// Setting up Paper, Rock, Scissor Click Link (including index location)

// Computer Random pick one of the above (random of index location)

// Compare, and see if player win, else, computer win

// Winner Counter

// Restart game (Clear array?)

// Render
function render() {
  
    document.getElementById("app").innerHTML=htmlString;
}

render();
