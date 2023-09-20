let timer = 30;
let score = 0;
let hitVal = 0;
function updateTimerVal(val) {
  document.querySelector("#timeVal").textContent = val;
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
      ).innerHTML = `<h1>Game Over Your Score : ${score}</h1>`;
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
  console.log(evnt.target.textContent);
  //   let hitValu = Number(document.querySelector("#hitVal").textContent);
  let selecteValue = Number(evnt.target.textContent);
  if (hitVal === selecteValue) {
    increaseScore();
    makeBubble();
    makeHit();
  } else {
    evnt.target.style.backgroundColor = "red";
  }
});

updateTimerVal(timer);
makeBubble();
startTimer();
makeHit();
