'use client'

import GameCard, { GameCardProps } from 'components/GameCard'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import Base from 'templates/Base'
import { Grid } from 'components/Grid'
import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'

import * as S from './styles'

export type GamesProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

const Games = ({ games = [], filterItems }: GamesProps) => {
  const handleOnFilter = () => {
    // TODO: add filter logic
  }

  const handleOnShowMore = () => {
    // TODO: Add logic for loading items from the game list
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={handleOnFilter} />

        <section>
          <Grid>
            {games.map((item, index) => (
              <GameCard key={`game-${item.title}-${index}`} {...item} />
            ))}
          </Grid>

          <S.ShowMore role="button" onClick={handleOnShowMore}>
            <p>Show More</p>
            <ArrowDown size={35} />
          </S.ShowMore>
        </section>
      </S.Main>
    </Base>
  )
}

export default Games
