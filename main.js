let startButton = document.getElementById('play-button')
let rightColumn = document.getElementById('right')
let right2Column = document.getElementById('right2')
let hangmanIcon = document.getElementById('hangmanSRC')
let hint = document.getElementById('hint')
let passwordPlace = document.getElementById('password')
let buttonAgain = document.getElementById('playAgain')
let failCounter = 0
let password = []
let passwordText = 'PARIS'
const Answers = [
  'AMSTERDAM',
  'ANDORA',
  'ATHENS',
  'BELGRADE',
  'BERN',
  'BRATISLAVA',
  'BERLIN',
  'Copenhagen',
  'Dublin',
  'Helsinki',
  'Kiev',
  'Lisbon',
  'Ljubljana',
  'London',
  'Luxembourg',
  'Madrid',
  'Minsk',
  'Monaco',
  'Oslo',
  'Paris',
  'Podgorica',
  'Prague',
  'Reykjavik',
  'Riga',
  'Sarajevo',
  'Skopje',
  'Sofia',
  'Stockholm',
  'Tallinn',
  'Tirana',
  'Vienna',
  'Vilnius',
  'Warsaw',
  'Zagreb',
]

// genereting password to guess
function generatePassword() {
  passwordText = Answers[Math.floor(Math.random() * Answers.length)].toUpperCase()
  for (let i = 0; i < passwordText.length; i++) {
    password.push('-')
  }
  console.log(password)
}
generatePassword()

// switching an image depending on failCounter Value
function imgSwitch() {
  switch (failCounter) {
    case 1:
      hangmanIcon.src = './resourcess/images/hang1.jpg'
      break
    case 2:
      hangmanIcon.src = './resourcess/images/hang2.jpg'
      break
    case 3:
      hangmanIcon.src = './resourcess/images/hang3.jpg'
      break
    case 4:
      hangmanIcon.src = './resourcess/images/hang4.jpg'
      break
    case 5:
      hangmanIcon.src = './resourcess/images/intro2.jpg'
      break
  }
}
// creating a virtual keyboard with handlebars
const context = {
  keys: [
    {id: 'KeyQ', name: 'Q'},
    {id: 'KeyW', name: 'W'},
    {id: 'KeyE', name: 'E'},
    {id: 'KeyR', name: 'R'},
    {id: 'KeyT', name: 'T'},
    {id: 'KeyY', name: 'Y'},
    {id: 'KeyU', name: 'U'},
    {id: 'KeyI', name: 'I'},
    {id: 'KeyO', name: 'O'},
    {id: 'KeyP', name: 'P', br: true},
    {id: 'KeyA', name: 'A'},
    {id: 'KeyS', name: 'S'},
    {id: 'KeyD', name: 'D'},
    {id: 'KeyF', name: 'F'},
    {id: 'KeyG', name: 'G'},
    {id: 'KeyH', name: 'H'},
    {id: 'KeyJ', name: 'J'},
    {id: 'KeyK', name: 'K'},
    {id: 'KeyL', name: 'L', br: true},
    {id: 'KeyZ', name: 'Z'},
    {id: 'KeyX', name: 'X'},
    {id: 'KeyC', name: 'C'},
    {id: 'KeyV', name: 'V'},
    {id: 'KeyB', name: 'B'},
    {id: 'KeyN', name: 'N'},
    {id: 'KeyM', name: 'M'},
  ],
}

const templateElement = document.getElementById('templateKey')
const templateSource = templateElement.innerHTML
const template = Handlebars.compile(templateSource)
const compiledHtml = template(context)
document.getElementById('keyboard').innerHTML = compiledHtml

function logic() {
  let check = false
  if (failCounter < 5) {
    for (let i = 0; i < passwordText.length; i++) {
      if ('Key' + passwordText[i] === event.code) {
        let currentKey = event.key.toUpperCase()
        password[i] = currentKey
        passwordPlace.innerHTML = password.join('')
        check = true
      }
    }
    if (password.join('') === passwordText) {
      buttonAgain.style.display = 'block'
      alert('you won')
      removeEventListener('keypress', hitKey)
    }
    if (!check && failCounter < 5) {
      const sound = document.getElementById('failsound')
      sound.currentTime = 0
      sound.play()
      failCounter++
      imgSwitch()
      if (failCounter === 5) {
        buttonAgain.style.display = 'block'
        alert('you lose')
      }
    }
  }
}

function hitKey(event) {
  if (failCounter < 5) {
    let key = document.getElementById(event.code)
    if (key && key.style.backgroundColor !== 'rgba(0, 0, 0, 0.5)') {
      logic()
      key.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
    }
    if (key) {
      key.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
    }
  }
}

function reset() {
  failCounter = 0
  password = []
  generatePassword()
  for (let i = 0; i < document.getElementsByClassName('key').length; i++) {
    document.getElementsByClassName('key')[i].style.backgroundColor = ''
  }
  StartGame()
  buttonAgain.style.display = 'none'
}

const StartGame = () => {
  rightColumn.style.display = 'none'
  right2Column.style.display = 'block'
  hangmanIcon.src = './resourcess/images/hang0.jpg'
  passwordPlace.innerHTML = password.join('')
  document.addEventListener('keypress', hitKey)
}

buttonAgain.onclick = function () {
  reset()
  StartGame
}

startButton.onclick = StartGame
