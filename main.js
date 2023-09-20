let timer = 60;
let score = 0;
let hitVal = 0;

/*@function-name:updateElementContent
  @params: val : values to be deplpayed 
           eleId : element id in which val should painted
 @return : not retur anything
*/
function updateElementContent(val, eleId) {
  document.querySelector(eleId).textContent = val;
}

/*@function-name:makeBubble
  @desc : funtion will created new element with specified time
  @params: not required 
           
 @return : not return anything
*/
function makeBubble() {
  let clutter = "";
  for (let i = 1; i <= 168; i++) {
    clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}

/*
@function-name:startTimer
@desc: function will add timer to page, on timer done , will clear interval and add new elements to pbtm tag
*/
function startTimer() {
  let timerInv = setInterval(() => {
    if (timer > 0) {
      timer--;
      updateElementContent(timer, "#timeVal");
    } else {
      clearInterval(timerInv);
      document.querySelector(
        "#pbtm"
      ).innerHTML = `<div class="game-over-container"><h1>Game Over, Your Score : <span>${score}</span></h1><button id="#restart" onclick="onReStart()">Restart The Game</button></div>`;
    }
  }, 1000);
}

/*
@function-name:makeHit
@desc: function will create random number and it to hit box 
*/
function makeHit() {
  hitVal = Math.floor(Math.random() * 10);
  updateElementContent(hitVal, "#hitVal");
}

/*
@function-name:increaseScore
@desc: function will compute the score and it will add score to score section 
*/
function increaseScore() {
  score += 10;
  updateElementContent(score, "#scoreVal");
}

/*
adding event to pbtm element , when element within the pbtm tab clicked ,
function will check wether hitVal and clicked value is same ,
if same it will call the increasScore , makeBubble and makeHit function
else , it will updat backgound color of element into red, which means both are not same
*/
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

/*
@function-name:onReStart
@desc: function will reset all value to default value 
*/
function onReStart() {
  timer = 60;
  score = 0;
  updateElementContent(timer, "#timeVal");
  makeBubble();
  makeHit();
  startTimer();
  updateElementContent(score, "#scoreVal");
}

updateElementContent(timer, "#timeVal");
makeBubble();
startTimer();
makeHit();
