// Styles
// import styles from './index.module.scss'

// Libs
import { PropsWithChildren } from 'react'

// Hooks
import { useAppTranslation } from 'src/hooks/translation'

// Units
import PageTitle from 'src/units/PageTitle'
import PageLayout from 'src/units/PageLayout'
import PagePaper from 'src/units/PagePaper'

// Modules
import LocalForm from './modules/LocalForm'

// Local types
export type Props = PropsWithChildren

const UserSettings: React.FC<Props> = () => {
  const t = useAppTranslation()
  return (
    <PageLayout>
      <PageTitle>{t('pages.SettingsUpdate.title')}</PageTitle>
      <PagePaper>
        <LocalForm />
      </PagePaper>
    </PageLayout>
  )
}

export default UserSettings
