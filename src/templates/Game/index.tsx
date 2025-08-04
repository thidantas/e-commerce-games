import Base from 'templates/Base'
import Showcase from 'components/Showcase'
import TextContent from 'components/TextContent'
import { Divider } from 'components/Divider'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import Gallery, { GalleryImageProps } from 'components/Gallery'
import GameInfo, { GameInfoProps } from 'components/GameInfo'
import GameDetails, { GameDetailsProps } from 'components/GameDetails'

import * as S from './styles'

export type GameTemplateProps = {
  cover: string
  details: GameDetailsProps
  gallery?: GalleryImageProps[]
  gameInfo: GameInfoProps
  description: string
  upcomingGames?: GameCardProps[]
  recommendedGames?: GameCardProps[]
  upcomingHighlight?: HighlightProps
}

const Game = ({
  cover,
  details,
  gallery,
  gameInfo,
  description,
  upcomingGames,
  recommendedGames,
  upcomingHighlight
}: GameTemplateProps) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover" />

    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>

      {!!gallery && (
        <S.SectionGallery>
          <Gallery items={gallery} />
        </S.SectionGallery>
      )}

      <S.SectionDescription>
        <TextContent title="Description" content={description} />
      </S.SectionDescription>

      <S.SectionGameDetails>
        <GameDetails {...details} />

        <Divider />
      </S.SectionGameDetails>

      <Showcase
        title="Upcoming"
        games={upcomingGames}
        highlight={upcomingHighlight}
      />

      <Showcase title="You may like these games" games={recommendedGames} />
    </S.Main>
  </Base>
)

export default Game
