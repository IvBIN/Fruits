"use strict"
const canvas = document.querySelector("#game");
const ctx = canvas.getContext("2d");

const namePlayer = document.querySelector(".name");
const headScore = document.querySelector(".score");
const countLife = document.querySelector(".life");
const timerGame = document.querySelector(".timer");

const fruitImg01 = new Image();
fruitImg01.src = "./fruit01.png";

const fruitImg02 = new Image();
fruitImg02.src = "./fruit02.png";

const fruitImg03 = new Image();
fruitImg03.src = "./fruit03.png";

const plate = new Image();
plate.src = "./plate.png";

let box = 32;
let score = 0;

let fruit = {
    x: Math.floor(Math.random() * 19) * box,
    y: 1
}

let platePos = {
    x: box/2,
    y: 500
}



// let plate = [];
// plate[0] = {
//     x: 9 * box,
//     y: Math.floor(Math * 19) * box
// }
//
// document.addEventListener("keydown", direction);

let dir;
// let isBan = null;

// function direction(event) {
//     if (isBan) {
//         if (event.keyCode === 39 && dir !== "left") {
//             dir = "right";
//         } else if (event.keyCode === 37 && dir !== "right") {
//             dir = "left";
//
//         // } else if (event.keyCode === 38 && dir !== "down") {
//         //     dir = "up";
//         // } else if (event.keyCode === 40 && dir !== "up") {
//         //     dir = "down";
//         }
//         isBan = false;
//     }
// }

function drawGame() {
    ctx.fillStyle = "#212837";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // isBan = true;

    ctx.drawImage(fruitImg01, fruit.x, fruit.y);
    ctx.drawImage(fruitImg02, fruit.x+1, fruit.y);
    ctx.drawImage(fruitImg03, fruit.x-2, fruit.y);
    ctx.drawImage(plate, platePos.x, platePos.y);

    // for (let i = 0; i < plate.length; i++) {
    //     ctx.fillStyle = "#60cbff";
    //     // ctx.fillRect(snake[i].x, snake[i].y, box, box);
    //     // ctx.fillStyle = "red";
    //     // ctx.fillRect(snake[0].x, snake[0].y, box, box);
    // }
    //
    // let plateX = plate[0].x;
    // let plateY = plate[0].y;
    //
    // if (plateX === fruit.x && plateY === fruit.y) {
    //     fruit = {
    //         x: Math.floor(Math.random() * 19) * box,
    //         y: Math.floor(Math.random() * 19) * box
    //     };
    //     score++;
    // } else {
    //     plate.pop();
    // }
    //
    // if (snakeX < -box || snakeX > box * 19 || snakeY < -box || snakeY > box * 19) {
    //     clearInterval(game);
    //     confirm("Игра окончена" + `\nВаш счет:${score}`) ? location.reload() : "";
    // }

    // if (dir === "left") plateX -= box;
    // if (dir === "right") plateX += box;

    //
    // let newHead = {
    //     x: snakeX,
    //     y: snakeY
    // };

    headScore.innerText = score;

}

let game = setInterval(drawGame, 200);