// Libs
import React from 'react'
import type { Preview } from '@storybook/react'

// Root
import BuildForStorybook from '../src/root/BuildForStorybook'

// Types
import { AppLocales } from '../src/initializers/createTranslations/index'

const preview: Preview = {
  decorators: [
    BuildForStorybook
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        // color: /(background|color)$/i,
        // date: /Date$/,
      },
    },
  },
  args: {
    locale: AppLocales.ru,
  },
  argTypes: {
    locale: {
      control: 'select',
      options: Object.values(AppLocales),
    }
  }
}

export default preview
