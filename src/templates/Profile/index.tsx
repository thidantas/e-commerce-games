'use client'

import Base from 'templates/Base'
import Heading from 'components/Heading'
import { Container } from 'components/Container'
import { usePathname } from 'next/navigation'
import ProfileMenu, { ProfileRoutes } from 'components/ProfileMenu'

import * as S from './styles'

export type ProfileTemplateProps = {
  children: React.ReactNode
}

const Profile = ({ children }: ProfileTemplateProps) => {
  const pathName = usePathname()

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Profile
        </Heading>

        <S.Main>
          <ProfileMenu activeProfile={pathName as ProfileRoutes} />
          <S.Content>{children}</S.Content>
        </S.Main>
      </Container>
    </Base>
  )
}

export default Profile
