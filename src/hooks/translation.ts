// Initializers
import { AppLocaleTranslations, selectBusinessLocaleTranslations, BusinessLocaleTranslations }
  from 'src/initializers/createTranslations'

// Root
import { selectLocale } from 'src/root/Initialize/index.store'
import { useTranslationPayload } from 'src/root/Translation/index.hooks'
import { TranslationContextType } from 'src/root/Translation'
import { translate as translateHelper, TranslateProps }
  from 'src/root/Translation/index.helpers'

// Hooks
import { useAppSelector } from './store'

export const useAppTranslationPayload:
  () => TranslationContextType<AppLocaleTranslations> = useTranslationPayload

export function useAppTranslation() {
  const translationPayload = useAppTranslationPayload()
  const localeTranslations = selectBusinessLocaleTranslations(translationPayload.localeTranslations)
  return function translate(path: TranslateProps<BusinessLocaleTranslations>['path']) {
    return translateHelper({ path, localeTranslations: localeTranslations })
  }
}

export function useAppLocale() {
  const locale = useAppSelector(selectLocale)
  return locale
}
