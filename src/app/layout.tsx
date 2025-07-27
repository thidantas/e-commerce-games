import type { Metadata } from 'next'

import StyledComponentsRegistry from 'lib/StyledComponentsRegistry'
import { ApolloProvider } from 'providers/ApolloProvider'
import { GlobalStylesProvider } from 'providers/GlobalStylesProvider'

export const metadata: Metadata = {
  title: 'Won Games',
  description: 'Won Games is the e-commerce games page'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ApolloProvider>
          <StyledComponentsRegistry>
            <GlobalStylesProvider>{children}</GlobalStylesProvider>
          </StyledComponentsRegistry>
        </ApolloProvider>
      </body>
    </html>
  )
}
