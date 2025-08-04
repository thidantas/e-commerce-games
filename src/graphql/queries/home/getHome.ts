import { graphql } from 'graphql/generated'

export const GET_HOME = graphql(`
  query getHome($date: Date!) {
    banners {
      image {
        url
      }
      title
      subtitle
      button {
        label
        link
      }
      ribbon {
        text
        color
        size
      }
    }

    newGames: games(
      filters: { release_date: { lte: $date } }
      sort: ["release_date:desc"]
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

    freeGames: games(
      filters: { price: { eq: 0 } }
      sort: "release_date:desc"
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

    sections: home {
      newGames {
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

      popularGames {
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

        games(pagination: { limit: 8 }) {
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

      freeGames {
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
