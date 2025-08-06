import { graphql } from 'graphql/generated'

export const GET_UPCOMING_GAMES = graphql(`
  query getUpcomingGames($date: Date!) {
    upcomingGames: games(
      filters: { release_date: { gt: $date } }
      sort: ["release_date:asc"]
      pagination: { limit: 8 }
    ) {
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

    showcase: home {
      upcomingGames {
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
          alignment
        }
      }
    }
  }
`)
