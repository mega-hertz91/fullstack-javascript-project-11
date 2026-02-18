const handlePostClick = watchedState => (e) => {
  const { id } = e.target.dataset
  if (id) {
    watchedState.ui.modalPostId = id
    watchedState.ui.readPostIds.add(id)
  }
}

export {
  handlePostClick,
}
