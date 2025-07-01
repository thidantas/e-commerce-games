import { Meta, StoryObj } from '@storybook/react'
import ProfileMenu from '.'

export default {
  title: 'components/ProfileMenu',
  component: ProfileMenu,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj = {
  render: () => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <ProfileMenu />
    </div>
  )
}
