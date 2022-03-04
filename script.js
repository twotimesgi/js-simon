let container = document.querySelector("#container");
let randTarget = [];
let guess;
let win;
let correctCount;

function hide(){
    container.innerHTML = "";
}

function ask(){
    hide();
    win = true;
    correctCount = 0;
    for(let i = 1; i <= randTarget.length; i++){
        guess = prompt("Inserisci il " + i + "° numero: ");
        if(randTarget.includes(guess)){
            console.log("Il numero " + guess + " è corretto.");
            correctCount += 1;
        }else{
            console.log("il numero " + guess + " è errato.")
            win = false;
        }
    }
    if(win){
        console.log("Complimenti hai indovinato tutti i numeri, hai vinto!");
    }else{
        console.log("Hai totalizzato " + correctCount + " punti.")
    }
}

while (randTarget.length < 5){ 
    let randN = Math.floor(Math.random() * 10).toString(); 
    if(!randTarget.includes(randN)){
        randTarget.push(randN);
        container.innerHTML += randN + " ";
    }
}

setTimeout(ask, 30000);