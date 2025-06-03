import styled, { css } from 'styled-components'
import { lighten } from 'polished'

export const ForgotPassword = styled.a`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    text-align: right;
    text-decoration: none;

    &:hover {
      color: ${lighten(0.2, theme.colors.black)};
    }
  `}
`
