const btn = document.getElementById('btn')
const inp = document.getElementById('inp')
const number = Math.floor(Math.random() * 101) + 1

btn.addEventListener('click', function (e) {
  e.preventDefault()
  console.log(e.target)
  console.log(number)
  if (+inp.value === number) {
    console.log('you guessed the right number')
  } else {
    console.log('try again')
  }
})
