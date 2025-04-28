import { Meta, StoryFn } from '@storybook/react'

import GameCardSlider, { GameCardSliderProps } from '.'

const items = [
  {
    title: 'Prince of Persia - Sands of Time',
    developer: 'Ubisoft',
    img: '/img/prince-of-persia-sands-of-time-img.jpg',
    price: 'R$ 29,90',
    promotionalPrice: 'R$ 5,99'
  },
  {
    title: 'Prince of Persia - Warrior Within',
    developer: 'Ubisoft',
    img: '/img/prince-of-persia-warrior-within-img.jpg',
    price: 'R$ 29,90',
    promotionalPrice: 'R$ 5,99'
  },
  {
    title: 'Prince of Persia - The Two Thrones',
    developer: 'Ubisoft',
    img: '/img/prince-of-persia-the-two-thrones-img.jpg',
    price: 'R$ 29,90',
    promotionalPrice: 'R$ 5,99'
  },
  {
    title: 'Prince Of Persia',
    developer: 'Ubisoft',
    img: '/img/prince-of-persia-img.jpg',
    price: 'R$ 29,90',
    promotionalPrice: 'R$ 5,99'
  }
]

export default {
  title: 'components/GameCardSlider',
  component: GameCardSlider,
  args: { items },
  argTypes: {
    color: {
      control: {
        type: 'inline-radio',
        options: ['white', 'black']
      }
    }
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryFn<GameCardSliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameCardSlider {...args} />
  </div>
)
