'use client'

import Arrow from 'components/Arrow'
import Slider, { SliderSettings } from 'components/Slider'
import GameCard, { GameCardProps } from 'components/GameCard'

import * as S from './styles'
import { useCallback, useState } from 'react'

const settings: SliderSettings = {
  arrows: true,
  infinite: false,
  lazyLoad: 'ondemand',
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        slidesToShow: 3.2,
        draggable: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2.2,
        draggable: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1.2,
        draggable: true
      }
    }
  ],
  prevArrow: <Arrow direction="left" ariaLabel="previous image" />,
  nextArrow: <Arrow direction="right" ariaLabel="next image" />
}

export type GalleryImageProps = {
  src: string
  label: string
}

export type GalleryProps = {
  items: GalleryImageProps[]
}

const Gallery = ({ items }: GalleryProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOnClickImageItem = (): void => {
    console.log('clicou', isOpen)
    setIsOpen((oldState) => !oldState)
  }

  return (
    <S.Wrapper>
      <Slider settings={settings}>
        {items.map((item, index) => (
          <img
            role="button"
            key={`thumb-${index}`}
            src={item.src}
            alt={`Thumb - ${item.label}`}
            onClick={handleOnClickImageItem}
          />
        ))}
      </Slider>

      <S.Modal
        isOpen={isOpen}
        aria-label="modal"
        aria-hidden={!isOpen}
      ></S.Modal>
    </S.Wrapper>
  )
}

export default Gallery
