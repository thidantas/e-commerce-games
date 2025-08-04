'use client'

import {
  Favorite,
  FavoriteBorder,
  AddShoppingCart
} from '@styled-icons/material-outlined'

import Button from 'components/Button'
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'
import formatPrice from 'utils/formatters/formatPrice'

import * as S from './styles'

export type GameCardProps = {
  img: string
  slug: string
  title: string
  price: number
  developer: string
  favorite?: boolean
  promotionalPrice?: number
  ribbonLabel?: string
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
  onFav?: () => void
}

const GameCard = ({
  img,
  slug,
  title,
  price,
  developer,
  favorite = false,
  promotionalPrice,
  ribbonLabel,
  ribbonColor = 'primary',
  ribbonSize = 'small',
  onFav
}: GameCardProps) => (
  <S.Wrapper>
    {!!ribbonLabel && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbonLabel}
      </Ribbon>
    )}

    <S.ImageBox href={`/game/${slug}`}>
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img src={img} alt={title} />
    </S.ImageBox>

    <S.Content>
      <S.Info href={`/game/${slug}`}>
        <S.Title>{title}</S.Title>
        <S.Developer>{developer}</S.Developer>
      </S.Info>

      <S.FavButton role="button" onClick={onFav}>
        {favorite ? (
          <Favorite aria-label="Remove from Wishlist" />
        ) : (
          <FavoriteBorder aria-label="Add to Wishlist" />
        )}
      </S.FavButton>

      <S.BuyBox>
        {!!promotionalPrice && (
          <S.Price isPromotional>{formatPrice(price)}</S.Price>
        )}
        <S.Price>{formatPrice(promotionalPrice || price)}</S.Price>
        <Button icon={<AddShoppingCart />} size="small" />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default GameCard
