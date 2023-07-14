// Libs
import type { Meta, StoryObj } from '@storybook/react'

// Entity
import Search, { Props as SearchProps } from './index'

// Meta

const meta: Meta<SearchProps> = {
  component: Search,
}

type Story = StoryObj<SearchProps>

// Local stories

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args) => {
    return (
      <Search
        {...args}
      />
    )
  },
}

export default meta
