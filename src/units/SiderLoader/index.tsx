// Components
import { useAppTranslation } from 'src/hooks/translation'

// Units
import AppSpin from '../AppSpin'

const SiderLoader: React.FC = () => {
  const t = useAppTranslation()
  return (
    <AppSpin>
      {t('units.SiderLoader.moduleIsLoading')}
    </AppSpin>
  )
}

export default SiderLoader
