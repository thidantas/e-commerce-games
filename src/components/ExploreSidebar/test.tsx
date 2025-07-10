import userEvent from '@testing-library/user-event'
import { screen, waitFor } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import exploreSidebarItemsMock from './mock'

import ExploreSidebar from '.'

describe('<ExploreSidebar />', () => {
  it('should render the heading', () => {
    renderWithTheme(
      <ExploreSidebar items={exploreSidebarItemsMock} onFilter={jest.fn} />
    )

    expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /sort by/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /system/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /genre/i })).toBeInTheDocument()
  })

  it('should render inputs', () => {
    renderWithTheme(
      <ExploreSidebar items={exploreSidebarItemsMock} onFilter={jest.fn} />
    )

    expect(
      screen.getByRole('checkbox', { name: /under \$50/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('radio', { name: /low to high/i })
    ).toBeInTheDocument()
  })

  it('should render the filter button', () => {
    renderWithTheme(
      <ExploreSidebar items={exploreSidebarItemsMock} onFilter={jest.fn} />
    )

    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument()
  })

  it('should check initial values that are passed', () => {
    renderWithTheme(
      <ExploreSidebar
        items={exploreSidebarItemsMock}
        initialValues={{ windows: true, sort_by: 'low-to-high' }}
        onFilter={jest.fn}
      />
    )

    expect(screen.getByRole('checkbox', { name: /windows/i })).toBeChecked()
    expect(screen.getByRole('radio', { name: /low to high/i })).toBeChecked()
  })

  it('should filter with initial values', async () => {
    const onFilter = jest.fn()

    renderWithTheme(
      <ExploreSidebar
        items={exploreSidebarItemsMock}
        initialValues={{ windows: true, sort_by: 'low-to-high' }}
        onFilter={onFilter}
      />
    )

    userEvent.click(screen.getByRole('button', { name: /filter/i }))

    await waitFor(() => {
      expect(onFilter).toHaveBeenCalledWith({
        windows: true,
        sort_by: 'low-to-high'
      })
    })
  })

  it('should filter with checked values', async () => {
    const onFilter = jest.fn()

    renderWithTheme(
      <ExploreSidebar items={exploreSidebarItemsMock} onFilter={onFilter} />
    )

    userEvent.click(screen.getByLabelText(/windows/i))

    userEvent.click(screen.getByLabelText(/linux/i))

    userEvent.click(screen.getByLabelText(/low to high/i))

    userEvent.click(screen.getByRole('button', { name: /filter/i }))

    await waitFor(() => {
      expect(onFilter).toHaveBeenCalledWith({
        linux: true,
        windows: true,
        sort_by: 'low-to-high'
      })
    })
  })

  it('should alternate between radio options', async () => {
    const onFilter = jest.fn()

    renderWithTheme(
      <ExploreSidebar items={exploreSidebarItemsMock} onFilter={onFilter} />
    )

    userEvent.click(screen.getByLabelText(/low to high/i))

    userEvent.click(screen.getByLabelText(/high to low/i))

    userEvent.click(screen.getByRole('button', { name: /filter/i }))

    await waitFor(() => {
      expect(onFilter).toHaveBeenCalledWith({
        sort_by: 'high-to-low'
      })
    })
  })
})
