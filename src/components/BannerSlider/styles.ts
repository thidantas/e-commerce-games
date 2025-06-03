'use client'

import media from 'styled-media-query'
import styled, { css } from 'styled-components'

import * as BannerStyles from 'components/Banner/styles'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    .slick-dots {
      display: flex;
      width: 100%;
      padding: 0;
      margin-top: ${theme.spacings.small};
      list-style: none;
      text-align: center;

      li {
        position: relative;
        display: inline-block;
        flex-direction: row;
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 100%;
        margin: 0 ${theme.spacings.xxsmall};
        padding: 0;
        background: ${theme.colors.white};
        cursor: pointer;

        &.slick-active {
          opacity: 1;
          background: ${theme.colors.primary};

          & > button {
            background: ${theme.colors.primary};
          }
        }

        & > button {
          position: absolute;
          top: 0;
          left: 0;
          cursor: pointer;
          color: transparent;
          border: 0;
          width: 1.2rem;
          height: 1.2rem;
          border-radius: 100%;
        }
      }
    }

    ${media.greaterThan('large')`
      ${BannerStyles.Wrapper} {
        max-width: 104rem;
      }

      .slick-slide {
        margin-left: 11.4rem;
      }

      .slick-dots {
        display: flex !important;
        flex-direction: column;
        position: absolute;
        top: 50%;
        align-items: flex-end;
        margin-top: 0;
        gap: calc(${theme.spacings.xxsmall} * 2);
      }
    `}
  `}
`
