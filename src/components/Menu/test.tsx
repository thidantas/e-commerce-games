import { fireEvent, screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()

    expect(screen.getAllByLabelText(/shopping cart/i)).toHaveLength(2)

    expect(
      screen.getByRole('link', { name: /Won Games/i }).parentElement
    ).toBeInTheDocument()
  })

  it('should handle the open/close mobile menu', () => {
    renderWithTheme(<Menu />)

    const fullMenu = screen.getByLabelText('Menu Full')
    const openFullMenu = screen.getByLabelText(/open menu/i)
    const closeFullMenu = screen.getByLabelText(/close menu/i)

    expect(fullMenu.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenu).toHaveStyle({ opacity: 0 })

    fireEvent.click(openFullMenu)

    expect(fullMenu.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenu).toHaveStyle({ opacity: 1 })

    fireEvent.click(closeFullMenu)

    expect(fullMenu.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenu).toHaveStyle({ opacity: 0 })
  })

  it('should show register box when logged out', () => {
    renderWithTheme(<Menu />)

    expect(screen.queryByText(/my profile/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/wishlist/i)).not.toBeInTheDocument()

    expect(screen.getAllByText(/sign in/i)).toHaveLength(2)
    expect(screen.getByText(/sign up/i)).toBeInTheDocument()
  })

  it('should show wishlist and account when logged in', () => {
    renderWithTheme(<Menu username="John Doe" />)

    expect(screen.getAllByText(/my profile/i)).toHaveLength(2)
    expect(screen.getAllByText(/wishlist/i)).toHaveLength(2)

    expect(screen.queryByText(/sign in/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument()
  })
})
