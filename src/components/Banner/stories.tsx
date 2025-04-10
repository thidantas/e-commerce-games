import { Meta, StoryFn } from '@storybook/react'
import Banner, { BannerProps } from '.'

export default {
  title: 'components/Banner',
  component: Banner,
  args: {
    img: 'https://img.freepik.com/fotos-gratis/renderizacao-3d-de-fundo-de-textura-hexagonal_23-2150796421.jpg?t=st=1744305474~exp=1744309074~hmac=21ca4e3043d63d9d289c195d50fbfca592080b8dad64dd27e9d56cf8be53d360&w=996',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: StoryFn<BannerProps> = (args) => <Banner {...args} />
