// Libs
import { PropsWithChildren } from 'react'
import { useDispatch } from 'react-redux'

// Page
import { pageSlice } from '../../index.store'

// Helpers
import cleanFormValues from 'src/helpers/form/cleanFormValues'

// Entities
import PostsSearch, { Props as PostsSearchProps } from 'src/entities/Posts/Search'

// Root
import ProtectedComponent from 'src/root/ProtectedComponent'

// Local types
export type Props = PropsWithChildren

const Search: React.FC<Props> = () => {
  const dispatch = useDispatch()

  const handleFinish: PostsSearchProps['formProps']['onFinish'] =
  (formValue) => {
    const searchValues = cleanFormValues(formValue)
    dispatch(
      pageSlice.actions.setTableRequestProps({ search: searchValues })
    )
  }

  return (
    <ProtectedComponent path='modules.posts.search'>
      <PostsSearch
        formProps={{
          onFinish: handleFinish
        }}
      />
    </ProtectedComponent>
  )
}

export default Search
