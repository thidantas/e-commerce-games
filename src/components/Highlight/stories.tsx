import { Meta, StoryObj } from '@storybook/react'
import Highlight, { HighlightProps } from '.'

export default {
  title: 'components/Highlight',
  component: Highlight,
  args: {
    title: "Read Dead it's back",
    subtitle: "Come see Jhon's new adventures",
    buttonLink: '/rdr2',
    buttonLabel: 'Buy now',
    backgroundImage: '/img/red-dead-img.jpg'
  }
} as Meta

export const Default: StoryObj<HighlightProps> = {}
