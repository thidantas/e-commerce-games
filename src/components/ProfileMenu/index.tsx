'use client'

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

const ProfileMenu = () => (
  <nav>
    <S.ProfileList>
      {profileMenuItems.map(({ icon, label, href }) => (
        <li key={href}>
          <S.ProfileLink href={href}>
            {icon}
            <span>{label}</span>
          </S.ProfileLink>
        </li>
      ))}
    </S.ProfileList>
  </nav>
)

export default ProfileMenu
