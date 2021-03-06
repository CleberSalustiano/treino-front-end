const header = document.querySelector('header div')
const spaces = document.querySelectorAll('#game .container ul li')
const reset = document.querySelector('section .container .button')
let playerOneMoves = 0
let playerTwoMoves = 0
let playerOneCombination = ''
let playerTwoCombination = ''
const winningMoves = [
  ['1', '2', '3'],
  ['1', '4', '7'],
  ['4', '5', '6'],
  ['2', '5', '8'],
  ['7', '8', '9'],
  ['3', '6', '9'],
  ['1', '5', '9'],
  ['7', '5', '3']
]

let ganhouB = 0

function ganhou(playerCombination, player) {
  for (let i = 0; i < playerCombination.length; i++) {
    const element = playerCombination[i]
    spaces.forEach(space => {
      if (space.id == element) {
        space.classList.add('winner')
      } else {
        space.classList.add('block')
      }
    })
    ganhouB = 1
  }
  header.classList.add('winner')
  if (player == 'X') {
    header.textContent = 'Jogador 1 ganhou'
  } else {
    header.textContent = 'Jogador 2 ganhou'
  }
}

function comparation(playerCombination, result, player) {
  if (playerCombination.length >= 3) {
    for (const winningMove of winningMoves) {
      for (const char of winningMove) {
        for (let i = 0; i < playerCombination.length; i++) {
          const element = playerCombination[i]
          if (char == element) {
            result++
            if (result == 3) {
              ganhou(winningMove, player)
            }
          } else {
            continue
          }
        }
      }
      result = 0
    }
  }
}

function resetButton() {
  spaces.forEach(space => {
    space.classList.remove('block')
    header.classList.remove('winner')
    space.classList.remove('winner')
    space.classList.remove('old')
    playerOneMoves = 0
    playerTwoMoves = 0
    playerOneCombination = ''
    playerTwoCombination = ''
    space.textContent = ''
    header.textContent = 'Jogador 1'
    ganhouB = 0
  })
}

spaces.forEach(space => {
  space.addEventListener('click', () => {
    const isBlock = space.classList.value
    if ((playerOneMoves == playerTwoMoves) & !isBlock) {
      playerOneMoves++
      playerOneCombination += space.id
      header.textContent = 'Jogador 2'
      space.textContent = 'X'
    } else if (!isBlock) {
      playerTwoMoves++
      playerTwoCombination += space.id
      header.textContent = 'Jogador 1'
      space.textContent = 'O'
    }

    if (!isBlock) {
      space.classList.toggle('block')
    }

    let result = 0

    comparation(playerOneCombination, result, 'X')

    comparation(playerTwoCombination, result, 'O')

    if (playerOneMoves + playerTwoMoves >= 9 && ganhouB != 1) {
      header.textContent = 'Deu velha'
      spaces.forEach(space => {
        space.classList.add('old')
      })
    }

    reset.addEventListener('click', resetButton)
  })
})
