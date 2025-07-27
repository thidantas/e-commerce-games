import { getClient } from 'lib/ApolloClient'
import { GET_GAME_BY_SLUG } from 'graphql/queries/games/getGameBySlug'
import { GameDetails } from 'dtos/games/types'
import { mapGameDetailsDTO } from 'dtos/games/game.dto'

export async function GetGameBySlug(slug: string): Promise<GameDetails | null> {
  try {
    const { data } = await getClient().query({
      query: GET_GAME_BY_SLUG,
      variables: { slug }
    })

    const game = data?.games?.[0]

    if (!game) return null

    return mapGameDetailsDTO(game)
  } catch (err) {
    console.log(err)

    return null
  }
}
