import { Meta, StoryObj } from '@storybook/react'
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
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'inline-radio' }
    },
    fullWidth: {
      type: 'boolean'
    },
    minimal: {
      type: 'boolean'
    }
  }
} as Meta

export const Default: StoryObj<ButtonProps> = {}

Default.args = {
  children: 'Buy Now',
  size: 'medium',
  fullWidth: false,
  minimal: false
}

export const WithIcon: StoryObj<ButtonProps> = {}

WithIcon.args = {
  children: 'Buy Now',
  size: 'small',
  icon: <AddShoppingCart />,
  fullWidth: false
}
export const AsLink: StoryObj<ButtonProps> = {}

AsLink.args = {
  children: 'Buy Now',
  as: 'a',
  href: '/link',
  icon: <AddShoppingCart />,
  size: 'large',
  fullWidth: false
}
