import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import gamesMock from 'components/GameCardSlider/mock'
import bannerMock from 'components/BannerSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Home, { HomeTemplateProps } from '.'

const mockProps: HomeTemplateProps = {
  banners: bannerMock,
  newGames: gamesMock,
  mostPopularGames: gamesMock,
  mostPopularHighlight: highlightMock,
  upcomingGames: gamesMock,
  upcomingHighlight: highlightMock,
  freeGames: gamesMock,
  freeHighlight: highlightMock,
  freeGamesTitle: 'Free Games',
  mostPopularGamesTitle: 'Most Popular',
  newGamesTitle: 'New Games',
  upcomingGamesTitle: 'Upcoming Games'
}

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Showcase" />
    }
  }
})

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock BannerSlider" />
    }
  }
})

describe('<Home />', () => {
  it('should render banner and showcases', () => {
    renderWithTheme(<Home {...mockProps} />)

    expect(screen.getByTestId('Mock BannerSlider')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(4)
  })
})
