import { GetGameBySlugQuery } from 'graphql/generated/graphql'
import { gameDetailsMapper } from 'utils/mappers/gameDetailsMapper'

import { GameDetails } from './types'

export function mapGameDetailsDTO(
  game: GetGameBySlugQuery['games'][0]
): GameDetails {
  return gameDetailsMapper(game)
}
