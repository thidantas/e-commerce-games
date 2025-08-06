import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import cartListMock from 'components/CartList/mock'
import highlightMock from 'components/Highlight/mock'
import paymentCardOptionsMock from 'components/PaymentOptions/mock'
import gameCardSliderItemsMock from 'components/GameCardSlider/mock'

import Cart from '.'

const mockProps = {
  cards: paymentCardOptionsMock,
  total: 400.0,
  items: cartListMock,
  recommendedGames: gameCardSliderItemsMock.slice(0, 5),
  recommendedHighlight: highlightMock
}

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase" />
  }
}))

jest.mock('components/CartList', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Cart" />
  }
}))

jest.mock('components/PaymentOptions', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock PaymentOptions" />
  }
}))

jest.mock('components/Empty', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Empty" />
  }
}))

describe('<Cart />', () => {
  it('should render the cart sections', () => {
    renderWithTheme(<Cart {...mockProps} />)

    expect(
      screen.getByRole('heading', { name: /my cart/i })
    ).toBeInTheDocument()
    expect(screen.getByTestId('Mock Cart')).toBeInTheDocument()
    expect(screen.getByTestId('Mock PaymentOptions')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
    expect(screen.queryByTestId('Mock Empty')).not.toBeInTheDocument()
  })

  it('should render empty section if there are no items in the cart', () => {
    renderWithTheme(<Cart {...mockProps} items={[]} />)

    expect(screen.getByTestId('Mock Empty')).toBeInTheDocument()
  })
})
