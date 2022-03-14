let game = document.querySelectorAll('ul[id]')
let isPartIdToken = false
let partplay

function playTime(part) {
  let classValue = []
  part.classList.forEach(partClass => {
    classValue.push(partClass)
  })
  if (
    classValue.find(clas => clas === 'pawn') === 'pawn' &&
    classValue.find(clas => clas === 'white') === 'white'
  ) {
    part.addEventListener('click', () => {
      part.id = ''
      isPartIdToken = false
      return isPartIdToken
    })
  }
}

game.forEach(id => {
  let whitePart = id.querySelectorAll('.white')
  partplay = whitePart.forEach(part => {
    part.addEventListener('click', () => {
      if (isPartIdToken !== true) {
        part.id = 'focus'
        isPartIdToken = true
        playTime(part)
      }
    })
    if (partplay != undefined) {
      return partplay
    }
  })
})
