import { createCard } from './createCard.js'
import { createPostList } from './createPostList.js'

const renderPosts = (postsContainer, posts, readPostIds) => {
  const card = createCard('posts')
  const postList = createPostList(posts, readPostIds)

  postsContainer.innerHTML = ''
  card.append(postList)
  postsContainer.append(card)
}

export {
  renderPosts,
}
