import Link from 'next/link'

import Button from 'components/Button'

import * as S from './styles'

export type EmptyProps = {
  title: string
  hasLink?: boolean
  description: string
}

const Empty = ({ title, hasLink, description }: EmptyProps) => (
  <S.Wrapper>
    <S.Image
      src="/img/empty.svg"
      alt="A gamer in a couch playing videogame"
      role="image"
    />

    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>

    {hasLink && (
      <Link href="/">
        <Button>Go back to store</Button>
      </Link>
    )}
  </S.Wrapper>
)

export default Empty
