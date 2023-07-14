
// Libs
import { PropsWithChildren, useState, createContext, useEffect } from 'react'

// Local context

export type TranslationContextType<
  TLocaleTranslations extends LocaleTranslations = LocaleTranslations
> = {
  localeTranslations: TLocaleTranslations
  locale: string
  setLocale: (locale: Locale) => void
  isLocaleLoading: boolean
}

export const TranslationContext =
  createContext<TranslationContextType | null>(null)

// Local types

export type Locale = string
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type LocaleTranslations = any
export type LocalesTranslations = Record<Locale, () => LocaleTranslations | Promise<LocaleTranslations>>

export type Props = PropsWithChildren<{
  locale: Locale,
  localesTranslations: LocalesTranslations,
  loader?: React.ReactNode,
}>

// Component

const Translation: React.FC<Props> = (props) => {
  const { locale, localesTranslations, loader } = props
  const [localeTranslations, setLocaleTranslation] =
    useState<LocaleTranslations | null>(null)
  const [isLocaleLoading, setIsLocaleLoading] = useState<boolean>(false)

  const setLocale = async (nextLocale: Locale) => {
    setIsLocaleLoading(true)
    const localeTranslations = await localesTranslations[nextLocale]()
    setLocaleTranslation(localeTranslations)
    setIsLocaleLoading(false)
  }

  useEffect(() => {
    setLocale(locale)
  }, [locale])

  if (!localeTranslations) return loader || null

  return (
    <TranslationContext.Provider
      value={{
        locale,
        localeTranslations,
        setLocale,
        isLocaleLoading
      }}
    >
      {props.children}
    </TranslationContext.Provider>
  )
}

export default Translation
