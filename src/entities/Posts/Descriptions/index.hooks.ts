// Antd
import { DescriptionOption } from 'src/antd/Description'
import filterDescriptions from 'src/antd/Description/helpers/filterDescriptions'

// Hooks
import { useAppTranslation } from 'src/hooks/translation'

// Helpers
import { Post } from 'src/helpers/store/businessApi'

// Local types

export type Props = {
  post: Post
  keys?: (keyof Post)[]
}

export const useDescriptions: (props: Props) => DescriptionOption[] = (
  props
) => {
  const { post, keys } = props
  const t = useAppTranslation()

  return filterDescriptions(keys, [
    {
      key: 'id',
      label: t('entities.Posts.Descriptions.items.id.label'),
      children: post.id,
    },
    {
      key: 'userId',
      label: t('entities.Posts.Descriptions.items.userId.label'),
      children: post.userId,
    },
    {
      key: 'title',
      label: t('entities.Posts.Descriptions.items.title.label'),
      children: post.title,
    },
    {
      key: 'body',
      label: t('entities.Posts.Descriptions.items.body.label'),
      children: post.body,
    },
  ])
}
