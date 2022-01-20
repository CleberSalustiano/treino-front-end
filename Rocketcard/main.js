async function getContent() {
  const response = await fetch('https://api.github.com/users/CleberSalustiano')
  const data = await response.json()
  setaCard(data)
}

function setaCard(api) {
  const login = api.login
  const img = api.avatar_url
  const informations = {
    Seguidores: api.followers,
    Seguindo: api.following,
    Repositórios: api.public_repos,
    Twitter: api.twitter_username
  }
  let output = ''
  for (let information in informations) {
    output += `<li>${informations[information]} ${information}</li>`
    console.log(output)
  }

  document.querySelector('#login').textContent = login
  document.querySelector('#profile-image').setAttribute('src', img)
  document.querySelector('#information').innerHTML = output
}

getContent()
