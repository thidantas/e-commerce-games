import {
  css,
  DefaultTheme,
  createGlobalStyle,
  GlobalStyleComponent
} from 'styled-components'

type GlobalStylesProps = {
  removeBg?: boolean
} & { theme?: DefaultTheme }

const GlobalStyles: GlobalStyleComponent<GlobalStylesProps, DefaultTheme> =
  createGlobalStyle`
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  src: url('../fonts/poppins-v22-latin-300.woff2') format('woff2');
}

@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/poppins-v22-latin-regular.woff2') format('woff2');
}

@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  src: url('../fonts/poppins-v22-latin-600.woff2') format('woff2');
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &::before,
  &::after {
    box-sizing: inherit;
  }
}

${({ theme, removeBg }) => css`
  html {
    font-size: 62.5%;
  }

  body {
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};

    ${!removeBg &&
    css`
      background-color: ${theme.colors.mainBg};
    `}
  }
`}
`

export default GlobalStyles
