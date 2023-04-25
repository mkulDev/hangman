import {answears, letters, hangmanIcon, welcomeScreen, playBtn, playAgainBtn, playground, passwordHolder, keyboard, statusHolder, sound} from './constants.js'

let failCounter = 0
let gameResolved = false
// changing welcome screnn to playground
function switchScreen(element) {
  element?.classList.contains('active') ? element?.classList.replace('active', 'hidden') : element?.classList.replace('hidden', 'active')
}

playBtn.addEventListener('click', () => {
  imgSwitch()
  switchScreen(welcomeScreen)
  switchScreen(playground)
})

// create a password
let answear = []
let password = []
function createNewAnswear(arr) {
  const randomAnswear = arr?.[Math.floor(Math.random() * (arr?.length - 1))].toUpperCase()
  answear = Array.from(randomAnswear)
  password = answear.map((element) => {
    return '-'
  })
  passwordHolder.innerText = password.join('')
}

// create a keyboard
letters.forEach((item) => {
  const newDiv = document.createElement('div')
  newDiv.id = item.id
  newDiv.innerText = item.name
  newDiv.classList.add('key')
  keyboard.appendChild(newDiv)
  if (item?.name === 'P' || item?.name === 'L') {
    const newBr = document.createElement('br')
    keyboard.appendChild(newBr)
  }
})
const keys = document.querySelectorAll('.key')

// Main Logic

function imgSwitch() {
  if (failCounter === 0) return (hangmanIcon.src = './resourcess/images/hang0.jpg')
  if (failCounter === 1) return (hangmanIcon.src = './resourcess/images/hang1.jpg')
  if (failCounter === 2) return (hangmanIcon.src = './resourcess/images/hang2.jpg')
  if (failCounter === 3) return (hangmanIcon.src = './resourcess/images/hang3.jpg')
  if (failCounter === 4) return (hangmanIcon.src = './resourcess/images/hang4.jpg')
  hangmanIcon.src = './resourcess/images/intro2.jpg'
}

const logic = (element) => {
  const letter = element.innerText
  console.log(answear)
  console.log(password)

  if (answear.indexOf(letter) > -1) {
    for (let i = 0; i < answear.length; i++) {
      answear[i] === letter ? (password[i] = letter) : null
    }
    passwordHolder.innerText = password.join('')
  }

  if (answear.indexOf(letter) === -1) {
    sound.currentTime = 0
    sound.play()
    console.log(failCounter)
    failCounter++
    imgSwitch()
  }

  if (failCounter === 5) {
    gameResolved = true
    statusHolder.innerText = 'You Lose!'
    switchScreen(playAgainBtn)
  }

  if (failCounter < 5 && answear.join('') === passwordHolder.innerText) {
    gameResolved = true
    statusHolder.innerText = 'You Win!'
    switchScreen(playAgainBtn)
  }
}
function hitKeys(element) {
  if (element.style.backgroundColor !== 'rgba(0, 0, 0, 0.5)' && failCounter < 5 && gameResolved === false) {
    element.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
    logic(element)
  }
}

const startGame = () => {
  statusHolder.innerText = ''
  createNewAnswear(answears)
  failCounter = 0
  keys.forEach((el) => (el.style.backgroundColor = ''))
}
// listener of clicking and hiting a key

document.addEventListener('keypress', (event) => {
  const regex = /([a-z])/gi
  if (regex.test(event.key)) {
    const key = document.getElementById(event.code)
    hitKeys(key)
  }
})

keys.forEach((element) =>
  element.addEventListener('click', (element) => {
    hitKeys(element.target)
  })
)

startGame()
playAgainBtn.addEventListener('click', () => {
  switchScreen(playAgainBtn)
  startGame()
  imgSwitch()
  gameResolved = false
})
