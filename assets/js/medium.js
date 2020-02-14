function bojack(){
    var bojack_young = document.createElement("div");
    bojack_young.setAttribute("class", "bojack_young");
    
    var newx = window.innerWidth;
    var newy = window.innerHeight;    

    var x = Math.floor(Math.random()* (newx - 100));
    var y = Math.floor(Math.random() * (newy - 120));
    
    bojack_young.setAttribute("style", "left: "+ x + "px; top: "+ y+ "px;");
    bojack_young.setAttribute("onclick", "acertou(this)");
    
    document.body.appendChild(bojack_young);    
    l++;
    if(l == 5){                
        stop();
        if(newx > 768){
            document.getElementById("all_lost").style.display = "block";
            document.getElementById("image").style.display = "block";
            document.getElementById("image").style.backgroundImage = "url('images/you_lose.png')";
        }else{
            document.getElementById("all_lost").style.display = "block";
            document.getElementById("mobile_finish").style.display = "block";
            document.getElementById("mobile_finish2").style.display = "block";
            document.getElementById("image").style.display = "block";
            document.getElementById("image").style.backgroundImage = "url('images/you_lose_mobile.png')";
        }
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
    if(newx > 768){
        document.getElementById("all_lost").style.display = "block";
        document.getElementById("image").style.display = "block";
        document.getElementById("image").style.backgroundImage = "url('images/you_win.png')";
    }else{
        document.getElementById("all_lost").style.display = "block";
        document.getElementById("mobile_finish").style.display = "block";
        document.getElementById("mobile_finish2").style.display = "block";
        document.getElementById("image").style.display = "block";
        document.getElementById("image").style.backgroundImage = "url('images/you_win_mobile.png')";
    }
}
var l = 0;
var t;
var t2;
var seconds = 30;
var catch1 = 0;
var newx = 0;
var newy = 0;
function start(){        
    t = setInterval(bojack, 1000);      
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
function restart_mobile(){
    window.location.href = "medium.html";
}
function menu(){
    window.location.href ="../index.html";
}