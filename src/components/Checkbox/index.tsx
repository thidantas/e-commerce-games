import { InputHTMLAttributes, useCallback, useEffect, useState } from 'react'

import * as S from './styles'

export type CheckboxProps = {
  value?: string | ReadonlyArray<string> | number
  label?: string
  labelFor?: string
  isChecked?: boolean
  labelColor?: 'white' | 'black'
  onCheck?: (status: boolean) => void
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({
  value,
  label,
  labelFor = '',
  isChecked = false,
  labelColor = 'white',
  onCheck,
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked)

  const handleOnChange = useCallback(() => {
    const status = !checked

    setChecked(status)

    if (!onCheck) return

    onCheck(status)
  }, [checked, onCheck])

  useEffect(() => {
    setChecked(isChecked)
  }, [isChecked])

  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="checkbox"
        onChange={handleOnChange}
        checked={checked}
        value={value}
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

export default Checkbox
