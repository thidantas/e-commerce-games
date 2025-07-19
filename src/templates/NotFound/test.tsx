import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import NotFound from '.'

describe('NotFound', () => {
  it('should render a empty component', () => {
    const { container } = renderWithTheme(<NotFound />)

    expect(
      screen.getByRole('heading', { name: /404: Not found/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
