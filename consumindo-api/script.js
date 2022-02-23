const pA = document.querySelector('#advice > p')
const pC = document.querySelector('#chuck > p')
const pK = document.querySelector('#kenye > p')
// async function get() {
//   const response = await fetch('https://api.adviceslip.com/advice')
//   const data = await response.json()
//   set(data)
// }

// function set(data) {
//   p.textContent = data.slip.advice
// }
// get()

fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(data => {
    // console.log(data.slip.advice)
    pA.textContent = data.slip.advice
  })

fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then(data => {
    pC.textContent = data.value
  })

fetch('https://api.kanye.rest/')
  .then(response => response.json())
  .then(data => {
    pK.textContent = data.quote
  })
