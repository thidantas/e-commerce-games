import { Meta, StoryFn } from '@storybook/react'

import item from './mock'
import Highlight, { HighlightProps } from '.'

export default {
  title: 'components/Highlight',
  component: Highlight,
  argTypes: {
    alignment: {
      options: ['right', 'left'],
      control: { type: 'select' }
    }
  },
  args: {
    ...item
  }
} as Meta

export const Default: StoryFn<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

export const WithFloatImage: StoryFn<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

WithFloatImage.args = {
  floatImage: '/img/red-dead-float.png'
}
