import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { useGames } from 'services/client/games/useGames'
import { renderWithTheme } from 'utils/tests/helpers'
import exploreSidebarItemsMock from 'components/ExploreSidebar/mock'

import Games from '.'

jest.mock('services/client/games/useGames', () => ({
  useGames: jest.fn()
}))

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/ExploreSidebar', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock ExploreSidebar" />
  }
}))
const mockUseGames = useGames as jest.Mock

describe('<Games />', () => {
  beforeEach(() => {
    mockUseGames.mockReset()
  })

  it('should render the sections', async () => {
    mockUseGames.mockImplementation(() => ({
      data: [{ id: '1', title: 'Sample Game' }],
      loading: false,
      error: null,
      handleFetchMore: jest.fn()
    }))

    renderWithTheme(<Games filterItems={exploreSidebarItemsMock} />)

    expect(await screen.findByTestId('Mock ExploreSidebar')).toBeInTheDocument()
    expect(await screen.findByText(/Sample Game/i)).toBeInTheDocument()
    expect(
      await screen.findByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })

  it('should render more games when show more is clicked', async () => {
    const handleFetchMoreMock = jest.fn()

    mockUseGames.mockImplementation(() => ({
      data: [{ id: '1', title: 'Sample Game' }],
      loading: false,
      error: null,
      handleFetchMore: handleFetchMoreMock
    }))

    renderWithTheme(<Games filterItems={exploreSidebarItemsMock} />)

    expect(await screen.findByText(/Sample Game/i)).toBeInTheDocument()

    await userEvent.click(
      await screen.findByRole('button', { name: /show more/i })
    )

    expect(handleFetchMoreMock).toHaveBeenCalled()
  })
})
