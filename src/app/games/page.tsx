import makeClient from 'providers/ApolloProvider/client'
import { ApolloProvider } from 'providers/ApolloProvider'
import { getGames } from 'services/ssr/games/getGames'
import Games, { GamesProps } from 'templates/Games'
import exploreSidebarItemsMock from 'components/ExploreSidebar/mock'
import { GameCardProps } from 'components/GameCard'

export const revalidate = 60

const mockProps: GamesProps = {
  games: [],
  filterItems: exploreSidebarItemsMock
}

export default async function GamesPage() {
  const isCI = process.env.CI === 'true'

  if (isCI) {
    return <Games {...mockProps} />
  }
  const apolloClient = makeClient()

  const games = await getGames(apolloClient, { limit: 15 })

  const initialApolloState = JSON.parse(JSON.stringify(apolloClient.extract()))

  return (
    <ApolloProvider initialState={initialApolloState}>
      <Games {...mockProps} games={games as GameCardProps[]} />
    </ApolloProvider>
  )
}
