import { soundsTimer } from "./sounds.js"


//variaveis

const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const buttonAddMinutes = document.querySelector('.add-minutes')
const buttonSubMinutes = document.querySelector('.sub-minutes')
const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffee = document.querySelector('.coffee')
const buttonFirePlace = document.querySelector('.fireplace')
let minutesIni = Number(minutesDisplay.textContent)


//eventos

buttonPlay.addEventListener('click', countDown)
buttonStop.addEventListener('click', function () {
  clearTimeout(timeTimerOut)
})

buttonAddMinutes.addEventListener('click', function () {

  let minutes = Number(minutesDisplay.textContent)
  minutesDisplay.textContent = String(minutes + 5).padStart(2, "0")

})

buttonSubMinutes.addEventListener('click', function () {

  let minutes = Number(minutesDisplay.textContent)
  if (minutes >= 5) {
    minutesDisplay.textContent = String(minutes - 5).padStart(2, "0")
  }
})

buttonForest.addEventListener('click', function () {
  buttonForest.classList.add('back-color')
  buttonRain.classList.remove('back-color')
  buttonCoffee.classList.remove('back-color')
  buttonFirePlace.classList.remove('back-color')
  
  soundsTimer.buttonPressAudioCoffee.pause()
  soundsTimer.buttonPressAudioFirePlace.pause()
  soundsTimer.buttonPressAudioRain.pause()
  soundsTimer.buttonPressAudioForest.play()
})

buttonRain.addEventListener('click', function () {
  buttonForest.classList.remove('back-color')
  buttonRain.classList.add('back-color')
  buttonCoffee.classList.remove('back-color')
  buttonFirePlace.classList.remove('back-color')
  
  soundsTimer.buttonPressAudioCoffee.pause()
  soundsTimer.buttonPressAudioFirePlace.pause()
  soundsTimer.buttonPressAudioRain.play()
  soundsTimer.buttonPressAudioForest.pause()
})

buttonCoffee.addEventListener('click', function () {
  buttonForest.classList.remove('back-color')
  buttonRain.classList.remove('back-color')
  buttonCoffee.classList.add('back-color')
  buttonFirePlace.classList.remove('back-color')
  
  soundsTimer.buttonPressAudioCoffee.play()
  soundsTimer.buttonPressAudioFirePlace.pause()
  soundsTimer.buttonPressAudioRain.pause()
  soundsTimer.buttonPressAudioForest.pause()
})

buttonFirePlace.addEventListener('click', function () {
  buttonForest.classList.remove('back-color')
  buttonRain.classList.remove('back-color')
  buttonCoffee.classList.remove('back-color')
  buttonFirePlace.classList.add('back-color')
  
  soundsTimer.buttonPressAudioCoffee.pause()
  soundsTimer.buttonPressAudioFirePlace.play()
  soundsTimer.buttonPressAudioRain.pause()
  soundsTimer.buttonPressAudioForest.pause()
})



//funções

function countDown() {
  
  let timeTimerOut
  
  timeTimerOut = setTimeout(function () {
  let minutes = Number(minutesDisplay.textContent)
  let seconds = Number(secondsDisplay.textContent)

  
    
  if (minutes <= 0 && seconds <= 0) {
    minutesDisplay.textContent = minutesIni
    return
  }

  if (seconds <= 0) {
    seconds = 60
    --minutes
  }
    secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
  countDown()
}, 1000)
}


