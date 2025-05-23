import { fireEvent, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render with label', () => {
    renderWithTheme(<Checkbox label="Checkbox label" labelFor="check" />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check')
  })

  it('should render without label', () => {
    renderWithTheme(<Checkbox />)

    expect(screen.queryByLabelText('Checkbox')).not.toBeInTheDocument()
  })

  it('should render with black label', () => {
    renderWithTheme(
      <Checkbox label="Checkbox label" labelFor="check" labelColor="black" />
    )

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('should dispatch onCheck when status change', async () => {
    const onCheck = jest.fn()

    renderWithTheme(<Checkbox label="Checkbox label" onCheck={onCheck} />)

    expect(onCheck).not.toHaveBeenCalled()

    fireEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
    expect(onCheck).toHaveBeenCalledWith(true)
  })

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn()

    renderWithTheme(
      <Checkbox label="Checkbox label" onCheck={onCheck} isChecked />
    )

    expect(onCheck).not.toHaveBeenCalled()

    fireEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })

    expect(onCheck).toHaveBeenCalledWith(false)
  })

  it('should be accessible with tab', async () => {
    renderWithTheme(<Checkbox label="Checkbox label" labelFor="checkbox" />)

    const user = userEvent.setup()

    await user.tab()

    const checkbox = screen.getByLabelText(/checkbox label/i)

    expect(checkbox).toHaveFocus()
  })

  it('checkbox updates checked state when isChecked props changes', async () => {
    const { rerender } = renderWithTheme(<Checkbox isChecked={false} />)

    const checkbox = screen.getByRole('checkbox')

    expect(checkbox).not.toBeChecked()

    rerender(<Checkbox isChecked />)

    expect(checkbox).toBeChecked()
  })
})
