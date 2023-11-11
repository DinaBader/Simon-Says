let sequence=[]
let human=[]
let level=1
let welcome_text=document.getElementById("level-title");


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
}

function add_new_tile(){
    const tiles=['red','blue','green','yellow'];
    const random = tiles[Math.floor(Math.random() * tiles.length)];
    return random;
}