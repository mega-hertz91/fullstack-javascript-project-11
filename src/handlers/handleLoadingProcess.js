import { handleFinished } from './handleFinished'
import { handleFailed } from './handleFailed'
import { handleLoading } from './handleLoading'

const handleLoadingProcess = (elements, status, error) => {
  switch (status) {
    case 'loading':
      handleLoading(elements)
      break
    case 'failed':
      handleFailed(elements, error)
      break
    case 'finished':
      handleFinished(elements)
      break
    default:
      throw new Error(`Unknown status: ${status}`)
  }
}

export {
  handleLoadingProcess,
}
