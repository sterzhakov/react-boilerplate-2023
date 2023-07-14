// Styles
import styles from './index.module.scss'

// Libs
import { Typography } from 'src/antd'

// Entities
import SettingsLocalForm, {
  Props as SettingsLocalFormProps,
} from 'src/entities/Settings/Form'

// Constants
import { moduleSlice as initializeSlice } from 'src/root/Initialize/index.store'

// Hooks
import { useAppDispatch, useAppSelector } from 'src/hooks/store'
import { useAppTranslation } from 'src/hooks/translation'
import { useAppTranslationPayload } from 'src/hooks/translation'

// Initializers

export type Props = object

const LocalForm: React.FC<Props> = () => {
  const dispatch = useAppDispatch()
  const translationPayload = useAppTranslationPayload()
  const t = useAppTranslation()

  const handleFinish: SettingsLocalFormProps['formProps']['onFinish'] = (
    formValues
  ) => {
    dispatch(initializeSlice.actions.setLocalSettings(formValues))
  }

  const localSettings = useAppSelector(
    (state) => state.InitializeModule.localSettings
  )

  return (
    <div className={styles.wrapper}>
      <Typography.Title level={3}>
        {t('pages.SettingsUpdate.modules.LocalForm.title')}
      </Typography.Title>
      <SettingsLocalForm
        formProps={{
          initialValues: localSettings,
          onFinish: handleFinish,
        }}
        buttonProps={{
          loading: translationPayload.isLocaleLoading,
          children: t('pages.SettingsUpdate.modules.LocalForm.saveButton'),
        }}
      />
    </div>
  )
}

export default LocalForm
