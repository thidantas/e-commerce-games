import Link from 'next/link'

import Empty from 'components/Empty'
import Button from 'components/Button'
import GameItem, { GameItemProps } from 'components/GameItem'

import * as S from './styles'

export type CartListProps = {
  total?: string
  items?: GameItemProps[]
  hasButton?: boolean
}

const CartList = ({ total, items = [], hasButton = false }: CartListProps) => {
  const renderContent: React.ReactElement = (
    <>
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
    </>
  )

  const renderEmpty: React.ReactElement = (
    <Empty
      title="Your cart is empty"
      description="Go back to the store and explore great games and offers"
      hasLink
    />
  )

  return (
    <S.Wrapper isEmpty={!items.length}>
      {items.length ? renderContent : renderEmpty}
    </S.Wrapper>
  )
}

export default CartList
