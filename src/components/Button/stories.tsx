import { Meta, StoryFn } from '@storybook/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import Button, { ButtonProps } from '.'

export default {
  title: 'components/Button',
  component: Button,
  argsTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as Meta

export const Default: StoryFn<ButtonProps> = (args) => <Button {...args} />

Default.args = {
  size: 'medium',
  children: 'Buy Now',
  fullWidth: false
}

export const WithIcon: StoryFn<ButtonProps> = (args) => <Button {...args} />

WithIcon.args = {
  size: 'small',
  icon: <AddShoppingCart />,
  children: 'Buy Now',
  fullWidth: false
}
