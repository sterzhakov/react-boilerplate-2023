// import the original type declarations
import 'i18next'
// import all namespaces (for the default language, only)
import ru from 'src/initializers/createTranslations/translations/ru'
// import en from 'src/constants/translations/en'

declare module 'i18next' {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom namespace type, if you changed it
    defaultNS: 'translation'
    // language: 'en' | 'ru',

    // custom resources type
    resources: {
      translation: typeof ru
    }
  }
}
