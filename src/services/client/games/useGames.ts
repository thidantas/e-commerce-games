'use client'

import { useQuery } from '@apollo/client'

import { GET_GAMES } from 'graphql/queries/games/getGames'
import {
  GetGamesQuery,
  GetGamesQueryVariables
} from 'graphql/generated/graphql'
import { mapGamesDTO } from 'dtos/games/games.dto'

export const useGames = ({ limit }: GetGamesQueryVariables) => {
  const isCI = process.env.NEXT_PUBLIC_CI === 'true'

  const { data, loading, error, fetchMore } = useQuery<
    GetGamesQuery,
    GetGamesQueryVariables
  >(GET_GAMES, {
    variables: {
      limit
    },
    skip: isCI
  })

  if (isCI) {
    return {
      data: [],
      error: null,
      loading: true,
      handleFetchMore: () => {}
    }
  }

  const gamesDTO = data?.games ?? []

  const handleFetchMore = () => {
    return fetchMore({
      variables: {
        limit: 15,
        start: gamesDTO?.length
      }
    })
  }

  const games = mapGamesDTO(gamesDTO)

  return {
    data: games,
    error,
    loading,
    handleFetchMore
  }
}
