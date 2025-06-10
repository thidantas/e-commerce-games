import { Meta, StoryFn } from '@storybook/react'

import gameInfoMock from './mock'

import GameInfo, { GameInfoProps } from '.'

export default {
  title: 'components/GameInfo',
  component: GameInfo,
  args: gameInfoMock,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryFn<GameInfoProps> = (args) => (
  <div style={{ maxWidth: '144rem', margin: 'auto', padding: '1.5rem' }}>
    <GameInfo {...args} />
  </div>
)
