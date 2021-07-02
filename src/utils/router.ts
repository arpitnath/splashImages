import { Props, StateProps } from './types'

export interface IRouter {
  path: string
  component: () => void
  args?: StateProps
}

export const router = (
  path: string,
  component: (args?: Props) => void,
  args?: Props
): void => {
  const route = document.location.pathname

  if (route === path) {
    window.history.pushState(args, 'newPage', path)
    return component(args)
  }
}
