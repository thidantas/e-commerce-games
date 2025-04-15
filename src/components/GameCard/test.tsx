import { fireEvent, screen } from '@testing-library/react'

import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from '.'

const mockProps = {
  title: 'Borderlands 3',
  developer: 'Gearbox Software',
  img: '/img/borderlands-3-game-cover.png',
  price: 'R$ 215,00'
}

describe('<GameCard />', () => {
  it('should render the GameCard component', () => {
    renderWithTheme(<GameCard {...mockProps} />)

    expect(
      screen.getByRole('heading', { name: mockProps.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: mockProps.developer })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: mockProps.title })).toHaveAttribute(
      'src',
      mockProps.img
    )

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...mockProps} />)

    const price = screen.getByText(mockProps.price)

    expect(price).not.toHaveStyle({ textDecoration: 'line-through' })
    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary })
  })

  it('should render a line-through in price when promotional', () => {
    renderWithTheme(<GameCard {...mockProps} promotionalPrice="R$ 195,00" />)

    expect(screen.getByText('R$ 215,00')).toHaveStyle({
      textDecoration: 'line-through'
    })

    expect(screen.getByText('R$ 195,00')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should render a filled Favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...mockProps} favorite />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()

    renderWithTheme(<GameCard {...mockProps} favorite onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toHaveBeenCalled()
  })
})
