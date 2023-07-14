// Styles
import './index.global.scss'
import styles from  './index.module.scss'

// Libs
import { PropsWithChildren } from 'react'
import { App, ConfigProvider, theme, Layout } from 'src/antd'

// Hooks
import { useAppTranslationPayload } from 'src/hooks/translation'

// Initializers
import { selectAntdLocaleTranslations } from 'src/initializers/createTranslations'
import AntdApi from '../AntdApi'

const Antd: React.FC<PropsWithChildren> = (props) => {
  const { children } = props

  const translationPayload = useAppTranslationPayload()

  return (
    <ConfigProvider
      locale={selectAntdLocaleTranslations(translationPayload.localeTranslations)}
      theme={{ algorithm: theme.defaultAlgorithm }}
    >
      <App>
        <AntdApi />
        <Layout className={styles.wrapper}>
          {children}
        </Layout>
      </App>
    </ConfigProvider>
  )
}

export default Antd
