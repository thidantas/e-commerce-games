import { Meta, StoryFn } from '@storybook/react'

import Radio, { RadioProps } from '.'

export default {
  title: 'components/Forms/Radio',
  component: Radio,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  argTypes: {
    label: {
      type: 'string'
    },
    labelFor: {
      type: 'string'
    },
    onCheck: {
      action: 'checked'
    }
  }
} as Meta

export const Default: StoryFn<RadioProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Radio
        id="first"
        name="name"
        label="first"
        value="first"
        labelFor="first"
        defaultChecked
        {...args}
      />
    </div>

    <div style={{ padding: 10 }}>
      <Radio
        id="second"
        name="name"
        label="second"
        value="second"
        labelFor="second"
        {...args}
      />
    </div>

    <div style={{ padding: 10 }}>
      <Radio
        id="third"
        name="name"
        label="third"
        value="third"
        labelFor="third"
        {...args}
      />
    </div>
  </>
)
