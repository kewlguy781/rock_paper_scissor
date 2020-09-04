
// Setting up State
let state = {
    weapons: ["Paper", "Scissor", "Rock"],
    winner: false,
    loser: false,
    tie: false,
};

// Setting up HTML Strings input

    // this have moved into render();

// Message Center
function getMessage(){
console.log('state.winner :>> ', state.winner);
    const {winner, loser, tie} = state;
    if (winner) {
        return `You have won! <br> [Play Again]<br>`
    } else if (loser){
        return `you lost!<br> [Play Again]<br>`
    } else if (tie){
        return `Tie! The computer selected the same weapon as you do! [Play Again]`
    } else {
        return `Please select your weapon!`
    }
    

}

// Setting up panel with paper, rock, scissor
function renderWeapons(){
    let weaponsHtml = "";
    state.weapons.forEach(function (weapon, index) {
        weaponsHtml += `<div class='panel' onclick='weaponSelected(${index})'>${weapon}</div>`;
    })
    return weaponsHtml;
}

// Setting up Paper, Rock, Scissor Click Link (including index location)

function weaponSelected(index){
    //Checking to make sure its being clicked and returned with index
    computerindex = computerSelect()
    compareWeapons(index,computerindex)
    //Need to figure out how to pass and print the choice and winner

}

// Computer Random pick one of the above (random of index location)
function computerSelect(){
return Math.floor(Math.random()*3)
}

// Compare, and see if player win, else, computer win
function compareWeapons(playeri,computeri){
console.log('playeri :>> ', playeri);
console.log('computeri :>> ', computeri);

if (playeri === computeri) {
    state.tie = true
    render();
} else if ((playeri == '0' && computeri == '2')|| 
(playeri == '1' && computeri == '0')||
(playeri == '2' && computeri == '1')) {
    state.winner = true
    render();
} else {
    state.loser=true
    render();
}
}

// Winner Counter

// Restart game (Clear array?)

// Render
function render() {
    let htmlString = `
        <div>
        <h1>Rock, Paper, Scissor</h1><br>
        ${getMessage()}
        <div class="main">
        ${renderWeapons()}
        </div>
        </div>`;

    document.getElementById("app").innerHTML=htmlString;
}

render();
