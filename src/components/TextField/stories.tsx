import { Meta, StoryFn } from '@storybook/react'

import TextField, { TextFieldProps } from '.'
import { Email } from '@styled-icons/material-outlined'

export default {
  title: 'components/Forms/TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    labelFor: 'email',
    id: 'email',
    initialValue: '',
    disabled: false,
    placeholder: 'email.email@email.com'
  },
  argTypes: {
    onFieldText: { action: 'changed' },
    icon: {
      table: { disable: true }
    },
    iconPosition: {
      control: {
        type: 'select',
        options: ['left', 'right']
      },
      disabled: {
        type: 'boolean'
      },
      error: {
        type: 'string'
      },
      placeholder: {
        type: 'string'
      }
    }
  }
} as Meta

export const Default: StoryFn<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

export const WithIcon: StoryFn<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 310, padding: 15 }}>
    <TextField {...args} icon={<Email />} />
  </div>
)

WithIcon.args = {
  ...Default.args,
  iconPosition: 'left'
}

export const WithError: StoryFn<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 310, padding: 15 }}>
    <TextField {...args} icon={<Email />} />
  </div>
)

WithError.args = {
  ...Default.args,
  error: 'Invalid e-mail',
  iconPosition: 'left',
  initialValue: 'email@email.com'
}
