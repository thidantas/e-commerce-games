import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined'

type ArrowProps = {
  ariaLabel?: string
  className?: string
  direction: 'left' | 'right'
  slideCount?: number
  currentSlide?: number
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

const Arrow = ({ className, direction, ariaLabel, onClick }: ArrowProps) => {
  return (
    <div className={className} onClick={onClick} aria-label={ariaLabel}>
      {direction === 'left' ? <ArrowLeft /> : <ArrowRight />}
    </div>
  )
}

export default Arrow
