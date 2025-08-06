import { Game, Highlight } from '../types'

export type GameDetails = {
  cover: string
  gameInfo: {
    title: string
    price: number
    description: string
  }
  gallery: Array<{
    src: string
    label?: string | null
  }>
  description: string
  details: {
    developer: string
    publisher: string
    platforms: Array<string | undefined>
    releaseDate: string
    rating: string
    genres: Array<string | undefined>
  }
}

export type RecommendedGames = {
  recommendedTitle: string
  recommendedHighlight?: Highlight | null
  recommendedGames?: Game[]
}

export type UpcomingGames = {
  upcomingTitle: string
  upcomingGames: Game[]
  upcomingHighlight?: Highlight | null
}
