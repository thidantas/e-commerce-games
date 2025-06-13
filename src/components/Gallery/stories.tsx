import { Meta, StoryFn } from '@storybook/react'

import galleryMock from './mock'

import Gallery, { GalleryProps } from '.'

export default {
  title: 'components/Gallery',
  component: Gallery,
  args: {
    items: galleryMock
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryFn<GalleryProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Gallery {...args} />
  </div>
)
