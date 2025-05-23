import { InputHTMLAttributes, useCallback } from 'react'

import * as S from './styles'

type RadioValue = string | ReadonlyArray<string> | number

export type RadioProps = {
  value?: RadioValue
  label?: string
  labelFor?: string
  labelColor?: 'white' | 'black'
  onCheck?: (value?: RadioValue) => void
} & InputHTMLAttributes<HTMLInputElement>

const Radio = ({
  value,
  label,
  labelFor = '',
  labelColor = 'white',
  onCheck,
  ...props
}: RadioProps) => {
  const handleOnChange = useCallback(() => {
    if (!onCheck) return

    onCheck(value)
  }, [value, onCheck])

  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="radio"
        value={value}
        onChange={handleOnChange}
        {...props}
      />
      {!!label && (
        <S.Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}

export default Radio
