import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import Profile from '.'

jest.mock('next/navigation', () => ({
  usePathname: jest.fn().mockReturnValue('/profile/me')
}))

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/Heading', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Heading">{children}</div>
  }
}))

jest.mock('components/ProfileMenu', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock ProfileMenu" />
  }
}))

describe('<Profile />', () => {
  it('should render sections', () => {
    renderWithTheme(<Profile>Lorem Ipsum</Profile>)

    expect(screen.getByText(/lorem ipsum/i)).toBeInTheDocument()

    expect(screen.getByTestId('Mock Base')).toBeInTheDocument()

    expect(screen.getByTestId('Mock Heading')).toBeInTheDocument()

    expect(screen.getByTestId('Mock ProfileMenu')).toBeInTheDocument()
  })
})
