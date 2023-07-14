// Entities
import PostDescriptions from 'src/entities/Posts/Descriptions'
import { Post } from 'src/helpers/store/businessApi'

// Requests
import { usePostsFindOneQuery } from 'src/requests/business/posts'

// Units
import SiderLoader from 'src/units/SiderLoader'

// Local helpers

const Descriptions: React.FC<{ postId: Post['id'] }> = (props) => {
  const { postId } = props

  const { data: postFindOneData, isLoading: isPostFindOneLoading } =
    usePostsFindOneQuery({ id: postId })

  if (isPostFindOneLoading) {
    return (
      <SiderLoader />
    )
  }

  return (
    <PostDescriptions
      post={postFindOneData?.response}
    />
  )
}

export default Descriptions
