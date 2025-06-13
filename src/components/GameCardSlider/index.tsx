'use client'

import Arrow from 'components/Arrow'
import Slider, { SliderSettings } from 'components/Slider'
import GameCard, { GameCardProps } from 'components/GameCard'

import * as S from './styles'

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
  prevArrow: <Arrow direction="left" ariaLabel="previous games" />,
  nextArrow: <Arrow direction="right" ariaLabel="next games" />
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
