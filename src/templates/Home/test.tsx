import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import gamesMock from 'components/GameCardSlider/mock'
import bannerMock from 'components/BannerSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Home from '.'

const mockProps = {
  banners: bannerMock,
  newGames: gamesMock,
  mostPopularGames: gamesMock,
  mostPopularHighlight: highlightMock,
  upcomingGames: gamesMock,
  upcomingHighlight: highlightMock,
  upcomingMoreGames: gamesMock,
  freeGames: gamesMock,
  freeHighlight: highlightMock
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
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...mockProps} />)

    expect(screen.getByTestId('Mock BannerSlider')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(5)
  })
})
