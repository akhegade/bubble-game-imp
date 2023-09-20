let timer = 60;
let score = 0;
let hitVal = 0;
function updateTimerVal(val) {
  document.querySelector("#timeVal").textContent = val;
}

function updateScoreVal(val) {
  document.querySelector("#scoreVal").textContent = val;
}

function makeBubble() {
  let clutter = "";
  for (let i = 1; i <= 170; i++) {
    clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}

function startTimer() {
  let timerInv = setInterval(() => {
    if (timer > 0) {
      timer--;
      updateTimerVal(timer);
    } else {
      clearInterval(timerInv);
      document.querySelector(
        "#pbtm"
      ).innerHTML = `<div class="game-over-container"><h1>Game Over, Your Score : <span>${score}</span></h1><button id="#restart" onclick="onReStart()">Restart The Game</button></div>`;
    }
  }, 1000);
}

function makeHit() {
  hitVal = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = hitVal;
}

function increaseScore() {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function (evnt) {
  console.log("(evnt.target):", evnt);

  let selecteValue = Number(evnt.target.textContent);
  if (hitVal === selecteValue) {
    increaseScore();
    makeBubble();
    makeHit();
  } else {
    evnt.target.attributes[0].nodeValue === "bubble"
      ? (evnt.target.style.backgroundColor = "red")
      : null;
  }
});

function onReStart() {
  timer = 60;
  score = 0;
  updateTimerVal(timer);
  makeBubble();
  makeHit();
  startTimer();
  updateScoreVal(score);
}

updateTimerVal(timer);
makeBubble();
startTimer();
makeHit();
