// Libs
import { PropsWithChildren } from 'react'
import { Descriptions } from 'src/antd'

// Store
import { Post } from 'src/helpers/store/businessApi'
import { useDescriptions } from './index.hooks'

// Local types
export type Props = PropsWithChildren<{ post?: Post }>

const PostDescriptions: React.FC<Props> = (props) => {
  const { post } = props

  if (!post) return null

  const descriptions = useDescriptions({ post })

  return (
    <Descriptions column={1} layout='vertical' size='small'>
      {descriptions.map(({ key, ...description }) => (
        <Descriptions.Item key={key} {...description}/>
      ))}
    </Descriptions>
  )
}

export default PostDescriptions
