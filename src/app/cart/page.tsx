import cartListMock from 'components/CartList/mock'
import highlightMock from 'components/Highlight/mock'
import paymentCardOptionsMock from 'components/PaymentOptions/mock'
import gameCardSliderItemsMock from 'components/GameCardSlider/mock'
import Cart, { CartProps } from 'templates/Cart'

const mockProps: CartProps = {
  cards: paymentCardOptionsMock,
  total: '$ 400,00',
  items: cartListMock,
  recommendedGames: gameCardSliderItemsMock.slice(0, 5),
  recommendedHighlight: highlightMock
}

export default async function CartPage() {
  return <Cart {...mockProps} />
}
