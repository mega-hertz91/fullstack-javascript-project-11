const handleFormError = (elements, error) => {
  const { feedback, input } = elements

  if (error) {
    feedback.textContent = error
    input.classList.add('is-invalid')
    feedback.classList.remove('text-success')
    feedback.classList.add('text-danger')
  }
  else {
    feedback.textContent = ''
    input.classList.remove('is-invalid')
  }
}

export {
  handleFormError,
}
