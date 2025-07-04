'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Close as CloseIcon } from '@styled-icons/material-outlined'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'

import Logo from 'components/Logo'
import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'

import * as S from './styles'

export type MenuProps = {
  username?: string
  fullMenuTestId?: string
}

const Menu = ({ username, fullMenuTestId }: MenuProps) => {
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
          <S.MenuLink href="#">Explore</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="Search" />
        </S.IconWrapper>

        <S.IconWrapper>
          <ShoppingCartIcon aria-label="Open Shopping Cart" />
        </S.IconWrapper>

        {!username && (
          <MediaMatch greaterThan="medium">
            <Link href="sign-in">
              <Button>Sign in</Button>
            </Link>
          </MediaMatch>
        )}
      </S.MenuGroup>

      <S.MenuFull
        data-testid={fullMenuTestId}
        aria-hidden={!isOpen}
        isOpen={isOpen}
      >
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />

        <S.MenuNav>
          <S.MenuLink href="/">Home</S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>

          {!!username && (
            <>
              <S.MenuLink href="#">My Account</S.MenuLink>
              <S.MenuLink href="#">Wishlist</S.MenuLink>
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
