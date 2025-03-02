let hScore = document.getElementById("h-score")
let gScore = document.getElementById("g-score")
let hCount = 0;
let gCount = 0;

let newGame = document.getElementById("new")

function h1() {
    hCount += 1;
    hScore.textContent = hCount;
}
function h2() {
    hCount += 2;
    hScore.textContent = hCount;
}
function h3() {
    hCount += 3;
    hScore.textContent = hCount;
}
function g1() {
    gCount += 1;
    gScore.textContent = gCount;
}
function g2() {
    gCount += 2;
    gScore.textContent = gCount;
}
function g3() {
    gCount += 3;
    gScore.textContent = gCount;
}

function restart() {
    hCount = 0;
    gCount = 0;
    gScore.textContent = gCount;
    hScore.textContent = hCount;
}
