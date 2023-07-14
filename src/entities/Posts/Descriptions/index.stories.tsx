// Libs
import type { Meta, StoryObj } from '@storybook/react'

// Entity
import Descriptions, { Props as DescriptionsProps } from './index'

// Meta

const meta: Meta<DescriptionsProps> = {
  component: Descriptions,
}

type Story = StoryObj<DescriptionsProps>

// Local stories

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args) => {
    return (
      <Descriptions
        post={{
          id: 1,
          body: 'Example body',
          title: 'Example title',
          userId: 10,
        }}
      />
    )
  },
}

export default meta
