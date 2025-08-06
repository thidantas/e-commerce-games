import {
  Enum_Componentpageribbon_Color,
  Enum_Componentpageribbon_Size
} from 'graphql/generated/graphql'

import { Game, Highlight } from '../types'

export type Banner = {
  title: string
  subtitle: string
  image?: string
  buttonLabel?: string
  buttonLink?: string
  ribbonLabel?: string | null
  ribbonSize?: Enum_Componentpageribbon_Size | null
  ribbonColor?: Enum_Componentpageribbon_Color | null
}

export type Home = {
  banners: Banner[]
  newGames: Game[]
  newGamesTitle?: string | null
  upcomingGames: Game[]
  freeGames: Game[]
  freeGamesTitle?: string | null
  popularGames?: Game[]
  popularGamesTitle?: string | null
  upcomingGamesTitle?: string | null
  upcomingHighlight?: Highlight | null
  mostPopularHighlight?: Highlight | null
  freeHighlight?: Highlight | null
}
