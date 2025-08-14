import { GET_RECOMMENDED_GAMES } from 'graphql/queries/games/getRecommendedGames'
import { GetRecommendedGamesQuery } from 'graphql/generated/graphql'
import makeClient from 'providers/ApolloProvider/client'
import { RecommendedGames } from 'dtos/games/types'
import { mapRecommendedGamesDTO } from 'dtos/games/recommended.dto'

export async function getRecommendedGames(): Promise<RecommendedGames | null> {
  try {
    const client = makeClient()
    const { data } = await client.query<GetRecommendedGamesQuery>({
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
