import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import exploreSidebarItemsMock from 'components/ExploreSidebar/mock'
import gameCardSliderItemsMock from 'components/GameCardSlider/mock'

import Games from '.'

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/ExploreSidebar', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock ExploreSidebar">{children}</div>
  }
}))

jest.mock('components/GameCard', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock GameCard" />
  }
}))

describe('<Games />', () => {
  it('should render the sections', () => {
    renderWithTheme(
      <Games
        games={[gameCardSliderItemsMock[0]]}
        filterItems={exploreSidebarItemsMock}
      />
    )

    expect(screen.getByTestId('Mock ExploreSidebar')).toBeInTheDocument()
    expect(screen.getByTestId('Mock GameCard')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })
})
