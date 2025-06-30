import userEvent from '@testing-library/user-event'
import { screen, waitFor } from '@testing-library/react'

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

  it('should handle select card when clicking on the label', async () => {
    const onPaymentMock = jest.fn()

    renderWithTheme(
      <PaymentOptions
        cards={paymentCardOptionsMock}
        onPayment={onPaymentMock}
      />
    )

    userEvent.click(screen.getByLabelText(/4321/))
    await waitFor(() => {
      expect(screen.getByRole('radio', { name: /4321/ })).toBeChecked()
    })
  })

  it('should not call onPayment when button is disabled', () => {
    const onPaymentMock = jest.fn()

    renderWithTheme(
      <PaymentOptions
        cards={paymentCardOptionsMock}
        onPayment={onPaymentMock}
      />
    )

    userEvent.click(screen.getByRole('button', { name: /buy now/i }))
    expect(onPaymentMock).not.toHaveBeenCalled()
  })

  it('should call onPayment when credit card is selected', async () => {
    const onPaymentMock = jest.fn()

    renderWithTheme(
      <PaymentOptions
        cards={paymentCardOptionsMock}
        onPayment={onPaymentMock}
      />
    )

    userEvent.click(screen.getByLabelText(/4321/))
    userEvent.click(screen.getByRole('button', { name: /buy now/i }))

    await waitFor(() => {
      expect(onPaymentMock).toHaveBeenCalled()
    })
  })
})
