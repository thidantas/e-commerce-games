import Home, { HomeTemplateProps } from 'templates/Home'
import BannerMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import HighlightMock from 'components/Highlight/mock'
import { getHome } from 'services/ssr/home/getHome'
import { BannerProps } from '@/components/Banner'
import { GameCardProps } from '@/components/GameCard'
import { HighlightProps } from '@/components/Highlight'

const mockProps: HomeTemplateProps = {
  banners: BannerMock,
  newGames: gamesMock,
  mostPopularGames: gamesMock,
  mostPopularHighlight: HighlightMock,
  upcomingGames: gamesMock,
  upcomingHighlight: HighlightMock,
  freeGames: gamesMock,
  freeHighlight: HighlightMock,
  freeGamesTitle: 'Free',
  mostPopularGamesTitle: 'Most Popular',
  upcomingGamesTitle: 'Upcoming',
  newGamesTitle: 'New'
}

export default async function App() {
  const isCI = process.env.CI === 'true'

  if (isCI) {
    return <Home {...mockProps} />
  }

  const home = await getHome()

  return (
    <Home
      {...mockProps}
      banners={home?.banners as BannerProps[]}
      newGames={home?.newGames as GameCardProps[]}
      upcomingGamesTitle={home?.upcomingGamesTitle as string}
      upcomingGames={home?.upcomingGames as GameCardProps[]}
      freeGames={home?.freeGames as GameCardProps[]}
      mostPopularGames={home?.popularGames as GameCardProps[]}
      mostPopularGamesTitle={home?.popularGamesTitle as string}
      newGamesTitle={home?.newGamesTitle as string}
      freeGamesTitle={home?.freeGamesTitle as string}
      mostPopularHighlight={home?.mostPopularHighlight as HighlightProps}
      upcomingHighlight={home?.upcomingHighlight as HighlightProps}
      freeHighlight={home?.freeHighlight as HighlightProps}
    />
  )
}
