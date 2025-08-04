import {
  GetGamesQuery,
  GetGamesQueryVariables
} from 'graphql/generated/graphql'
import { getClient } from 'lib/ApolloClient'
import { GET_GAMES } from 'graphql/queries/games/getGames'
import { Game } from 'dtos/types'
import { mapGamesDTO } from 'dtos/games/games.dto'

export async function getGames(
  variables: GetGamesQueryVariables
): Promise<Game[] | null> {
  try {
    const { data } = await getClient().query<
      GetGamesQuery,
      GetGamesQueryVariables
    >({
      query: GET_GAMES,
      variables
    })

    const games = data?.games

    if (!games) return null

    return mapGamesDTO(games)
  } catch (err) {
    console.log(err)

    return null
  }
}
