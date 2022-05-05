const player = document.getElementById("player");
const cone = document.getElementById("cone");
const score = document.getElementById("score")
const gameover = document.getElementById("gameover");
const btn = document.getElementById("btn")
let playerScore = 0;
let interval = null;

let scoreCounter = function () {
    playerScore++;
    score.innerHTML = `
    Score <b> ${playerScore} </b>
    `;
}
scoreCounter();

interval = setInterval(scoreCounter, 200)

function jump() {
    if (player.classList != "jump") {
        player.classList.add("jump");

        setTimeout(function () {
            player.classList.remove("jump")
        }, 300);
    }
}

let isAlive = setInterval(function () {
    let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    let coneLeft = parseInt(window.getComputedStyle(cone).getPropertyValue("left"));

    if (coneLeft < 36 && coneLeft > 0 && playerTop >= 40  ) {
        gameover.style.display = "block";
        gameover.innerHTML = `
        <div>GAME OVER </div> 
        <div class ="displayScore">Your score is ${playerScore} </div> 

        <style>
            .displayScore{
             font-size: 30px;
             margin-left: 100px;
            }

            @media only screen and (max-width:739px){
                .displayScore{
                    font-size: 6.8px; 
                    margin-left: 20px;
                }
            }
        </style>
        
        `
        cone.style.animation = "none";
        score.style.display = "none";
        btn.style.display = "block"
    }
}, 10)

document.addEventListener("touchstart", function (e) {
    jump();
})

btn.addEventListener("click", function (e) {
    location.reload()
})