import media from 'styled-media-query'
import styled, { css } from 'styled-components'

import { GameCardSliderProps } from '.'

type WrapperProps = Pick<GameCardSliderProps, 'color'>

export const Wrapper = styled.section<WrapperProps>`
  ${({ theme, color }) => css`
    ${media.lessThan('huge')`
      overflow-x: hidden;
    `}

    .slick-track,
    .slick-list {
      display: flex;
    }

    .slick-slide > div {
      display: flex;
      height: 100%;
      margin-right: ${theme.spacings.xsmall};
    }

    ${media.greaterThan('large')`
      .slick-track {
        display: flex;
      }
    `}

    .slick-prev,
    .slick-next {
      display: block !important;
      color: ${theme.colors[color!]};
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: 2.5rem;
      height: 2.5rem;
      padding: 0;
      transform: translate(0, -50%);
    }

    .slick-prev {
      left: -${theme.spacings.xxlarge} !;
    }

    .slick-next {
      right: -${theme.spacings.xxlarge};
    }

    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }
  `}
`
