import { Meta, StoryObj } from '@storybook/react'

import Banner, { BannerProps } from '.'

export default {
  title: 'components/Banner',
  component: Banner,
  argTypes: {
    ribbonLabel: {
      type: 'string'
    }
  },
  args: {
    img: '/img/halo-4.jpg',
    title: 'Halo 4',
    subtitle: '<p>Join the fight in the new <strong>Halo 4</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/game/halo-4'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj<BannerProps> = {
  render: (args) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <Banner {...args} />
    </div>
  )
}

export const WithRibbon: StoryObj<BannerProps> = {
  render: (args) => (
    <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
      <Banner {...args} ribbonLabel="50% OFF" />
    </div>
  )
}
