import i18next from 'i18next'

const createCard = (titleKey) => {
  const card = document.createElement('div')
  const cardBody = document.createElement('div')
  const cardTitle = document.createElement('h2')

  card.classList.add('card', 'border-0')
  cardBody.classList.add('card-body')
  cardTitle.classList.add('card-title', 'h4')
  cardTitle.textContent = i18next.t(titleKey)
  cardBody.append(cardTitle)
  card.append(cardBody)

  return card
}

export {
  createCard,
}
