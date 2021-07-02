import './styles/index.scss'
import App from './App'

function index(): HTMLDivElement {
  const element = document.createElement('div')
  element.className = 'root'

  element.appendChild(App())

  return element
}

document.body.appendChild(index())
