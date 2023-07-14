// Lib
import { DescriptionsItemProps } from 'antd/es/descriptions/Item'

// Reexports
export { default as Descriptions } from 'antd/lib/descriptions'
export type { DescriptionsProps } from 'antd/lib/descriptions'

// Local types

export type DescriptionOption = DescriptionsItemProps & { key: string }
