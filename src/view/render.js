import { renderFeeds } from './renderFeeds.js'
import { renderPosts } from './renderPosts.js'
import { renderModal } from './renderModal.js'
import { handleFormError } from '../handlers/handleFormError.js'
import { handleLoadingProcess } from '../handlers/handleLoadingProcess.js'

const render = (state, elements) => (path, value) => {
  const {
    feeds, posts, modal,
  } = elements

  switch (path) {
    case 'loadingProcess.status':
      handleLoadingProcess(elements, value, state.loadingProcess.error)
      break
    case 'feeds':
      renderFeeds(feeds, value)
      break
    case 'posts':
      renderPosts(posts, value, state.ui.readPostIds)
      break
    case 'ui.readPostIds':
      renderPosts(posts, state.posts, value)
      break
    case 'ui.modalPostId':
      renderModal(modal, state.posts.find(p => p.id === value))
      break
    case 'form.error':
      handleFormError(elements, value)
      break
    default:
      break
  }
}

export {
  render,
}
