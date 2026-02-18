const parse = (xmlString) => {
  const parser = new DOMParser()
  const doc = parser.parseFromString(xmlString, 'application/xml')
  const errorNode = doc.querySelector('parsererror')

  if (errorNode) {
    const error = new Error(errorNode.textContent)
    error.isParsingError = true
    throw error
  }

  const feedTitle = doc.querySelector('channel > title').textContent
  const feedDescription = doc.querySelector('channel > description').textContent

  const posts = Array.from(doc.querySelectorAll('item')).map(item => ({
    title: item.querySelector('title').textContent,
    description: item.querySelector('description').textContent,
    link: item.querySelector('link').textContent,
  }))

  return { title: feedTitle, description: feedDescription, posts }
}

export {
  parse,
}
