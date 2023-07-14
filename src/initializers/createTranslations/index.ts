// Local types

export enum AppLocales {
  en = 'en',
  ru = 'ru'
}

export type AppLocaleTranslations =
  Awaited<ReturnType<(typeof APP_TRANSLATIONS)[AppLocales]>>

export type BusinessLocaleTranslations =
  ReturnType<typeof selectBusinessLocaleTranslations>
export type AntdLocaleTranslations =
  ReturnType<typeof selectAntdLocaleTranslations>

// Local constants

export const DEFAULT_LOCALE = AppLocales.ru

export const APP_TRANSLATIONS = {
  [AppLocales.ru]: async () => {
    return {
      business: await import('src/initializers/createTranslations/translations/ru'),
      antd: await import('antd/locale/ru_RU'),
    }
  },
  [AppLocales.en]: async () => {
    return {
      business: await import('src/initializers/createTranslations/translations/en'),
      antd: await import('antd/locale/en_US'),
    }
  },
}

// Local selectors

export function selectBusinessLocaleTranslations(translations: AppLocaleTranslations) {
  return translations.business.default;
}

export function selectAntdLocaleTranslations(translations: AppLocaleTranslations) {
  return translations.antd.default;
}

// Initializer

export default function createTranslations() {
  return APP_TRANSLATIONS;
}



