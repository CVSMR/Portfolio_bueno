let userPunt = 0;
let iaPunt = 0;
const userPunt_span = document.getElementById("user-score");
const iaPunt_span = document.getElementById("computer-score");
const scoreBoard = document.querySelector(".score");
const resultado = document.getElementById("resultado");
const piedra_div = document.getElementById("r");
const papel_div = document.getElementById("p");
const tijeras_div = document.getElementById("s");



function IA_Choice() {
    const IA_pob = ['r', 'p', 's']
    const ramdom = Math.floor(Math.random() * 3);
    return IA_pob[ramdom];
   
}


function Game(userChoice) {
    const computerChoice = IA_Choice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            console.log("USERSSSS WINSSSSSSSSSSS, GG")
            resultado.textContent = "Has ganado"
            userPunt++
            userPunt_span.textContent =  userPunt
            break;
        case "rp":
        case "sr":
        case "ps":
            console.log("USERSSSS LOSEEEEEEEEEEEEEEEEEE, BAD")
            resultado.textContent = "Has perdido"
            iaPunt++
            iaPunt_span.textContent = iaPunt.toString()
            
            break;
        case "rr":
        case "pp":
        case "ss":
            console.log("USERSSS DRAWWWW")
            resultado.textContent = "Has empatado"
            break;
    }

}




function main() {
    piedra_div.addEventListener('click', function () {
        console.log("Has tocado el boton de la piedra")
        Game("r")
    })
    papel_div.addEventListener("click", function () {
        console.log("Has tocado el boton del papel")
        Game("p")
    })
    tijeras_div.addEventListener("click", function () {
        console.log("Has tocado el boton que contiene las tijeras")
        Game("s")
    })
}
main()


