import { screen } from '@testing-library/react'

import Ribbon from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Ribbon />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Ribbon>Best Seller</Ribbon>)

    expect(screen.getByText(/Best Seller/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with the primary color', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>)

    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      backgroundColor: '#F231A5'
    })
  })

  it('should render with the secondary color', () => {
    renderWithTheme(<Ribbon color="secondary">Best Seller</Ribbon>)

    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
  })

  it('should render with the normal size as default', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>)

    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      height: '3.6rem',
      fontSize: '1.4rem'
    })
  })

  it('should render with the small size', () => {
    renderWithTheme(<Ribbon size="small">Best Seller</Ribbon>)

    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
