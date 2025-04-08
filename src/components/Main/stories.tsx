import { Meta, StoryObj } from '@storybook/react'

import Main from '.'

export default {
  title: 'components/Main',
  component: Main,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: StoryObj = {}

export const Basic: StoryObj = {
  args: {
    title: 'Title Basic',
    description: 'Description Basic'
  }
}
