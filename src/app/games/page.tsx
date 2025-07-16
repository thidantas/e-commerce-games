import Games, { GamesProps } from 'templates/Games'
import exploreSidebarItemsMock from 'components/ExploreSidebar/mock'
import gameCardSliderItemsMock from 'components/GameCardSlider/mock'

const mockProps: GamesProps = {
  games: gameCardSliderItemsMock,
  filterItems: exploreSidebarItemsMock
}

export default async function GamesPage() {
  return <Games {...mockProps} />
}
