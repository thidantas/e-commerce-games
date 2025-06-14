import { render, screen, fireEvent } from '@testing-library/react'

import Arrow from '.'

describe('<Arrow />', () => {
  it('should render the left arrow icon when direction="left"', () => {
    render(<Arrow direction="left" ariaLabel="left arrow" />)

    expect(screen.getByLabelText(/left arrow/i)).toBeInTheDocument()
  })

  it('should render the right arrow icon when direction="right"', () => {
    render(<Arrow direction="right" ariaLabel="right arrow" />)

    expect(screen.getByLabelText(/right arrow/i)).toBeInTheDocument()
  })

  it('should call onClick when clicked', () => {
    const onClick = jest.fn()

    render(<Arrow direction="left" ariaLabel="left arrow" onClick={onClick} />)

    fireEvent.click(screen.getByLabelText(/left arrow/i))

    expect(onClick).toHaveBeenCalled()
  })
})
