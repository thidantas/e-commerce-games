import { notFound } from 'next/navigation'
import Game from 'templates/Game'

type SlugProps = {
  params: {
    slug: string
  }
}

const dataMock = {
  cyberpunk: {
    cover:
      'https://images.gog-statics.com/5643a7c831df452d29005caeca24c28cdbfaa6fbea5a9556b147ee26d325fa70_bg_crop_1366x655.jpg'
  }
}

export async function generateStaticParams() {
  return Object.keys(dataMock).map((slug) => ({
    slug
  }))
}

export default async function Slug({ params }: SlugProps) {
  const { slug } = await params

  const data = dataMock[slug as keyof typeof dataMock]

  if (!data) {
    notFound()
  }

  return <Game cover={data.cover} />
}
