import Home, { HomeTemplateProps } from 'templates/Home'
import BannerMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import HighlightMock from 'components/Highlight/mock'

const mockProps: HomeTemplateProps = {
  banners: BannerMock,
  newGames: gamesMock,
  mostPopularGames: gamesMock,
  mostPopularHighlight: HighlightMock,
  upcomingGames: gamesMock,
  upcomingHighlight: HighlightMock,
  upcomingMoreGames: gamesMock,
  freeGames: gamesMock,
  freeHighlight: HighlightMock
}

export default async function App() {
  return <Home {...mockProps} />
}
