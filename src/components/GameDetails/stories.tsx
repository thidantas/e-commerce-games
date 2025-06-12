import { Meta, StoryFn } from '@storybook/react'

import gameDetailsMock from './mock'
import GameDetails, { GameDetailsProps } from '.'

export default {
  title: 'components/GameDetails',
  component: GameDetails,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  args: gameDetailsMock,
  argTypes: {
    platforms: {
      control: {
        type: 'inline-check',
        options: ['windows', 'linux', 'mac']
      }
    },
    rating: {
      control: {
        type: 'inline-radio',
        options: ['BR0', 'BR10', 'BR12', 'BR14', 'BR16', 'BR18']
      }
    },
    releaseDate: {
      control: {
        type: 'date'
      }
    },
    genres: {
      control: {
        type: 'inline-check',
        options: [
          'Action',
          'Adventure',
          'Role-playing',
          'Simulation',
          'Strategy'
        ]
      }
    }
  }
} as Meta

export const Default: StoryFn<GameDetailsProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameDetails {...args} />
  </div>
)
