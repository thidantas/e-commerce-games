'use client'

import { ApolloProvider as Provider } from '@apollo/client'

import { apolloClient } from './client'

export const ApolloProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider client={apolloClient}>{children}</Provider>
}
