import { getGames } from 'services/games/ssr/getGames'
import { GameCardProps } from 'components/GameCard'
import Games, { GamesProps } from 'templates/Games'
import exploreSidebarItemsMock from 'components/ExploreSidebar/mock'

export const revalidate = 60

const mockProps: GamesProps = {
  games: [],
  filterItems: exploreSidebarItemsMock
}

export default async function GamesPage() {
  const games = await getGames({ limit: 9 })

  return <Games {...mockProps} games={games as GameCardProps[]} />
}
