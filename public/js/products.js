// import team from './team'
const team = [
  {
    id: 1,
    name: 'Low Cost 1',
    position: 'Php 2,599',
    qoute: `Low cost sample 1`,
    img: '../image/products/3d-output-1-1.jpg'
  },
  {
    id: 2,
    name: 'Low Cost 2',
    position: 'Php 3,599',
    qoute: `Low cost sample 2`,
    img: '../image/products/3d-output-2-1.jpg'
  },
  {
    id: 3,
    name: 'Low Cost 3',
    position: 'Php 3,599',
    qoute: `Low cost sample 3`,
    img: '../image/products/3d-output-3-1.jpg'
  },
  {
    id: 4,
    name: 'Hobbyist 1',
    position: 'Php 4,599',
    qoute: `Hobbyist sample 1`,
    img: '../image/products/3d-output-4-1.jpg'
  },
  {
    id: 5,
    name: 'Hobbyist 2',
    position: 'Php 5,599',
    qoute: `Hobbyist sample 2`,
    img: '../image/products/3d-output-5-1.jpg'
  },
  {
    id: 6,
    name: 'Hobbyist 3',
    position: 'Php 5,599',
    qoute: `Hobbyist sample 3`,
    img: '../image/products/3d-output-6-1.jpg'
  }
]

const author = document.getElementById('name')
const position = document.getElementById('position')
const qoute = document.getElementById('qoute')
const teamImage = document.getElementById('team-image')

const leftBtn = document.getElementById('left-btn')
const rightBtn = document.getElementById('right-btn')

window.addEventListener('DOMContentLoaded', () => {
  showTeam()
})

let currentItem = 0

const showTeam = () => {
  const item = team[currentItem]
  teamImage.src = item.img
  author.textContent = item.name
  position.textContent = item.position
  qoute.textContent = item.qoute
}

leftBtn.addEventListener('click', () => {
  currentItem--
  if (currentItem < 0) {
    currentItem = team.length - 1
  }
  showTeam()
})

rightBtn.addEventListener('click', () => {
  currentItem++
  if (currentItem > team.length - 1) {
    currentItem = 0
  }
  showTeam()
})


