import { Meta, StoryFn } from '@storybook/react'
import Showcase from '.'
import highlightMock from '../Highlight/mock'
import gameCardSliderItemsMock from '../GameCardSlider/mock'

export default {
  title: 'components/Showcase',
  component: Showcase,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryFn = (args) => <Showcase {...args} />

Default.args = {
  title: 'Most Popular',
  highlight: highlightMock,
  games: gameCardSliderItemsMock
}

export const WithoutHighlight: StoryFn = (args) => <Showcase {...args} />

WithoutHighlight.args = {
  title: 'Most Popular',
  highlight: highlightMock
}

export const WithoutGames: StoryFn = (args) => <Showcase {...args} />

WithoutGames.args = {
  title: 'Most Popular',
  games: gameCardSliderItemsMock
}
