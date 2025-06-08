import { screen } from '@testing-library/react'

import highlightMock from 'components/Highlight/mock'
import gameCardSliderItemsMock from 'components/GameCardSlider/mock'
import { renderWithTheme } from 'utils/tests/helpers'

import Showcase from '.'

const mockProps = {
  title: 'Most Popular',
  highlight: highlightMock,
  games: gameCardSliderItemsMock.slice(0, 1)
}

describe('<Showcase />', () => {
  it('should render full show case', () => {
    renderWithTheme(<Showcase {...mockProps} />)

    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: gameCardSliderItemsMock[0].title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: gameCardSliderItemsMock[0].title })
    ).toBeInTheDocument()
  })

  it('should render without title', () => {
    renderWithTheme(
      <Showcase games={mockProps.games} highlight={mockProps.highlight} />
    )

    screen.getByRole('heading', { name: highlightMock.title })
    screen.getByRole('heading', { name: gameCardSliderItemsMock[0].title })

    expect(
      screen.queryByRole('heading', { name: /most popular/i })
    ).not.toBeInTheDocument()
  })

  it('should render without highlight', () => {
    renderWithTheme(
      <Showcase title={mockProps.title} games={mockProps.games} />
    )

    screen.getByRole('heading', { name: /most popular/i })
    screen.getByRole('heading', { name: gameCardSliderItemsMock[0].title })

    expect(
      screen.queryByRole('heading', { name: highlightMock.title })
    ).not.toBeInTheDocument()
  })

  it('should render without games', () => {
    renderWithTheme(
      <Showcase title={mockProps.title} highlight={mockProps.highlight} />
    )

    screen.getByRole('heading', { name: /most popular/i })
    screen.getByRole('heading', { name: highlightMock.title })

    expect(
      screen.queryByRole('heading', { name: gameCardSliderItemsMock[0].title })
    ).not.toBeInTheDocument()
  })
})
