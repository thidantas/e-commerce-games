import { screen } from '@testing-library/react'
import { MockLink } from '@apollo/client/testing'
import userEvent from '@testing-library/user-event'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

import { renderWithTheme } from 'utils/tests/helpers'
import exploreSidebarItemsMock from 'components/ExploreSidebar/mock'
import { fetchMoreMock, gamesMock } from './mocks'
import Games from '.'

const mocks = [gamesMock, fetchMoreMock]

const mockLink = new MockLink(mocks)

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        games: {
          keyArgs: false,
          merge(existing = [], incoming, { args }) {
            const start = args?.start ?? 0
            const merged = existing ? existing.slice(0) : []
            for (let i = 0; i < incoming.length; ++i) {
              merged[start + i] = incoming[i]
            }
            return merged
          }
        }
      }
    }
  }
})

const client = new ApolloClient({
  link: mockLink,
  cache
})

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

describe('<Games />', () => {
  it('should render loading when starting the template', () => {
    renderWithTheme(
      <ApolloProvider client={client}>
        <Games filterItems={exploreSidebarItemsMock} />
      </ApolloProvider>
    )

    expect(screen.getByText(/loading.../i)).toBeInTheDocument()
  })

  it('should render the sections', async () => {
    renderWithTheme(
      <ApolloProvider client={client}>
        <Games filterItems={exploreSidebarItemsMock} />
      </ApolloProvider>
    )

    expect(screen.getByText(/loading.../i)).toBeInTheDocument()

    expect(await screen.findByTestId('Mock ExploreSidebar')).toBeInTheDocument()

    expect(await screen.findByText(/Sample Game/i)).toBeInTheDocument()

    expect(
      await screen.findByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })

  it('should render more games when show more is clicked', async () => {
    renderWithTheme(
      <ApolloProvider client={client}>
        <Games filterItems={exploreSidebarItemsMock} />
      </ApolloProvider>
    )

    expect(await screen.findByText(/Sample Game/i)).toBeInTheDocument()

    await userEvent.click(
      await screen.findByRole('button', { name: /show more/i })
    )

    expect(await screen.findByText('Fetch More Games')).toBeInTheDocument()
  })
})
