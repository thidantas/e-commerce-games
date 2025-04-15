import { Meta, StoryFn } from '@storybook/react'

import GameCard, { GameCardProps } from '.'

export default {
  title: 'components/GameCard',
  component: GameCard,
  args: {
    img: '/img/borderlands-3-game-cover.png',
    title: 'Borderlands 3',
    price: 'R$ 215,00',
    developer: 'Gearbox Software',
    promotionalPrice: 'R$ 200,00',
    favorite: false
  },
  argTypes: {
    favorite: {
      control: 'boolean'
    },
    onFav: {
      action: 'clicked'
    },
    ribbonLabel: {
      type: 'string'
    },
    ribbonSize: {
      options: ['small', 'normal'],
      control: { type: 'select' }
    },
    ribbonColor: {
      options: ['primary', 'secondary'],
      control: { type: 'select' }
    }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryFn<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

export const WithRibbon: StoryFn<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

WithRibbon.args = {
  ribbonLabel: '20% OFF',
  ribbonColor: 'secondary',
  ribbonSize: 'small'
}
