import { Meta, StoryFn } from '@storybook/react'

import Footer from '.'

export default {
  title: 'components/Footer',
  component: Footer
} as Meta

export const Default: StoryFn = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Footer {...args} />
  </div>
)
