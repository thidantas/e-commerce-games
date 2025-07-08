import { Meta, StoryObj } from '@storybook/react'

import orderListMock from './mock'

import OrdersList, { OrdersListProps } from '.'

export default {
  title: 'components/Profile/OrdersList',
  component: OrdersList,
  args: {
    items: orderListMock
  }
} as Meta

export const Default: StoryObj<OrdersListProps> = {
  render: (args) => (
    <div style={{ maxWidth: 850, margin: 'auto' }}>
      <OrdersList {...args} />
    </div>
  )
}
