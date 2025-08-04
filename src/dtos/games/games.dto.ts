import { GetGamesQuery } from 'graphql/generated/graphql'
import { gamesMapper } from 'utils/mappers/gamesMapper'

import { Game } from '../types'

export function mapGamesDTO(games: GetGamesQuery['games']): Game[] {
  return gamesMapper(games)
}
