import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import cartListMock from 'components/CartList/mock'

import CartDropdown from '.'

describe('<CartDropdown />', () => {
  it('should render <CartIcon /> and its badge', () => {
    renderWithTheme(<CartDropdown items={cartListMock} total={400.0} />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.getByText(`${cartListMock.length}`)).toBeInTheDocument()
  })

  it('should render Dropdown content with cart items and total', () => {
    renderWithTheme(<CartDropdown items={cartListMock} total={400.0} />)

    expect(screen.getByText('$400.00')).toBeInTheDocument()
    expect(screen.getByText(`${cartListMock[0].title}`)).toBeInTheDocument()
  })
})
