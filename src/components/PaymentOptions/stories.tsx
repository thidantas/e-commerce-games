import { Meta, StoryObj } from '@storybook/react'

import paymentCardOptionsMock from './mock'

import PaymentOptions, { PaymentOptionsProps } from '.'

export default {
  title: 'components/PaymentOptions',
  component: PaymentOptions,
  args: {
    cards: paymentCardOptionsMock
  },
  argTypes: {
    onPayment: {
      action: 'clicked'
    }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj<PaymentOptionsProps> = {
  render: (args) => (
    <div style={{ padding: 16, maxWidth: 400 }}>
      <PaymentOptions {...args} />
    </div>
  )
}
