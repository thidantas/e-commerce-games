import Link from 'next/link'

import Logo from 'components/Logo'
import Heading from 'components/Heading'

import * as S from './styles'

export type AuthProps = {
  title: string
  children: React.ReactNode
}

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <S.BannerContent>
        <Link href="/">
          <Logo id="banner" />
        </Link>

        <div>
          <Heading size="huge">All your favorite games in one place</Heading>

          <S.Subtitle>
            <strong>Won</strong> is the best and most complete gaming platform.
          </S.Subtitle>
        </div>

        <S.Footer>Won Games 2025 © Todos os Direitos Reservados </S.Footer>
      </S.BannerContent>
    </S.BannerBlock>

    <S.Content>
      <S.ContentWrapper>
        <Link href="/">
          <Logo id="content" color="black" size="large" />
        </Link>

        <Heading color="black" lineColor="secondary" lineLeft>
          {title}
        </Heading>

        {children}
      </S.ContentWrapper>
    </S.Content>
  </S.Wrapper>
)

export default Auth
