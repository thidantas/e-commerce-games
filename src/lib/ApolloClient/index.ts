import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { registerApolloClient } from '@apollo/client-integration-nextjs'

import { env } from 'lib/config/env'

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: `${env.LOCAL_API_URL}/graphql`,
      fetchOptions: { cache: 'force-cache' }
    })
  })
})
