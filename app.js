const btn = document.querySelector('#btn')
const number = document.querySelector('.output')
const firstNumber = document.querySelector('#number1')
const secondNumber = document.querySelector('#number2')

btn.addEventListener('click', function () {
  const min = parseInt(firstNumber.value)
  const max = parseInt(secondNumber.value)

  let random = Math.floor(Math.random() * (max - min + 1)) + min
  number.innerHTML = random
})
