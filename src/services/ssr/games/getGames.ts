import { ApolloClient } from '@apollo/client'

import {
  GetGamesQuery,
  GetGamesQueryVariables
} from 'graphql/generated/graphql'
import { GET_GAMES } from 'graphql/queries/games/getGames'
import { Game } from 'dtos/types'
import { mapGamesDTO } from 'dtos/games/games.dto'

export async function getGames(
  client: ApolloClient<object>,
  variables: GetGamesQueryVariables
): Promise<Game[] | null> {
  try {
    const { data } = await client.query<GetGamesQuery, GetGamesQueryVariables>({
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
