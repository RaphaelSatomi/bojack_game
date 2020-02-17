function bojack(){
    var bojack_kid = document.createElement("div");
    bojack_kid.setAttribute("class", "bojack_kid");
    
    newx = window.innerWidth;
    newy = window.innerHeight;    

    var x = Math.floor(Math.random()* (newx - 130));
    var y = Math.floor(Math.random() * (newy - 150));
    
    bojack_kid.setAttribute("style", "left: "+ x + "px; top: "+ y+ "px;");
    bojack_kid.setAttribute("onclick", "acertou(this)");
    
    document.body.appendChild(bojack_kid);    
    l++;
    if(l == 5){
        c = 1;
        if(newx > 1024){
            document.getElementById("all_lost").style.display = "block";
            document.getElementById("image").style.display = "block";
            document.getElementById("image").style.backgroundImage = "url('images/you_lose.png')";
            clearTimeout(t);
            clearTimeout(t2);
        }else{
            document.getElementById("all_lost").style.display = "block";
            document.getElementById("mobile_finish").style.display = "block";
            document.getElementById("mobile_finish2").style.display = "block";
            document.getElementById("image").style.display = "block";
            document.getElementById("image").style.backgroundImage = "url('images/you_lose_mobile.png')";
            clearTimeout(t);
            clearTimeout(t2);
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
    
    if(c == 0){
        if(newx > 1024){
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
}
var l = 0;
var t;
var t2;
var o;
var seconds = 30;
var catch1 = 0;
var newx = 0;
var newy = 0;
var c = 0;
var n = 0;


var n3 = 0;
var n2 = 0;
var n1 = 0;
var n0 = 0;
var n_1 = 0;
var n_z = 0;

var m = 0;

function stop_start(){
    clearTimeout(o);
}
function stop_n3(){
    clearTimeout(n3);
}
function stop_n2(){
    clearTimeout(n2);
}
function stop_m(){
    clearTimeout(n1);
}
function stop_n1(){
    clearTimeout(n1);    
    n_z = setInterval(stop_n111, 0);
    m = setInterval(stop_n_1,1);
    clearTimeout(m);
}
function stop_count(){
    clearTimeout(n0);
}
function stop_n_1(){
    clearTimeout(n_z);
}
function stop_n111(){
    document.getElementById("all_lost").style.display = "none";
    document.getElementById("image").style.display = "none";        
    clearTimeout(m);
}
function num1(){    
    document.getElementById("image").style.backgroundImage = "url('images/1.png')";    
    stop_n111();
    o = setInterval(start2, 0);
    setInterval(stop_start, 0);
}
function num_m(){    
    document.getElementById("image").style.backgroundImage = "url('images/1.png')";    
    m = setInterval(num1, 1000);
    stop_m();
}
function num2(){    
    document.getElementById("image").style.backgroundImage = "url('images/2.png')";    
    n1 = setInterval(num_m, 1000);
    stop_n2();
}
function num3(){
    document.getElementById("all_lost").style.display = "block";
    document.getElementById("image").style.display = "block";
    document.getElementById("image").style.backgroundImage = "url('images/3.png')";    
    n2 = setInterval(num2, 1000);   
    stop_n3(); 
}

function start(){
    n3 = setInterval(num3, 0);
}

function start2(){        
    t = setInterval(bojack, 450);      
    t2 = setInterval(time, 1000);
    setInterval(stop, 30000);          
}

function restart(x){    
    if(x.keyCode == 109){
        window.location.href = "easy.html";
    }
    if(x.keyCode == 113){
        window.location.href = "../index.html";
    }
}

function restart_mobile(){
    window.location.href = "easy.html";
}
function menu(){
    window.location.href ="../index.html";
}