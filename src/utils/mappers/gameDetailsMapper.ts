import { env } from 'lib/config/env'
import { GetGameBySlugQuery } from 'graphql/generated/graphql'

export const gameDetailsMapper = (game: GetGameBySlugQuery['games'][0]) => {
  return {
    cover: game?.cover?.src
      ? `${env.BASE_API_URL}${game?.cover?.src}`
      : '/img/borderlands-3-game-cover.png',
    gameInfo: {
      title: game?.name || '',
      price: game?.price ? game.price : 0,
      description: game?.short_description || ''
    },
    gallery:
      game?.gallery?.map((image) => ({
        src: `${env.BASE_API_URL}${image?.src}`,
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
