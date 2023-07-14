import { DescriptionOption } from 'src/entities/Posts/Descriptions/index.hooks'

export default function
filterDescriptions(keys: string[] | undefined, options: DescriptionOption[]):
DescriptionOption[] {
  if (!keys) return options
  return options.filter((column) => {
    if (!column.key) return true
    return keys.includes(column.key.toString())
  })
}
