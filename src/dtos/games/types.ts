export type Game = {
  img: string
  slug: string
  title: string
  price: string
  developer: string
}

export type GameDetails = {
  cover?: string
  gameInfo: {
    title: string
    price: string
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
