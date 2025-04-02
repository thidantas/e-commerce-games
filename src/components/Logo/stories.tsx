import { Meta, StoryFn } from '@storybook/react'
import Logo, { LogoProps } from '.'

export default {
  title: 'components/Logo',
  component: Logo,
  argTypes: {
    color: {
      control: {
        type: 'select'
      },
      options: ['white', 'black']
    },
    size: {
      control: {
        type: 'select'
      },
      options: ['normal', 'large']
    },
    hideOnMobile: {
      control: {
        type: 'boolean'
      }
    }
  },
  args: {
    color: 'white',
    size: 'normal',
    hideOnMobile: false
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryFn<LogoProps> = (args) => <Logo {...args} />
