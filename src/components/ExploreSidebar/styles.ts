import media from 'styled-media-query'
import { rgba } from 'polished'

import styled, { css, DefaultTheme } from 'styled-components'

import * as CheckboxStyles from 'components/Checkbox/styles'

import * as RadioStyles from 'components/Radio/styles'

import * as HeadingStyles from 'components/Heading/styles'

export const IconWrapper = styled.div`
  cursor: pointer;
  width: 2.4rem;
  height: 2.4rem;

  ${media.greaterThan('medium')`
    display: none;
    `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    flex: 1;
    overflow-y: auto;
    padding: 0 ${theme.spacings.small};
    margin-top: 5.6rem;
    margin-bottom: 2rem;
    transition: transform ${theme.transition.default};

    ${media.greaterThan('medium')`
      overflow-y: initial;
      padding: 0;
      margin-top: 0;
      margin-bottom: 0;
      `}
  `}
`

export const Overlay = styled.div.attrs({
  'data-testid': 'overlay'
})<WrapperProps>`
  ${({ theme, isOpen }) => css`
    transition: opacity ${theme.transition.default};
    opacity: ${isOpen ? 1 : 0};
    position: ${isOpen ? 'fixed' : 'absolute'};
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: ${theme.colors.white};
    z-index: ${theme.layers.modal};
    pointer-events: ${isOpen ? 'auto' : 'none'};
  `}
`
export const Items = styled.div`
  ${({ theme }) => css`
    & > div:not(:last-of-type) {
      margin-bottom: ${theme.spacings.xsmall};
    }

    & + div {
      border-top: 0.1rem solid ${rgba(theme.colors.gray, 0.2)};
      margin-top: ${theme.spacings.small};
      padding-top: ${theme.spacings.xsmall};
    }
  `}
`

export const Footer = styled.div`
  ${({ theme }) => css`
    box-shadow: 0 -0.2rem 0.4rem ${rgba(theme.colors.black, 0.2)};
    padding: ${theme.spacings.small};
  `}
`

const wrapperModifiers = {
  open: (theme: DefaultTheme) => css`
    z-index: ${theme.layers.modal};
    background-color: ${theme.colors.white};
    position: fixed;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;

    ${Content} {
      margin-top: ${theme.spacings.medium};
      transform: translateY(0);
      overflow-y: scroll;
    }

    ${Content}, ${Footer}, ${IconWrapper} {
      z-index: ${theme.layers.modal};
    }

    ${HeadingStyles.Wrapper} {
      color: ${theme.colors.black};
      font-size: ${theme.font.sizes.xlarge};
      font-weight: ${theme.font.normal};
    }

    ${RadioStyles.Label}, ${CheckboxStyles.Label} {
      color: ${theme.colors.black};
    }

    ${IconWrapper} {
      color: ${theme.colors.black};

      > svg {
        position: absolute;
        width: 2.4rem;
        right: 0.8rem;
        top: 0.8rem;

        &:first-child {
          display: none;
        }
      }
    }
  `,

  close: (theme: DefaultTheme) => css`
    display: flex;
    justify-content: flex-end;

    ${IconWrapper} {
      color: ${theme.colors.white};

      > svg {
        width: 2.4rem;
      }

      > svg:last-child {
        display: none;
      }
    }

    ${Content} {
      height: 0;
      transform: translateY(3rem);
    }

    ${Content}, ${Footer} {
      visibility: hidden;
      position: absolute;
      left: 0;
    }
  `
}

type WrapperProps = {
  isOpen: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isOpen }) => css`
    background-color: ${theme.colors.mainBg};

    ${media.lessThan('medium')`
      ${isOpen && wrapperModifiers.open(theme)}
      ${!isOpen && wrapperModifiers.close(theme)}
      `}
  `}
`
