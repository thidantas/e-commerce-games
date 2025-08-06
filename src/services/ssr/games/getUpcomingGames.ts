import { getClient } from 'lib/ApolloClient'
import {
  GetUpcomingGamesQuery,
  GetUpcomingGamesQueryVariables
} from 'graphql/generated/graphql'
import { GET_UPCOMING_GAMES } from 'graphql/queries/games/getUpcomingGames'
import { QUERY_PARAMS } from 'constants/queryParams'
import { UpcomingGames } from 'dtos/games/types'
import { mapUpcomingGamesDTO } from 'dtos/games/upcoming.dto'

export async function getUpcomingGames(): Promise<UpcomingGames | null> {
  try {
    const { data } = await getClient().query<
      GetUpcomingGamesQuery,
      GetUpcomingGamesQueryVariables
    >({
      query: GET_UPCOMING_GAMES,
      variables: {
        date: QUERY_PARAMS.DATE.MOCKED_TODAY
      }
    })

    const upcomingGamesData = data

    if (!upcomingGamesData) return null

    const { upcomingTitle, upcomingGames, upcomingHighlight } =
      mapUpcomingGamesDTO(upcomingGamesData)

    return {
      upcomingTitle,
      upcomingGames,
      upcomingHighlight
    }
  } catch (error) {
    return null
  }
}
