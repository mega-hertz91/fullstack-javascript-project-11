const getElements = () => ({
  form: document.querySelector('.rss-form'),
  input: document.querySelector('.form-control'),
  feedback: document.querySelector('.feedback'),
  feeds: document.querySelector('.feeds'),
  posts: document.querySelector('.posts'),
  modal: {
    title: document.querySelector('.modal-title'),
    body: document.querySelector('.modal-body'),
    fullArticle: document.querySelector('.full-article'),
  },
})

export {
  getElements,
}
