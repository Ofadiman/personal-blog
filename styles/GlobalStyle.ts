import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    #__next {
      height: 100%;
    }

    *,
    *::before,
    *::after {
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      text-align: justify;
    }

    html {
      font-size: 62.5%;
      font-family: Roboto, sans-serif;
      line-height: 1.5;
    }

    body {
      ${theme.typography.body}
    }

    h1 {
      ${theme.typography.h1}
    }

    h2 {
      ${theme.typography.h2}
    }

    h3 {
      ${theme.typography.h3}
    }

    h4 {
      ${theme.typography.h4}
    }

    h5 {
      ${theme.typography.h5}
    }

    h6 {
      ${theme.typography.h6}
    }
  `}
`
