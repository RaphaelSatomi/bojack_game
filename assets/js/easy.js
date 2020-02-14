function bojack(){
    var bojack_kid = document.createElement("div");
    bojack_kid.setAttribute("class", "bojack_kid");
    
    var x = Math.floor(Math.random()* 1200);
    var y = Math.floor(Math.random() * 500);
    
    bojack_kid.setAttribute("style", "left: "+ x + "px; top: "+ y+ "px;");
    bojack_kid.setAttribute("onclick", "acertou(this)");
    
    document.body.appendChild(bojack_kid);    
    l++;
    if(l == 5){                
        stop();
        document.getElementById("all_lost").style.display = "block";
        document.getElementById("image").style.display = "block";
        document.getElementById("image").style.backgroundImage = "url('images/you_lose.png')";
    }
    console.log("Aumentou: "+l);
}

function acertou(obj){
    document.body.removeChild(obj);            
    l--;
    catch1++;
    document.getElementById("catch").innerHTML = catch1;
    console.log("Diminuiu: "+l);
}
function time(){
    seconds--;
    console.log(seconds);
    document.getElementById("time").innerHTML = seconds;
}
function stop(){    
    clearTimeout(t);
    clearTimeout(t2);
    document.getElementById("all_lost").style.display = "block";
    document.getElementById("image").style.display = "block";
    document.getElementById("image").style.backgroundImage = "url('images/you_win.png')";
}
var l = 0;
var t;
var t2;
var seconds = 30;
var catch1 = 0;
function start(){        
    t = setInterval(bojack, 1300);      
    t2 = setInterval(time, 1000);
    setInterval(stop, 30000);          
}

function restart(x){    
    if(x.keyCode == 32){
        window.location.href = "medium.html";
    }
    if(x.keyCode == 113){
        window.location.href = "../index.html";
    }
}