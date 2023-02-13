const btn = document.getElementById('btn')
const inp = document.getElementById('inp')
const number = Math.floor(Math.random() * 101) + 1
const ul = document.querySelector('ul')
let resetBtn = null

btn.addEventListener('click', function (e) {
  e.preventDefault()
  const li = document.createElement('li')
  console.log(e.target)
  console.log(number)
  if (+inp.value === number) {
    var banner = document.getElementById('banner')
    banner.classList.remove('hidden')

    for (var i = 0; i < 100; i++) {
      var firework = document.createElement('div')
      firework.classList.add('firework')
      firework.style.left = Math.random() * 100 + '%'
      firework.style.animationDelay = Math.random() * 10 + 's'
      document.getElementById('fireworks').appendChild(firework)
    }
  } else {
    li.textContent = `Try Again. Your guess was: ${inp.value}`
    ul.appendChild(li)
  }
  inp.value = ''
})
