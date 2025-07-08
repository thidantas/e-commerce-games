import { JSX } from 'react'
import { notFound } from 'next/navigation'

import Profile from 'templates/Profile'
import CardsList from 'components/CardsList'
import OrdersList from 'components/OrdersList'
import FormProfile from 'components/FormProfile'
import orderListMock from 'components/OrdersList/mock'
import paymentCardOptionsMock from 'components/PaymentOptions/mock'

enum Slugs {
  ME = 'me',
  CARDS = 'cards',
  ORDERS = 'orders'
}

const profileRoutes = {
  [Slugs.ME]: {
    slug: '/me'
  },
  [Slugs.CARDS]: {
    slug: '/cards'
  },
  [Slugs.ORDERS]: {
    slug: '/orders'
  }
}

type ProfileSlugs = (typeof Slugs)[keyof typeof Slugs]

type PageProps = {
  params?: {
    slug: ProfileSlugs
  }
}

export async function generateStaticParams() {
  return Object.keys(profileRoutes).map((slug) => ({ slug }))
}

const profileComponents: Partial<Record<Slugs, JSX.Element>> = {
  [Slugs.ME]: <FormProfile />,
  [Slugs.CARDS]: <CardsList cards={paymentCardOptionsMock} />,
  [Slugs.ORDERS]: <OrdersList items={orderListMock} />
}

export default async function ProfilePage({ params }: PageProps) {
  const slug = params?.slug

  if (!slug || !(slug in profileComponents)) {
    return notFound()
  }

  const content = profileComponents[slug as Slugs]

  return <Profile>{content}</Profile>
}
