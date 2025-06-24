import { Meta, StoryObj } from '@storybook/react'

import GameItem, { GameItemProps } from '.'

export default {
  title: 'components/GameItem',
  component: GameItem,
  args: {
    img: 'img/halo-4.jpg',
    title: 'Halo 4',
    price: 'R$ 200,00'
  }
} as Meta

export const Default: StoryObj<GameItemProps> = {}
