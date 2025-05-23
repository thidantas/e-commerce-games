import { ThemeProvider } from 'styled-components'
import { render, RenderResult } from '@testing-library/react'

import theme from 'styles/theme'

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export const renderWithTheme = (ui: React.ReactElement): RenderResult => {
  return render(ui, { wrapper: AllTheProviders })
}
