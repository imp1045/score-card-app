let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let totalp1 = 0;
let totalp2 = 0;
function p1addone(){
    totalp1+=1;
    p1.innerText=totalp1;
}
function p1addtwo(){
    totalp1+=2;
    p1.innerText=totalp1;
}
function p1addthree(){
    totalp1+=3;
    p1.innerText=totalp1;
}

function p2addone(){
    totalp2+=1;
    p2.innerText=totalp2;
}
function p2addtwo(){
    totalp2+=2;
    p2.innerText=totalp2;
}
function p2addthree(){
    totalp2+=3;
    p2.innerText=totalp2;
}

function reset(){
    totalp1=0;
    totalp2=0;
    p1.textContent=totalp1;
    p2.textContent=totalp2;
}