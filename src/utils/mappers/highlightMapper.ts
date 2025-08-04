import { env } from 'lib/config/env'
import { GetHomeQuery } from 'graphql/generated/graphql'
import { DeepPickNullable } from 'types/helpers/deep-pick-nullables'

export type HighlightSection = DeepPickNullable<
  GetHomeQuery,
  ['sections', 'newGames', 'highlight']
>

export const highlightMapper = (
  highlight: HighlightSection | null | undefined
) => {
  return (
    highlight && {
      title: highlight.title ?? '',
      subtitle: highlight.subtitle ?? '',
      buttonLabel: highlight.buttonLabel ?? '',
      buttonLink: highlight.buttonLink ?? '',
      backgroundImage: `${env.LOCAL_API_URL}${highlight.background.url}`,
      floatImage: highlight.floatImage
        ? `${env.LOCAL_API_URL}${highlight.floatImage.url}`
        : null
    }
  )
}
