import { Meta, StoryObj } from '@storybook/react'

import CartIcon, { CartIconProps } from '.'

export default {
  title: 'components/CartIcon',
  component: CartIcon,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj<CartIconProps> = {}

export const DefaultWithItems: StoryObj<CartIconProps> = {
  render: (args) => <CartIcon {...args} />,
  args: {
    quantity: 12
  }
}
