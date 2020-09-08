
// Setting up State
let state = {
    weapons: ["Paper", "Scissor", "Rock"],
    winner: false,
    loser: false,
    tie: false,
    winnercounter: "0",
    losercounter: "0",
    drawcounter: "0",
    computerindex: "4",
    index: "4"
};

// Setting up HTML Strings input

    // this have moved into render();

// Message Center
function getMessage(){
console.log('state.winner :>> ', state.winner);
    const {winner, loser, tie} = state;
    if (winner) {
        state.winner = false
        state.winnercounter++
        return `You have won! <br> <br>`
    } else if (loser){
        state.loser = false
        state.losercounter++
        return `you lost!<br><br>`
    } else if (tie){
        state.tie = false
        state.drawcounter++
        return `Tie! The computer selected the same weapon as you do!<br><br>`
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
    state.index=index
    computerindex = computerSelect()
    state.computerindex=computerindex
    compareWeapons(index,computerindex)

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
// See in State and the compare

// Restart game (Clear array?)
// Already in the "compare" where once result is determinated, reset the flag.

// Result
function renderResult(){
    let resultHtml=`The computer select: ${state.weapons[state.computerindex]} <br><br>
        The player select: ${state.weapons[state.index]} 
        <br><br><br>
        
        Winner counter: <br>
        Player: ${state.winnercounter}<br>
        Computer: ${state.losercounter}<br>
        Draw: ${state.drawcounter}`;

    return resultHtml;
}

// Render
function render() {
    let htmlString = `
        <div>
        <h1>Rock, Paper, Scissor</h1><br>
        ${getMessage()}
        <div class="main">
        ${renderWeapons()}
        </div><br><br>
        ${renderResult()}<br>
        </div>`;

    document.getElementById("app").innerHTML=htmlString;
}

render();
