import { JSX } from 'react'

import * as S from './styles'

export type ButtonProps = {
  icon?: JSX.Element
  size?: 'small' | 'medium' | 'large'
  children?: React.ReactNode
  fullWidth?: boolean
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({
  icon,
  size = 'medium',
  children,
  fullWidth = false,
  ...props
}: ButtonProps) => (
  <S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} {...props}>
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
