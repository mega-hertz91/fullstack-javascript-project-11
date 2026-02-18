const handleLoading = (elements) => {
  const { input, form } = elements

  input.setAttribute('readonly', true)
  form.querySelector('button[type="submit"]').disabled = true
}

export {
  handleLoading,
}
