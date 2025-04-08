import { Meta, StoryObj } from '@storybook/react'

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
    size: {
      control: {
        type: 'select'
      },
      options: ['medium', 'small']
    },
    lineColor: {
      control: {
        type: 'select'
      },
      options: ['primary', 'secondary']
    },
    lineLeft: {
      type: 'boolean'
    },
    lineBottom: {
      type: 'boolean'
    }
  }
} as Meta

export const Default: StoryObj<HeadingProps> = {}

Default.args = {
  children: 'Most Popular',
  size: 'medium',
  color: 'black',
  lineLeft: false,
  lineBottom: false,
  lineColor: 'primary'
}
