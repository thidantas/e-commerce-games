import { Meta, StoryFn } from '@storybook/react'

import textContentMock from './mock'

import TextContent, { TextContentProps } from '.'

export default {
  title: 'components/TextContent',
  component: TextContent,
  args: textContentMock,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryFn<TextContentProps> = (args) => (
  <TextContent {...args} />
)
