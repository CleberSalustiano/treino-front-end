let game = document.querySelectorAll('ul[id]')

game.forEach(id => {
  let whitePart = id.querySelectorAll('.white')
  whitePart.forEach(part => {
    part.classList.forEach(partClass => {
      if (partClass === 'token') {
      }
    })
    part.addEventListener('click', () => {
      if (part.id === 'token') {
        console.log('arroz')
      } else part.classList.value === 'pawn white'
      {
        part.id = 'token'
      }
    })
  })
})
