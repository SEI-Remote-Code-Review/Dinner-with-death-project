/*-------------------------------- Constants --------------------------------*/
import { pannelQuotes } from "../data/data.js"

/*---------------------------- Variables (state) ----------------------------*/
let playerAlive
let currentPage = 0
/*------------------------ Cached Element References ------------------------*/
const startBtn = document.querySelector("#start-button")
const opBtn = document.querySelectorAll(".option-button")
const opBtn1 = document.getElementById("option1")
const opBtn2 = document.getElementById("option2")
const resetBtn = document.querySelector("#reset-button")
const contBtn = document.querySelector("#continue-button")
const dialog = document.querySelector(".dialog-box")
const deathIdle = document.querySelector("#death-himself")
const deathAttack = document.querySelector("#death-himself2")
/*----------------------------- Event Listeners -----------------------------*/
startBtn.addEventListener("click", init)
resetBtn.addEventListener("click", init)
contBtn.addEventListener("click", nextPage)
/*-------------------------------- Functions --------------------------------*/

function init() {
  contBtn.removeAttribute("hidden")
  deathIdle.removeAttribute("hidden")
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
  dialog.textContent = `${pannelQuotes[currentPage][0]}`
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
    deathIdle.setAttribute("hidden", true)
    deathAttack.removeAttribute("hidden")
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
  finalPannel()
}

function finalPannel() {
  if (pannelQuotes[currentPage] === pannelQuotes[11]){
    contBtn.setAttribute("hidden", true)
    resetBtn.removeAttribute("hidden")
  }
}

