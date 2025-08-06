import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import GameItem, { GameItemProps } from '.'

const mockProps: GameItemProps = {
  img: 'img/halo-4.jpg',
  title: 'Halo 4',
  price: 200.0
}

describe('<GameItem />', () => {
  it('should render game item', () => {
    renderWithTheme(<GameItem {...mockProps} />)

    expect(screen.getByRole('heading', { name: /Halo 4/i })).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /Halo 4/i })).toHaveAttribute(
      'src',
      mockProps.img
    )

    expect(screen.getByText(/\$200\.00/i)).toBeInTheDocument()
  })

  it('should render the item with download link', () => {
    const downloadLink = 'https://link'

    renderWithTheme(<GameItem {...mockProps} downloadLink={downloadLink} />)

    expect(
      screen.getByRole('link', { name: `Get ${mockProps.title} here` })
    ).toHaveAttribute('href', downloadLink)
  })

  it('should render payment info', () => {
    const paymentInfo = {
      flag: 'mastercard',
      img: '/img/icons/cards/mastercard.png',
      number: '**** **** **** 5325',
      purchaseDate: 'Purchase made on 07/20/2020 at 19:20'
    }

    renderWithTheme(<GameItem {...mockProps} paymentInfo={paymentInfo} />)

    expect(screen.getByRole('img', { name: paymentInfo.flag })).toHaveAttribute(
      'src',
      paymentInfo.img
    )

    expect(screen.getByText(paymentInfo.number)).toBeInTheDocument()

    expect(screen.getByText(paymentInfo.purchaseDate)).toBeInTheDocument()
  })
})
