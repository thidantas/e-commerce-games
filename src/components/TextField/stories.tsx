import { Meta, StoryObj } from '@storybook/react'
import { Email } from '@styled-icons/material-outlined'

import TextField, { TextFieldProps } from '.'

export default {
  title: 'components/Forms/TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    name: 'email',
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

export const Default: StoryObj<TextFieldProps> = {
  render: (args) => (
    <div style={{ maxWidth: 300, padding: 15 }}>
      <TextField {...args} />
    </div>
  )
}

export const WithIcon: StoryObj<TextFieldProps> = {
  render: (args) => (
    <div style={{ maxWidth: 310, padding: 15 }}>
      <TextField {...args} icon={<Email />} iconPosition="left" />
    </div>
  )
}

export const Disabled: StoryObj<TextFieldProps> = {
  render: (args) => (
    <div style={{ maxWidth: 310, padding: 15 }}>
      <TextField {...args} icon={<Email />} iconPosition="left" disabled />
    </div>
  )
}

export const WithError: StoryObj<TextFieldProps> = {
  render: (args) => (
    <div style={{ maxWidth: 310, padding: 15 }}>
      <TextField
        {...args}
        icon={<Email />}
        error="Invalid e-mail"
        iconPosition="left"
        initialValue="email@email.com"
      />
    </div>
  )
}
