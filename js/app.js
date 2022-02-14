/*-------------------------------- Constants --------------------------------*/
import { pannelQuotes } from "../data/data.js"

/*---------------------------- Variables (state) ----------------------------*/
let playerAlive
let currentPage = 0
/*------------------------ Cached Element References ------------------------*/
const startBtn = document.querySelector('#start-button')
const opBtn = document.querySelectorAll(".option-button")
const opBtn1 = document.getElementById("option1")
const opBtn2 = document.getElementById("option2")
const resetBtn = document.querySelector("#reset-button")
const contBtn = document.querySelector("#continue-button")
const dialog = document.querySelector(".dialog-box")
/*----------------------------- Event Listeners -----------------------------*/
startBtn.addEventListener("click", init)
resetBtn.addEventListener("click", init)
contBtn.addEventListener("click", nextPage)
/*-------------------------------- Functions --------------------------------*/

function init() {
  contBtn.removeAttribute("hidden")
  startBtn.setAttribute("hidden", true)
  opBtn[0].setAttribute("hidden", true)
  opBtn[1].setAttribute("hidden", true)
  resetBtn.setAttribute("hidden", true)
  playerAlive = true
  currentPage = 0
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

opBtn1.addEventListener("click", function(){
  currentPage += 2
  
  callOne()
})

opBtn2.addEventListener("click", function(){
  currentPage += 1
  playerAlive = false
  callOne()
})

function choiceOne() {
  if (playerAlive !== true) {
    opBtn[0].setAttribute("hidden", true)
    opBtn[1].setAttribute("hidden", true)
    resetBtn.removeAttribute("hidden")
  } else {
    if (pannelQuotes[currentPage][1] === true){
      opBtn[0].removeAttribute("hidden", true)
      opBtn[1].removeAttribute("hidden", true)
      contBtn.setAttribute("hidden", true)
    } else {
      opBtn[0].setAttribute("hidden", true)
      opBtn[1].setAttribute("hidden", true)
      contBtn.removeAttribute("hidden", true)
    }
  }
  choiceOneBranch()
}

function choiceOneBranch() {
//   if (opBtn[0] === click) {
//     dialog.textContent = `${pannelQuotes[3]}`
//   } else {
//     dialog.textContent = `${pannelQuotes[4]}`
//   }

}

//if statement for when we reach idx 3 
  //continue button is hidden and option buttons are un hidden
//function to decide what index to show after the option button is clicked
//continue button will come back until another choice

