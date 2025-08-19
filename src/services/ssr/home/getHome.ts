import { GetHomeQuery, GetHomeQueryVariables } from 'graphql/generated/graphql'
import { GET_HOME } from 'graphql/queries/home/getHome'
import makeClient from 'providers/ApolloProvider/client'
import { Home } from 'dtos/home/types'
import { mapHomeDTO } from 'dtos/home/home.dto'
import { QUERY_PARAMS } from 'constants/queryParams'

export async function getHome(): Promise<Home | null> {
  try {
    const client = makeClient()
    const { data } = await client.query<GetHomeQuery, GetHomeQueryVariables>({
      query: GET_HOME,
      variables: {
        date: QUERY_PARAMS.DATE.MOCKED_TODAY
      }
    })

    const homeData = data

    if (!homeData) return null

    const {
      banners,
      newGames,
      upcomingGames,
      freeGames,
      popularGames,
      popularGamesTitle,
      freeGamesTitle,
      upcomingGamesTitle,
      newGamesTitle,
      mostPopularHighlight,
      freeHighlight,
      upcomingHighlight
    } = mapHomeDTO(homeData)

    return {
      banners,
      newGames,
      upcomingGames,
      freeGames,
      popularGames,
      popularGamesTitle,
      freeGamesTitle,
      upcomingGamesTitle,
      newGamesTitle,
      upcomingHighlight,
      freeHighlight,
      mostPopularHighlight
    }
  } catch (err) {
    console.log(err)

    return null
  }
}
