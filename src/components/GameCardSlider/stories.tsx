import { Meta, StoryFn } from '@storybook/react'

import items from './mock'
import GameCardSlider, { GameCardSliderProps } from '.'

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
