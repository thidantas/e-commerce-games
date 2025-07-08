import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import paymentCardOptionsMock from 'components/PaymentOptions/mock'

import CardsList from '.'

describe('<CardsList />', () => {
  it('should render the cards list', () => {
    renderWithTheme(<CardsList cards={paymentCardOptionsMock} />)

    expect(
      screen.getByRole('heading', { name: /my cards/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /visa/i })).toHaveAttribute(
      'src',
      '/img/icons/cards/visa.png'
    )
    expect(screen.getByRole('img', { name: /mastercard/i })).toHaveAttribute(
      'src',
      '/img/icons/cards/mastercard.png'
    )

    expect(screen.getByText(/1234/i)).toBeInTheDocument()
    expect(screen.getByText(/4321/i)).toBeInTheDocument()
  })
})
