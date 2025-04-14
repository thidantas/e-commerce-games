import { Meta, StoryFn } from '@storybook/react'

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
    title: "Read Dead it's back",
    subtitle: "Come see Jhon's new adventures",
    buttonLink: '/rdr2',
    buttonLabel: 'Buy now',
    backgroundImage: '/img/red-dead-img.jpg'
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
