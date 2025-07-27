import { useQuery } from '@apollo/client'

import { GET_GAMES } from 'graphql/queries/games/getGames'
import {
  GetGamesQuery,
  GetGamesQueryVariables
} from 'graphql/generated/graphql'

export const useGames = (variables?: GetGamesQueryVariables) => {
  const { data, loading, error } = useQuery<
    GetGamesQuery,
    GetGamesQueryVariables
  >(GET_GAMES, { variables })

  return {
    games: data?.games || [],
    loading,
    error
  }
}
