/*-------------------------------- Constants --------------------------------*/


/*---------------------------- Variables (state) ----------------------------*/
let playerAlive

/*------------------------ Cached Element References ------------------------*/
const startBtn = document.querySelector('#start-button')
const opBtn = document.querySelectorAll(".option-button")
const resetBtn = document.querySelector("#reset-button")

/*----------------------------- Event Listeners -----------------------------*/
startBtn.addEventListener("click", init)


/*-------------------------------- Functions --------------------------------*/

function init() {
  startBtn.setAttribute("hidden", true)
  playerAlive = true
  pState()
}

function pState() {
  if (playerAlive !== true) {
    opBtn[0].setAttribute("hidden", true)
    opBtn[1].setAttribute("hidden", true)
    opBtn[2].setAttribute("hidden", true)
    resetBtn.removeAttribute("hidden")
  }
}



//main screen 
  //// will be centered, not full page.
  ////should be able to see a start button, the title of the game, and a background



//mechanics
  ////3 buttons will always be visable while the game is running.
    ////upon death they will be removed
      ////replaced by a restart button


// pannel 1
  // into duction to the game as

// pannel 2
  //

// pannel 3
  //
  
// pannel 4

// pannel 5

// pannel 6

// pannel 7

// pannel 8

// pannel 9

// pannel 10

// pannel 11

// pannel 12

// death screens will show where your soul ended up. devoured or purgatory depending on where you died.

//End (you Win)
  //small bit about death letting you go.