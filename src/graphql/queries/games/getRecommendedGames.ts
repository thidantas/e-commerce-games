import { graphql } from 'graphql/generated'

export const GET_RECOMMENDED_GAMES = graphql(`
  query GetRecommendedGames {
    recommended {
      section {
        title
        highlight {
          title
          subtitle
          background {
            url
          }
          floatImage {
            url
          }
          buttonLabel
          buttonLink
        }
        games {
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
    }
  }
`)
