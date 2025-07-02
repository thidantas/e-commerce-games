import media from 'styled-media-query'
import styled, { css } from 'styled-components'

export const Form = styled.form`
  ${({ theme }) => css`
    max-width: 100%;
    display: grid;
    gap: ${theme.spacings.small};

    > button {
      margin-top: ${theme.spacings.xxlarge};
    }

    ${media.greaterThan('medium')`
      grid-template-columns: 1fr 1fr;
      gap: ${theme.spacings.medium};

      > button {
        grid-column: 2;
        justify-self: end;
        margin-top: 0;
      }
      `}
  `}
`
