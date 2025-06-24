import highlightMock from 'components/Highlight/mock'
import gameCardSliderItemsMock from 'components/GameCardSlider/mock'
import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist'

const mockProps: WishlistTemplateProps = {
  games: gameCardSliderItemsMock,
  recommendedGames: gameCardSliderItemsMock.slice(0, 5),
  recommendedHighlight: highlightMock
}

export default async function WishlistPage() {
  return <Wishlist {...mockProps} />
}
