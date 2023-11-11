let sequence=[]
let human=[]
let level=1
let welcome_text=document.getElementById("level-title");
const red=document.getElementById("red");
const green=document.getElementById("green");
const blue=document.getElementById("blue");
const yellow=document.getElementById("yellow");


function button_sound(){
    red.addEventListener("click",()=>{
        let audio = new Audio();
        audio.src = "./sounds/red.mp3";
        audio.play();
    });

    green.addEventListener("click",()=>{
        let audio = new Audio();
        audio.src = "./sounds/green.mp3";
        audio.play();
    });

    blue.addEventListener("click",()=>{
        let audio = new Audio();
        audio.src = "./sounds/blue.mp3";
        audio.play();
    });
    
    yellow.addEventListener("click",()=>{
        let audio = new Audio();
        audio.src = "./sounds/yellow.mp3";
        audio.play();
    });
}

document.onclick= function(event) {
    if (event===undefined) event= window.event;
    var target= 'target' in event? event.target : event.srcElement;
    level_indicator();

};

function level_indicator(){
    welcome_text.innerText="Level "+level;
}

function next_Round(){
    level+=1;
    const next_Sequence=[...sequence];
    next_Sequence.push(add_new_tile());
}

function add_new_tile(){
    const tiles=['red','blue','green','yellow'];
    const random = tiles[Math.floor(Math.random() * tiles.length)];
    return random;
}