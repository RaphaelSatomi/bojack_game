function bojack(){
    var bojack_adult = document.createElement("div");
    bojack_adult.setAttribute("class", "bojack_adult");
    
    var newx = window.innerWidth;
    var newy = window.innerHeight;    

    var x = Math.floor(Math.random()* (newx - 130));
    var y = Math.floor(Math.random() * (newy - 150));
    
    bojack_adult.setAttribute("style", "left: "+ x + "px; top: "+ y+ "px;");
    bojack_adult.setAttribute("onclick", "acertou(this)");
    
    document.body.appendChild(bojack_adult);    
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
    t = setInterval(bojack, 200);      
    t2 = setInterval(time, 1000);
    setInterval(stop, 30000);          
}

function restart(x){    
    if(x.keyCode == 32){
        window.location.href = "hard.html";
    }
    if(x.keyCode == 113){
        window.location.href = "../index.html";
    }
}
function restart_mobile(){
    window.location.href = "hard.html";
}
function menu(){
    window.location.href ="../index.html";
}











