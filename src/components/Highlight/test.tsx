import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import Highlight from '.'

const mockProps = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  buttonLink: '/rdr2',
  buttonLabel: 'Buy Now',
  backgroundImage: '/img/red-dead-img.jpg'
}

describe('<Highlight />', () => {
  it('should render headings and button', () => {
    renderWithTheme(<Highlight {...mockProps} />)

    expect(
      screen.getByRole('heading', { name: /heading 1/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /heading 2/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /Buy now/i })).toBeInTheDocument()
  })

  it('should render headings and button', () => {
    const { container } = renderWithTheme(<Highlight {...mockProps} />)

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${mockProps.backgroundImage})`
    })
  })
})
