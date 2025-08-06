'use client'

import { Download } from '@styled-icons/boxicons-solid'

import formatPrice from 'utils/formatters/formatPrice'

import * as S from './styles'

export type PaymentInfoProps = {
  img: string
  flag: string
  number: string
  purchaseDate: string
}

export type GameItemProps = {
  img: string
  title: string
  price: number
  paymentInfo?: PaymentInfoProps
  downloadLink?: string
}

const GameItem = ({
  img,
  title,
  price,
  paymentInfo,
  downloadLink
}: GameItemProps) => (
  <S.Wrapper>
    <S.GameContent>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>

      <S.Content>
        <S.Title>
          {title}

          {!!downloadLink && (
            <S.DownloadLink
              href={downloadLink}
              target="_blank"
              aria-label={`Get ${title} here`}
            >
              <Download size={20} />
            </S.DownloadLink>
          )}
        </S.Title>
        <S.Price>{formatPrice(price)}</S.Price>
      </S.Content>
    </S.GameContent>

    {!!paymentInfo && (
      <S.PaymentContent>
        <p>{paymentInfo.purchaseDate}</p>
        <S.CardInfo>
          <span>{paymentInfo.number}</span>
          <img src={paymentInfo.img} alt={paymentInfo.flag} />
        </S.CardInfo>
      </S.PaymentContent>
    )}
  </S.Wrapper>
)

export default GameItem
