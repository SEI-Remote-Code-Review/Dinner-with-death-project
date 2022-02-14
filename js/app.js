/*-------------------------------- Constants --------------------------------*/
import { pannelQuotes } from "../data/data.js"

/*---------------------------- Variables (state) ----------------------------*/
let playerAlive

/*------------------------ Cached Element References ------------------------*/
const startBtn = document.querySelector('#start-button')
const opBtn = document.querySelectorAll(".option-button")
const resetBtn = document.querySelector("#reset-button")
const contBtn = document.querySelector("#continue-button")

/*----------------------------- Event Listeners -----------------------------*/
startBtn.addEventListener("click", init)
resetBtn.addEventListener("click", init)

/*-------------------------------- Functions --------------------------------*/

function init() {
  startBtn.setAttribute("hidden", true)
  playerAlive = true
  opBtn[0].setAttribute("hidden", true)
  opBtn[1].setAttribute("hidden", true)
  opBtn[2].setAttribute("hidden", true)
  contBtn.removeAttribute("hidden")
  callOne()
}






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