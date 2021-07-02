import home from './pages/home.page'
import { router } from './utils/router'
import { Props, StateProps } from './utils/types'
// import Home from './pages/home.page'

function App(): HTMLDivElement {
  console.log(window.history)
  const state = window.history.state

  console.log('state', state)

  const element = document.createElement('div')
  element.className = 'main'

  router('/', home)

  router('/home', nextPage, { props: { name: 'Mohaaan' } })

  return element
}

export default App

function nextPage(props: Props): void {
  const { state }: StateProps = window.history.state

  console.log('props', props)

  document.addEventListener('DOMContentLoaded', () => {
    const element = document.querySelector('.main')
    const h2 = document.createElement('h2')

    h2.textContent = 'Home Page'

    element.textContent = ` - ${state.name}`
    // element.textContent = `${props.name} - ${state.name}`
    element.appendChild(h2)
    return element
  })
}
