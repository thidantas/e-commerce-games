'use client'

import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import { useGames } from 'services/client/games/useGames'
import Base from 'templates/Base'
import { Grid } from 'components/Grid'
import GameCard, { GameCardProps } from 'components/GameCard'
import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'

import * as S from './styles'

export type GamesProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

const Games = ({ games, filterItems }: GamesProps) => {
  const {
    data: gamesData,
    loading,
    error,
    handleFetchMore: fetchMore
  } = useGames({ limit: 15 })

  const handleOnFilter = () => {
    // TODO: add filter logic
  }

  const handleOnShowMore = () => {
    fetchMore()
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={handleOnFilter} />

        {loading ? (
          <p>Loading...</p>
        ) : (
          <section>
            <Grid>
              {gamesData.map((item, index) => (
                <GameCard key={`game-${item.title}-${index}`} {...item} />
              ))}
            </Grid>

            <S.ShowMore role="button" onClick={handleOnShowMore}>
              <p>Show More</p>
              <ArrowDown size={35} />
            </S.ShowMore>
          </section>
        )}
      </S.Main>
    </Base>
  )
}

export default Games
