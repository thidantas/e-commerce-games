import { Meta, StoryFn } from '@storybook/react'

import MediaMatch from '.'

export default {
  title: 'components/MediaMatch',
  component: MediaMatch
} as Meta

export const Desktop: StoryFn = () => (
  <MediaMatch greaterThan="medium">Only on Desktop</MediaMatch>
)

export const Mobile: StoryFn = () => (
  <MediaMatch lessThan="medium">Only on Mobile</MediaMatch>
)

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}

Desktop.parameters = {
  viewport: {
    defaultViewport: 'desktop1'
  }
}
