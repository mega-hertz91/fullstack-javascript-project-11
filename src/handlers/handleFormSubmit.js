import i18next from 'i18next'
import { uniqueId } from 'lodash'
import validateRequired from '../util/validator/required.js'
import validateUrl from '../util/validator/url.js'
import validateUnique from '../util/validator/unique.js'
import { loadFeed } from '../api/loadFeed.js'
import { parse } from '../util/parser.js'
import { checkForUpdates, CHECK_INTERVAL } from '../init/checkForUpdates.js'

const handleFormSubmit = watchedState => (e) => {
  e.preventDefault()
  const formData = new FormData(e.target)
  const url = formData.get('url').trim()
  const feedUrls = watchedState.feeds.map(feed => feed.url)

  const error = validateRequired(url)
    || validateUrl(url)
    || validateUnique(url, feedUrls)

  watchedState.form.error = error
  watchedState.form.isSubmitting = true

  if (error) {
    watchedState.form.isSubmitting = false

    return
  }

  watchedState.loadingProcess.status = 'loading'

  loadFeed(url)
    .then((response) => {
      const { title, description, posts } = parse(response.data.contents)
      const feedId = uniqueId()

      const newFeed = {
        id: feedId,
        url,
        title,
        description,
      }

      const newPosts = posts.map(post => ({
        ...post,
        id: uniqueId(),
        feedId,
      }))

      watchedState.feeds.unshift(newFeed)
      watchedState.posts.unshift(...newPosts)
      watchedState.loadingProcess.status = 'finished'

      if (watchedState.timerId) {
        clearTimeout(watchedState.timerId)
      }

      const startCheckingForUpdates = () => {
        checkForUpdates(watchedState)
          .finally(() => {
            watchedState.timerId = setTimeout(startCheckingForUpdates, CHECK_INTERVAL)
          })
      }

      watchedState.timerId = setTimeout(startCheckingForUpdates, CHECK_INTERVAL)
    })
    .catch((err) => {
      if (err.isParsingError) {
        watchedState.loadingProcess.error = i18next.t('errors.parsingError')
      }
      else {
        watchedState.loadingProcess.error = i18next.t('errors.networkError')
      }
      watchedState.loadingProcess.status = 'failed'
    })
    .finally(() => {
      watchedState.form.isSubmitting = false
    })
}

export {
  handleFormSubmit,
}
