// Hooks
import { useAppUser } from 'src/hooks/access'
import { useAppLocale } from 'src/hooks/translation'

// Initializers
import createTranslations from 'src/initializers/createTranslations'

// Libs
import { useMemo } from 'react'

// Root
import Access from '../Access'
import Translation from '../Translation'
import TranslationLoader from '../TranslationLoader'
import Antd from '../Antd'
import AppRouter from '../AppRouter'

// Initializers
import createAccess from 'src/initializers/createAccess'

// Local types
const Initialize: React.FC = () => {
  const isLoading = false

  const user = useAppUser()
  const access = useMemo(() => createAccess({ role: user.role }), [])

  if (isLoading) {
    // TODO: create universal not dependent on antd lib loader
    return 'App initialization...'
  }

  const localesTranslations = useMemo(() => createTranslations(), [])
  const locale = useAppLocale()

  return (
    <Access permissions={access.permissions}>
      <Translation
        loader={<TranslationLoader />}
        locale={locale}
        localesTranslations={localesTranslations}
      >
        <Antd>
          <AppRouter />
        </Antd>
      </Translation>
    </Access>
  )
}

export default Initialize
