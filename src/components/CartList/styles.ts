'use client'

import media from 'styled-media-query'
import { tint } from 'polished'
import styled, { css } from 'styled-components'

import * as EmptyStyles from 'components/Empty/styles'

type WrapperProps = {
  isEmpty?: boolean
}

export const Wrapper = styled.main<WrapperProps>`
  ${({ theme, isEmpty }) => css`
    background: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    align-self: flex-start;

    ${isEmpty &&
    css`
      ${EmptyStyles.Wrapper} {
        padding-bottom: ${theme.spacings.medium};
      }

      ${EmptyStyles.Image} {
        max-width: 20rem;
      }

      ${EmptyStyles.Title} {
        font-size: ${theme.font.sizes.large};
      }

      ${EmptyStyles.Description} {
        color: ${theme.colors.black};
        font-size: ${theme.font.sizes.medium};
      }
    `}
  `}
`

export const Footer = styled.div`
  ${({ theme }) => css`
    background: ${tint(0.2, theme.colors.lightGray)};
    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.small};
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.medium};
      padding: ${theme.spacings.small};
    `}
  `}
`

export const Total = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`
