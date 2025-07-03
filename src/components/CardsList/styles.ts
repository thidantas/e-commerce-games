import styled, { css } from 'styled-components'

export const Card = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.lightGray};
    color: ${theme.colors.black};
    padding: 1.3rem ${theme.spacings.xsmall};
    display: flex;
    align-items: center;
    margin-right: ${theme.spacings.xsmall};

    &:not(:last-child) {
      margin-bottom: ${theme.spacings.xsmall};
    }
  `}
`
