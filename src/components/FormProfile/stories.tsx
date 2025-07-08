import { Meta, StoryObj } from '@storybook/react'

import FormProfile from '.'

export default {
  title: 'components/Forms/FormProfile',
  component: FormProfile
} as Meta

export const Default: StoryObj = {
  render: () => (
    <div style={{ maxWidth: 860, margin: 'auto' }}>
      <FormProfile />
    </div>
  )
}
