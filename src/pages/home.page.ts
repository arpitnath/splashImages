import { Props } from '../utils/types'

const home = (props: Props): void => {
  document.addEventListener('DOMContentLoaded', () => {
    const element = document.querySelector('.main')

    element.textContent = 'Test success! from Home'

    const btn = document.createElement('button')
    btn.className = 'next'

    btn.innerHTML = 'next'
    btn.addEventListener('click', () => {
      document.location.assign('/home')
    })

    element.appendChild(btn)

    return element
  })
}

export default home
