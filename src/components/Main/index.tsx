import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'Typescript, React, NextJS e Styled Componts'
}) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="Imagem de um átomo e React Avançado" />
    <S.Title>{title}</S.Title>

    <S.Description>{description}</S.Description>

    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um dev de frente para a tela com código"
    />
  </S.Wrapper>
)

export default Main
