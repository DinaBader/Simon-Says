let sequence=[]
let human=[]
let level=1
let welcome_text=document.getElementById("level-title");


document.onclick= function(event) {
    if (event===undefined) event= window.event;
    var target= 'target' in event? event.target : event.srcElement;
    level_indicator();

};

