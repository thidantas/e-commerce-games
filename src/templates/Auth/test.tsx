import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import Auth from '.'

describe('<Auth />', () => {
  it('should render the logos, title, subtitle and children', () => {
    renderWithTheme(
      <Auth title="Auth Title">
        <input type="text" aria-label="e-mail" />
      </Auth>
    )

    expect(screen.getAllByLabelText(/won games/i)).toHaveLength(2)

    expect(
      screen.getByRole('heading', {
        name: /All your favorite games in one place/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /won is the best and most complete gaming platform/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /auth title/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
