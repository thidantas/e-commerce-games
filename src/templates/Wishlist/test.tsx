import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import highlightMock from 'components/Highlight/mock'
import gameCardSliderItemsMock from 'components/GameCardSlider/mock'

import Wishlist, { WishlistTemplateProps } from '.'

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase" />
  }
}))

const mockProps: WishlistTemplateProps = {
  games: gameCardSliderItemsMock.slice(0, 5),
  recommendedGames: gameCardSliderItemsMock.slice(0, 4),
  recommendedHighlight: highlightMock
}

describe('<Wishlist />', () => {
  it('should render the correctly', () => {
    renderWithTheme(<Wishlist {...mockProps} />)

    expect(
      screen.getByRole('heading', { name: /Wishlist/i })
    ).toBeInTheDocument()

    expect(screen.getAllByText(/Prince of persia/i)).toHaveLength(5)
    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
  })

  it('should render empty when there are no games', () => {
    renderWithTheme(
      <Wishlist
        recommendedGames={gameCardSliderItemsMock}
        recommendedHighlight={highlightMock}
      />
    )

    expect(screen.queryByText(/Prince of persia/)).not.toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /your wishlist is empty/i })
    ).toBeInTheDocument()
  })
})
