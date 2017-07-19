import './styles/style.css'

function component() {
  const element = document.createElement('h1')

  element.innerHTML = 'Frontend Project Starter'
  element.classList.add('hello')

  return element
}

document.body.appendChild(component())
