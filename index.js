
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
${renderWeapons()}
</div>
</div>`

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

// Setting up panel with paper, rock, scissor
function renderWeapons(){
    let weaponsHtml = "";
    state.weapons.forEach(function (weapon, index) {
        console.log('weapon :>> ', weapon);
        console.log('index :>> ', index);
        weaponsHtml += `<div class='panel' onclick='weaponSelected(${index})'>${weapon}</div>`;
    })
    console.log('weaponsHtml :>> ', weaponsHtml);
    return weaponsHtml;
}

// Setting up Paper, Rock, Scissor Click Link (including index location)

function weaponSelected(index){
    //Checking to make sure its being clicked and returned with index
    console.log('index :>> ', index);
    computerindex = computerSelect()
    console.log('computerindex :>> ', computerindex);
}

// Computer Random pick one of the above (random of index location)
function computerSelect(){
return Math.floor(Math.random()*3)
}

// Compare, and see if player win, else, computer win

// Winner Counter

// Restart game (Clear array?)

// Render
function render() {
  
    document.getElementById("app").innerHTML=htmlString;
}

render();
