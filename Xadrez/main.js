/* 
  Refazer completamente o js
*/

/*
let html = ''
game.forEach(line => {
  html = ''
  let id = line.id
  for (const element of positions[id]) {
    html += element.outerHTML
  }
  console.log(html)
  game[line] = html
})

game[0].innerHTML =
  '<li><div class="tower white">Torre</div></li><li><div class="horse white">Cavalo</div></li><li><div class="bishop white">Bispo</div></li><li><div class="queen white">Rainha</div></li><li><div class="king white">Rei</div></li><li><div class="bishop white">Bispo</div></li><li><div class="horse white">Cavalo</div></li><li><div class="tower white">Torre</div></li>'
*/

let main = document.querySelector('#game')
let game = document.querySelectorAll('ul[id]')
let positions = {}
let nodesParts = []
// let blackParts = []
// let whiteParts = []
let isPartIdToken = false

function get() {
  game.forEach(line => {
    let id = line.id
    let nodes = line.children
    positions[id] = nodes
    if (line.querySelectorAll('div').length != 0) {
      nodesParts.push(line.querySelectorAll('div'))
    }
  })
}

function movimentPart(part, parts) {
  get()
  if (
    part.classList.value.split(' ')[0] == 'pawn' &&
    part.classList.value.split(' ')[1] == 'white'
  ) {
    let index
    let bool = false
    let keyImportant = ''

    console.log(keyImportant)
  }
}

/* Recriar para mantar para movimentPart a posição e a peça que vai ser movida */
function lister() {
  nodesParts.forEach(parts => {
    parts.forEach(part => {
      part.addEventListener('click', () => {
        if (isPartIdToken !== true) {
          part.classList.add('focus')
          isPartIdToken = true
          movimentPart(part, parts)
        } else if (part.classList.value.split(' ')[2] == 'focus') {
          part.classList.remove('focus')
          isPartIdToken = false
        }
      })
    })
  })
}

get()
lister()
// pawn = blackParts.querySelector('pawn')
// pawn.addEventListener('click', () => {
//   console.log('here')
// })
