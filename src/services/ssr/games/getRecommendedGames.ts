import { getClient } from 'lib/ApolloClient'
import { GET_RECOMMENDED_GAMES } from 'graphql/queries/games/getRecommendedGames'
import { GetRecommendedGamesQuery } from 'graphql/generated/graphql'
import { RecommendedGames } from 'dtos/games/types'
import { mapRecommendedGamesDTO } from 'dtos/games/recommended.dto'

export async function getRecommendedGames(): Promise<RecommendedGames | null> {
  try {
    const { data } = await getClient().query<GetRecommendedGamesQuery>({
      query: GET_RECOMMENDED_GAMES
    })

    const recommendedGamesData = data.recommended?.section

    if (!recommendedGamesData) return null

    const { recommendedTitle, recommendedHighlight, recommendedGames } =
      mapRecommendedGamesDTO(recommendedGamesData)

    return {
      recommendedTitle,
      recommendedHighlight,
      recommendedGames
    }
  } catch (error) {
    return null
  }
}
