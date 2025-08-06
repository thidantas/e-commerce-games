import { getRecommendedGames } from 'services/ssr/games/getRecommendedGames'
import Cart, { CartProps } from 'templates/Cart'
import { HighlightProps } from 'components/Highlight'
import cartListMock from 'components/CartList/mock'
import highlightMock from 'components/Highlight/mock'
import paymentCardOptionsMock from 'components/PaymentOptions/mock'
import gameCardSliderItemsMock from 'components/GameCardSlider/mock'

const mockProps: CartProps = {
  cards: paymentCardOptionsMock,
  total: 400.0,
  items: cartListMock,
  recommendedTitle: 'You may like these games',
  recommendedGames: gameCardSliderItemsMock.slice(0, 5),
  recommendedHighlight: highlightMock
}

export default async function CartPage() {
  const isCI = process.env.CI === 'true'

  if (isCI) {
    return <Cart {...mockProps} />
  }

  const recommended = await getRecommendedGames()

  return (
    <Cart
      {...mockProps}
      recommendedTitle={recommended?.recommendedTitle}
      recommendedGames={recommended?.recommendedGames}
      recommendedHighlight={recommended?.recommendedHighlight as HighlightProps}
    />
  )
}
