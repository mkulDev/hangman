export const letters = [
  {id: 'KeyQ', name: 'Q'},
  {id: 'KeyW', name: 'W'},
  {id: 'KeyE', name: 'E'},
  {id: 'KeyR', name: 'R'},
  {id: 'KeyT', name: 'T'},
  {id: 'KeyY', name: 'Y'},
  {id: 'KeyU', name: 'U'},
  {id: 'KeyI', name: 'I'},
  {id: 'KeyO', name: 'O'},
  {id: 'KeyP', name: 'P'},
  {id: 'KeyA', name: 'A'},
  {id: 'KeyS', name: 'S'},
  {id: 'KeyD', name: 'D'},
  {id: 'KeyF', name: 'F'},
  {id: 'KeyG', name: 'G'},
  {id: 'KeyH', name: 'H'},
  {id: 'KeyJ', name: 'J'},
  {id: 'KeyK', name: 'K'},
  {id: 'KeyL', name: 'L'},
  {id: 'KeyZ', name: 'Z'},
  {id: 'KeyX', name: 'X'},
  {id: 'KeyC', name: 'C'},
  {id: 'KeyV', name: 'V'},
  {id: 'KeyB', name: 'B'},
  {id: 'KeyN', name: 'N'},
  {id: 'KeyM', name: 'M'},
]

export const answears = [
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

const hangmanIcon = document.getElementById('hangmanSRC')
const welcomeScreen = document.querySelector('.welcome-screen')
const playBtn = document.querySelector('.play-button')
const playground = document.querySelector('.playground')
const passwordHolder = document.getElementById('password')
const keyboard = document.getElementById('keyboard')
const statusHolder = document.getElementById('status')
const playAgainBtn = document.querySelector('.play-again')
const sound = document.getElementById('failsound')

export {hangmanIcon, welcomeScreen, playBtn, playAgainBtn, playground, passwordHolder, keyboard, statusHolder, sound}
