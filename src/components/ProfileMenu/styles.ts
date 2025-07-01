import Link from 'next/link'
import media from 'styled-media-query'
import styled, { css } from 'styled-components'

export const Nav = styled.nav``

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

export const ProfileLink = styled(Link)`
  ${({ theme }) => css`
    display: flex;
    font-size: ${theme.font.sizes.large};
    background: ${theme.colors.white};
    color: ${theme.colors.black};
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
  `}
`
