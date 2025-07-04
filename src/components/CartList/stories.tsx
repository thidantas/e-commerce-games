import { Meta, StoryObj } from '@storybook/react'

import cartListMock from './mock'

import CartList, { CartListProps } from '.'

export default {
  title: 'components/CartList',
  component: CartList,
  args: { items: cartListMock, total: 'R$ 400,00' },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj<CartListProps> = {
  render: (args) => (
    <div style={{ maxWidth: 800 }}>
      <CartList {...args} />
    </div>
  )
}
