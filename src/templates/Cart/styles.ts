'use client'

import media from 'styled-media-query'
import styled, { css } from 'styled-components'

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-rows: 1fr;
    grid-gap: ${theme.spacings.large};
    margin: ${theme.spacings.large} 0;

    ${media.greaterThan('medium')`
      grid-template-columns: 2fr 1fr;
      `}
  `}
`
