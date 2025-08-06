import { GetUpcomingGamesQuery } from 'graphql/generated/graphql'
import { gamesMapper } from 'utils/mappers/gamesMapper'
import { highlightMapper } from 'utils/mappers/highlightMapper'

import { UpcomingGames } from './types'

export function mapUpcomingGamesDTO(
  upcoming: GetUpcomingGamesQuery
): UpcomingGames {
  return {
    upcomingGames: gamesMapper(upcoming.upcomingGames),
    upcomingTitle: upcoming.showcase?.upcomingGames?.title || 'Upcoming',
    upcomingHighlight: highlightMapper(
      upcoming.showcase?.upcomingGames?.highlight
    )
  }
}
