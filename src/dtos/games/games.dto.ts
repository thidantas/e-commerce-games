import { env } from 'lib/config/env'
import { GetGamesQuery } from 'graphql/generated/graphql'
import formatPrice from 'utils/formatters/formatPrice'

import { Game } from './types'

export function mapGamesDTO(games: GetGamesQuery['games']): Game[] {
  return games
    .filter(
      (game): game is NonNullable<typeof game> =>
        game !== null &&
        typeof game.name === 'string' &&
        typeof game.slug === 'string' &&
        typeof game.price === 'number' &&
        !!game.cover?.url
    )
    .map((game) => {
      const developer = game.developers.find(
        (dev): dev is { name: string } => dev !== null
      )

      return {
        title: game.name,
        slug: game.slug ?? '',
        developer: developer?.name ?? 'Unknown developer',
        img: `${env.LOCAL_API_URL}${game.cover!.url}`, // TODO: add fallback for cover when it does not exist
        price: formatPrice(game.price)
      }
    })
}
