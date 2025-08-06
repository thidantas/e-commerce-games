'use client'

import Base from 'templates/Base'
import Empty from 'components/Empty'
import Heading from 'components/Heading'
import Showcase from 'components/Showcase'
import { Divider } from 'components/Divider'
import { Container } from 'components/Container'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import CartList, { CartListProps } from 'components/CartList'
import PaymentOptions, { PaymentOptionsProps } from 'components/PaymentOptions'

import * as S from './styles'

export type CartProps = {
  recommendedTitle?: string
  recommendedGames?: GameCardProps[]
  recommendedHighlight: HighlightProps
} & CartListProps &
  Pick<PaymentOptionsProps, 'cards'>

const Cart = ({
  items = [],
  total,
  cards,
  recommendedTitle,
  recommendedGames,
  recommendedHighlight
}: CartProps) => {
  const handleOnPayment = async () => {
    // eslint-disable-next-line no-console
    console.log('payment')
  }

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My cart
        </Heading>

        {items.length ? (
          <S.Content>
            <CartList items={items} total={total} />

            <PaymentOptions cards={cards} onPayment={handleOnPayment} />
          </S.Content>
        ) : (
          <Empty
            title="Your cart is empty"
            description="Go back to the store and explore great games and offers"
            hasLink
          />
        )}

        <Divider />
      </Container>

      <Showcase
        title={recommendedTitle}
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}

export default Cart
