import * as S from './styles'

export type LineColors = 'primary' | 'secondary'

export type HeadingProps = {
  children: React.ReactNode
  size?: 'small' | 'medium' | 'huge'
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineColor?: LineColors
  lineBottom?: boolean
}

const Heading = ({
  children,
  size = 'medium',
  color = 'white',
  lineLeft = false,
  lineColor = 'primary',
  lineBottom = false
}: HeadingProps) => (
  <S.Wrapper
    size={size}
    color={color}
    lineLeft={lineLeft}
    lineColor={lineColor}
    lineBottom={lineBottom}
  >
    {children}
  </S.Wrapper>
)

export default Heading
