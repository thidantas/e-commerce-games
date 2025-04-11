import { Meta, StoryFn, StoryObj } from '@storybook/react'
import Ribbon, { RibbonProps } from '.'

export default {
  title: 'components/Ribbon',
  component: Ribbon,
  args: {
    children: 'Best Seller',
    color: 'primary',
    size: 'normal'
  },
  argTypes: {
    children: {
      type: 'string'
    },
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary']
      }
    },
    size: {
      control: {
        type: 'select',
        options: ['normal', 'small']
      }
    }
  }
} as Meta

export const Default: StoryFn<RibbonProps> = (args) => (
  <div
    style={{
      width: '40rem',
      height: '25rem',
      position: 'relative',
      backgroundColor: '#888'
    }}
  >
    <Ribbon {...args} />
  </div>
)
