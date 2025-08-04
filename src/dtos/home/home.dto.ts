import { GetHomeQuery } from 'graphql/generated/graphql'

import { gamesMapper } from 'utils/mappers/gamesMapper'
import { bannerMapper } from 'utils/mappers/bannerMapper'
import { highlightMapper } from 'utils/mappers/highlightMapper'

import { Home } from './types'

export function mapHomeDTO({
  banners,
  sections,
  newGames,
  freeGames,
  upcomingGames
}: GetHomeQuery): Home {
  return {
    banners: bannerMapper(banners),

    newGames: gamesMapper(newGames),

    upcomingGames: gamesMapper(upcomingGames),

    freeGames: gamesMapper(freeGames),

    popularGames: gamesMapper(sections!.popularGames!.games),
    newGamesTitle: sections?.newGames ? sections!.newGames!.title : 'News',
    popularGamesTitle: sections?.popularGames
      ? sections!.popularGames!.title
      : 'Most Popular',
    freeGamesTitle: sections?.freeGames ? sections!.freeGames!.title : 'Free',
    upcomingGamesTitle: sections!.upcomingGames!.title,
    mostPopularHighlight: highlightMapper(sections?.popularGames?.highlight),

    freeHighlight: highlightMapper(sections?.freeGames?.highlight),

    upcomingHighlight: highlightMapper(sections?.upcomingGames?.highlight)
  }
}
