import { Meta, StoryFn } from '@storybook/react'
import Banner, { BannerProps } from '.'

export default {
  title: 'components/Banner',
  component: Banner,
  args: {
    img: 'https://br.freepik.com/fotos-gratis/renderizacao-3d-de-fundo-de-textura-hexagonal_66626544.htm#fromView=keyword&page=1&position=0&uuid=d5d9cc39-e607-4b9a-9284-f010bfeb99b2&query=Papel+De+Parede',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  }
} as Meta

export const Default: StoryFn<BannerProps> = (args) => <Banner {...args} />
