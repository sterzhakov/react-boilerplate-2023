// Libs
import type { Meta, StoryObj } from '@storybook/react'

// Entity
import Form, { Props as FormProps } from './index'
import { DEFAULT_LOCALE } from 'src/initializers/createTranslations'

// Meta

const meta: Meta<FormProps> = {
  component: Form,
}

type Story = StoryObj<FormProps>

// Local stories

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args) => {
    return (
      <Form
        {...args}
      />
    )
  },
}

export default meta
