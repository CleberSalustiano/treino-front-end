const whiteCircle = document.querySelector('#white-circle')
const body = document.querySelector('body')

whiteCircle.addEventListener('click', function () {
  body.classList.toggle('night')
  whiteCircle.classList.toggle('night')
})
