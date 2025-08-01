import Empty from 'components/Empty'
import Heading from 'components/Heading'
import GameItem, { GameItemProps } from 'components/GameItem'

import * as S from './styles'

export type OrdersListProps = {
  items?: GameItemProps[]
}

const OrdersList = ({ items = [] }: OrdersListProps) => (
  <S.Wrapper>
    <Heading lineBottom lineColor="primary" color="black" size="small">
      My orders
    </Heading>

    {items.length ? (
      items?.map((item) => <GameItem key={item.downloadLink} {...item} />)
    ) : (
      <Empty
        title="You have no orders yet"
        description="Go Back to the store and explore great games and offers"
      />
    )}
  </S.Wrapper>
)

export default OrdersList
