import { GET_GAMES } from '@/graphql/queries/games/getGames'

export const gamesMock = {
  request: {
    query: GET_GAMES,
    variables: {
      limit: 15
    }
  },
  result: {
    data: {
      games: [
        {
          name: 'Sample Game',
          slug: 'sample-game',
          developers: [
            {
              name: 'Sample Developer'
            }
          ],
          cover: {
            url: 'sample-cover.jpg'
          },
          price: 59.99
        }
      ]
    }
  }
}

export const fetchMoreMock = {
  request: {
    query: GET_GAMES,
    variables: {
      limit: 15,
      start: 1
    }
  },
  result: {
    data: {
      games: [
        {
          name: 'Fetch More Games',
          slug: 'sample-game-2',
          developers: [
            {
              name: 'Sample Developer 2'
            }
          ],
          cover: {
            url: 'sample-cover-2.jpg'
          },
          price: 69.99
        }
      ]
    }
  }
}
