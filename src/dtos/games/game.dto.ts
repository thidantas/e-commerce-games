import { env } from 'lib/config/env'
import { GetGameBySlugQuery } from 'graphql/generated/graphql'
import formatPrice from 'utils/formatters/formatPrice'

import { GameDetails } from './types'

export function mapGameDetailsDTO(
  game: GetGameBySlugQuery['games'][0]
): GameDetails {
  return {
    cover: `${env.LOCAL_API_URL}${game?.cover?.src}`,
    gameInfo: {
      title: game?.name || '',
      price: game?.price ? formatPrice(game.price) : '0',
      description: game?.short_description || ''
    },
    gallery:
      game?.gallery?.map((image) => ({
        src: `${env.LOCAL_API_URL}${image?.src}`,
        label: image?.label || ''
      })) || [],
    description: game?.description || '',
    details: {
      developer: game?.developers?.[0]?.name || 'Unknown developer',
      releaseDate: game?.release_date || '',
      platforms: game?.platforms?.map((platform) => platform?.name) || [],
      publisher: game?.publisher?.name || '',
      rating: game?.rating || '',
      genres: game?.categories?.map((category) => category?.name) || []
    }
  }
}
