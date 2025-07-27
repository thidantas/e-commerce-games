import { graphql } from 'graphql/generated'

export const GET_GAME_BY_SLUG = graphql(`
  query GetGameBySlug($slug: String!) {
    games(filters: { slug: { eq: $slug } }) {
      name
      short_description
      description
      price
      rating
      release_date
      gallery {
        src: url
        label: alternativeText
      }

      cover {
        src: url
      }

      developers {
        name
      }

      publisher {
        name
      }

      categories {
        name
      }

      platforms {
        name
      }
    }
  }
`)
