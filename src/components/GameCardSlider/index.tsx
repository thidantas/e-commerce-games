'use client'

import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined'

import GameCard, { GameCardProps } from 'components/GameCard'
import Slider, { SliderSettings } from 'components/Slider'

import * as S from './styles'

export type GameCardSliderProps = {
  items: GameCardProps[]
  color?: 'white' | 'black'
}

const settings: SliderSettings = {
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  // TODO: investigate why arrows are not rendered with the inserted style properties
  // *
  arrows: true,
  prevArrow: <ArrowLeft aria-label="previous games" />,
  nextArrow: <ArrowRight aria-label="next games" />,
  //*
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 1.2
      }
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1.1
      }
    }
  ]
}

const GameCardSlider = ({ items, color = 'black' }: GameCardSliderProps) => {
  return (
    <S.Wrapper color={color}>
      <Slider settings={settings}>
        {items.map((item) => (
          <GameCard key={item.title} {...item} />
        ))}
      </Slider>
    </S.Wrapper>
  )
}

export default GameCardSlider
