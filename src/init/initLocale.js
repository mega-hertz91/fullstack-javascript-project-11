import i18next from 'i18next'
import ru from '../assets/locale/ru/locale.js'

const initLocale = () => {
  return i18next.init({
    lng: 'ru',
    resources: {
      ru,
    },
  })
}

export {
  initLocale,
}
