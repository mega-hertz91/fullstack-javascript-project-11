import 'bootstrap'
import { initLocale } from './initLocale.js'
import { getElements } from './getElements.js'
import { initState } from './initState.js'
import { render } from '../view/render.js'
import { handleFormSubmit } from '../handlers/handleFormSubmit.js'
import { handlePostClick } from '../handlers/handlePostClick.js'

const initApp = () => {
  let elements
  let watchedState

  initLocale()
    .then(
      () => {
        elements = getElements()
        watchedState = initState(elements, render)

        elements.form.addEventListener('submit', handleFormSubmit(watchedState))
        elements.posts.addEventListener('click', handlePostClick(watchedState))
      },
    )
}

export {
  initApp,
}
