import Link from 'next/link'

import Button from 'components/Button'
import GameItem, { GameItemProps } from 'components/GameItem'

import * as S from './styles'

export type CartListProps = {
  total: string
  items: GameItemProps[]
  hasButton?: boolean
}

const CartList = ({ total, items, hasButton = false }: CartListProps) => (
  <S.Wrapper>
    {items.map((item) => (
      <GameItem key={item.title} {...item} />
    ))}

    <S.Footer>
      {!hasButton && <span>Total:</span>}
      <S.Total>{total}</S.Total>

      {hasButton && (
        <Link href="/cart" title="go to cart">
          <Button>Buy it now</Button>
        </Link>
      )}
    </S.Footer>
  </S.Wrapper>
)

export default CartList
