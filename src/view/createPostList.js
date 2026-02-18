import { createPost } from './createPost.js'

const createPostList = (posts, readPostIds) => {
  const listGroup = document.createElement('ul')
  const postElements = posts.map(post => createPost(post, readPostIds))

  listGroup.classList.add('list-group', 'border-0', 'rounded-0')
  listGroup.append(...postElements)

  return listGroup
}

export {
  createPostList,
}
