// Libs
import { getByPath, Path } from 'dot-path-value'

export type TranslateProps<Translations> = {
  path: Path<Translations>,
  localeTranslations: Translations
}
export const translate =
<Translations extends object>(props: TranslateProps<Translations>): string => {
  const { path, localeTranslations } = props
  const localeTranslation = getByPath(localeTranslations, path)
  if (typeof localeTranslation === 'undefined')
    throw new Error(`Locale translations path: "${path}" not found!`)
  if (typeof localeTranslation !== 'string')
    throw new Error(`Locale translations path: "${path}" should be a string!`)
  return localeTranslation
}

