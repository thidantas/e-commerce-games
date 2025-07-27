import { graphql } from 'graphql/generated'

export const GET_GAMES = graphql(`
  query GetGames($limit: Int!) {
    games(pagination: { limit: $limit }) {
      name
      slug
      cover {
        url
      }

      developers {
        name
      }

      price
    }
  }
`)
