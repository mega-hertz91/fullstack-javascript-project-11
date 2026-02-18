import { uniqueId, differenceBy } from 'lodash'
import { loadFeed } from '../api/loadFeed.js'
import { parse } from '../util/parser.js'

const CHECK_INTERVAL = 5000

const checkForUpdates = (watchedState) => {
  const promises = watchedState
    .feeds
    .map(feed =>
      loadFeed(feed.url)
        .then((response) => {
          const { posts } = parse(response.data.contents)

          const newPosts = differenceBy(posts, watchedState.posts, 'link')
            .map(post => ({
              ...post,
              id: uniqueId(),
              feedId: feed.id,
            }))

          if (newPosts.length > 0) {
            watchedState.posts.unshift(...newPosts)
          }
        })
        .catch((err) => {
          console.error(err)
        }),
    )

  return Promise.all(promises)
}

export {
  checkForUpdates,
  CHECK_INTERVAL,
}
