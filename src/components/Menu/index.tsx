'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Close as CloseIcon } from '@styled-icons/material-outlined'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'

import Logo from 'components/Logo'
import Button from 'components/Button'
import CartIcon from 'components/CartIcon'
import MediaMatch from 'components/MediaMatch'
import CartDropdown from 'components/CartDropdown'
import UserDropdown from 'components/UserDropdown'

import * as S from './styles'

export type MenuProps = {
  username?: string
}

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Link href="/">
          <Logo hideOnMobile />
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink href="/">Home</S.MenuLink>
          <S.MenuLink href="/games">Explore</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="Search" />
        </S.IconWrapper>

        <S.IconWrapper>
          <MediaMatch greaterThan="medium">
            <CartDropdown />
          </MediaMatch>
          <MediaMatch lessThan="medium">
            <Link href="/cart">
              <CartIcon />
            </Link>
          </MediaMatch>
        </S.IconWrapper>

        <MediaMatch greaterThan="medium">
          {!username ? (
            <Link href="sign-in">
              <Button>Sign in</Button>
            </Link>
          ) : (
            <UserDropdown username={username} />
          )}
        </MediaMatch>
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen} aria-label="Menu Full">
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />

        <S.MenuNav>
          <S.MenuLink href="/">Home</S.MenuLink>
          <S.MenuLink href="/games">Explore</S.MenuLink>

          {!!username && (
            <>
              <S.MenuLink href="/profile/me">My Profile</S.MenuLink>
              <S.MenuLink href="/wishlist">Wishlist</S.MenuLink>
            </>
          )}
        </S.MenuNav>

        {!username && (
          <S.RegisterBox>
            <Link href="/sign-in">
              <Button fullWidth size="large">
                Sign in
              </Button>
            </Link>

            <span>or</span>

            <S.CreateAccount href="/sign-up" title="Sign Up">
              Sign Up
            </S.CreateAccount>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
