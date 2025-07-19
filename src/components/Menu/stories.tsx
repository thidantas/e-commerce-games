import { Meta, StoryObj } from '@storybook/react'

import Menu, { MenuProps } from '.'

export default {
  title: 'components/Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj<MenuProps> = {}

export const Logged: StoryObj<MenuProps> = {
  args: {
    username: 'John Doe'
  }
}
