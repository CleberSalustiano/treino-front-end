let game = document.querySelectorAll('ul[id]')
let isPartIdToken = false
let partplay

function playTime(part) {
  console.log(part)
}

game.forEach(id => {
  let whitePart = id.querySelectorAll('.white')
  partplay = whitePart.forEach(part => {
    part.classList.forEach(partClass => {
      if (partClass === 'token') {
      }
    })
    part.addEventListener('click', () => {
      if (isPartIdToken !== true) {
        part.id = 'token'
        isPartIdToken = true
        playTime(part)
      }
    })
    if (partplay != undefined) {
      return partplay
    }
  })
})
