import { Settings } from 'react-slick'
import { Meta, StoryFn } from '@storybook/react'
import styled from 'styled-components'

import Slider from '.'

export default {
  title: 'components/Slider',
  component: Slider
} as Meta

const settings: Settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

const Slide = styled.div`
  background: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`

export const Horizontal: StoryFn = () => {
  return (
    <Slider settings={settings}>
      {Array(6)
        .fill(0)
        .map((_, index) => (
          <Slide key={index}>{index + 1}</Slide>
        ))}
    </Slider>
  )
}

const verticalSettings: Settings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: false,
  slidesToShow: 1
}

export const Vertical: StoryFn = () => {
  return (
    <Slider settings={verticalSettings}>
      {Array(6)
        .fill(0)
        .map((_, index) => (
          <Slide key={index}>{index + 1}</Slide>
        ))}
    </Slider>
  )
}
