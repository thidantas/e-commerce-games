'use client'

import { darken } from 'polished'
import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from '.'

type WrapperProps = { hasIcon: boolean } & Pick<
  ButtonProps,
  'size' | 'fullWidth' | 'minimal'
>

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,

  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,

  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,

  fullWidth: () => css`
    width: 100%;
  `,

  withIcon: (theme: DefaultTheme, size: WrapperProps['size']) => css`
    svg {
      width: ${theme.icon.sizes[size!]};

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,

  minimal: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.colors.primary};

    &:hover {
      color: ${darken(0.1, theme.colors.primary)};
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon, minimal }) => css`
    cursor: pointer;
    display: inline-flex;
    padding: ${theme.spacings.xxsmall};
    font-family: ${theme.font.family};
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: ${theme.colors.white};
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
    border: 0;
    border-radius: ${theme.border.radius};

    &:hover {
      background: ${minimal
        ? 'none'
        : `linear-gradient(180deg, #e35565 0%, #d958a6 50%)`};
    }

    ${!!size && wrapperModifiers[size](theme)}
    ${!!fullWidth && wrapperModifiers.fullWidth()}
    ${!!hasIcon && wrapperModifiers.withIcon(theme, size)}
    ${!!minimal && wrapperModifiers.minimal(theme)}
  `}
`
