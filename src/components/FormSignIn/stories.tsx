import { Meta, StoryFn } from '@storybook/react'

import FormSignIn from '.'

export default {
  title: 'components/Forms/FormSignIn',
  component: FormSignIn
} as Meta

export const Default: StoryFn = () => (
  <div style={{ width: 300, margin: 'auto' }}>
    <FormSignIn />
  </div>
)
