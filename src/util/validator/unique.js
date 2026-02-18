import * as i18n from 'i18next'

const validate = (value, list) => {
  if (list.includes(value)) {
    return i18n.t('validator.unique')
  }
  return false
}

export default validate
