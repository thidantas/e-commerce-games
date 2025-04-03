import { Meta, StoryFn } from '@storybook/react'
import Heading, { HeadingProps } from '.'

export default {
  title: 'components/Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    },
    color: {
      control: {
        type: 'select'
      },
      options: ['white', 'black']
    },
    lineLeft: {
      type: 'boolean'
    },
    lineBottom: {
      type: 'boolean'
    }
  },
  args: {
    children: 'Most Popular',
    color: 'white',
    lineLeft: false,
    lineBottom: false
  }
} as Meta

export const Default: StoryFn<HeadingProps> = (args) => <Heading {...args} />
