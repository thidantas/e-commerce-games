'use client'

import media from 'styled-media-query'
import styled, { css } from 'styled-components'

import * as BannerStyles from 'components/Banner/styles'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    .slick-dots {
      display: flex !important;
      align-items: center;
      justify-content: center;
      margin-top: ${theme.spacings.small};

      li {
        display: flex;
        background: ${theme.colors.white};
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 100%;
        align-items: center;
        justify-content: center;
        margin: 0 ${theme.spacings.xxsmall};
        cursor: pointer;

        &.slick-active {
          background: ${theme.colors.primary};
        }
      }

      button: {
        opacity: 0;
        width: 10rem;
        height: 10rem;
        cursor: pointer;
      }
    }

    ${media.greaterThan('large')`
      ${BannerStyles.Wrapper} {
        margin: 0 auto;
        max-width: 104rem;
      }

      .slick-dots {
        top: 0;
        right:  0;
        margin: 0;
        height: 100%;
        align-items: flex-end;
        flex-direction: column;
        gap: ${theme.spacings.xsmall};

        li {
          margin: ${theme.spacings.xxsmall} 0;
        }
      }
    `}
  `}
`
