import i18next from 'i18next'

const createPreviewButton = (post) => {
  const button = document.createElement('button')

  button.type = 'button'
  button.classList.add('btn', 'btn-outline-primary', 'btn-sm')
  button.dataset.id = post.id
  button.dataset.bsToggle = 'modal'
  button.dataset.bsTarget = '#modal'
  button.textContent = i18next.t('preview')

  return button
}

export {
  createPreviewButton,
}
