// Styles
import styles from './index.module.scss'

// Libs
import { StoryFn } from '@storybook/react'
import { useMemo } from 'react'
import { MemoryRouter } from 'react-router'
import { Layout } from 'src/antd'

// Initializers
import createTranslations, { AppLocales } from 'src/initializers/createTranslations'

// Root
import Translation from '../Translation'
import TranslationLoader from '../TranslationLoader'
import Antd from '../Antd'

export type Props = {
  locale: AppLocales,
}
const BuildForStorybook = (Story: StoryFn, extra = {}) => {
  const localesTranslations = useMemo(() => createTranslations(), [])

  const args = (extra as { args: Props }).args || {};

  return (
    <MemoryRouter>
      <Translation
        locale={args.locale}
        loader={<TranslationLoader />}
        localesTranslations={localesTranslations}
        >
        <Antd>
          <Layout className={styles.layout}>
            <Story />
          </Layout>
        </Antd>
      </Translation>
    </MemoryRouter>
  )
}

export default BuildForStorybook
