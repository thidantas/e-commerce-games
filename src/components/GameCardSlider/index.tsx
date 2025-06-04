'use client'

import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined'

import GameCard, { GameCardProps } from 'components/GameCard'
import Slider, { SliderSettings } from 'components/Slider'

import * as S from './styles'

type ArrowProps = {
  style?: React.CSSProperties
  className?: string
  direction: 'left' | 'right'
  slideCount?: number
  currentSlide?: number
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

const Arrow = ({ className, style, direction, onClick }: ArrowProps) => {
  return (
    <div
      className={className}
      style={style}
      onClick={onClick}
      aria-label={direction === 'left' ? 'previous games' : 'next games'}
    >
      {direction === 'left' ? <ArrowLeft /> : <ArrowRight />}
    </div>
  )
}

const settings: SliderSettings = {
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  arrows: true,
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
  ],
  prevArrow: <Arrow direction="left" />,
  nextArrow: <Arrow direction="right" />
}

export type GameCardSliderProps = {
  items: GameCardProps[]
  color?: 'white' | 'black'
}

const GameCardSlider = ({ items, color = 'white' }: GameCardSliderProps) => {
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
