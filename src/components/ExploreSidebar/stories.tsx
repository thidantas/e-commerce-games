import { Meta, StoryObj } from '@storybook/react'

import exploreSidebarItemsMock from './mock'

import ExploreSidebar, { ExploreSidebarProps } from '.'

export default {
  title: 'components/ExploreSidebar',
  component: ExploreSidebar,
  args: {
    items: exploreSidebarItemsMock
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj<ExploreSidebarProps> = {}
