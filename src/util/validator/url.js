import * as yup from 'yup'
import * as i18n from 'i18next'

const validate = (value) => {
  const schema = yup.string().url()
  if (!schema.isValidSync(value)) {
    return i18n.t('validator.url')
  }
  return false
}

export default validate
