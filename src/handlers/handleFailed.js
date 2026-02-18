const handleFailed = (elements, error) => {
  const { input, form, feedback } = elements

  input.removeAttribute('readonly')
  form.querySelector('button[type="submit"]').disabled = false
  feedback.textContent = error
  feedback.classList.remove('text-success')
  feedback.classList.add('text-danger')
}

export {
  handleFailed,
}
