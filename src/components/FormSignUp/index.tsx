'use client'

import Link from 'next/link'
import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined'

import Button from 'components/Button'
import TextField from 'components/TextField'
import { FormWrapper, FormLink } from 'components/Form'

const FormSignUp = () => (
  <FormWrapper>
    <form>
      <TextField
        name="name"
        placeholder="Name"
        type="name"
        icon={<AccountCircle />}
      />

      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<Email />}
      />

      <TextField
        name="password"
        placeholder="Password	"
        type="password"
        icon={<Lock />}
      />

      <TextField
        name="confirm-password"
        placeholder="Confirm password"
        type="password"
        icon={<Lock />}
      />

      <Button size="large" fullWidth>
        Sign up
      </Button>

      <FormLink>
        Already have an account? <Link href="/sign-in">Sign in</Link>
      </FormLink>
    </form>
  </FormWrapper>
)

export default FormSignUp
