'use client'

import { Apple, Linux, Windows } from '@styled-icons/fa-brands'

import Heading from 'components/Heading'
import MediaMatch from 'components/MediaMatch'

import * as S from './styles'

export type Platform = 'windows' | 'linux' | 'mac'

export type Rating = 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18'

export type GameDetailsProps = {
  rating: Rating
  genres: string[]
  publisher: string
  developer: string
  platforms: Platform[]
  releaseDate: string
}

const GameDetails = ({
  rating,
  genres,
  publisher,
  developer,
  platforms,
  releaseDate
}: GameDetailsProps) => {
  const platformIcons = {
    linux: <Linux title="linux" size={18} />,
    mac: <Apple title="Mac" size={18} />,
    windows: <Windows title="Windows" size={18} />
  }

  return (
    <S.Wrapper>
      <MediaMatch greaterThan="small">
        <Heading lineLeft lineColor="secondary">
          Game Details
        </Heading>
      </MediaMatch>

      <S.Content>
        <S.Block>
          <S.Label>Developer</S.Label>
          <S.Description>{developer}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Release Date</S.Label>
          <S.Description>
            {new Intl.DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            }).format(new Date(releaseDate))}
          </S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Platforms</S.Label>
          <S.IconsWrapper>
            {platforms.map((platform: Platform) => (
              <S.Icon key={platform}>{platformIcons[platform]}</S.Icon>
            ))}
          </S.IconsWrapper>
        </S.Block>

        <S.Block>
          <S.Label>Publisher</S.Label>
          <S.Description>{publisher}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Rating</S.Label>
          <S.Description>
            {rating === 'BR0' ? 'FREE' : `${rating.replace('BR', '')}+`}
          </S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Genres</S.Label>
          <S.Description>{genres.join(' / ')}</S.Description>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  )
}

export default GameDetails
