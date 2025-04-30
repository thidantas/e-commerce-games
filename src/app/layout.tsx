import type { Metadata } from 'next'

import { GlobalStylesProvider } from '@/providers/GlobalStyleProvider'
import StyledComponentsRegistry from '@/lib/registry'

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
        <StyledComponentsRegistry>
          <GlobalStylesProvider>{children}</GlobalStylesProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
