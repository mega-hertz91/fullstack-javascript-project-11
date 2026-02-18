import i18next from 'i18next'

const handleFinished = (elements) => {
  const { input, form, feedback } = elements

  input.removeAttribute('readonly')
  form.querySelector('button[type="submit"]').disabled = false
  feedback.textContent = i18next.t('success')
  feedback.classList.remove('text-danger')
  feedback.classList.add('text-success')
  form.reset()
  input.focus()
}

export {
  handleFinished,
}
