import { graphql } from 'graphql/generated'

export const GET_GAMES = graphql(`
  query GetGames($limit: Int!, $start: Int) {
    games(pagination: { limit: $limit, start: $start }) {
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
