// import team from './team'
const team = [
  {
    id: 1,
    name: 'Alexis Cochico',
    position: 'Co-Founder',
    qoute: `One of the best 3D Printing Service that you will experience.`,
    img: '../image/team/alex-1.jpg'
  },
  {
    id: 2,
    name: 'Arjay Fox Callanta',
    position: 'Founder',
    qoute:
      'The next episode of 3D printing will involve printing entirely new kinds of materials. Eventually we will print complete products - circuits, motors, and batteries already included.',
    img: '../image/team/arjay-1.jpg'
  },
  {
    id: 3,
    name: 'Jonslogar M. Arenque',
    position: 'Co-Founder',
    qoute: 'Making top-tier 3D and other printing services.',
    img: '../image/team/jonslogar-2.jpg'
  },
  {
    id: 4,
    name: 'Elaica G. Jacinto',
    position: 'Sales Manager',
    qoute: `3D printing is a concept that best represents the fabrication of various creative ideas.`,
    img: '../image/team/elaica-1.jpg'
  },
  {
    id: 5,
    name: 'Mary Joy H. Gunita',
    position: 'Marketing Business Manager',
    qoute: `Don’t let your imagination stay in the clouds, 3D printing makes any idea real.`,
    img: '../image/team/mary-joy-1.jpg'
  },
  {
    id: 6,
    name: 'Kristal Kate Tabares',
    position: 'Operations Business Manager',
    qoute: `Making your ideas to reality meet through serving quality 3D services for everyone: students, professionals, hobbyists, and many more!`,
    img: '../image/team/kristal-2.jpg'
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

const myObj = {
  nameObj: 'Sample Object',
  ageObj: 25,
  goodObj: true,
  arrObj: [1, 2, 3]
}

const { nameObj, ageObj } = myObj
console.log(nameObj, ageObj)
