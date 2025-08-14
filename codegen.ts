import { CodegenConfig } from '@graphql-codegen/cli'

import { env } from './src/lib/config/env'

const config: CodegenConfig = {
  schema: `${env.BASE_API_URL}/graphql`,
  documents: ['src/**/*.{ts,tsx}'],
  generates: {
    './src/graphql/generated/': {
      preset: 'client',
      plugins: [],
      config: {
        gqlTagName: 'gql',
        maybeValue: 'T',
        scalars: {
          Date: 'string',
          DateTime: 'string',
          JSON: 'Record<string, unknown>'
        }
      }
    }
  },

  ignoreNoDocuments: true
}

export default config
