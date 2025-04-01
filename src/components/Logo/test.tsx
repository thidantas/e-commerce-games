import { render } from '@testing-library/react'

import Logo from '.'

describe('<Logo />', () => {
  it('should render the Logo', () => {
    const { container } = render(<Logo />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
