// Libs
import { useContext } from 'react'

// Root
import { TranslationContext } from './index'

// Local hooks
export function useTranslationPayload() {
  const translationPayload = useContext(TranslationContext)
  if (!translationPayload) throw new Error('Translation payload is null!')
  return translationPayload
}

