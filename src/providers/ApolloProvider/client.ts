import {
  HttpLink,
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client'
import { env } from 'lib/config/env'

function makeClient(initialState?: NormalizedCacheObject) {
  const httpLink = new HttpLink({
    uri: `${env.BASE_API_URL}/graphql`,
    fetch
  })

  const isServer = typeof window === 'undefined'

  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            games: {
              keyArgs: ['filters', 'sort'],
              merge(existing, incoming, { args }) {
                const start = args?.pagination?.start ?? 0
                const merged = existing ? existing.slice(0) : []
                for (let i = 0; i < incoming.length; ++i) {
                  merged[start + i] = incoming[i]
                }
                return merged
              }
            }
          }
        }
      }
    }).restore(initialState || {}),
    ssrMode: isServer
  })
}

export default makeClient
