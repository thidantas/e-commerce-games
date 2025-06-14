'use client'

import { useEffect, useState, useRef } from 'react'
import SlickSlider from 'react-slick'
import { Close } from '@styled-icons/material-outlined'

import Arrow from 'components/Arrow'
import Slider, { SliderSettings } from 'components/Slider'

import * as S from './styles'

const commonSettings: SliderSettings = {
  arrows: true,
  infinite: false,
  lazyLoad: 'ondemand',
  prevArrow: <Arrow direction="left" ariaLabel="previous image" />,
  nextArrow: <Arrow direction="right" ariaLabel="next image" />
}

const settings: SliderSettings = {
  ...commonSettings,
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
  ]
}

const modalSettings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 1
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
  const slider = useRef<SlickSlider>(null)

  const handleOnClickImageItem = (index: number): void => {
    setIsOpen(true)

    if (slider.current && typeof slider.current.slickGoTo === 'function') {
      slider.current.slickGoTo(index, true)
    }
  }

  const handleOnCloseModal = (): void => {
    setIsOpen(false)
  }

  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keyup', handleKeyUp)

    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [])

  return (
    <S.Wrapper>
      <Slider ref={slider} settings={settings}>
        {items.map((item, index) => (
          <img
            role="button"
            key={`thumb-${index}`}
            src={item.src}
            alt={`Thumb - ${item.label}`}
            onClick={() => handleOnClickImageItem(index)}
          />
        ))}
      </Slider>

      <S.Modal isOpen={isOpen} aria-label="modal" aria-hidden={!isOpen}>
        <S.Close
          role="button"
          aria-label="close modal"
          onClick={handleOnCloseModal}
        >
          <Close size={40} />
        </S.Close>

        <S.Content>
          <Slider ref={slider} settings={modalSettings}>
            {items.map((item, index) => (
              <img key={`gallery-${index}`} src={item.src} alt={item.label} />
            ))}
          </Slider>
        </S.Content>
      </S.Modal>
    </S.Wrapper>
  )
}

export default Gallery
