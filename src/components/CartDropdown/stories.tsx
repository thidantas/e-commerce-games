import { Meta, StoryObj } from '@storybook/react'

import cartListMock from 'components/CartList/mock'

import CartDropdown, { CartDropdownProps } from '.'

export default {
  title: 'components/CartDropdown',
  component: CartDropdown,
  args: {
    items: cartListMock,
    total: 'R$ 400,00'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj<CartDropdownProps> = {
  render: (args) => (
    <div
      style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}
    >
      <CartDropdown {...args} />
    </div>
  )
}
