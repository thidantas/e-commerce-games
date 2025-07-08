'use client'

import React, { useState, InputHTMLAttributes, useCallback } from 'react'

import * as S from './styles'

export type TextFieldProps = {
  icon?: React.ReactNode
  label?: string
  error?: string
  disabled?: boolean
  initialValue?: string
  iconPosition?: 'left' | 'right'
  onFieldText?: (value: string) => void
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  icon,
  name,
  label,
  error,
  disabled = false,
  initialValue = '',
  iconPosition = 'left',
  onFieldText,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const handleOnChangeText = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()

      const newValue = e.currentTarget.value
      setValue(newValue)

      if (!onFieldText) return

      onFieldText(newValue)
    },
    [onFieldText]
  )

  return (
    <S.Wrapper disabled={disabled} error={!!error}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Input
          type="text"
          name={name}
          value={value}
          disabled={disabled}
          iconPosition={iconPosition}
          onChange={handleOnChangeText}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default TextField
