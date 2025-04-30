import { Meta, StoryFn } from '@storybook/react'

import items from './mock'
import BannerSlider, { BannerSliderProps } from '.'

export default {
  title: 'components/BannerSlider',
  component: BannerSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryFn<BannerSliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <BannerSlider {...args} />
  </div>
)
