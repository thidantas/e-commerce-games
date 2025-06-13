import { screen } from '@testing-library/react'

import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import TextContent from '.'

const mockProps = {
  title: 'Title',
  content: '<h1>Content</h1>'
}

describe('<TextContent />', () => {
  it('should render the title and', () => {
    renderWithTheme(<TextContent {...mockProps} />)

    expect(screen.getByRole('heading', { name: /title/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /content/i })
    ).toBeInTheDocument()
  })

  it('should render without title', () => {
    renderWithTheme(<TextContent content={mockProps.content} />)

    expect(
      screen.queryByRole('heading', { name: /title/i })
    ).not.toBeInTheDocument()
  })

  it('should render title and content', () => {
    renderWithTheme(<TextContent {...mockProps} />)

    const wrapper = screen.getByRole('heading', {
      name: /title/i
    }).parentElement

    expect(wrapper).toHaveStyle({
      color: theme.colors.white
    })

    expect(wrapper).toHaveStyleRule('color', theme.colors.black, {
      media: '(min-width: 768px)'
    })
  })
})
