import { Meta, StoryObj } from '@storybook/react'

import paymentCardOptionsMock from 'components/PaymentOptions/mock'

import CardsList, { CardsListProps } from '.'

export default {
  title: 'components/Profile/CardsList',
  component: CardsList,
  args: {
    cards: paymentCardOptionsMock
  }
} as Meta

export const Default: StoryObj<CardsListProps> = {
  render: (args) => (
    <div style={{ maxWidth: 450, margin: 'auto' }}>
      <CardsList {...args} />
    </div>
  )
}
