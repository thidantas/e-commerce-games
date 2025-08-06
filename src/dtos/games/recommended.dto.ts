import { GetRecommendedGamesQuery } from 'graphql/generated/graphql'
import { gamesMapper } from 'utils/mappers/gamesMapper'
import { highlightMapper } from 'utils/mappers/highlightMapper'
import { DeepPickNullable } from 'types/helpers/deep-pick-nullables'

import { RecommendedGames } from './types'

export type RecommendedSection = DeepPickNullable<
  GetRecommendedGamesQuery,
  ['recommended', 'section']
>

export function mapRecommendedGamesDTO(
  recommended: RecommendedSection
): RecommendedGames {
  return {
    recommendedTitle: recommended.title || 'You may like these games',
    recommendedGames: gamesMapper(recommended?.games),
    recommendedHighlight: highlightMapper(recommended.highlight)
  }
}
