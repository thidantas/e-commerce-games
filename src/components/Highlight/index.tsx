import Button from 'components/Button'

import * as S from './styles'

export type HighlightProps = {
  title: string
  subtitle: string
  floatImage?: string
  alignment?: 'right' | 'left'
  buttonLink: string
  buttonLabel: string
  backgroundImage: string
}

const Highlight = ({
  title,
  subtitle,
  floatImage,
  alignment = 'right',
  buttonLink,
  buttonLabel,
  backgroundImage
}: HighlightProps) => (
  <S.Wrapper alignment={alignment} backgroundImage={backgroundImage}>
    {!!floatImage && <S.FloatImage src={floatImage} alt={title} />}

    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Content>
  </S.Wrapper>
)

export default Highlight
