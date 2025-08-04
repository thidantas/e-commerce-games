import { env } from 'lib/config/env'
import { GetHomeQuery } from 'graphql/generated/graphql'

export const bannerMapper = (banners: GetHomeQuery['banners']) => {
  return banners
    .filter((banner): banner is NonNullable<typeof banner> => banner !== null)
    .map((banner) => {
      return {
        img: `${env.LOCAL_API_URL}${banner.image.url}`,
        title: banner.title,
        subtitle: banner.subtitle,
        buttonLabel: banner.button?.label,
        buttonLink: banner.button?.link,

        ...(banner.ribbon && {
          ribbonLabel: banner.ribbon.text,
          ribbonColor: banner.ribbon.color,
          ribbonSize: banner.ribbon.size
        })
      }
    })
}
