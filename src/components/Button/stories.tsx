import { Meta, StoryFn } from '@storybook/react'

import Button from '.'

export default {
  title: 'components/Button',
  component: Button,
  args: {
    children: 'string'
  }
} as Meta

export const Default: StoryFn = (args) => <Button {...args} />

Default.args = {
  children: 'Buy Now'
}
