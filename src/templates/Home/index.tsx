'use client'

import Base from 'templates/Base'
import Showcase from 'components/Showcase'
import BannerSlider from 'components/BannerSlider'
import { Container } from 'components/Container'
import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  newGamesTitle: string
  mostPopularGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGamesTitle: string
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  upcomingGamesTitle: string
  freeGames: GameCardProps[]
  freeGamesTitle: string
  freeHighlight: HighlightProps
}

const Home = ({
  banners,
  newGames,
  newGamesTitle,
  mostPopularGames,
  mostPopularHighlight,
  mostPopularGamesTitle,
  upcomingGames,
  upcomingHighlight,
  upcomingGamesTitle,
  freeGames,
  freeHighlight,
  freeGamesTitle
}: HomeTemplateProps) => {
  return (
    <Base>
      <Container>
        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>

      <S.SectionNews>
        <Showcase title={newGamesTitle} games={newGames} color="black" />
      </S.SectionNews>

      <Showcase
        title={mostPopularGamesTitle}
        highlight={mostPopularHighlight}
        games={mostPopularGames}
      />

      <Showcase
        title={upcomingGamesTitle}
        games={upcomingGames}
        highlight={upcomingHighlight}
      />

      <Showcase
        title={freeGamesTitle}
        highlight={freeHighlight}
        games={freeGames}
      />
    </Base>
  )
}

export default Home
