import { ShoppingCart } from '@styled-icons/material-outlined'

import * as S from './styles'

export type CartIconProps = {
  quantity?: number
}

const CartIcon = ({ quantity = 0 }: CartIconProps) => (
  <S.Wrapper>
    {!!quantity && <S.Badge aria-label="Cart Items">{quantity}</S.Badge>}
    <ShoppingCart aria-label="Shopping Cart" />
  </S.Wrapper>
)

export default CartIcon
