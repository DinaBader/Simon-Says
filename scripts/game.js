let sequence=[]
let human=[]
let level=0;
let welcome_text=document.getElementById("level-title");
const red=document.getElementById("red");
const green=document.getElementById("green");
const blue=document.getElementById("blue");
const yellow=document.getElementById("yellow");


function button_sound(button){
    if(button=="red"){
        red.addEventListener("click",()=>{
            let audio = new Audio();
            audio.src = "./sounds/red.mp3";
            audio.play();
        });
    }
    
    else if(button=="green"){
        green.addEventListener("click",()=>{
            let audio = new Audio();
            audio.src = "./sounds/green.mp3";
            audio.play();
        });
    }
    
    else if(button=="yellow"){
        yellow.addEventListener("click",()=>{
            let audio = new Audio();
            audio.src = "./sounds/yellow.mp3";
            audio.play();
        });
    }
    
    else{
        blue.addEventListener("click",()=>{
            let audio = new Audio();
            audio.src = "./sounds/blue.mp3";
            audio.play();
        }); 
    }
    
}

document.onclick= function(event) {
    if (event===undefined) event= window.event;
    var target= 'target' in event? event.target : event.srcElement;
    startGame();
};

function level_indicator(){
    welcome_text.innerText="Level "+level;
}

function next_Round(){
    level+=1;
    level_indicator();
    const next_sequence=[...sequence];
    next_sequence.push(add_new_tile());
    play_button(next_sequence);
}

function add_new_tile(){
    const tiles=['red','blue','green','yellow'];
    const random = tiles[Math.floor(Math.random() * tiles.length)];
    return random;
}

function activateTile(last_color){
    const tile =document.querySelector(`[data-tile='${last_color}']`)
    tile.classList.add('pressed');
    button_sound(last_color)
    setTimeout(()=>{
        tile.classList.remove('pressed');
    },300);
}

function play_button(next_Sequence){
    const last_color=next_Sequence.length-1;
    activateTile(next_Sequence[last_color]);
}

function startGame(){
    next_Round();
}