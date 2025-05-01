import { AnchorHTMLAttributes, ButtonHTMLAttributes, JSX } from 'react'

import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  icon?: JSX.Element
  size?: 'small' | 'medium' | 'large'
  children?: React.ReactNode
  fullWidth?: boolean
  minimal?: boolean
  as?: React.ElementType
} & ButtonTypes

const Button = ({
  icon,
  size = 'medium',
  children,
  fullWidth = false,
  minimal = false,
  ...props
}: ButtonProps) => (
  <S.Wrapper
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    minimal={minimal}
    {...props}
  >
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
