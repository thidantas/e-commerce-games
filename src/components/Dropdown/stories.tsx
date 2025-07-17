import { Meta, StoryObj } from '@storybook/react'

import Dropdown, { DropdownProps } from '.'

export default {
  title: 'components/Dropdown',
  component: Dropdown,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj<DropdownProps> = {
  render: (args) => <Dropdown {...args} />,
  args: {
    title: 'Click here',
    children: <span>Content</span>
  }
}
