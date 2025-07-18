import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from 'utils/tests/helpers'

import UserDropdown from '.'

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    renderWithTheme(<UserDropdown username="John Doe" />)

    expect(screen.getByText(/john doe/i)).toBeInTheDocument()
  })

  it('should render dropdown sections', async () => {
    renderWithTheme(<UserDropdown username="John Doe" />)

    userEvent.click(screen.getByText(/john doe/i))

    await waitFor(() => {
      expect(
        screen.getByRole('link', { name: /my profile/i })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('link', { name: /wishlist/i })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('link', { name: /sign out/i })
      ).toBeInTheDocument()
    })
  })
})
