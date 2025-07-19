import { Meta, StoryObj } from '@storybook/react'

import UserDropdown, { UserDropdownProps } from '.'

export default {
  title: 'components/Dropdowns/UserDropdown',
  component: UserDropdown,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj<UserDropdownProps> = {
  render: (args) => (
    <div
      style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}
    >
      <UserDropdown {...args} />
    </div>
  ),
  args: {
    username: 'John Doe'
  }
}
