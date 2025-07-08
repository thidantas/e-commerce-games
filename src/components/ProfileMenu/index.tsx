'use client'

import { useEffect, useState } from 'react'
import {
  ExitToApp,
  CreditCard,
  AccountCircle,
  FormatListBulleted
} from '@styled-icons/material-outlined'

import * as S from './styles'

const profileMenuItems = [
  {
    href: '/profile/me',
    icon: <AccountCircle size={24} />,
    label: 'My Profile'
  },
  { icon: <CreditCard size={24} />, label: 'My cards', href: '/profile/cards' },
  {
    href: '/profile/orders',
    icon: <FormatListBulleted size={24} />,
    label: 'My orders'
  },
  {
    href: '/logout',
    icon: <ExitToApp size={24} />,
    label: 'Sign out'
  }
]

export type ProfileRoutes =
  | '/profile/me'
  | '/profile/cards'
  | '/profile/orders'
  | '/logout'

export type ProfileMenuProps = {
  activeProfile?: ProfileRoutes
}

const ProfileMenu = ({ activeProfile }: ProfileMenuProps) => {
  const [activeLink, setActiveLink] = useState(activeProfile)

  useEffect(() => {
    setActiveLink(activeProfile)
  }, [activeProfile])

  return (
    <nav>
      <S.ProfileList>
        {profileMenuItems.map(({ icon, label, href }) => {
          const isActive = activeLink === href

          return (
            <li key={href}>
              <S.ProfileLink href={href} title={label} isActive={isActive}>
                {icon}
                <span>{label}</span>
              </S.ProfileLink>
            </li>
          )
        })}
      </S.ProfileList>
    </nav>
  )
}

export default ProfileMenu
