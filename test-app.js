// import { array } from "prop-types";

let tile = document.getElementById("game-board");


let tiles = document.getElementsByClassName("tile");

let gameBoard = Array(tiles.length)



let buttonOne = document.getElementById("button-one");
let buttonTwo = document.getElementById("button-two");
let buttonThree = document.getElementById("button-three");
let buttonFour = document.getElementById("button-four");
let buttonFive = document.getElementById("button-five");
let buttonSix = document.getElementById("button-six");
let buttonSeven = document.getElementById("button-seven");
let buttonEight = document.getElementById("button-eight");
let buttonNine = document.getElementById("button-nine");


// let gameBoardArray = [
//     tiles[0], tiles[1], tiles[2],
//     tiles[3], tiles[4], tiles[5],
//     tiles[6], tiles[7], tiles[8]
// ]


console.log(gameBoard[2])

let playerOne = document.getElementById("player-one");
let playerTwo = document.getElementById("player-two");
let playerX = "X";
let playerO = "O";
let currentPlayer = playerX;


function tileSelect(event){
    let gameSquare = event.target;
    let gameSquareNumber = gameSquare.dataset.index;
    if (gameSquare.innerText == ""){

    if (currentPlayer === playerX){
        gameSquare.textContent = playerX;
        tile[gameSquareNumber - 1] = playerX;
        currentPlayer = playerO
    } else {
        gameSquare.textContent = playerO;
        tile[gameSquareNumber - 1] = playerO;
        currentPlayer = playerX
    }
    //Top Row//
    if (buttonOne.textContent=="X" && buttonOne.textContent=== buttonTwo.textContent && buttonOne.textContent === buttonThree.textContent){
        let message = document.createElement("p")
            message.textContent= "Player X Wins"
            document.getElementById("game-over-text").appendChild(message)
    } else if (buttonOne.textContent=="O" && buttonOne.textContent=== buttonTwo.textContent && buttonOne.textContent === buttonThree.textContent){
        let message = document.createElement("p")
            message.textContent= "Player O Wins"
            document.getElementById("game-over-text").appendChild(message)
    }
    //Middle Row//
    if (buttonFour.textContent=="X" && buttonFour.textContent=== buttonFive.textContent && buttonFour.textContent === buttonSix.textContent){
        let message = document.createElement("p")
            message.textContent= "Player X Wins"
            document.getElementById("game-over-text").appendChild(message)
    } else if (buttonFour.textContent=="O" && buttonFour.textContent=== buttonFive.textContent && buttonFour.textContent === buttonSix.textContent){
        let message = document.createElement("p")
            message.textContent= "Player O Wins"
            document.getElementById("game-over-text").appendChild(message)
    }
    //Bottom Row//
    if (buttonSeven.textContent=="X" && buttonSeven.textContent=== buttonEight.textContent && buttonSeven.textContent === buttonNine.textContent){
        let message = document.createElement("p")
            message.textContent= "Player X Wins"
            document.getElementById("game-over-text").appendChild(message)
    } else if (buttonSeven.textContent=="O" && buttonSeven.textContent=== buttonEight.textContent && buttonSeven.textContent === buttonNine.textContent){
        let message = document.createElement("p")
            message.textContent= "Player O Wins"
            document.getElementById("game-over-text").appendChild(message)
    }
    //Left Column//
    if (buttonOne.textContent=="X" && buttonOne.textContent=== buttonFour.textContent && buttonOne.textContent === buttonSeven.textContent){
        let message = document.createElement("p")
            message.textContent= "Player X Wins"
            document.getElementById("game-over-text").appendChild(message)
    } else if (buttonOne.textContent=="O" && buttonOne.textContent=== buttonFour.textContent && buttonOne.textContent === buttonSeven.textContent){
        let message = document.createElement("p")
            message.textContent= "Player O Wins"
            document.getElementById("game-over-text").appendChild(message)
    }
    //Middle Column//
    if (buttonTwo.textContent=="X" && buttonTwo.textContent=== buttonFive.textContent && buttonTwo.textContent === buttonEight.textContent){
        let message = document.createElement("p")
            message.textContent= "Player X Wins"
            document.getElementById("game-over-text").appendChild(message)
    } else if (buttonTwo.textContent=="O" && buttonTwo.textContent=== buttonFive.textContent && buttonTwo.textContent === buttonEight.textContent){
        let message = document.createElement("p")
            message.textContent= "Player O Wins"
            document.getElementById("game-over-text").appendChild(message)
    }
    //Right Column//
    if (buttonThree.textContent=="X" && buttonThree.textContent=== buttonSix.textContent && buttonThree.textContent === buttonNine.textContent){
        let message = document.createElement("p")
            message.textContent= "Player X Wins"
            document.getElementById("game-over-text").appendChild(message)
    } else if (buttonThree.textContent=="O" && buttonThree.textContent=== buttonSix.textContent && buttonThree.textContent === buttonNine.textContent){
        let message = document.createElement("p")
            message.textContent= "Player O Wins"
            document.getElementById("game-over-text").appendChild(message)
    }
    //Diagonal - Top Left to Bottom Right//
    if (buttonOne.textContent=="X" && buttonOne.textContent=== buttonFive.textContent && buttonOne.textContent === buttonNine.textContent){
        let message = document.createElement("p")
            message.textContent= "Player X Wins"
            document.getElementById("game-over-text").appendChild(message)
    } else if (buttonOne.textContent=="O" && buttonOne.textContent=== buttonFive.textContent && buttonOne.textContent === buttonNine.textContent){
        let message = document.createElement("p")
            message.textContent= "Player O Wins"
            document.getElementById("game-over-text").appendChild(message)
    }
    //Diagonal - Bottom Left to Top Right//
    if (buttonThree.textContent=="X" && buttonThree.textContent=== buttonFive.textContent && buttonThree.textContent === buttonSeven.textContent){
        let message = document.createElement("p")
            message.textContent= "Player X Wins"
            document.getElementById("game-over-text").appendChild(message)
    } else if (buttonThree.textContent=="O" && buttonThree.textContent=== buttonFive.textContent && buttonThree.textContent === buttonSeven.textContent){
        let message = document.createElement("p")
            message.textContent= "Player O Wins"
            document.getElementById("game-over-text").appendChild(message)
    }

    }
}

tile.addEventListener("click", tileSelect)






