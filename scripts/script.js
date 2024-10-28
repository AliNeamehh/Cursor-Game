
const status = document.getElementById("status");
const start = document.getElementById("start");
const end = document.getElementById("end");
const boundaries = document.querySelectorAll(".boundary");
const gameArea = document.getElementById("game");

let begin=false;
let losing=false;

function initializeGame(){
   
  begin=false;
  losing=false;
  status.textContent=  "Begin by moving your mouse over the 'S'.";
   
}

start.addEventListener("mouseover",()=>{
  initializeGame();
  begin=true;
  status.textContent="Game started! Reach the 'E' without touching the walls.";

});

boundaries.forEach((boundary) => {
  boundary.addEventListener("mouseover", () => {
    if (begin && !losing) {
      gameLost = true;
      boundaries.forEach((b) => b.classList.add("you-lose"));
      status.textContent = "You lost! Try again by moving over 'S'.";
    }
  });
});









