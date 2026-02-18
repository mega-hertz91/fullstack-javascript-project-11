import { createCard } from './createCard.js'

const renderFeeds = (feedsContainer, feeds) => {
  const card = createCard('feeds')
  const listGroup = document.createElement('ul')

  feedsContainer.innerHTML = ''
  listGroup.classList.add('list-group', 'border-0', 'rounded-0')

  feeds.forEach((feed) => {
    const li = document.createElement('li')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')

    li.classList.add('list-group-item', 'border-0', 'border-end-0')
    h3.classList.add('h6', 'm-0')
    h3.textContent = feed.title
    p.classList.add('m-0', 'small', 'text-black-50')
    p.textContent = feed.description
    li.append(h3, p)
    listGroup.append(li)
  })

  card.append(listGroup)
  feedsContainer.append(card)
}

export {
  renderFeeds,
}
