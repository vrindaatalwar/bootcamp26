const boxes = document.querySelectorAll(".box");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
let score = 0;
let timeLeft = 30;
let currentMole = 0;

function moveMole() {

   
    if (currentMole !== 0) {
        boxes[currentMole].textContent = "";
    }

   
    currentMole = Math.floor(Math.random() * boxes.length);

   
    boxes[currentMole].textContent = "🐹";
}



boxes.forEach(function (box) {

    box.addEventListener("click", function () {

        if (Number(box.id) === currentMole) {

            score++;

            boxes[currentMole].textContent = "";
            currentMole = 0;

        } else {

            score--;

            if (score < 0) {
                score = 0;
            }
        }

        scoreDisplay.textContent = score;
    });

});


moveMole();

const game = setInterval(function () {

    moveMole();

    timeLeft--;

    timeDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {

        clearInterval(game);

        if (currentMole !== 0) {
            boxes[currentMole].textContent = "";
        }

        alert("Game Over!\nFinal Score: " + score);
    }

}, 3000);