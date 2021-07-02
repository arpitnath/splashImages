//something
import './styles/index.scss'

function App(): HTMLDivElement {
  const element = document.createElement('div')

  element.innerHTML = 'Test success!'

  return element
}

document.body.appendChild(App())
