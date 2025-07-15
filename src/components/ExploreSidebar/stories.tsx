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
    },
    layout: 'fullscreen'
  }
} as Meta

export const Default: StoryObj<ExploreSidebarProps> = {
  render: (args) => (
    <div style={{ padding: 16, maxWidth: 240 }}>
      <ExploreSidebar {...args} />
    </div>
  )
}

export const WithInitialValues: StoryObj<ExploreSidebarProps> = {
  render: (args) => (
    <div style={{ padding: 16, maxWidth: 240 }}>
      <ExploreSidebar {...args} />
    </div>
  ),
  args: {
    initialValues: {
      windows: true,
      sort_by: 'low-to-high'
    }
  }
}
