import Link from 'next/link'
import media from 'styled-media-query'
import styled, { css, DefaultTheme } from 'styled-components'

export const ProfileList = styled.ul`
  ${({ theme }) => css`
    display: flex;
    list-style: none;
    border-bottom: 0.1rem solid ${theme.colors.lightGray};

    > li {
      flex: 1;
    }

    ${media.greaterThan('medium')`
      flex-direction: column;
      border: 0;

      li:not(:last-child) {
        border-bottom: 0.1rem solid ${theme.colors.lightGray};
      }
    `}
  `}
`

const linkModifiers = {
  default: (theme: DefaultTheme) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.black};
  `,

  active: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
  `
}

type LinkProps = {
  isActive?: boolean
}

export const ProfileLink = styled(Link).withConfig({
  shouldForwardProp: (prop: string | number, defaultValidatorFn) =>
    prop !== 'isActive' && defaultValidatorFn(prop)
})<LinkProps>`
  ${({ theme, isActive }) => css`
    display: flex;
    font-size: ${theme.font.sizes.large};

    text-decoration: none;
    align-items: center;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    transition: background, color, ${theme.transition.default};

    &:hover {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
    }

    span {
      margin-left: ${theme.spacings.xsmall};
    }

    ${media.lessThan('medium')`
      justify-content: center;

       span {
        display: none;
      }
      `}

    ${isActive && linkModifiers.active(theme)}
    ${!isActive && linkModifiers.default(theme)}
  `}
`
