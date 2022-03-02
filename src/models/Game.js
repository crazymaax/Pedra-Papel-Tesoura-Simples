export class Game {
    constructor(playersChoice){
        this._playersChoice = playersChoice;
    }
    
    static _options = ["Rock", "Paper", "Scissors"];

    playersClick(){

        const playersChoiceContainer = document.querySelector(".gameContainer__player");
        const machineContainer = document.querySelector(".gameContainer__machine")
        const winLoseContainer = document.querySelector(".subVersusArena__winLoseMessage")

        const rock = document.querySelector(".options__rock");
        rock.addEventListener("click", function(){

            if(playersChoiceContainer.childElementCount > 0){

                playersChoiceContainer.innerHTML = ""
                machineContainer.innerHTML = ""
                winLoseContainer.innerHTML = ""

            }

            const img = document.createElement("img")
            img.src = "./src/img/Pedra1.png"
            img.alt = "Escolha do jogador"
            img.classList.add("player__rock")

            const player = document.createElement("h3")
            player.textContent = "Você"

            playersChoiceContainer.appendChild(player)
            playersChoiceContainer.appendChild(img)

            const playersChoice = "Rock"
            Game.machinesTurn(playersChoice)
        })

        const paper = document.querySelector(".options__paper");
        paper.addEventListener("click", function(){
            if(playersChoiceContainer.childElementCount > 0){

                playersChoiceContainer.innerHTML = ""
                machineContainer.innerHTML = ""
                winLoseContainer.innerHTML = ""

            }

            const img = document.createElement("img")
            img.src = "./src/img/Papel1.png"
            img.alt = "Escolha do jogador"
            img.classList.add("player__paper")

            const player = document.createElement("h3")
            player.textContent = "Você"

            playersChoiceContainer.appendChild(player)
            playersChoiceContainer.appendChild(img)
            
            const playersChoice = "Paper"
            Game.machinesTurn(playersChoice)
        })

        const scissors = document.querySelector(".options__scissors");
        scissors.addEventListener("click", function(){
            if(playersChoiceContainer.childElementCount > 0){

                playersChoiceContainer.innerHTML = ""
                machineContainer.innerHTML = ""
                winLoseContainer.innerHTML = ""

            }

            const img = document.createElement("img")
            img.src = "./src/img/Tesoura1.png"
            img.alt = "Escolha do jogador"
            img.classList.add("player__scissors")

            const player = document.createElement("h3")
            player.textContent = "Você"

            playersChoiceContainer.appendChild(player)
            playersChoiceContainer.appendChild(img)

            const playersChoice = "Scissors"
            Game.machinesTurn(playersChoice)
        })

        
    }

    static machinePlay(){
        const maxValor = Game._options.length;

        const valor =  Math.floor(Math.random() * (maxValor - 1 + 1)) + 1;

        return Game._options[valor - 1];
    }


    static machinesTurn(playersChoice){

        const machineOption = Game.machinePlay()

        const machinePlace = document.querySelector(".gameContainer__machine")

        const machineImage = document.createElement("img")

        const machine = document.createElement("h3")
        machine.textContent = "Máquina"
        
        if(machineOption === "Rock"){
            
            machineImage.src = "./src/img/Pedra2.png"
            machineImage.alt = "Pedra"
            machineImage.classList.add("machine_rock")

        }else if(machineOption === "Paper"){

            machineImage.src = "./src/img/Papel2.png"
            machineImage.alt = "Papel"
            machineImage.classList.add("machine_paper")

        }else if(machineOption === "Scissors"){

            machineImage.src = "./src/img/Tesoura2.png"
            machineImage.alt = "Tesoura"
            machineImage.classList.add("machine_scissors")

        }

        machinePlace.appendChild(machine)
        machinePlace.appendChild(machineImage)

        Game.WinLoseAnswer(playersChoice, machineOption)
    }

    static WinLoseAnswer(playersChoice, machinesChoice){

        const winLoseContainer = document.querySelector(".subVersusArena__winLoseMessage")
        const WinLoseMessage = document.createElement("p")

        if(playersChoice === "Rock" && machinesChoice === "Rock" || playersChoice === "Paper" && machinesChoice === "Paper" || playersChoice === "Scissors" && machinesChoice === "Scissors"){

            WinLoseMessage.innerText = "Empate!"

        }else if(playersChoice === "Rock" && machinesChoice === "Scissors" || playersChoice === "Paper" && machinesChoice === "Rock" || playersChoice === "Scissors" && machinesChoice === "Paper"){

            WinLoseMessage.innerText = "Você ganhou!"

        }else{

            WinLoseMessage.innerText = "Você perdeu!"

        }

        winLoseContainer.appendChild(WinLoseMessage)

    }

}
