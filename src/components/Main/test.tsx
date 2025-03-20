import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    // renders component
    const { container } = render(<Main />)

    // search element and check its existence
    expect(
      screen.getByRole('heading', { name: /bem vindo a main/i })
    ).toBeInTheDocument()

    // generate snapshots
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors corretly', () => {
    // renders component
    const { container } = render(<Main />)

    // verifies that the background-color is correct
    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
