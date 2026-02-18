import * as i18n from 'i18next'

const validate = (value) => {
  if (
    value === null
    || value === undefined
    || value === ''
  ) {
    return i18n.t('validator.required')
  }

  return false
}

export default validate
