import { Meta, StoryFn } from '@storybook/react'

import Menu, { MenuProps } from '.'

export default {
  title: 'components/Menu',
  component: Menu
} as Meta

export const Default: StoryFn<MenuProps> = (args) => <Menu {...args} />

Default.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark'
  }
}
