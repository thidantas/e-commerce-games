import { Meta, StoryFn } from '@storybook/react'

import Checkbox, { CheckboxProps } from '.'

export default {
  title: 'components/Forms/Checkbox',
  component: Checkbox,
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
    isChecked: {
      type: 'boolean'
    },
    onCheck: {
      action: 'checked'
    }
  }
} as Meta

export const Default: StoryFn<CheckboxProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Checkbox
        name="category"
        label="Action"
        labelFor="action"
        isChecked
        {...args}
      />
    </div>

    <div style={{ padding: 10 }}>
      <Checkbox
        name="category"
        label="Adventure"
        labelFor="adventure"
        {...args}
      />
    </div>

    <div style={{ padding: 10 }}>
      <Checkbox
        name="category"
        label="Strategy"
        labelFor="strategy"
        {...args}
      />
    </div>
  </>
)
