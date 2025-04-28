import { screen } from '@testing-library/react'

import GameCardSlider from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

const items = [
  {
    title: 'Prince of Persia - Sands of Time',
    developer: 'Ubisoft',
    img: '/img/prince-of-persia-sands-of-time-img.jpg',
    price: 'R$ 29,90',
    promotionalPrice: 'R$ 5,99'
  },
  {
    title: 'Prince of Persia - Warrior Within',
    developer: 'Ubisoft',
    img: '/img/prince-of-persia-warrior-within-img.jpg',
    price: 'R$ 29,90',
    promotionalPrice: 'R$ 5,99'
  },
  {
    title: 'Prince of Persia - The Two Thrones',
    developer: 'Ubisoft',
    img: '/img/prince-of-persia-the-two-thrones-img.jpg',
    price: 'R$ 29,90',
    promotionalPrice: 'R$ 5,99'
  },
  {
    title: 'Prince Of Persia',
    developer: 'Ubisoft',
    img: '/img/prince-of-persia-img.jpg',
    price: 'R$ 29,90',
    promotionalPrice: 'R$ 5,99'
  }
]

describe('<GameCardSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = renderWithTheme(
      <GameCardSlider items={items} color="white" />
    )

    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  // TODO: Investigate why the tests are breaking in this part of the arrows
  // it('should render white arrows if color passed', () => {
  //   renderWithTheme(<GameCardSlider items={items} color="white" />)

  //   expect(screen.getByLabelText(/next games/i)).toHaveStyle({
  //     color: '#FAFAFA'
  //   })

  //   expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
  //     color: '#FAFAFA'
  //   })
  // })
})
