import { createPostLink } from './createPostLink.js'
import { createPreviewButton } from './createPreviewButton.js'

const createPost = (post, readPostIds) => {
  const li = document.createElement('li')
  const isRead = readPostIds.has(post.id)
  const link = createPostLink(post, isRead)
  const button = createPreviewButton(post)

  li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-start', 'border-0', 'border-end-0')
  li.append(link, button)

  return li
}

export {
  createPost,
}
