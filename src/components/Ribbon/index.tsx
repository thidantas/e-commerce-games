import * as S from './styles'

export type RibbonSizes = 'normal' | 'small'
export type RibbonColors = 'primary' | 'secondary'

export type RibbonProps = {
  size?: RibbonSizes
  color?: RibbonColors
  children: React.ReactNode
}

const Ribbon = ({
  size = 'normal',
  color = 'primary',
  children
}: RibbonProps) => (
  <S.Wrapper color={color} size={size}>
    {children}
  </S.Wrapper>
)

export default Ribbon
