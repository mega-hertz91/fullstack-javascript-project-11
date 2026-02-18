const renderModal = (modalElements, post) => {
  const { title, body, fullArticle } = modalElements

  title.textContent = post.title
  body.textContent = post.description
  fullArticle.href = post.link
}

export {
  renderModal,
}
