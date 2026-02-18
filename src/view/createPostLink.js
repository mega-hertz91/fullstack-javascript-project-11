const createPostLink = (post, isRead) => {
  const a = document.createElement('a')

  a.href = post.link
  a.classList.add(isRead ? 'fw-normal' : 'fw-bold')
  a.dataset.id = post.id
  a.target = '_blank'
  a.rel = 'noopener noreferrer'
  a.textContent = post.title

  return a
}

export {
  createPostLink,
}
