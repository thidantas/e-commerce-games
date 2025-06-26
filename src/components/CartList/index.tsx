import GameItem, { GameItemProps } from 'components/GameItem'

import * as S from './styles'

export type CartListProps = {
  total: string
  items: GameItemProps[]
}

const CartList = ({ total, items }: CartListProps) => (
  <S.Wrapper>
    {items.map((item) => (
      <GameItem key={item.title} {...item} />
    ))}

    <S.Footer>
      Total <S.Total>{total}</S.Total>
    </S.Footer>
  </S.Wrapper>
)

export default CartList
