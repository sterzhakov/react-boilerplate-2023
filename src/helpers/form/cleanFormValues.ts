// Libs
import { pickBy } from 'ramda'

export default function cleanFormValues<T extends object>(formValues: T): Partial<T> {
  return pickBy(value => {
    return (
      value !== undefined &&
      (typeof value === 'string' && value.trim().length !== 0)
    )
  }, formValues)
}
