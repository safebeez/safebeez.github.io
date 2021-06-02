import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background-image: ${({ theme }) => (theme.isDark ? 'url(/images/dark-bg.jpg)' : 'url(/images/light-bg.jpg)' )};
    background-repeat: no-repeat;
    background-image: fit;
    background-size: fit;
    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
