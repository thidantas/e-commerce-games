import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import GameItem, { GameItemProps } from '.'

const mockProps: GameItemProps = {
  img: 'img/halo-4.jpg',
  title: 'Halo 4',
  price: 'R$ 200,00'
}

describe('<GameItem />', () => {
  it('should render game item', () => {
    renderWithTheme(<GameItem {...mockProps} />)

    expect(screen.getByRole('heading', { name: /Halo 4/i })).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /Halo 4/i })).toHaveAttribute(
      'src',
      mockProps.img
    )

    expect(screen.getByText(/R\$ 200,00/i)).toBeInTheDocument()
  })

  it('should render the item with download link', () => {
    const downloadLink = 'https://link'

    renderWithTheme(<GameItem {...mockProps} downloadLink={downloadLink} />)

    expect(
      screen.getByRole('link', { name: `Get ${mockProps.title} here` })
    ).toHaveAttribute('href', downloadLink)
  })
})
