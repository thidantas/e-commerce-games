import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCardSlider from '.'
import gameCardSliderItemsMock from './mock'

describe('<GameCardSlider />', () => {
  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation((message) => {
      if (
        typeof message === 'string' &&
        message.includes('React does not recognize the `slideCount`')
      ) {
        return
      }
    })
  })

  it('should render with 4 active items', () => {
    const { container } = renderWithTheme(
      <GameCardSlider items={gameCardSliderItemsMock} color="white" />
    )

    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render white arrows if color passed', () => {
    renderWithTheme(
      <GameCardSlider items={gameCardSliderItemsMock} color="white" />
    )

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
