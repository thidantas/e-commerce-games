import { Meta, StoryObj } from '@storybook/react'

import ProfileMenu, { ProfileMenuProps } from '.'

export default {
  title: 'components/ProfileMenu',
  component: ProfileMenu,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  args: {
    activeProfile: '/profile/me'
  },
  argTypes: {
    activeProfile: {
      options: ['/profile/me', '/profile/cards', '/profile/orders', '/logout'],
      control: { type: 'select' }
    }
  }
} as Meta

export const Default: StoryObj<ProfileMenuProps> = {
  render: (args) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <ProfileMenu {...args} />
    </div>
  )
}
