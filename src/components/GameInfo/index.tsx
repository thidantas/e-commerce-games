import {
  FavoriteBorder,
  AddShoppingCart
} from '@styled-icons/material-outlined'

import Ribbon from 'components/Ribbon'
import Button from 'components/Button'
import Heading from 'components/Heading'

import * as S from './styles'

export type GameInfoProps = {
  title: string
  price: string
  description: string
}

const GameInfo = ({ title, description, price }: GameInfoProps) => (
  <S.Wrapper>
    <Heading color="black" lineBottom>
      {title}
    </Heading>

    <Ribbon color="secondary">{`$${price}`}</Ribbon>

    <S.Description>{description}</S.Description>

    <S.ButtonWrapper>
      <Button icon={<AddShoppingCart />} size="large">
        Add to cart
      </Button>
      <Button icon={<FavoriteBorder />} size="large" minimal>
        Wishlist
      </Button>
    </S.ButtonWrapper>
  </S.Wrapper>
)

export default GameInfo
