let sequence = [];
let human = [];
let level = 0;
let welcomeText = document.getElementById("level-title");
const container = document.querySelector(".container");

function buttonSound(button) {
    let audio = new Audio();

    if (button == "red") {
        audio.src = "./sounds/red.mp3";
    } else if (button == "green") {
        audio.src = "./sounds/green.mp3";
    } else if (button == "yellow") {
        audio.src = "./sounds/yellow.mp3";
    } else {
        audio.src = "./sounds/blue.mp3";
    }

    audio.play();
}

function startGame() {
    nextRound();
}

document.addEventListener('keydown',()=>{
    startGame();
})  

function nextRound() {
    level += 1;
    levelIndicator(level);
    const nextSequence = [...sequence];
    nextSequence.push(getRandomTile());
    playButton(nextSequence);
    sequence = [...nextSequence];
}

function levelIndicator(level) {
    welcomeText.innerText = "Level " + level;
}

function getRandomTile() {
    const tiles = ['red', 'blue', 'green', 'yellow'];
    const random = tiles[Math.floor(Math.random() * tiles.length)];
    return random;
}

function playButton(nextSequence) {
    nextSequence.forEach((color, index) => {
        setTimeout(() => {
            activateTile(color);
        }, (index + 1) * 600);
    });
}

function activateTile(lastColor) {
    const tile = document.querySelector(`[data-tile='${lastColor}']`);
    tile.classList.add('pressed');
    buttonSound(lastColor);
    setTimeout(() => {
        tile.classList.remove('pressed');
    }, 300);
}

container.addEventListener('click', event => {
    const { tile } = event.target.dataset;
    console.log(tile + " was clicked");
    if (tile) player_clicks(tile);
});


function player_clicks(tile) {
    const index=human.push(tile)-1;
    buttonSound(tile);
    if(human[index]!=sequence[index]){
        restart_game("Game Over, Press Any Key to restart")
        return;
    }
    if(human.length==sequence.length){
        human=[];
        setTimeout(()=>{
            nextRound();
        },1000);
    }
    return;
}

function restart_game(text){
    sequence=[]
    human=[]
    level=0
    levelIndicator(text);
}