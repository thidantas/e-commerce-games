'use client'

import { useMemo } from 'react'
import {
  NormalizedCacheObject,
  ApolloProvider as BaseApolloProvider
} from '@apollo/client'
import makeClient from './client'

export type ApolloProviderProps = {
  children: React.ReactNode
  initialState?: NormalizedCacheObject
}

export const ApolloProvider = ({
  children,
  initialState
}: ApolloProviderProps) => {
  const client = useMemo(() => makeClient(initialState), [initialState])

  return <BaseApolloProvider client={client}>{children}</BaseApolloProvider>
}
