'use client'

import media from 'styled-media-query'
import styled, { css } from 'styled-components'

import * as HeadingStyles from 'components/Heading/styles'
import * as HighlightStyles from 'components/Highlight/styles'

export const SectionBanner = styled.section`
  ${({ theme }) => css`
    margin: ${theme.spacings.large} calc(-${theme.grid.gutter}) / 2;

    ${media.greaterThan('medium')`
      margin: ${theme.spacings.large} 0;
      position: relative;
      z-index: ${theme.layers.base};
    `}
  `}
`

export const SectionNews = styled.div`
  ${({ theme }) => css`
    margin-bottom: calc(${theme.spacings.xxlarge} * 2);

    ${media.greaterThan('large')`
      margin-top: -13rem;
    `}

    ${media.greaterThan('medium')`
      padding-top: 14rem;
      padding-bottom: 9.2rem;
      margin-bottom: 0;
      clip-path: polygon(0 0, 100% 15%, 100% 100%, 0% 85%);
      background-color: ${theme.colors.lightBg};
  `}

    ${HeadingStyles.Wrapper} {
      color: ${theme.colors.black};
    }
  `}
`

export const SectionUpcoming = styled.div`
  ${({ theme }) => css`
    ${HighlightStyles.Wrapper} {
      margin-top: calc(${theme.spacings.xlarge} * 2);
    }
  `}
`

export const SectionFooter = styled.section`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.large};
    padding-bottom: ${theme.spacings.xsmall};
    padding-top: ${theme.spacings.xxlarge};
    background-color: ${theme.colors.white};
    clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0 100%);

    ${media.greaterThan('medium')`
      padding-top: calc(${theme.spacings.xxlarge} * 2);
      clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0 100%);
      `}
  `}
`
