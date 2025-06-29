import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import paymentCardOptionsMock from './mock'

import PaymentOptions from '.'

describe('<PaymentOptions />', () => {
  it('should render the saved card options and the add new card button', () => {
    const onPayment = jest.fn()
    renderWithTheme(
      <PaymentOptions cards={paymentCardOptionsMock} onPayment={onPayment} />
    )

    expect(screen.getByText(/1234/)).toBeInTheDocument()
    expect(screen.getByText(/4321/)).toBeInTheDocument()
    expect(screen.getByText(/add a new credit card/i)).toBeInTheDocument()
  })
})
