import { screen } from '@testing-library/react'

import BannerSlider from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

const items = [
  {
    img: '/img/resident-evil-1-img.jpg',
    title: 'Resident Evil 1',
    subtitle: "<p>Play the game & dive into the world of Spencer mansion's</p>",
    buttonLabel: 'Buy now',
    buttonLink: '/games/resident-evil-1',
    ribbonLabel: 'Best Selling'
  },
  {
    img: '/img/resident-evil-2-img.jpg',
    title: 'Resident Evil 2',
    subtitle: '<p>Play the game & dive into the world of Raccoon city</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/resident-evil-2',
    ribbonLabel: '20% OFF'
  },
  {
    img: '/img/resident-evil-3-img.jpg',
    title: 'Resident Evil 3',
    subtitle: '<p>Play the game & dive into the world of Raccoon city</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/resident-evil-3',
    ribbonLabel: '20% OFF'
  }
]

describe('<BannerSlider />', () => {
  it('should render vertical slider', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelector('.slick-vertical')).toBeInTheDocument()
  })

  it('should render with 1 active item', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(3)
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1)
    expect(
      screen.getByRole('heading', { name: /resident evil 1/i, hidden: false })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /resident evil 2/i, hidden: true })
    ).toBeInTheDocument()
  })

  it('should render with the dots', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelector('.slick-dots')).toBeInTheDocument()
  })
})
