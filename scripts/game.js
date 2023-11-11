let sequence = [];
let human = [];
let level = 0;
let is_starting=1;
let welcomeText = document.getElementById("level-title");
const container = document.querySelector(".container");
const everything=document.querySelector("body");


document.addEventListener('keydown',()=>{
    startGame();
})  

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
    next_round();
}

function next_round() {
    level += 1;
    level_indicator(level);
    const nextSequence = [...sequence];
    nextSequence.push(get_random_tile());
    playButton(nextSequence);
    sequence = [...nextSequence];
}

function level_indicator(level) {
    if(is_starting)
        welcomeText.innerText = "Level " + level;
    else 
    {        
        welcomeText.innerText=level;
        is_starting=1;
    }
}

function get_random_tile() {
    const tiles = ['red', 'blue', 'green', 'yellow'];
    const random = tiles[Math.floor(Math.random() * tiles.length)];
    return random;
}

function playButton(nextSequence) {
    nextSequence.forEach((color, index) => {
        setTimeout(() => {
            activate_tile_animation(color);
        }, (index + 1) * 600);
    });
}

function activate_tile_animation(lastColor) {
    const tile = document.querySelector(`[data-tile='${lastColor}']`);
    tile.classList.add('pressed');
    buttonSound(lastColor);
    setTimeout(() => {
        tile.classList.remove('pressed');
    }, 300);
}

container.addEventListener('click', event => {
    const { tile } = event.target.dataset;
    if (tile) player_clicks(tile);
});


function player_clicks(tile) {
    const index=human.push(tile)-1;
    activate_tile_animation(tile)
    if(human[index]!=sequence[index]){
        restart_game("Game Over, Press Any Key to Restart")
        return;
    }
    if(human.length==sequence.length){
        human=[];
        setTimeout(()=>{
            next_round();
        },1000);
    }
    return;
}

function restart_game(text){
    let audio = new Audio();
    sequence=[]
    human=[]
    level=0
    everything.classList.add("game-over");
    audio.src="./sounds/wrong.mp3";
    audio.play();
    setTimeout(()=>{
        everything.classList.remove("game-over");
    },300);
    is_starting=0;
    level_indicator(text);
}