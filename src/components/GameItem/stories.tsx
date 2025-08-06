import { Meta, StoryObj } from '@storybook/react'

import GameItem, { GameItemProps } from '.'

export default {
  title: 'components/GameItem',
  component: GameItem,
  args: {
    img: 'img/halo-4.jpg',
    title: 'Halo 4',
    price: 200.0
  }
} as Meta

export const Default: StoryObj<GameItemProps> = {}

export const WithDownloadLink: StoryObj<GameItemProps> = {
  args: {
    downloadLink: 'https://link'
  }
}

export const WithPayment: StoryObj<GameItemProps> = {
  args: {
    downloadLink: 'https://link',
    paymentInfo: {
      flag: 'mastercard',
      img: '/img/icons/cards/mastercard.png',
      number: '**** **** **** 1234',
      purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
    }
  }
}
