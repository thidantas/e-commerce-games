import { env } from 'lib/config/env'
import { GetHomeQuery } from 'graphql/generated/graphql'
import { DeepPickNullable } from 'types/helpers/deep-pick-nullables'

export type GamesSection = DeepPickNullable<GetHomeQuery, ['newGames']>

export const gamesMapper = (games: GamesSection) => {
  return (
    games &&
    games
      .filter(
        (game): game is NonNullable<typeof game> =>
          game !== null &&
          typeof game.name === 'string' &&
          typeof game.slug === 'string' &&
          typeof game.price === 'number'
      )
      .map((game) => {
        const developer = game.developers.find(
          (dev): dev is { name: string } => dev !== null
        )
        return {
          slug: game.slug ?? '',
          title: game.name,
          developer: developer?.name ?? 'Unknown developer',
          img: game?.cover
            ? `${env.BASE_API_URL}${game.cover?.url}`
            : '/img/borderlands-3-game-cover.png',
          price: game.price
        }
      })
  )
}
