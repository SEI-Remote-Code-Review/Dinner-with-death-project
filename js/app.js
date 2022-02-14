/*-------------------------------- Constants --------------------------------*/
import { pannelQuotes } from "../data/data.js"

/*---------------------------- Variables (state) ----------------------------*/
let playerAlive
let currentPage = 0
/*------------------------ Cached Element References ------------------------*/
const startBtn = document.querySelector('#start-button')
const opBtn = document.querySelectorAll(".option-button")
const resetBtn = document.querySelector("#reset-button")
const contBtn = document.querySelector("#continue-button")
const dialog = document.querySelector(".dialog-box")
/*----------------------------- Event Listeners -----------------------------*/
startBtn.addEventListener("click", init)
resetBtn.addEventListener("click", init)
contBtn.addEventListener("click", nextPage)
/*-------------------------------- Functions --------------------------------*/

function init() {
  startBtn.setAttribute("hidden", true)
  playerAlive = false
  opBtn[0].setAttribute("hidden", true)
  opBtn[1].setAttribute("hidden", true)
  contBtn.removeAttribute("hidden")
  callOne()
}

function nextPage() {
  currentPage += 1
  callOne()
}

function callOne () {
  dialog.textContent = `${pannelQuotes[currentPage]}`
  choiceOne()
}





//if statement for when we reach idx 3 
  //continue button is hidden and option buttons are un hidden
//function to decide what index to show after the option button is clicked
//continue button will come back until another choice




//death pannels will call pState and make the playerAlive be false
function pState() {

  if (playerAlive !== true) {
    opBtn[0].setAttribute("hidden", true)
    opBtn[1].setAttribute("hidden", true)
    opBtn[2].setAttribute("hidden", true)
    resetBtn.removeAttribute("hidden")
  }

}







// death screens will show where your soul ended up. devoured or purgatory depending on where you died.

//End (you Win)
  //small bit about death letting you go.