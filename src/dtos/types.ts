import { Enum_Componentpagehighlight_Alignment } from 'graphql/generated/graphql'

export type Game = {
  img: string
  slug: string
  title: string
  price: number
  developer: string
}

export type Highlight = {
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  backgroundImage: string
  floatImage?: string | null
  alignment?: Enum_Componentpagehighlight_Alignment | null
}
