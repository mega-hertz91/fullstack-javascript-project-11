import onChange from 'on-change'

const initState = (elements, render) => {
  const state = {
    form: {
      error: null,
      isSubmitting: false,
    },
    loadingProcess: {
      status: 'idle',
      error: null,
    },
    feeds: [],
    posts: [],
    ui: {
      readPostIds: new Set(),
      modalPostId: null,
    },
    timerId: null,
  }

  return onChange(state, render(state, elements))
}

export {
  initState,
}
