// Libs
import { Outlet } from 'react-router'

// Components/units
import PageLayout from 'src/units/PageLayout'
import PagePaper from 'src/units/PagePaper'
import PageContent from 'src/units/PageContent'
import PageTitle from 'src/units/PageTitle'
// Components/modules
import ModuleLoader from 'src/units/PageLoader'
import Table from './modules/Table'
import Search from './modules/Search'

// Hooks
import { useAppSelector } from 'src/hooks/store'
import { useAppTranslation } from 'src/hooks/translation'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

// Store
import { pageSlice } from './index.store'
import ProtectedRoute from 'src/root/ProtectedRoute'

// Local hooks

const PostsFindAll: React.FC = () => {
  const t = useAppTranslation()
  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
      dispatch(
        pageSlice.actions.reset()
      )
    }
  }, [])

  const tableModuleStatus =
    useAppSelector((store) => store.PostsFindAll.table.status)

  return (
    <>
      <Outlet />
      <ProtectedRoute>
        <PageLayout>
          <PageTitle>{t('pages.PostsFindAll.title')}</PageTitle>
          <PagePaper>
            <ModuleLoader isLoading={tableModuleStatus === 'initializing'}>
              <PageContent>
                <Search />
                <Table />
              </PageContent>
            </ModuleLoader>
          </PagePaper>
        </PageLayout>
      </ProtectedRoute>
    </>
  )
}

export default PostsFindAll
